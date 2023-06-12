import { useEffect, useState } from "react"
import axios from "axios"


const useFetch= (url)=>{
    const [data,setDate]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    useEffect(()=>{

        const fetchDate=async ()=>{
            setLoading(true);
            try {
                const res= await axios.get(url)
                setDate(res.data.items);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        }
    
        fetchDate();
    },[url])

    const reFetchDate=async ()=>{
        setLoading(true);
        try {
            const res= await axios.get(url)
            setDate(res.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }
    return {data,loading,error,reFetchDate};
}

export default useFetch;