import { useState, useEffect } from 'react';
/**
 * This is a reusable hook function to fetch an URL
 * 
 * @param {string} url - base url + /endpoint
 * @returns data, error or loading
 */
function useApi(url) {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function doFetch() {
            try {
                setIsLoading(true);
                setIsError(false);
                const fetchedData = await fetch(url);
                const json = await fetchedData.json();
                setData(json);
            } catch (error) {
                setIsError(true);
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        doFetch(url);
    }, [url]);
    return {
        isLoading,
        isError,
        data,
    };
}

export default useApi;