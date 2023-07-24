import React, { useEffect } from 'react';
import ListMedicine from './ListMedicine';
import { TextField } from '@mui/material';
import Htag from '../UI/H1toH6/Htag';
import Titel from '../UI/Title/Titel';

function Medicine(props) {

    const [items, setItems] = React.useState([]);
    const [search, setSeacrh] = React.useState([])

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medicines"));

        if (localData) {
            setItems(localData)
        }

    }, [])

    const handleSearch = (value) => {
        let localData = JSON.parse(localStorage.getItem("medicines"));

        let fdata = localData.filter((v) =>
            v.name.toLowerCase().includes(value.toLowerCase()) ||
            v.date.toString().includes(value) ||
            v.price.toString().includes(value) ||
            v.name.toLowerCase().includes(value.toLowerCase())
        )

        setSeacrh(fdata)
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
                    <ListMedicine Mdata={search.length > 0 ? search : items} />
                </div>
            </div>
        </section>
    );
}

export default Medicine;