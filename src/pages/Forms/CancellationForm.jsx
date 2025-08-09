
import PageTitle from '../../components/PageTitle/PageTitle';

const CancellationForm = () => {
    return(
        <>
            <PageTitle page='Cancellation Form'/>
            <section className="section">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Cancellation Request Form</h5>
                                
                                <form className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="customerName" className="form-label">Customer Name</label>
                                        <input type="text" className="form-control" id="customerName"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="orderNumber" className="form-label">Order Number</label>
                                        <input type="text" className="form-control" id="orderNumber"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="orderDate" className="form-label">Order Date</label>
                                        <input type="date" className="form-control" id="orderDate"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="cancellationReason" className="form-label">Reason for Cancellation</label>
                                        <select id="cancellationReason" className="form-select">
                                            <option selected>Choose...</option>
                                            <option>Product not as described</option>
                                            <option>Changed mind</option>
                                            <option>Found better price</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="additionalComments" className="form-label">Additional Comments</label>
                                        <textarea className="form-control" id="additionalComments" rows="3"></textarea>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="refundMethod" className="form-label">Preferred Refund Method</label>
                                        <select id="refundMethod" className="form-select">
                                            <option selected>Choose...</option>
                                            <option>Original payment method</option>
                                            <option>Store credit</option>
                                            <option>Bank transfer</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="contactEmail" className="form-label">Contact Email</label>
                                        <input type="email" className="form-control" id="contactEmail"/>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="confirmCancellation"/>
                                            <label className="form-check-label" htmlFor="confirmCancellation">
                                                I confirm that I want to cancel this order
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-danger">Submit Cancellation Request</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CancellationForm;
