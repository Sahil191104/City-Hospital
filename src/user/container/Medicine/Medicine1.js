import React, { useEffect, useState } from 'react';
import ListMedicine from './ListMedicine';
import { TextField } from '@mui/material';
import Htag from '../UI/H1toH6/Htag';
import Titel from '../UI/Title/Titel';
import MedicinDetails from '../MedicinDetails';

function Medicine1(props) {
    const [medicenData, setMedicenData] = useState([]);
    const [medicenDetails, setMedicenDetails] = useState([]);
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
            fetch("http://localhost:3004/medicines")
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
        <section id="medicine" className="medicine">
            <div className="container">
                <div className="section-title">
                    <Htag name="h2tag1">Medicine</Htag>
                    <Titel>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</Titel>
                </div>
            </div>
            <div className="container">
                <TextField
                    margin="dense"
                    id="search"
                    label="Search"
                    name='search'
                    type="search"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <div className="row mt-5 justify-content-between">
                    <ListMedicine Mdata={search.length > 0 ? search : medicenData} Hadleclick={handleclick} Handleicon={handleicon} />
                </div>
                {/* <div className="row mt-5 justify-content-between">
                    <MedicinDetails Handleicon={handleicon} />
                </div> */}
            </div>
        </section>
    );
}

export default Medicine1;