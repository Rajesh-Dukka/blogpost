import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'


const DetailItem = () => {
    const [post,setPost]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        const fetchSingleItem=async(id)=>{
            const response=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            console.log(response.date)
            setPost(response.data)
        }
        fetchSingleItem(id);
    },[id])
  return (
    <div>
        <h1>Detail Item</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link to={`/post`} > Back </Link>

    </div>
  )
}

export default DetailItem