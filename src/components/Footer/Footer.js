import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-box">
            <div className="footer-container">
                <div className="footer-row">
                    <div className="col-4 footer-column">
                        <p className="footer-p">About Us</p>
                        <Link to={''} className="footer-link" href="#">Aim</Link>
                        <Link to={''} className="footer-link" href="#">Site Map</Link>
                        <Link to={''} className="footer-link" href="#">Shipping</Link>
                        <Link to={''} className="footer-link" href="#">Returns</Link>
                        <Link to={''} className="footer-link" href="#">Warranty</Link>
                        <Link to={''} className="footer-link" href="#">Terms & Conditions</Link>
                    </div>
                    <div className="col-4 footer-column">
                        <p className="footer-p">Social Media</p>
                        <Link to={''} className="footer-link" href="#">
                            <i><FaFacebookF/> Facebook</i>
                        </Link>
                        <Link to={''} className="footer-link" href="#">
                            <i><FaInstagram/> Instagram</i>
                        </Link>
                        <Link to={''} className="footer-link" href="#">
                            <i><FaTwitter/> Twitter</i>
                        </Link>
                        <Link to={''} className="footer-link" href="#">
                            <i><FaYoutube/> Youtube</i>
                        </Link>
                    </div>
                    <div className="col-4 footer-column">
                        <p className="footer-p">Stores Hours</p>
                        <p className="footer-p-sm">Buenos Aires, Cordoba & Mendoza.</p>
                        <i className="footer-link">Mon-Fri 10:00 am - 7:00 pm</i>
                        <i className="footer-link">Sat 10:00 am - 5:00 pm</i>
                        <i className="footer-link">Sun 11:00 am - 4:00 pm</i>
                    </div>
                </div>
                <p className="text-center mt-4 mb-0">The GOOD Tennis &copy; 2021</p>
            </div>
        </div>
    );
}

export default Footer;