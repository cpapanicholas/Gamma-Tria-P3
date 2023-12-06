import MyPostCard from "./MyPostCard";
import MyPosts from "./MyPosts"; 

export default function Feed ({ posts }) {
  return (
    <div className="d-flex flex-column py-5 my-4">
      <div className="d-flex flex-column py-5 my-4">
      {/* Render MyPosts component here */}
      {posts.map((post) => <MyPostCard post={post}/>)}
      
      {/* Other feed content */}
      </div>
      {/* Add other feed content as needed */}
    </div>
     
    
  );
};