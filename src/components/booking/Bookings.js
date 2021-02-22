
class Bookings extends React.Component{

    render(){
        return(
            <section className="tj-user-bfrm" style={{ paddingTop: '50px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="tj-tabs">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="active">
                                        <a href="#bookings" data-toggle="tab">My Bookings</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane active" id="bookings">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Bookings;