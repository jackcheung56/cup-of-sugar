import ApiClient from "./ApiClient";

export const _CreateUser = async (formData) => {
  try {
    const response = await ApiClient.post("/users/add", formData);
    console.log("USER HERE", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const _GetUser = async (user_id) => {
  try{
    const response = await ApiClient.get(`/users/${user_id}`)
    return response.data
  } catch (error) {
    throw error
  }
}
