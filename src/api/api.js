import axios from "axios"

let axiosInstance;

export const getAxios = () => {
    if (axiosInstance)
        return axiosInstance;
    else {
        axiosInstance = axios.create({
            baseURL: "http://localhost:3001",
            timeout: 10000,
            headers: {

                "X-Auth-Token": "123ABC"

            },
            validateStatus :(status)=>{
                return status >=200 && status <=500 
            }

        })
        
        axiosInstance.interceptors.request.use((req) => {
            return {
                ...req, headers: {
                    ...req.headers,
                    "X-Auth-Key": "123key"
                },
                data: {
                    ...req.data,
                    time: new Date().toString()
                }
            }
        });
        // axiosInstance.interceptors.request.use(res => {
        //     return res.data;
        // })
      
        return axiosInstance;
    }


}