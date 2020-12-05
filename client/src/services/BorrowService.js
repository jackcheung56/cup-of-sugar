import ApiClient from "./ApiClient";

export const _GetBorrowed = async () => {
  try {
    const response = await ApiClient.get("/borrowed");
    console.log("BORROWED ITEMS HERE", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
