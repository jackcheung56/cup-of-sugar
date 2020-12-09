import ApiClient from "./ApiClient";

export const __GetBorrows = async () => {
  try {
    const response = await ApiClient.get("/borrows/all");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const __GetBorrowById = async(borrow_id) => {
  try {
    const response = await ApiClient.get(`/borrows/${borrow_id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const __CreateBorrow = async(formData) => {
  try{
    const response = await ApiClient.post('/borrows/add', formData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const __UpdateBorrow = async (formData, borrow_id) => {
  try{
    const response = await ApiClient.put(`/borrows/update/${borrow_id}`, formData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const __DeleteBorrow = async (borrow_id) => {
  try{
    const response = await ApiClient.delete(`/borrows/delete/${borrow_id}`)
    return response
  } catch (error) {
    throw error
  }
}

export const __GetBorrowByUserId = async (user_id) => {
  try{
    const response = await ApiClient.get(`/borrows/get/${user_id}`)
    return response
  } catch (error){
    throw error
  }
}

// export const __GetBorrowRequests = async (contact_id) => {
//   try{
//     const response = await ApiClient.get(`/borrows/get/request/${contact_id}`)
//     return response
//   } catch (error){
//     throw error
//   }
// }


export const __GetBorrowRequests = async (contact_id) => {
  try{
    const response = await ApiClient.get(`/borrows/get/request/${contact_id}`, {returning: ['id']})
    return response
  } catch (error){
    throw error
  }
}


