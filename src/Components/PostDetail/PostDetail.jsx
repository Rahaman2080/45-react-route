import { useLoaderData } from "react-router-dom";


const PostDetail = () => {
    const post = useLoaderData();
    const {body} = post;

    return (
        <div className="p-6 bg-sky-400 rounded-lg">
            <p>Post: {body}</p>
        </div>
    );
};

export default PostDetail;