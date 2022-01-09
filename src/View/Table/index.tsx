import {Table} from 'antd';
import React, {SetStateAction, useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {columns} from "./constants";

const TableShow = (): JSX.Element => {
    const [heroes, setHeroes] = useState<any>([])
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTermButton, setSearchTermButton] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    async function People() {
        let res = await fetch('https://swapi.dev/api/people/?format=json')
        const data = await res.json();
        console.log(data.results)
        setHeroes(data.results)
    }

    const handleChange = (event: { target: { value: SetStateAction<string> } }) =>{
        setSearchTerm(event.target.value);
        setSearchResults([])
        setSearchTermButton('')
    }

    useEffect(() => {
        People()
    }, [])

    function SearchFunc() {
        setSearchTermButton(searchTerm)
        const results = heroes.filter((person: { name: string; }) => {
            return (person.name.toLowerCase().includes(searchTerm));
        });
        setSearchResults(results);
    }

    return (
        <div>
            <input
                placeholder="type text here"
                type="text"
                value={searchTerm}
                onChange={handleChange}
            />
            <button onClick={SearchFunc}>Search</button>
            <Table columns={columns} dataSource={searchResults.length < 1 && !searchTermButton ? heroes : searchResults}/>
        </div>
    );
};
export default TableShow;