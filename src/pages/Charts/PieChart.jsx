
import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import PageTitle from '../../components/PageTitle/PageTitle';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ['Desktop', 'Mobile', 'Tablet', 'Other'],
        datasets: [
            {
                label: 'Traffic Source',
                data: [45, 35, 15, 5],
                backgroundColor: [
                    'rgba(65, 84, 241, 0.2)',
                    'rgba(46, 202, 106, 0.2)',
                    'rgba(255, 119, 29, 0.2)',
                    'rgba(255, 206, 84, 0.2)',
                ],
                borderColor: [
                    'rgba(65, 84, 241, 1)',
                    'rgba(46, 202, 106, 1)',
                    'rgba(255, 119, 29, 1)',
                    'rgba(255, 206, 84, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Website Traffic Distribution',
            },
        },
    };

    return(
        <>
            <PageTitle page='Pie Chart'/>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Pie Chart Example</h5>
                                <div style={{maxWidth: '600px', margin: '0 auto'}}>
                                    <Pie data={data} options={options} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PieChart;
