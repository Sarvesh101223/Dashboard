
import PageTitle from '../../components/PageTitle/PageTitle';

const BarChart = () => {
    return(
        <>
            <PageTitle page='Bar Chart'/>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Bar Chart Example</h5>
                                
                                <div style={{height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', border: '1px dashed #dee2e6'}}>
                                    <div className="text-center">
                                        <i className="bi bi-bar-chart" style={{fontSize: '3rem', color: '#6c757d'}}></i>
                                        <p className="mt-2 text-muted">Bar Chart Component</p>
                                        <small className="text-muted">Integrate with Chart.js or similar library</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BarChart;
