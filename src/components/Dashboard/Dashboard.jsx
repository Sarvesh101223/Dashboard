import './Dashboard.css';
import Cards from '../Cards/Cards';
import Report from "../Report/Report";
import RecentSales from "../RecentSales/RecentSales";
import TopSelling from "../TopSelling/TopSelling";
import RecentActivity from "../RecentActivity/RecentActivity";
import BudgetReport from "../BudgetReport/BudgetReport";
import WebTraffic from "../WebTraffic/WebTraffic";
import News from "../News/News";

const Dashboard = () => {
    return(
        <section className="dashboard section">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <Cards />
                        <div className="col-12">
                            <Report />
                        </div>

                        <div className="col-12">
                            <RecentSales />
                        </div>

                        <div className="col-12">
                            <TopSelling />
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <RecentActivity />
                    <BudgetReport />
                    <WebTraffic />
                    <News />
                </div>
            </div>
        </section>
    )
}

export default Dashboard;