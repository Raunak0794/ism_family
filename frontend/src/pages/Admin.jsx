import React from "react";
import { useMemo, useState } from "react";
import { LogOut, RefreshCw } from "lucide-react";
import { changeUserStatus, getAdminUsers } from "../services/api";
import AdminLogin from "../components/admin/AdminLogin";
import StatsCards from "../components/admin/StatsCards";
import UsersTable from "../components/admin/UsersTable";
import Alert from "../components/common/Alert";

export default function Admin() {
  const [secret, setSecret] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actionId, setActionId] = useState(null);
  const [error, setError] = useState("");

  const stats = useMemo(() => ({
    total: users.length,
    pending: users.filter((user) => user.status === "PENDING").length,
    approved: users.filter((user) => user.status === "APPROVED").length,
    rejected: users.filter((user) => user.status === "REJECTED").length,
  }), [users]);

  const fetchUsers = async (adminSecret = secret) => {
    setLoading(true);
    setError("");

    try {
      const data = await getAdminUsers(adminSecret);
      setUsers(data.users);
      setAuthenticated(true);
    } catch (err) {
      setAuthenticated(false);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!secret.trim()) return;
    await fetchUsers(secret.trim());
  };

  const handleStatusChange = async (id, status) => {
    setActionId(id);
    setError("");

    try {
      const data = await changeUserStatus(id, status, secret);
      setUsers((current) =>
        current.map((user) =>
          user.id === id ? { ...user, status: data.user.status } : user
        )
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setActionId(null);
    }
  };

  const logout = () => {
    setAuthenticated(false);
    setSecret("");
    setUsers([]);
    setError("");
  };

  if (!authenticated) {
    return (
      <AdminLogin
        secret={secret}
        setSecret={setSecret}
        loading={loading}
        error={error}
        onSubmit={handleLogin}
      />
    );
  }

  return (
    <main className="min-h-[75vh] px-5 py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-ism-blue">Moderation</p>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-ism-ink">Alumni applications</h1>
            <p className="mt-2 text-slate-600">Review, approve or reject incoming ISM-family profiles.</p>
          </div>

          <div className="flex gap-2">
            <button onClick={() => fetchUsers()} disabled={loading} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-50">
              <RefreshCw size={16} className={loading ? "animate-spin" : ""} /> Refresh
            </button>
            <button onClick={logout} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {error && <div className="mt-6"><Alert>{error}</Alert></div>}
        <StatsCards stats={stats} />
        <UsersTable users={users} loading={loading} actionId={actionId} onStatusChange={handleStatusChange} />
      </div>
    </main>
  );
}
