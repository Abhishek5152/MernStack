import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/lolall`);
                console.log(response.data);
                setUsers(response.data);
                toast.success("User data fetched successfully!", {
                    position: "top-right"
                });
            } catch (error) {
                console.log("Error in fetching the data: ", error);
                if (error.response?.status === 401) {
                    toast.error("Unauthorized. Please login again.", {
                        position: "top-right"
                    });
                } else {
                    toast.error("Failed to fetch the user data", {
                        position: "top-right"
                    });
                }
            }
        };
        fetchData();
    }, []);

    const deleteUser = async (userId) => {
        try {
            console.log(userId);
            await axios.delete(`http://localhost:3000/api/deleteme/${userId}`);
            toast.success("User deleted successfully!");
            setUsers(users.filter(user => user._id !== userId));
        } catch (error) {
            console.log(error);
            toast.error("Failed to delete the user.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="card-container">
                <h1 className="text-center mb-4">User List</h1>
                <Link to="http://localhost:3000/home" className="btn btn-custom btn-block mb-3">Add User</Link>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">S.No.</th>
                                <th scope="col">User Name</th>
                                <th scope="col">User Email</th>
                                <th scope="col">User Age</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <button 
                                            className="btn btn-danger btn-sm mr-2" 
                                            name="Delete" 
                                            onClick={() => deleteUser(user._id)}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                        <button className="btn btn-warning btn-sm">
                                            <i className="fa fa-pen"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {users.length===0 && (
                                <tr>
                                    <td colSpan="4">Nothing Found!!👎</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default User;
