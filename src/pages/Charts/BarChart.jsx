
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import PageTitle from '../../components/PageTitle/PageTitle';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Sales Data',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(65, 84, 241, 0.2)',
                borderColor: 'rgba(65, 84, 241, 1)',
                borderWidth: 1,
            },
            {
                label: 'Revenue',
                data: [28, 48, 40, 19, 86, 27, 90],
                backgroundColor: 'rgba(46, 202, 106, 0.2)',
                borderColor: 'rgba(46, 202, 106, 1)',
                borderWidth: 1,
            },
        ],
    };

    return(
        <>
            <PageTitle page='Bar Chart'/>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Bar Chart Example</h5>
                                <Bar options={options} data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BarChart;
