import api from "../api/axios";

export const signup = async (payload) => {
  const response = await api.post("/signup", payload);
  return response.data;
};

export const getAdminUsers = async (secret) => {
  const response = await api.get("/admin/users", {
    headers: {
      "x-admin-secret": secret,
    },
  });

  return response.data;
};

export const changeUserStatus = async (id, status, secret) => {
  const response = await api.put(
    `/admin/users/${id}/status`,
    { status },
    {
      headers: {
        "x-admin-secret": secret,
      },
    }
  );

  return response.data;
};