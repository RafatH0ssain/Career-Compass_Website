import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const [toastMessage, setToastMessage] = useState(null); // For toast messages
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        if (name.length < 3) {
            setError({ ...error, name: "Name must be more than 3 characters long!" });
            setToastMessage("Name must be more than 3 characters long!");
            return;
        }
        const password = form.get("password");
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError({ ...error, password: "Password must have at least 6 characters, including an uppercase and a lowercase letter!" });
            setToastMessage("Password must have at least 6 characters, including an uppercase and a lowercase letter!");
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        setToastMessage("Registration successful!");
                        navigate("/");
                    })
                    .catch((err) => {
                        setToastMessage(err.message);
                    });
            })
            .catch((err) => {
                setToastMessage(err.message);
            });
    };

    return (
        <div className="mt-6 min-h-screen flex justify-center items-center">
            {toastMessage && (
                <div className="toast toast-top toast-center">
                    <div className="alert alert-error">
                        <span>{toastMessage}</span>
                    </div>
                </div>
            )}
            <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 rounded-none p-10">
                <h2 className="font-bold text-center text-3xl pt-5">Register your Account</h2>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" required name="name" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="www.exampleImageURL.com" className="input input-bordered" required name="photo" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
                <p className="text-center font-semibold">
                    Already Have An Account? <Link className="text-red-500" to="/auth/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;