import { useState } from 'react';
import FeedbackCard from './FeedbackCard';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [feedbackList, setFeedbackList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedbackList([...feedbackList, formData]);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </label>
        <br />
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </label>
        <br />
        <label>
          Feedback:
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        {feedbackList.map((feedback, index) => (
          <FeedbackCard
            key={index}
            name={feedback.name}
            email={feedback.email}
            message={feedback.message}
          />
        ))}
      </div>
    </div>
  );
}

export default FeedbackForm;
