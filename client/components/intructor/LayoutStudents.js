import React from "react";
import MainNav from "../../components/MainNav";
import ChartBarStacked from "../ChartBarStacked";
import ChartDoughnut from "../ChartDoughnut";
import TableStudentList from "./TableStudentList";
import { FaBars } from "react-icons/fa";

const LayoutStudents = ({ handleToggleSidebar }) => {
  return (
    <div className="wrapper">
      <main>
        <div>
          <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
            <FaBars />
          </div>
        </div>

        <MainNav title="Student" />
        <div className="row">
          <div className="col-9">
            <ChartBarStacked />
          </div>
          <div className="col-3">
            <ChartDoughnut />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <TableStudentList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LayoutStudents;
