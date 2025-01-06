import PropTypes from 'prop-types';

const BlogPost = ({ title, content, author }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
      <p><em>Written by {author}</em></p>
    </div>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default BlogPost;
