import React from "react";
import MainNav from "./MainNav";
import OverviewIntructor from "./Overview";
import TopCourse from "./TopCourse";
import ChartLine from "../ChartLine";
import ChartDoughnut from "../ChartDoughnut";
import Calendar from "../Calendar";
import Transaction from "../Transaction";
import WorldMap from "../map/Map";
import { FaHeart, FaBars } from "react-icons/fa";

const Main = ({ handleToggleSidebar }) => {
  return (
    <main>
      <div>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
      </div>
      <MainNav />
      <div className="row mb-4">
        <div className="col-lg-12 col-md-12">
          <OverviewIntructor />
        </div>
        <div className="intructor-row-2 row mt-4">
          <div className="col-lg-9">
            <ChartLine />
          </div>
          <div className="community col-lg-3 col-md-12">
            <TopCourse />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-5">
          <Transaction />
        </div>
        <div className="col-lg-4">
          <WorldMap />
        </div>
        <div className="col-lg-3">
          <ChartDoughnut />
        </div>
      </div>
    </main>
  );
};

export default Main;
