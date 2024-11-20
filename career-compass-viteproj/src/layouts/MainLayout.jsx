import Navbar from "../components/Navbar.jsx";
import "../index.css";
import Footer from "../components/Footer.jsx";
import Home from "../pages/Home/Home.jsx";

const MainLayout = () => {
    return (
        <div className="font-josefin">
            <header>
                <Navbar />
            </header>
            <main>
                <Home/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainLayout;