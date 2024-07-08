import { useState, useEffect } from "react";
// import { type ProductsApiResponse } from "../types";

const useFetchGet = (url: string) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (err: unknown) {
                setError(err);
            }
        }

        fetchData();
    }, [url])

    return { data, error };
}

export default useFetchGet;