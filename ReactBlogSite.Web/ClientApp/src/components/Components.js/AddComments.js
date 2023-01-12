import React,{useEffective, useState} from "react";
import axios from "axios";
import{produce} from "immer";
import { useHistory } from "react-router-dom";

const AddComment = ({postId})=>{
    const[comment, setComment] = useState({commenterName:'', text:''});
    const history = useHistory();

    useEffect (() =>{
        const setName = async()=>{
            const{data}= await axios.get('/api/blog/commentername');
            setComment({commenterName: data.commenterName});
        }
        setName();

    }, []);

    const onTextChange = e =>{
        const newComment = produce(comment, draft =>{
            draft[e.target.name] = e.target.value;
        });
        setComment(newComment);
    }
}