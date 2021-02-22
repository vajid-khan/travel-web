import Link from 'next/link';

const Page404 = () => {
    return (
        <section className="tj-p404-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <strong className="p404-title">404</strong>
                        <h2>Page Not Found</h2>
                        <div className="p404-info">
                            <p>We can’t seem to find the page you’re looking for</p>
                            <Link href='/'>
                                <a>
                                    <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Back to Home
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Page404;