import React, { useEffect, useState } from "react";

const Covid = () => {

    const [data, setData] = useState([])

    const getCovidData = async () => {
        try {
            const res = await fetch("api_url");
            const data = await res.json();
            //Now in this under statewise we need 1st index data
            console.log(data.statewise[0]);

            setData(data.statewise[0]);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])

    //When the app renders first time only then call getCovidData fxn
    return (
        <>
            <h1> 🔴LIVE </h1>
            <h2>Covid-19 CORANAVIRUS TRACKER</h2>
            <ul>
                <li>
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name">
                                <span>Our</span>
                                Country
                            </p>
                            <p>INDIA</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name">
                                <span>Total</span>
                                Recovered
                            </p>
                            <p>{data.recovered}</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name">
                                <span>Total</span>
                                Confirmed
                            </p>
                            <p>{data.confirmed}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Covid;