import BookCard from './BookCard';
import PropTypes from 'prop-types';

const Library = ({ books }) => {
  return (
    <div>
      <h2>Library Management App</h2>
      {books.map((book, index) => (
        <BookCard 
          key={index}
          title={book.title}
          author={book.author}
          available={book.available}
        />
      ))}
    </div>
  );
}

Library.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      available: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default Library;
