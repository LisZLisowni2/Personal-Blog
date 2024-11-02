import { useContext } from "react";
import PostCard from "./Post/postCard";
import Content from "../Content/Content";
import { usePosts } from "../../context/PostContext";

function PostList(request) {
    const { posts, loading } = usePosts()
    if (loading) {
        return (
            <Content>
                Loading posts...
            </Content>
        )
    }
    return (
        <Content>
            { posts.map(post => <PostCard title={post.title} description={post.description} date={post.date} id={post._id} key={post._id}/>)}
        </Content>
    )
}

export default PostList