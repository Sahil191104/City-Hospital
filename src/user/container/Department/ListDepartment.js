import React from 'react';
import { Row } from 'reactstrap';
import UiDepartment from '../UI/UiDepartment';

function ListDepartment({ Mdata, Hadleclick, Handleicon }) {
    console.log(Hadleclick);
    return (
        <div>
            <Row>
                <UiDepartment Udata={Mdata} OnClick={Hadleclick} Onicon={Handleicon} />
            </Row>
        </div>
    );
}

export default ListDepartment;