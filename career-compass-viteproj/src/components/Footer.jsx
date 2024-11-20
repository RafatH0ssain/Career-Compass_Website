import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-blue-900 text-neutral-content p-10">
                <aside>
                    <Link className="btn border-blue-800 font-extrabold lg:text-3xl text-xl font-poppins text-blue-600 my-10" to="/">CareerCompass</Link>
                </aside>
                <nav className="my-7">
                    <h6 className="footer-title font-bold text-xl">Socials</h6>
                    <div className="grid grid-flow-col gap-10 text-3xl">
                        <a href="https://facebook.com" target="_blank">
                            <FaFacebook />
                        </a>
                        <a href="https://x.com/" target="_blank">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank">
                            <FaInstagram />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;