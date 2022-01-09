import {Button, Table} from 'antd';
import React, {SetStateAction, useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {columns} from "./constants";
import {StyledInput} from "./styles";

const TableShow = (): JSX.Element => {
    const [heroes, setHeroes] = useState<Array<object | any>>([])
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchTermButton, setSearchTermButton] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Array<object>>([]);

    async function People() {
        const res = await fetch('https://swapi.dev/api/people/?format=json')
        const data = await res.json();
        console.log(data.results)
        setHeroes(data.results)
    }

    const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
        setSearchTerm(event.target.value);
        setSearchResults([])
        setSearchTermButton('')
    }

    function SearchFunc() {
        setSearchTermButton(searchTerm)
        const results = heroes.filter((person: { name: string; }) => {
            return (person.name.toLowerCase().includes(searchTerm));
        });
        setSearchResults(results);
    }

    useEffect(() => {
        People()
    }, [])

    return (
        <div>
            <StyledInput placeholder="Type text here..."
                         type="text"
                         value={searchTerm}
                         onChange={handleChange}/>

            <Button type="primary"
                    onClick={SearchFunc}
                    size='large'>
                Search
            </Button>
            <Table columns={columns}
                   dataSource={searchResults.length < 1 && !searchTermButton
                       ? heroes
                       : searchResults}/>
        </div>
    );
};
export default TableShow;