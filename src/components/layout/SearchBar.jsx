import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import useApi from '../hooks/useAPI';
import { BASE_URL } from '../../constants/api';
import { Icon } from '@iconify/react';
import searchIcon from '@iconify/icons-wpf/search';
import { InputGroup, Form, Button } from 'react-bootstrap';

const url = BASE_URL + "/services";

function SearchBar() {
    const [services, setServices] = useState([]);
    const [text, setText] = useState('');
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
    const onSuggestHandler = (title) => {
        setText(title);
        setSuggestions([]);
    }
    const onChangeHandler = (text) => {
        setText(text);
        let matches = []
        if (text.length > 0) {
            matches = services.filter(service => {
                if (service.title.includes(text)) {
                    return service.title
                }
            })
        }
        console.log('matches', matches);
        setSuggestions(matches);
        setText(text);
    }

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                    type="text" onChange={e => onChangeHandler(e.target.value.trim().toLowerCase())} value={text} placeholder="Search for 'birthday','wedding'" onBlur={() => {
                        setTimeout(() => {
                            setSuggestions([])
                        }, 100)
                    }}
                /><Button><Icon icon={searchIcon} /></Button>
            </InputGroup>
            {suggestions && suggestions.map((suggestion, i) =>
                <div key={i} onClick={() => onSuggestHandler(suggestion.title)} className="suggestions">{suggestion.title}</div>)}
        </>
    )
}

export default SearchBar;