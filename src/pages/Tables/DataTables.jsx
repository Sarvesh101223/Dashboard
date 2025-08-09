
import PageTitle from '../../components/PageTitle/PageTitle';

const DataTables = () => {
    return(
        <>
            <PageTitle page='Data Tables'/>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Advanced Data Table</h5>
                                
                                <div className="d-flex justify-content-between mb-3">
                                    <div>
                                        <input type="text" className="form-control" placeholder="Search..." style={{width: '200px'}}/>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary">Export</button>
                                    </div>
                                </div>
                                
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <input className="form-check-input" type="checkbox"/>
                                            </th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Department</th>
                                            <th scope="col">Salary</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input className="form-check-input" type="checkbox"/>
                                            </td>
                                            <th scope="row">001</th>
                                            <td>Brandon Jacob</td>
                                            <td>brandon@example.com</td>
                                            <td>Engineering</td>
                                            <td>$75,000</td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-primary me-1">Edit</button>
                                                <button className="btn btn-sm btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input className="form-check-input" type="checkbox"/>
                                            </td>
                                            <th scope="row">002</th>
                                            <td>Bridie Kessler</td>
                                            <td>bridie@example.com</td>
                                            <td>Marketing</td>
                                            <td>$65,000</td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-primary me-1">Edit</button>
                                                <button className="btn btn-sm btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input className="form-check-input" type="checkbox"/>
                                            </td>
                                            <th scope="row">003</th>
                                            <td>Ashleigh Langosh</td>
                                            <td>ashleigh@example.com</td>
                                            <td>Finance</td>
                                            <td>$80,000</td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-primary me-1">Edit</button>
                                                <button className="btn btn-sm btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item disabled">
                                            <span className="page-link">Previous</span>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DataTables;
