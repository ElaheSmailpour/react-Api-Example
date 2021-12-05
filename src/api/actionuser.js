
import {getAxios} from "./api"
/*
export const getCat = (callback) => {
    getAxios().get("/posts").then(res => {
        callback(true, res.data)
    }).catch((error) => {
        callback(false, error)
    })

}
*/
export const getCat = () => {
    return new Promise((resolve,reject)=>{
        getAxios().get("/posts").then(res => {
            resolve(res.data)
        }).catch((error) => {
            reject(error)
        })
    })
    

}
export const postCat = (cat,callback) => {
    getAxios().post("/posts",cat).then(res => {
        callback(true)
    }).catch((error) => {
        callback(false, error)
    })

}
export const editCat = (id,cat,callback) => {
    getAxios().put("/posts/" + id,cat).then(res => {
        callback(true)
    }).catch((error) => {
        callback(false, error)
    })

}
export const deleteCat = (id,callback) => {
    getAxios().delete("/posts/" + id).then(res => {
        callback(true)
    }).catch((error) => {
        callback(false, error)
    })

}