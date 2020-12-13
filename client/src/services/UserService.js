import ApiClient from "./ApiClient";

export const __CreateUser = async (formData) => {
  try {
    const response = await ApiClient.post("/users/add", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const __GetUser = async (user_id) => {
  try {
    const response = await ApiClient.get(`/users/${user_id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const __GetAllUsers = async () => {
  try {
    const response = await ApiClient.get(`/users/all`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const __GetUserByEmail = async (user_email) => {
  try {
    const response = await ApiClient.get(`/users/${user_email}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const __CheckSession = async () => {
  try {
    const res = await ApiClient.get("/users/session");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __LoginUser = async (userData) => {
  try {
    const res = await ApiClient.post("/users/login", userData);
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __UpdateUser = async (formData, user_id) => {
  try {
    const response = await ApiClient.put(`/users/update/${user_id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteUser = async (user_id) => {
  try {
    const response = await ApiClient.delete(`/users/delete/${user_id}`);
    return response;
  } catch (error) {
    throw error;
  }
};
