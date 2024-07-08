import { useState, useEffect } from "react";

const useFetchPost = (url: string) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState<unknown>(null);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: 5, product_id: 1, quantity: 1 })
    };
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, requestOptions);
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            }
        }
        
        fetchData();
    }, [url]);

    return { data, error }
}

export default useFetchPost;