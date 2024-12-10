function Footer(){
    return(
        <>
        <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s"/>
        <div className="container py-5"/>
            <div className="row g-5"/>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Address</h5>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i> Clifton, Karachi, Pakistan</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+92 345 678900</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social rounded-circle" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social rounded-circle" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6"/>
                    <h5 className="text-light mb-4">Services</h5>
                    <a className="btn btn-link" href="">Cardiology</a>
                    <a className="btn btn-link" href="">Pulmonary</a>
                    <a className="btn btn-link" href="">Neurology</a>
                    <a className="btn btn-link" href="">Orthopedics</a>
                    <a className="btn btn-link" href="">Laboratory</a>
               
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Quick Links</h5>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Our Services</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">Support</a>
                </div>
               
        </>
    )
}
export default Footer;