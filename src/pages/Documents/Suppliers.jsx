
import PageTitle from '../../components/PageTitle/PageTitle';

const Suppliers = () => {
    return(
        <>
            <PageTitle page='Suppliers'/>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Supplier Management</h5>
                                
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Company</th>
                                            <th scope="col">Contact Person</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Tech Solutions Inc.</td>
                                            <td>John Smith</td>
                                            <td>john@techsolutions.com</td>
                                            <td>+1 555 123 4567</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Global Supplies Co.</td>
                                            <td>Sarah Johnson</td>
                                            <td>sarah@globalsupplies.com</td>
                                            <td>+1 555 234 5678</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Premier Parts Ltd.</td>
                                            <td>Mike Wilson</td>
                                            <td>mike@premierparts.com</td>
                                            <td>+1 555 345 6789</td>
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

export default Suppliers;
