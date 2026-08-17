const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const request = async (endpoint, options = {}) => {
  const response = await fetch(`${API_URL}${endpoint}`, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong.");
  }

  return data;
};

export const signup = (payload) =>
  request("/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

export const getAdminUsers = (secret) =>
  request("/admin/users", {
    headers: { "x-admin-secret": secret },
  });

export const changeUserStatus = (id, status, secret) =>
  request(`/admin/users/${id}/status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-admin-secret": secret,
    },
    body: JSON.stringify({ status }),
  });
