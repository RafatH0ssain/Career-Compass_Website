import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-blue-900 flex-wrap text-neutral-content md:px-10 px-5">
                <aside className="md:w-auto w-full">
                    <Link className="btn border-blue-800 font-extrabold text-3xl font-poppins text-blue-600 md:my-10 my-5 md:mx-0 mx-auto" to="/">CareerCompass</Link>
                </aside>
                <nav className="md:my-10 my-2 md:ml-auto mx-auto">
                    <h6 className="font-extrabold text-2xl text-white">Socials</h6>
                    <div className="flex gap-10 text-3xl">
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