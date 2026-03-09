import React, { useState } from 'react';
import './Country.css'
const Country = ({ eachCountryProp, handleCountProp, decreaseProp, showFlag }) => {
    const [visit, setVisit] = useState(false);
    const isVisited = () => {
        // visit ? setVisit(false) : setVisit(true)
        // setVisit(visit ? false : true)
        setVisit(!visit);
        if (!visit) {
            handleCountProp(eachCountryProp);
        }
        else {
            decreaseProp(eachCountryProp);
        }
    }
    return (
        <div className={`Country ${visit && `visited-country`}`}>
            {/* <div style={{
                width: "320px"
            }}>
                <img style={{
                    width: "100%"
                }} src={eachCountryProp.flags.flags.png} alt={eachCountryProp.flags.flags.alt} />
            </div> */}
            <img src={eachCountryProp?.flags?.flags?.png} alt={eachCountryProp.flags.flags.alt} />
            <hr />
            <p>Country Name : {eachCountryProp?.name?.official}</p>
            <p>Population : {eachCountryProp?.population?.population}</p>
            <p>Capital City : {eachCountryProp.capital.capital}</p>
            <p>Area : {eachCountryProp?.area?.area} sq.m | {
                eachCountryProp.area.area > 300000 ? 'Big Country' : 'Small Country'
            }</p>
            <p>Rejion : {eachCountryProp.region.region}</p>
            <button onClick={isVisited}>{
                visit ? 'Visited' : 'Not Visited'
            }</button>
            <button onClick={() => showFlag(eachCountryProp?.flags?.flags?.png)}>Show Flag</button>
        </div>
    );
};

export default Country;