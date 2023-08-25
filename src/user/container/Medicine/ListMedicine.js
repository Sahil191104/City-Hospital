import React from 'react';
import { Row } from 'reactstrap';
import UiMedicine from '../UI/UiMedicine';

function ListMedicine({ Mdata, Hadleclick, Handleicon, handlefav, fav, removefav }) {
    console.log(Hadleclick);
    return (
        <>
            {
                Mdata.map((v) => {
                    return (
                        < UiMedicine
                            values={v}
                            OnClick={Hadleclick}
                            Onicon={Handleicon}
                            onclick2={handlefav}
                            removefav={removefav}
                            fav={fav ? fav.some((m) => m.fid === v.id) : null}
                            favouriteTrue={true}
                        />
                    )
                })
            }
        </>
    );
}

export default ListMedicine;