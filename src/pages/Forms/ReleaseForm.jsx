
import PageTitle from '../../components/PageTitle/PageTitle';

const ReleaseForm = () => {
    return(
        <>
            <PageTitle page='Release Form'/>
            <section className="section">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Release Form</h5>
                                
                                <form className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="participantName" className="form-label">Participant Name</label>
                                        <input type="text" className="form-control" id="participantName"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="eventDate" className="form-label">Event Date</label>
                                        <input type="date" className="form-control" id="eventDate"/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="eventDescription" className="form-label">Event Description</label>
                                        <textarea className="form-control" id="eventDescription" rows="3"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="emergencyContact" className="form-label">Emergency Contact</label>
                                        <input type="text" className="form-control" id="emergencyContact"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="contactPhone" className="form-label">Contact Phone</label>
                                        <input type="tel" className="form-control" id="contactPhone"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="relationship" className="form-label">Relationship</label>
                                        <input type="text" className="form-control" id="relationship"/>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="releaseCheck"/>
                                            <label className="form-check-label" htmlFor="releaseCheck">
                                                I hereby release and discharge the organization from any claims
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Submit Release Form</button>
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

export default ReleaseForm;
