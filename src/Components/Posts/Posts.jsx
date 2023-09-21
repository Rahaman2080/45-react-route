import { useLoaderData } from "react-router-dom";
import Post from "./Post/Post";


const Posts = () => {

    const posts = useLoaderData();
    

    return (
        <div className="bg-indigo-200 shadow rounded-lg p-8">
            <p className="text-center font-bold text-2xl">Posts: {posts.length}</p>
            <div className=" grid grid-cols-3 gap-5 m-5">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;