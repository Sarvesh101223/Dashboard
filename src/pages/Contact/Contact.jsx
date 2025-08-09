
import PageTitle from '../../components/PageTitle/PageTitle';
import './Contact.css';

const Contact = () => {
    return(
        <>
            <PageTitle page='Contact'/>
            <section className="section contact">
                <div className="row gy-4">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Contact Information</h5>
                                
                                <div className="info-item d-flex">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h4>Address:</h4>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex">
                                    <i className="bi bi-telephone flex-shrink-0"></i>
                                    <div>
                                        <h4>Call:</h4>
                                        <p>+1 5589 55488 55s</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex">
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h4>Email:</h4>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Send Message</h5>
                                
                                <form className="row g-3">
                                    <div className="col-md-6">
                                        <input type="text" name="name" className="form-control" placeholder="Your Name" required/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" className="form-control" name="email" placeholder="Your Email" required/>
                                    </div>
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" name="subject" placeholder="Subject" required/>
                                    </div>
                                    <div className="col-md-12">
                                        <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button type="submit" className="btn btn-primary">Send Message</button>
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

export default Contact;
