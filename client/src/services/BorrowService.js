import ApiClient from "./ApiClient";

export const _GetBorrows = async () => {
  try {
    const response = await ApiClient.get("/borrows/all");
    console.log("BORROWED ITEMS HERE", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
