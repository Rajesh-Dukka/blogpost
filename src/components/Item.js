import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Item = () => {
    const [items, setItems]=useState([])
    useEffect(()=>{
        const fetchItems=async()=>{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(response.data)
            setItems(response.data)
        };
        fetchItems()
    },[])
  return (
    <div>
        <h1> All Posts </h1>
        {items.map((eachItem,index)=>{
            return(
                <div key={index}>
                    <h1>{eachItem.title}</h1>
                    <p>{eachItem.body}</p>
                    <Link to={`/post/${eachItem.id}`} > View details</Link> <br/>
                    <Link to={`/`} > Back </Link>
                </div>
            )
        })}
    </div>
  )
}

export default Item
