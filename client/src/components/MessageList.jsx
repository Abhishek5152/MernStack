import PropTypes from 'prop-types';

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>
          <strong>{message.author}:</strong> {message.text}
        </div>
      ))}
    </div>
  );
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default MessageList;
