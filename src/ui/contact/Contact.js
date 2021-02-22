import ContactBanner from "../banner/ContactBanner";

class Contact extends React.Component {
    render(){
        return (
            <React.Fragment>
                <ContactBanner/>
                <section className="tj-contact-section">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-md-12  no-padl">
                                <div className="form-box">
                                    <div className="form_desc">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <form method="POST" className="contact_frm">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6">
											<div className="frm-field">
                                                <input placeholder="Enter Your Name" name="name" type="text" id="name" required=""/>
											</div>
										</div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="frm-field">
                                                    <input type="email" name="user_email" id="user_email" placeholder="Email" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="frm-field">
                                            <textarea name="message" id="send_msg" placeholder="Message"></textarea>
                                        </div>
                                        <button type="submit" className="submit-btn pull-right">
                                            Submit <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>

        )
    }
}

export default Contact;