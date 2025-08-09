
import PageTitle from '../../components/PageTitle/PageTitle';

const Blank = () => {
    return(
        <>
            <PageTitle page='Blank'/>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Blank Page</h5>
                                <p>This is a blank page. You can add your content here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blank;
