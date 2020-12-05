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

export const _GetBorrowById = async(borrow_id) => {
  try {
    const response = await ApiClient.get(`/borrows/${borrow_id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const _CreateBorrow = async(formData) => {
  try{
    const response = await ApiClient.post('/borrows/add', formData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const _UpdateBorrow = async (formData, borrow_id) => {
  try{
    const response = await ApiClient.put(`/borrows/update/${borrow_id}`, formData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const _DeleteBorrow = async (borrow_id) => {
  try{
    const response = await ApiClient.delete(`/borrows/delete/${borrow_id}`)
    return response
  } catch (error) {
    throw error
  }
}