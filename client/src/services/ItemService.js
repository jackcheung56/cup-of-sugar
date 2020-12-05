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
