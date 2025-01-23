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
            toast.success("User deleted successfully!",{
                position:"top-right"
            });
            setUsers(users.filter(user => user._id !== userId));
        } catch (error) {
            console.log(error);
            toast.error("Failed to delete the user.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="card-container shadow-lg">
                <h1 className="text-center mb-4 title">User List</h1>
                <div className="block">
                    <Link to="/Add" className="btn btn-custom btn-block mb-3 text-center ">Add User</Link>
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
                                                className="btn btn-danger btn-sm mr-2 mx-2 " 
                                                name="Delete" 
                                                onClick={() => deleteUser(user._id)}>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                            <Link className="btn btn-primary btn-sm " to={`/Edit/${user._id}`}>
                                                <i className="fa fa-pen"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                {users.length===0 && (
                                    <tr>
                                        <td colSpan="5">Nothing Found!!👎</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default User;
