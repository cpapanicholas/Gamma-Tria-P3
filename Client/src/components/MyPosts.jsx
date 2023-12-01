import MyPostCard from "./MyPostCard";

export default function MyPosts () {
  const posts = [1,1,1,1,1,1,1,1,1,11,]
  return (
    <div className='bg-light post-container'>
      {posts.map((post) => <MyPostCard post={post}/>)}
    </div>
  );
}