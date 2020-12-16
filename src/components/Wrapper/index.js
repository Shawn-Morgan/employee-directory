import React, { useState } from "react";
import "./style.css";
import EmployeesTable from "../EmployeesTable/index";
import Search from "../Search/index";
import Data from '../../employees.json';
function Wrapper() {
  const [tableData, setTableData] = useState(Data);
  const onClick = (text) => {
    //this is where I am triggering a filter
    const filterData = tableData.filter(o => { 
      return o.last_name.includes(text)
    });
    setTableData(filterData);
    console.log("afterSearchChange");
  };
  return (
    <div>
      <div className="wrapper">
        <Search onClick={onClick} />
        <EmployeesTable data={tableData} />
      </div>
    </div>
  )
};
export default Wrapper;