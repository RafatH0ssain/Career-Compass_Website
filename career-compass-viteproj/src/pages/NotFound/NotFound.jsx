import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-6xl font-bold mb-6">404 - Page Not Found :/</h1>
            <p className="text-lg mb-8">The page you are looking for does not exist.</p>
            <div className="space-x-4">
                <Link to="/" className="btn btn-primary rounded-xl">
                    Go to Home
                </Link>
                <Link to="/auth/login" className="btn btn-secondary rounded-xl">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
