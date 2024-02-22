import { data } from "./action"

const fetch_data=()=>(dispatch,state)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((data)=>{return data.json()}).then((ata)=>{
        console.log(ata)
        dispatch({type:data,payload:ata})
    })
}
export default fetch_data;