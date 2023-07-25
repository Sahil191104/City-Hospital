import React from 'react';
import { Row } from 'reactstrap';
import UiMedicine from '../UI/UiMedicine';

function ListMedicine({ Mdata, Hadleclick }) {
    console.log(Hadleclick);
    return (
        <div>
            <Row>
                <UiMedicine Udata={Mdata} OnClick={Hadleclick} />
            </Row>
        </div>
    );
}

export default ListMedicine;