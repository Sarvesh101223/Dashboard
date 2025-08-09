
import PageTitle from '../../components/PageTitle/PageTitle';

const Customers = () => {
    return(
        <>
            <PageTitle page='Customers'/>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Customer Management</h5>
                                
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Brandon Jacob</td>
                                            <td>brandon@example.com</td>
                                            <td>+1 234 567 8900</td>
                                            <td><span className="badge bg-success">Active</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Bridie Kessler</td>
                                            <td>bridie@example.com</td>
                                            <td>+1 234 567 8901</td>
                                            <td><span className="badge bg-warning">Pending</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Ashleigh Langosh</td>
                                            <td>ashleigh@example.com</td>
                                            <td>+1 234 567 8902</td>
                                            <td><span className="badge bg-success">Active</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Customers;
