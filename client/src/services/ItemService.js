import ApiClient from "./ApiClient";

export const __GetItems = async () => {
  try {
    const response = await ApiClient.get("/items/all");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const __GetItemById = async (item_id) => {
  try {
    const response = await ApiClient.get(`/items/${item_id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const __CreateItem = async (formData) => {
  try {
    const response = await ApiClient.post("/items/add", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const __UpdateItem = async (formData, item_id) => {
  try {
    const response = await ApiClient.put(`/items/update/${item_id}`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteItem = async (item_id) => {
  try {
    const response = await ApiClient.delete(`/items/delete/${item_id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const __GetItemByOwner = async (owner_id) => {
  try {
    const response = await ApiClient.get(`/items/owner/${owner_id}`);
    return response;
  } catch (error) {
    throw error;
  }
<<<<<<< HEAD
};
=======
}
>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8

export const __GetItemsByCategory = async (category) => {
  try {
    const response = await ApiClient.get(`/items/sort/${category}`);
    return response;
  } catch (error) {
    throw error;
  }
};
