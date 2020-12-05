import ApiClient from "./ApiClient";

export const _GetItems = async () => {
  try {
    const response = await ApiClient.get("/items/all");
    console.log("ITEMS HERE", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const _GetItemById = async (item_id) => {
  try {
    const response = await ApiClient.get(`/items/${item_id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const _CreateItem = async (formData) => {
  try{
    const response = await ApiClient.post('/items/add', formData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const _UpdateItem = async (formData, item_id) => {
  try{
    const response = await ApiClient.put(`/items/update/${item_id}`, formData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const _DeleteItem = async (item_id) => {
  try{
    const response = await ApiClient.delete(`/items/delete/${item_id}`)
    return response
  } catch (error) {
    throw error
  }
}