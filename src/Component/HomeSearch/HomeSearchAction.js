import axios from "axios";

export const getAllJob=()=>{
    axios.get("http://localhost:5000/job").then((res)=>{
        console.log(res)
    })
}