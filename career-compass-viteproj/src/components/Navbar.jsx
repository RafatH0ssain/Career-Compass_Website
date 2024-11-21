import { useContext } from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/other/user.png"
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="w-11/12 md:mx-auto bg-white md:py-5 py-2">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link className="font-extrabold lg:text-4xl text-2xl font-poppins text-blue-600" to="/">CareerCompass</Link>
                </div>
                <div className="flex-none gap-5">
                    <div className="form-control">
                        <Link className="btn bg-blue-600 lg:font-xl btn-sm md:btn-md font-base font-extrabold text-white rounded-2xl" to="/">Home</Link>
                    </div>
                    <div className="dropdown md:dropdown-end">
                        <div className="navbar-end login flex md:mx-auto gap-2">
                            {
                                user && user?.email ?
                                    <div className="">
                                        <img src={user.photoURL} alt={user.name} className="w-10 h-10 rounded-full my-auto" />
                                        <p>{user.displayName}</p>
                                    </div> :
                                    <img src={userIcon} alt="Dummy User Picture" className="w-40 h-10 rounded-full my-auto" />
                            }
                            {user && user?.email ? (
                                <button onClick={logOut} className="btn btn-neutral rounded-none">Log Out</button>
                            ) : (
                                <Link to="/auth/login" className="btn btn-neutral rounded-xl">Login</Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;