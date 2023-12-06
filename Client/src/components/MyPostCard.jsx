
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

export default function MyPostCard ({ post }) {
  return (
    <Card style={{ width: '100%' }}>
    <Card.Body>
      <Card.Title><h2>{post.username}</h2></Card.Title>
      {post.workoutId ? <Link to={`/workout/${post.workoutId}`}>{post.workoutName}</Link> : ''}
      {post.mediaUrl ? <Card.Img variant="top" src={post.mediaUrl} /> : ''}
      <Card.Text>
        {post.postText}
      </Card.Text>
    </Card.Body>
    <div>
      <h5>Comments</h5>
      {post.comments ? post.comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.commentText}</p>
            <p>{comment.username}</p>
            <p>{comment.createdAt}</p>
            <p>{comment.userId}</p>
          </div>
        )) : ' '}
    </div>
  </Card>
  );
}