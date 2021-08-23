import React, { useEffect, useState } from 'react';
import dataApi from '../api/dataApi';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await dataApi.get('/search', {
                params: {
                    limit: 30,
                    term: searchTerm,
           }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }

    };

    useEffect(() => {

    });

    return [searchApi, results, errorMessage]
};