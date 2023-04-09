import { useEffect, useState } from "react"
import axios from "axios"

export const fetchDataIn = (url) => {
    console.log("started");
    const status = new Promise((resolve, reject) => {
        const fetchDate = async () => {
            try {
                axios.get(url)
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                // console.log(res);
                // resolve(res.data.items);
            } catch (error) {
                reject(error);
            }
        }
    })
    return status;
}

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {

        const fetchDate = async () => {
            setLoading(true);
            try {
                const res = await axios.get(url)
                setData(res.data.items);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        }

        fetchDate();
    }, [url])

    const reFetchDate = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url)
            setData(res.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }
    return { data, loading, error, reFetchDate };
}

export default useFetch;