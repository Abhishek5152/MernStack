import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import './styles.css';

function Edit() {
  const { id } = useParams(); 
  const [user, setUser] = useState({ name: "", email: "", age: "",password:"" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/find/${id}`);
        setUser(response.data);
      } catch (error) {
        toast.error("Failed to fetch user data!",{
            position: "top-right"
        });
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, [id]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/UpdateOne/${id}`, user);
      toast.success("User updated successfully!",{
        position: "top-right"
      });
      navigate("/"); 
    } catch (error) {
      toast.error("Failed to update user!",{
        position: "top-right"
      });
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Edit User</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter Name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              placeholder="Enter Age"
              value={user.age}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/")}
            >
              Back
            </button>
            <button type="submit" className="btn btn-primary">
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;