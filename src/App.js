import { useEffect } from "react";
import { getCat } from "./api/actionuser"
import { getTasks } from "./api/taskAction"
import {postTasks} from "./api/taskAction"
function App() {
  useEffect(() => {
    getCat((isOk,cat) => {
      console.log("getCat=", cat)
    })
  }, [])
  useEffect(() => {
    postTasks({name:"eli"},(isOk,tasks) => {
      console.log("tasks=", tasks)
    })
  }, [])
  
  useEffect(() => {
    getTasks((isOk,tasks) => {
      console.log("tasks=", tasks)
    })
  }, [])
  
  

/*
   const fetchTask= getTasks()
    .then((tasks)=>{
      console.log("tasks=", tasks)
    })
    .catch((err)=>{
      console.log("err=", err)
    })
  useEffect(()=>{
    Promise.all([fetchTask,fetchTask])
  },[])
  
*/

  return (
    <div className="App">

    </div>
  );
}

export default App;
