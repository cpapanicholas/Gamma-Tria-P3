import MyPostCard from "./MyPostCard";
import MyPosts from "./MyPosts"; 

export default function Feed () {
  return (
    <div className="d-flex flex-column py-5 my-4">
      <div className="d-flex flex-column py-5 my-4">
      {/* Render MyPosts component here */}
      <MyPosts />
      {/* Other feed content */}
  
</div>
      {/* Add other feed content as needed */}
    </div>
     
    
  );
};