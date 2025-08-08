import { useState, useEffect } from "react";
import './Dashboard.css';
import Card from "../Card/Card";
import Report from "../Report/Report";
import RecentSales from "../RecentSales/RecentSales";
import TopSelling from "../TopSelling/TopSelling";
import RecentActivity from "../RecentActivity/RecentActivity";
import BudgetReport from "../BudgetReport/BudgetReport";
import WebTraffic from "../WebTraffic/WebTraffic";

const Dashboard = () => {
    const [cards, setCards] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:4000/cards')
        .then(res => res.json())
        .then(data => {
            setCards(data);
        })
        .catch(e => console.log(e.message))
    }

    useEffect(() => {
        fetchData();
    },[])

    return(
        <section className="dashboard section">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        {
                            cards && cards.length > 0 &&
                            cards.map(card => <Card key={card._id} card={card}/>)
                        }
                        
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
                </div>
            </div>
        </section>
    )
}

export default Dashboard;