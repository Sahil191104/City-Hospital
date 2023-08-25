import React, { useEffect, useState } from 'react';
import ListMedicine from './ListMedicine';
import { TextField } from '@mui/material';
import Htag from '../UI/H1toH6/Htag';
import Titel from '../UI/Title/Titel';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from '../../../redux/action/medicine.action';
import { addtocart } from '../../../redux/slice/cartSlice';
import { addfav, removeToFav } from '../../../redux/action/favorite.action';

function Medicine(props) {
    const dispatch = useDispatch();
    const medicines = useSelector(state => state.medicine)
    const [search, setSeacrh] = useState([])
    const favData = useSelector(state => state.fav);

    useEffect(() => {
        dispatch(fetchdata())
    }, [])

    const handleSearch = (value) => {
        let Mdata = medicines.medicine

        let fdata = Mdata.filter((v) =>

            v.name.toLowerCase().includes(value.toLowerCase()) ||
            v.price.toString().includes(value)
        )

        setSeacrh(fdata)
    }

    const handleclick = (id) => {
        dispatch(addtocart({ pid: id, qyt: 1 }))
        console.log("Handle Cart", id);
    }

    // const handleicon = (id) => {
    //     console.log(id);
    //     dispatch(addfav(id))
    // }

    const handlefav = (id) => {
        dispatch(addfav(id))
        console.log("add favourite called" + id);
    }

    const removefav = (id) => {
        dispatch(removeToFav(id))
    }


    return (
        <section id="medicine" className="medicine">
            <div className="container">
                <div className="section-title">
                    <Htag name="h2tag1">Medicine</Htag>
                    <Titel>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</Titel>
                    <TextField
                        margin="dense"
                        id="search"
                        label="Search"
                        name='search'
                        type="search"
                        fullWidth
                        variant="standard"
                        sx={{ color: 'gray', borderColor: 'white' }}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
                <div className='card-data'>
                    <ListMedicine Mdata={search.length > 0 ? search : medicines.medicine} Hadleclick={handleclick} handlefav={handlefav} removefav={removefav} fav={favData.fav} />
                </div>
            </div>
        </section>
    );
}

export default Medicine;