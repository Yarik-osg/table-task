import {Button, Table} from 'antd';
import React, {SetStateAction, useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {columns} from "./constants";
import {StyledInput} from "./styles";

/**
 *
 * The main function of the "Table" page which performs all internal functions and renders our page
 */
const TableShow = (): JSX.Element => {
    const [heroes, setHeroes] = useState<Array<object | any>>([])
    const [searchHero, setSearchHero] = useState<string>('');
    const [searchHeroConst, setSearchHeroConst] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Array<object>>([]);
    /**
     *This async function gets data from public API "SWAPI.DEV"
     *
     * @return data.results[array] about heroes from Star Wars
     */
    async function People() {
        const res = await fetch('https://swapi.dev/api/people/?format=json')
        const data = await res.json();
        setHeroes(data.results)
        return data.results
    }

    /**
     * This function works on each entered character in the input, and puts the contents of that field in our variable
     * @param event{string} this is our content of the input field
     */
    const handleChange = (event: { target: { value: SetStateAction<string> } }) => {

        setSearchHero(event.target.value);
        setSearchResults([])
        setSearchHeroConst('')
    }

    /**
     *This function uses a filter method that sorts the contents of our data by the text we enter*
     *
     *@returns persons[] an array of heroes sorted by name
     *
     */
    function SearchFunc() {
        setSearchHeroConst(searchHero)
        const results = heroes.filter((person: { name: string; }) => {
            return (person.name.toLowerCase().includes(searchHero));
        });
        setSearchResults(results);
    }

    /**
     *This method works after the first renter and calls the function of obtaining data about the heroes of the public API
     *
     */

    useEffect(() => {
        People()
    }, [])
    return (
        <div>
            <StyledInput placeholder="Type text here..."
                         type="text"
                         value={searchHero}
                         data-testid="input"
                         onChange={handleChange}/>

            <Button type="primary"
                    data-testid="button"
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