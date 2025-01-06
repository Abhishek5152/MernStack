import BlogPost from './BlogPost';
import PropTypes from 'prop-types';

const BlogList = ({ posts }) => {
  return (
    <div>
      <h2>All Blogs</h2>
      {posts.map((post, index) => (
        <BlogPost 
          key={index}
          title={post.title}
          content={post.content}
          author={post.author}
        />
      ))}
    </div>
  );
}

BlogList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  ).isRequired
};

export default BlogList;
