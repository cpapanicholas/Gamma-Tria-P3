import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';
import Auth from '../../utils/auth';

export default function PostCard({ post }) {
  const [commentText, setCommentText] = useState('');
  const userInfo = Auth.getProfile();

  const [addComment, { error, data }] = useMutation(ADD_COMMENT);
  console.log(post.comments); 
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    addComment({
      variables: {
        postId: post._id,
        commentInput: {
          userId: userInfo._id,
          username: userInfo.username,
          commentText,
          postId: post._id
        },
      },
    })
      .then((result) => {
        // Handle success
        console.log('Comment added successfully', result);
      })
      .catch((error) => {
        // Handle error
        console.error('Error adding comment', error);
      });

    // Clear the input field after submission
    setCommentText('');
  };

  return (
    <div className='post-card'>
      <div>
        <div>
          <h2>{post.username}</h2>
          {post.workoutId ? (
            <Link to={`/workout/${post.workoutId}`}>{post.workoutName}</Link>
          ) : (
            ''
          )}
        </div>
        {post.mediaUrl ? <Card.Img variant="top" src={post.mediaUrl} /> : ''}
        <Card.Text>{post.postText}</Card.Text>
      </div>
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
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}