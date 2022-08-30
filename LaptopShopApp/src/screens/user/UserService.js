import axiosInstance from "../../utils/axios";
import constants from "../../utils/constants";

export const login = async (username , password, name, phone, address ) => {
    const data = {
        username: username,
        password: password,
        name: name,
        phone: phone,
        address: address
    }
    const res = await axiosInstance.post(constants.API_LOGIN, data);
    return res;
}

export const register = async (username , password, confirmPassword, name, phone, address) => {
    const data = {
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        name: name,
        phone: phone,
        address: address
    }
    const res = await axiosInstance.post(constants.API_REGISTER, data);
    return res;
}

export const getUser = async (password, name, phone, address) => {
    const data = {
        password: password,
        name: name,
        phone: phone,
        address: address
    }
    const res = await axiosInstance.get(constants.API_LOGIN, data);
    return res;
}