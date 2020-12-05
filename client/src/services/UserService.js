import ApiClient from "./ApiClient";

export const _CreateUser = async (formData) => {
  try {
    const response = await ApiClient.post("/user/create", formData);
    console.log("USER HERE", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
