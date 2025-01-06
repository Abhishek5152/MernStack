import { useState } from 'react';
import PropTypes from 'prop-types';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend({ author: 'User', text: message });
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={message} 
        onChange={handleChange} 
        placeholder="Type a message..." 
      />
      <button type="submit">Send</button>
    </form>
  );
}

MessageInput.propTypes = {
  onSend: PropTypes.func.isRequired
};

export default MessageInput;
