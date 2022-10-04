import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/api';
import { Icon } from '@iconify/react';
import searchIcon from '@iconify/icons-wpf/search';
import { Link } from "react-router-dom";
import { Container, Form } from 'react-bootstrap';

const url = BASE_URL + "/services";
/**
 * This function will provider the search bar  
 * @returns <input>
 */
function SearchBar() {
    const [services, setServices] = useState([]);
    const [text, setText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    //To provider the suggestions this useEffect function call the API - BASE_URL + "/services"
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
                <Form className="d-flex search">
                    <Form.Control
                        type="search" onChange={e => onChangeHandler(e.target.value.trim().toLowerCase())} value={text} placeholder="Search for 'birthday','wedding'" className="me-1" aria-label="Search" />
                    <button className="btn btn-primary" disabled>
                        <Icon icon={searchIcon} />
                    </button>
                </Form>
                {suggestions && suggestions.map((suggestion, i) => {
                    return (
                        <Link key={i} to={`detail/${suggestion.id}`} className="suggestion" onClick={() => onSuggestHandler(suggestion.title)}> {suggestion.title} </Link>
                    );
                })}
            </Container>
        </>
    )
}

export default SearchBar;