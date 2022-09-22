import React from 'react';
import { BASE_URL } from '../../constants/api';
import axios from 'axios';
import { useState, useEffect } from 'react';


const url = BASE_URL + "/home";

function Welcome() {
    const [welcome, setWelcome] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function axiosData() {
            try {
                const response = await axios.get(url);

                if (response.status === 200) {
                    setWelcome(response.data);
                } else {
                    setError("An error occurred");
                }
            } catch (error) {
                setError(error.toString());
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        axiosData();
    }, []);
    if (loading) {
        return <div className="loading"></div>
    }
    if (error) {
        console.log(error);
        return <div>An error occurred: {error}</div>
    }
    return (
        <>
            <div className="welcome" style={{
                backgroundImage: "url(" + welcome.hero_banner.url + ")", backgroundPosition: 'center',
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
            }}>
                <h1 className="welcome__title">{welcome.hero_banner_alt_text}</h1>
            </div>
        </>

    )
}

export default Welcome