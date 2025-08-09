
import PageTitle from '../../components/PageTitle/PageTitle';

const Logistic = () => {
    return(
        <>
            <PageTitle page='Logistic'/>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Logistic Management</h5>
                                
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h6>Shipping Information</h6>
                                        <table className="table table-sm">
                                            <tbody>
                                                <tr>
                                                    <td>Total Shipments</td>
                                                    <td><strong>245</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>In Transit</td>
                                                    <td><strong>32</strong></td>
                                                </tr>
                                                <tr>
                                                    <td>Delivered</td>
                                                    <td><strong>213</strong></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-lg-6">
                                        <h6>Recent Shipments</h6>
                                        <table className="table table-sm">
                                            <thead>
                                                <tr>
                                                    <th>Tracking #</th>
                                                    <th>Status</th>
                                                    <th>Destination</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>TRK001</td>
                                                    <td><span className="badge bg-warning">In Transit</span></td>
                                                    <td>New York</td>
                                                </tr>
                                                <tr>
                                                    <td>TRK002</td>
                                                    <td><span className="badge bg-success">Delivered</span></td>
                                                    <td>Los Angeles</td>
                                                </tr>
                                            </tbody>
                                        </table>
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

export default Logistic;
