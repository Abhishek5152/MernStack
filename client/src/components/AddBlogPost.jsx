import { useState } from 'react';
import PropTypes from 'prop-types';

const AddBlogPost = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      title: '',
      content: '',
      author: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Blog App</h2>
      <label>
        Title:
        <input 
          type="text" 
          name="title" 
          value={formData.title} 
          onChange={handleChange} 
        />
      </label><br />
      <label>
        Content:
        <textarea 
          name="content" 
          value={formData.content} 
          onChange={handleChange} 
        />
      </label><br />
      <label>
        Author:
        <input 
          type="text" 
          name="author" 
          value={formData.author} 
          onChange={handleChange} 
        />
      </label><br />
      <button type="submit">Add Post</button>
    </form>
  );
}

AddBlogPost.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default AddBlogPost;
