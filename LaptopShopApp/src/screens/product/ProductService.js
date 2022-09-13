import axiosInstance from "../../utils/axios";
import constants from "../../utils/constants";

export const getProducts = async() => {
  const response = await axiosInstance.get(constants.API_PRODUCTS);
  return response;
}

export const getProductById = async (id) =>{
  const response = await axiosInstance.get(`${constants.API_PRODUCTS}/${id}`);
  return response;
}