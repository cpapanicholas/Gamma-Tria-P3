import PostCard from "./PostCard";
import MyPosts from "./MyPosts"; 

export default function Feed ({ posts }) {
  return (
    <div className="d-flex flex-column padding-from-header">
      <div className="d-flex flex-column ">
      {/* Render MyPosts component here */}
      {posts.map((post) => <PostCard post={post}/>)}
      
      {/* Other feed content */}
      </div>
      {/* Add other feed content as needed */}
    </div>
     
    
  );
};