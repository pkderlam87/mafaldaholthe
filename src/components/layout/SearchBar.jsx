import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/api';
import { Icon } from '@iconify/react';
import searchIcon from '@iconify/icons-wpf/search';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';

const url = BASE_URL + "/services";

function SearchBar() {
    const [services, setServices] = useState([]);
    const [text, setText] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const loadServices = async () => {
            const response = await axios.get(url);
            if (response.status === 200) {
                setServices(response.data);
            }
        }
        loadServices();
    }, []);

    const onSuggestHandler = (text) => {
        setText(text);
        setSuggestions([]);
    }
    const onChangeHandler = (text) => {
        setText(text);
        let matches = []
        if (text.length > 0) {
            matches = services.filter((service) => {
                return service.title.includes(text)
            })
        }
        setSuggestions(matches);
        setText(text);
    }

    return (
        <>
            <Container className="search__wrapper">
                <div className="search">
                    <input
                        type="text" onChange={e => onChangeHandler(e.target.value.trim().toLowerCase())} value={text} placeholder="Search for 'birthday','wedding'" />
                    <button className="btn btn-primary" disabled>
                        <Icon icon={searchIcon} />
                    </button>
                </div>
                {suggestions && suggestions.map((suggestion, i) => {
                    return (
                        <div key={i} className="suggestion" onClick={() => onSuggestHandler(suggestion.title)}>
                            <Link to={`detail/${suggestion.id}`}> {suggestion.title} </Link>
                        </div>
                    );
                })}
            </Container>
        </>
    )
}

export default SearchBar;