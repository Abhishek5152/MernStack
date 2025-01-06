import PropTypes from 'prop-types';

const FeedbackCard = ({ name, email, message }) => {
  return (
    <div className="feedback-card">
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{message}</p>
    </div>
  );
}

FeedbackCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default FeedbackCard;
