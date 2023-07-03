import React from 'react';
import { Row } from 'reactstrap';
import UiMedicine from '../UI/UiMedicine';

function ListMedicine({ Mdata }) {
    return (
        <div>
            <Row>
                <UiMedicine Udata={Mdata} />
            </Row>
        </div>
    );
}

export default ListMedicine;