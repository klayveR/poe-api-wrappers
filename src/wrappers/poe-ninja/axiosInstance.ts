import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

/**
 * @internal
 */
export const createNinjaAxiosInstance = (): AxiosInstance => {
    const instance = axios.create({
        baseURL: "https://poe.ninja/",
    });

    instance.interceptors.response.use(onFulfilled, onRejected);
    return instance;
};

const onFulfilled = (response: AxiosResponse): AxiosResponse => {
    return response;
};

const onRejected = (error: AxiosError): Promise<AxiosError> => {
    console.log("Ninja Error", error);
    return Promise.reject(error);
};
