import ApiClient from "./ApiClient";

export const __CreateUser = async (formData) => {
  try {
    const response = await ApiClient.post("/users/add", formData);
    console.log("USER HERE", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const __GetUser = async (user_id) => {
  try{
    const response = await ApiClient.get(`/users/${user_id}`)
    return response.data
  } catch (error) {
    throw error
  }
}


export const __GetAllUsers = async (user_id) => {
  try{
    const response = await ApiClient.get(`/users/all`)
    return response.data
  } catch (error) {
    throw error
  }
}




export const __GetUserByEmail = async (user_email) => {
  try{
    const response = await ApiClient.get(`/users/${user_email}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const __UpdateUser = async (formData, user_id) => {
  try{
    const response = await ApiClient.put(`/users/update/${user_id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const __DeleteUser = async (user_id) => {
  try{
    const response = await ApiClient.delete(`/users/delete/${user_id}`)
    return response
  } catch (error) {
    throw error
  }
}