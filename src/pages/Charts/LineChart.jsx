
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import PageTitle from '../../components/PageTitle/PageTitle';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Performance Trend',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Users',
                data: [33, 53, 85, 41, 44, 65, 79],
                borderColor: 'rgba(65, 84, 241, 1)',
                backgroundColor: 'rgba(65, 84, 241, 0.2)',
                tension: 0.4,
            },
            {
                label: 'Sessions',
                data: [45, 75, 65, 55, 88, 75, 95],
                borderColor: 'rgba(46, 202, 106, 1)',
                backgroundColor: 'rgba(46, 202, 106, 0.2)',
                tension: 0.4,
            },
        ],
    };

    return(
        <>
            <PageTitle page='Line Chart'/>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Line Chart Example</h5>
                                <Line options={options} data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LineChart;
