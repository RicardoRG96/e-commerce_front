import { useState, useEffect } from "react";

const useFetch = (url: string) => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState<unknown>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (err: unknown) {
                setErr(err);
            }
        }

        fetchData();
    }, [url])

    return { data, err };
}

export default useFetch;