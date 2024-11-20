import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-11/12 mx-auto bg-white md:py-5 py-2">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link className="font-extrabold lg:text-4xl text-2xl font-poppins text-blue-600" to="/">CareerCompass</Link>
                </div>
                <div className="flex-none gap-5">
                    <div className="form-control">
                        <Link className="btn bg-blue-600 lg:font-xl btn-sm md:btn-md font-base font-extrabold text-white rounded-2xl" to="/">Home</Link>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;