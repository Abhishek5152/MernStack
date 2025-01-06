import PropTypes from 'prop-types';

const BookCard = ({ title, author, available }) => {
  return (
    <div className="book-card">
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{available ? 'Available' : 'Unavailable'}</p>
    </div>
  );
}

BookCard.defaultProps = {
  title: 'Unknown Title',
  author: 'Unknown Author',
  available: false
};

BookCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  available: PropTypes.bool
};

export default BookCard;
