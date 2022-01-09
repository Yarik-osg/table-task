import {Button, Table} from 'antd';
import React, {SetStateAction, useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {columns} from "./constants";
import {StyledInput} from "./styles";

const TableShow = (): JSX.Element => {
    const [heroes, setHeroes] = useState<Array<object | any>>([])
    const [searchHero, setSearchHero] = useState<string>('');
    const [searchHeroConst, setSearchHeroConst] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Array<object>>([]);

    async function People() {
        const res = await fetch('https://swapi.dev/api/people/?format=json')
        const data = await res.json();
        console.log(data.results)
        setHeroes(data.results)
    }

    const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
        setSearchHero(event.target.value);
        setSearchResults([])
        setSearchHeroConst('')
    }

    function SearchFunc() {
        setSearchHeroConst(searchHero)
        const results = heroes.filter((person: { name: string; }) => {
            return (person.name.toLowerCase().includes(searchHero));
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
                         value={searchHero}
                         onChange={handleChange}/>

            <Button type="primary"
                    onClick={SearchFunc}
                    size='large'>
                Search
            </Button>
            <Table columns={columns}
                   dataSource={searchResults.length < 1 && !searchHeroConst
                       ? heroes
                       : searchResults}/>
        </div>
    );
};
export default TableShow;