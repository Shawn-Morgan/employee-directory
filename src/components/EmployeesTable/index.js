import React from 'react';
import DataTable from 'react-data-table-component';
import "./style.css";
const EmployeesTable = (props) => {
    const data = props.data;
    const columns = [
        {
            name: 'Id',
            selector: 'id',
            hidden: true,
        },
        {
            name: 'First Name',
            selector: 'first_name',
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: 'last_name',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: false,
        },
        {
            name: 'Occupation',
            selector: 'occupation',
            sortable: true,
        },
        {
            name: 'Location',
            selector: 'location',
            sortable: true,
        }
    ]
        return (
            <DataTable className="table"
                title="Employees"
                columns={columns}
                data={data}
            />
        )
};
export default EmployeesTable;