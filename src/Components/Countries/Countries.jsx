import React, { use, useState } from 'react';
import Country from '../Country/country';
import './Countries.css'

const Countries = ({ countryPromise }) => {
    const convertPromise = use(countryPromise);
    const countrierArr = convertPromise.countries;
    const [countVisited, setCount] = useState([]);
    const handleCount = (country) => {
        setCount([...countVisited, country])
    }
    const handleCountDecrease = (country) => {
        setCount(countVisited.filter(singleCountry => singleCountry != country))
    }

    const [flag, setFlags] = useState([]);
    const showFlag = (upComimgFlag) => {
        const newFlag = [...flag, upComimgFlag];
        setFlags(newFlag);
    }
    return (
        <div>
            <h1>Total Number Of Country = {convertPromise.countries.length}</h1>
            <h2>Total Visited Country : {countVisited.length}</h2>
            <h3>Visited Country List : </h3>
            <ol>
                {
                    countVisited.map(visitCountry => <li key={visitCountry.ccn3.ccn3} >{visitCountry.name.common}</li>)
                }
            </ol>
            <h4>ALL Clicked Country Flag : </h4>
            <ol>
                {flag.map((eachFlag, i) => <li key={i}>
                    <img src={eachFlag} alt="No Flag Available" />
                </li>)}
            </ol>
            <div className='Countries'>
                {
                    countrierArr.map(eachCountry => <Country key={eachCountry.ccn3.ccn3} eachCountryProp={eachCountry} handleCountProp={handleCount} decreaseProp={handleCountDecrease} showFlag={showFlag}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;