import React from 'react';
import { Row } from 'reactstrap';
import UiMedicine from '../UI/UiMedicine';

function ListMedicine({ Mdata, Hadleclick, Handleicon }) {
    console.log(Hadleclick);
    return (
        <div>
            <Row>
                <UiMedicine Udata={Mdata} OnClick={Hadleclick} Onicon={Handleicon} />
            </Row>
        </div>
    );
}

export default ListMedicine;