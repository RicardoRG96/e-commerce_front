import { useState, useEffect } from "react";

const useFetchPrivatePages = (url: string, token: any) => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState<unknown>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const requestOptions = {
                    method: 'GET',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' +  token
                    },
                }

                const response = await fetch(url, requestOptions);
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

export default useFetchPrivatePages;