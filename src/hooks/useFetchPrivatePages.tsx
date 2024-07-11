import { useState, useEffect } from "react";

const useFetchPrivatePages = (url: string, token: any) => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState<unknown>(null);
    const [deniedAccess, setDeniedAccess] = useState(false);

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
                if (response.status === 200) {
                    const result = await response.json();
                    setData(result);
                    setDeniedAccess(false);
                }
                if (response.status === 401 || response.status === 403) {
                    setDeniedAccess(true);
                }
            } catch (err: unknown) {
                setErr(err);
                console.log(err); 
            }
        }

        fetchData();
    }, [url])

    return { data, err, deniedAccess };
}

export default useFetchPrivatePages;