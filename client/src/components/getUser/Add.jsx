import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const AddUser = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");
        try {
            const response = await axios.post("http://localhost:3000/api/createUser", user);
            toast.success(response.data.msg || "User added successfully!",{
                position: "top-right"
            });
            navigate("/"); 
        } catch (error) {
            console.error("Failed:", error);
            toast.error("Failed to create user",{
                position: "top-right"
            });
        }
    };
    
    

    return (
        <div className="container">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="card-container p-3 rounded shadow">
                <div className="d-flex justify-content-between align-items mb-3">
                    <h1>Add User</h1>
                    <Link to={"/"} className="btn btn-success mb-5">
                        <i className="fa fa-home"></i>
                    </Link>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit} id="userForm" className="needs-validation" noValidate>
                        <div className="form-group">
                            <label htmlFor="regname">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                id="regname"
                                name="name"
                                required
                            />
                            <div className="invalid-feedback">Please enter your name.</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="regemail">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                onChange={handleChange}
                                id="regemail"
                                name="email"
                                required
                            />
                            <div className="invalid-feedback">Please enter a valid email.</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="regpass">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                onChange={handleChange}
                                id="regpass"
                                name="password"
                                required
                            />
                            <div className="invalid-feedback">Please enter your password.</div>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="regage">Age:</label>
                            <input
                                type="number"
                                className="form-control"
                                onChange={handleChange}
                                id="regage"
                                name="age"
                                required
                            />
                            <div className="invalid-feedback">Please enter your age.</div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block w-100">Create User</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;