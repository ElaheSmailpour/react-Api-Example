
import {getAxios} from "./api"

export const getTasks = (callback) => {
    getAxios().get("/tasks").then(res => {
        callback(true, res.data)
    }).catch((error) => {
        callback(false, error)
    })

}

export const postTasks = (cat,callback) => {
    getAxios().post("/tasks",cat).then(res => {
        callback(true)
    }).catch((error) => {
        callback(false, error)
    })

}
export const editTasks = (id,cat,callback) => {
    getAxios().put("/tasks/" + id,cat).then(res => {
        callback(true)
    }).catch((error) => {
        callback(false, error)
    })

}
export const deleteCat = (id,callback) => {
    getAxios().delete("/task/" + id).then(res => {
        callback(true)
    }).catch((error) => {
        callback(false, error)
    })

}