
import PageTitle from '../../components/PageTitle/PageTitle';

const Settings = () => {
    return(
        <>
            <PageTitle page='Settings'/>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">General Settings</h5>
                                
                                <form>
                                    <div className="row mb-3">
                                        <label htmlFor="siteName" className="col-sm-2 col-form-label">Site Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="siteName"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="siteDescription" className="col-sm-2 col-form-label">Description</label>
                                        <div className="col-sm-10">
                                            <textarea className="form-control" id="siteDescription" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-10 offset-sm-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="maintenanceMode"/>
                                                <label className="form-check-label" htmlFor="maintenanceMode">
                                                    Enable Maintenance Mode
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-3">
                                        <div className="col-sm-10 offset-sm-2">
                                            <button type="submit" className="btn btn-primary">Save Changes</button>
                                        </div>
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

export default Settings;
