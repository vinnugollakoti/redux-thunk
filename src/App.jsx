import { useDispatch, useSelector, useStore } from 'react-redux'
import './App.css'
import fetch_data from './redux/feactacsion'
import { useState } from 'react'

function App() {
  const [load,setload]=useState({load:false,sub:false})
  const state=useSelector((state)=>state)
  const dispatch=useDispatch()
  return (
    <>
     <button onClick={()=>{
      setload({...load,sub:true})
     dispatch(fetch_data())
     setload({sub:true,load:true})
     }}>fetch data</button>
     
     {load.sub? 
     load.load&&
     state.map((i,ind)=>{
      return(
      <div key={ind} className='it'><hr /><p>{i.name}</p>
      <p>{i.email}</p>
      </div>)
     }):load.sub&&(<p>loading..</p>)
     }
    </>
  )
}

export default App
