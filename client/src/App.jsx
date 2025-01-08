// import { useState } from 'react';
// import Header from './components/Header';
// import FeedbackForm from './components/FeedbackForm';
// import Library from './components/Library';
// import ProjectCard from './components/ProjectCard';
// import AddBlogPost from './components/AddBlogPost';
// import BlogList from './components/BlogList';
// import ChatApp from './components/ChatApp';
// import WeatherInfo from './components/WeatherInfo';
// import AttendanceTracker from './components/AttendanceTracker';
// import 'bootstrap/dist/css/bootstrap.min.css';



// const books = [
//   { title: 'Book 1', author: 'Author 1', available: true },
//   { title: 'Book 2', author: 'Author 2', available: false },
//   { title: 'Book 3', author: 'Author 3', available: true },
//   // Add more books as needed
// ];

// const projects = [
//   { title: 'Project 1', description: 'Description of Project 1', imageUrl: 'project1.jpg' },
//   { title: 'Project 2', description: 'Description of Project 2', imageUrl: 'project2.jpg' },
//   // Add more projects as needed
// ];

// const App = () => {
//   const [blogPosts, setBlogPosts] = useState([]);

//   const handleAddBlogPost = (newPost) => {
//     setBlogPosts([...blogPosts, newPost]);
//   };

//   return (
//     <div className="container">
//       <Header />
//       <hr />
//       <h1 className="my-4 text-center">Welcome to My Portfolio</h1>
//       <hr />
//       <div className="projects my-4">
//         <h2 className="text-center">My Projects</h2>
//         <div className="row">
//           {projects.map((project, index) => (
//             <div key={index} className="col-md-4">
//               <ProjectCard
//                 title={project.title}
//                 description={project.description}
//                 imageUrl={project.imageUrl}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       <hr />
//       <div className="my-4">
//         <WeatherInfo city="Baroda" temperature={22} description="Sunny" />
//       </div>
//       <hr />
//       <div className="my-4">
//         <AttendanceTracker />
//       </div>
//       <hr />
//       <div className="my-4">
//         <FeedbackForm />
//       </div>
//       <hr />
//       <div className="my-4">
//         <Library books={books} />
//       </div>
//       <hr />
//       <div className="my-4">
//         <AddBlogPost onAdd={handleAddBlogPost} />
//       </div>
//       <hr />
//       <div className="my-4">
//         <BlogList posts={blogPosts} />
//       </div>
//       <hr />
//       <div className="my-4">
//         <ChatApp />
//       </div>
//     </div>
//   );
// }

// export default App;







import User from "./components/getUser/User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import "/App.css";

function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<User/>}/>,
          </Routes>
          <Toaster />
        </div>
      </Router>
    </>
  );
}

export default App;