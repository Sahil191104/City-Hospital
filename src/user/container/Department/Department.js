import React, { useEffect, useState, useContext } from 'react';
import { TextField } from '@mui/material';
import Htag from '../UI/H1toH6/Htag';
import Titel from '../UI/Title/Titel';
import ListDepartment from './ListDepartment';
import { ThemeContext } from '../Context/ThemeContext';

function Department(props) {
    let theme = useContext(ThemeContext);

    let color9 = theme.theme === 'dark' ? 'color9' : '';

    const [medicenData, setMedicenData] = useState([]);
    const [search, setSeacrh] = useState([])
    const [searchvalue, setSeacrhValue] = useState(null)

    const handleSearch = (value) => {
        setSeacrhValue(value)
        if (searchvalue) {
            let fdata = medicenData.filter((v) =>
                v.name.toLowerCase().includes(value.toLowerCase()) ||
                v.date.toString().includes(value) ||
                v.price.toString().includes(value) ||
                v.name.toLowerCase().includes(value.toLowerCase())
            )
            setSeacrh(fdata)
        }
    }

    useEffect(() => {
        try {
            fetch("http://localhost:3004/department")
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Something went wrong');
                })
                .then((data) =>
                    setMedicenData(data)
                )
                .catch((error) =>
                    console.log(error)
                )
        } catch (error) {
            console.log(error);
        }

    }, []);

    // let localdataCart = JSON.parse(localStorage.getItem("CartData"));
    let loacalarr = [];

    const handleclick = (id) => {
        let checkdetails = loacalarr.find((v) => v.pid === id)
        if (checkdetails) {
            checkdetails.qyt += 1
        } else {
            loacalarr.push({
                pid: id,
                qyt: 1
            });
            localStorage.setItem("CartData", JSON.stringify(loacalarr));
        }
        console.log(loacalarr);
    }

    const handleicon = (id) => {
        let checkdetails = loacalarr.find((v) => v.pid === id)
        if (checkdetails) {
            loacalarr.push({
                pid: id,
                qyt: 1
            });
        } else {
            loacalarr.push({
                pid: id,
                qyt: 1
            });
            localStorage.setItem("CartDetails", JSON.stringify(loacalarr));
        }
        console.log(loacalarr);
    }

    return (
        <section id="departments" className={`departments ${color9}`}>
            <div className="container">
                <div className="row mt-5 justify-content-between">
                    <ListDepartment Mdata={search.length > 0 ? search : medicenData} Hadleclick={handleclick} Handleicon={handleicon} />
                </div>
                {/* <div className="row mt-5 justify-content-between">
                    <MedicinDetails Handleicon={handleicon} />
                </div> */}
            </div>
        </section>
    );
}

export default Department;