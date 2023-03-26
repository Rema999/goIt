import axios, {AxiosError, AxiosInstance, AxiosResponse} from "axios";
import config from "../config";

const requestParser = <T>(result: AxiosResponse<T>): T => result.data;

const errorHandler = <T>(error: AxiosError<T>): Promise<never> =>
    Promise.reject(error?.response);

const defaultHeaders = {};

const axiosInstance = (
    baseURL: string,
): AxiosInstance => {
    const instance = axios.create({baseURL, headers: defaultHeaders});

    instance.interceptors.request.use((request) => request, errorHandler);

    instance.interceptors.response.use(
        requestParser,
        (error) =>
            Promise.reject({
                status: error.response?.status,
                data: error.response?.data,
            })
    );

    return instance;
};

export const apiPublicAxios = axiosInstance(`${config.gitHub.baseUrl}`);

export default {apiPublicAxios};




