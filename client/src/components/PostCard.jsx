import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';
import Auth from '../../utils/auth';
import Modal from 'react-bootstrap/Modal';
// import { profile } from 'console';

export default function PostCard({ post }) {
  const [commentText, setCommentText] = useState('');
  const userInfo = Auth.getProfile();
  console.log(userInfo);
  const [showComments, setShowComments] = useState(true)
  const [showAddComment, setShowAddComment] = useState(false)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addComment, { error, data }] = useMutation(ADD_COMMENT);
  const commentsLength = post.comments.length 
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    addComment({
      variables: {
        postId: post._id,
        commentInput: {
          userId: userInfo.data._id,
          username: userInfo.data.username,
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
        <div className='post-card-header'>
          <h2>{post.username}</h2>
          {post.workoutId ? (
            <Link className='post-card-workout-title' to={`/workout/${post.workoutId}`}>{post.workoutName}</Link>
          ) : (
            ''
          )}
        </div>
        {post.mediaUrl ? <Card.Img variant="top" src={post.mediaUrl} /> : ''}
        <div className='px-2 post-text'>
          <Link className='inline comment-author' to={`/profile/${post.userId}`}>
            {post.username}
          </Link>
          <p className='px-1 pt-2 comment inline'>{post.postText}</p>
        </div>
      </div>
      <div>
        <div className='post-add-comments-container'>
          <button variant="primary" onClick={handleShow} className='view-comments-btn'>View all {commentsLength} comments</button>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='d-flex justify-content-center'>
          <h2 className='comments-header'>Comments</h2>
        </Modal.Header> 
        <div>
          {post.comments && post.comments.map((comment, index) => (
            <div key={index} className='px-3 py-2'>
              <Link className='inline comment-author' to={`/profile/${comment.userId}`}>
                {comment.username}
              </Link>
              <p className='px-3 pt-2 comment inline'>{comment.commentText}</p>
              <p className='comment-time'>{comment.createdAt}</p>
            </div>
          ))}
          <form onSubmit={handleCommentSubmit} className='d-flex mx-2 my-2 comment-form'>
            <input
              className='add-comment p-1'
              type="text"
              placeholder="Add a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            {commentText === '' ? '' : <button onClick={(e) => setShowComments(!showComments)} className='submit-comment-btn mx-2' type="submit">Submit</button>}
          </form>
        </div>
          
        </Modal>
      </div>
    </div>
  );
}