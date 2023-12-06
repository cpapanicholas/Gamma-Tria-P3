
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';export default function MyPostCard ({ post }) {
  return (
    <Card style={{ width: '100%' }}>
    <Card.Body>
      <Card.Title>user</Card.Title>
    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>bio</ListGroup.Item>
      <ListGroup.Item>comment</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
  );
}