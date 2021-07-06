import { useState, useEffect } from "react";
//import { BrowserRouter as Router } from 'react-router-dom'
//import Header from './components/Header'
import Tasks from "./Tasks";
import Comment from "./Comment";
//import About from './components/About'
//import "./appstyle.css";    Check it after completing implementation
// import "./comment.css";
// import "./indexstyle.css";


export default function App({id}) {
  console.log("Hello jay");
  const [tasks, setTasks] = useState([]);
  const [myid, setmyid] = useState(0);

  const axios = require("axios");

  useEffect(() => {
    //console.log("JAY R SHAH");
    console.log(myid);

    const fetchTasks = async () => {
      await axios 
      .get(`http://localhost:4000/comment/getcomment/${id}`)
      .then((e)=>{
          console.log(e);
          setTasks(e.data);      
      })
    //   const data = await res.json();
    //   console.log("from fetch", data);
    //   setTasks(data);
    //   return data;
    };

    fetchTasks();
    console.log("data here",tasks);

    // if (usercookie !== undefined) {
    //   setTemp(true);
    // }

    //console.log("myid", myid);
  }, [myid]);

  // Add Task
  const addTask = async (task) => {
    console.log(task);

    //setTasks(tasks => [...tasks, task]);
    console.log("task Added from addtask", tasks);
    const temp = axios
      .post('http://localhost:4000/comment/postcomment', {
        comment: task.comment,
        que_paper_id:id,
      })
      .then((res) => {
        console.log(res, "Form Jay");
        const data1 = res.data;
        //setTasks(data1);
        console.log(data1.data, "find some data");
        console.log(tasks.comment, "From Jay1");
        console.log(tasks.length, "Length");
        if (myid === 10) {
          setmyid(0);
        } else {
          setmyid(myid + 1);
        }
        return res.data;
      })
      .catch((err) => {
        console.error("There was an error!", err);
      });
    const t1 = temp.data;
    console.log(t1, "Jay here");
    return temp;
  };

  return (
    <div>
      {(
        <>
          <div className="container" style={{ margin: "5%" }}>
            <h1>Comments</h1>
            <Comment onAdd={addTask} />
            {tasks.length > 0 ? <Tasks tasks={tasks} /> : "No Comments"}
          </div>
        </>
      )}
    </div>
  );
}

// export default App