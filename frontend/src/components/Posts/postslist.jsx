import { useContext } from "react";
import PostCard from "./Post/postCard";
import Content from "../Content/Content";
import { usePosts } from "../../context/PostContext";
import { useUser } from "../../context/UserContext";

function PostList(request) {
    const { posts, loading: postsLoading, fetchPosts } = usePosts()
    const { user, loading: userLoading } = useUser()
    if (postsLoading && userLoading) {
        return (
            <Content>
                Loading posts and user...
            </Content>
        )
    } else if (postsLoading && !userLoading) {
        return (
            <Content>
                Loading posts...
            </Content>
        )
    } else if (!postsLoading && userLoading) {
        return (
            <Content>
                Loading user...
            </Content>
        )
    }
    
    const filteredPosts = user && user.scope === "admin" ? posts : posts.filter(post => new Date(post.date) <= Date.now())

    return (
        <Content>
            { filteredPosts.map(post => <PostCard user={user} title={post.title} description={post.description} date={post.date} id={post._id} key={post._id}/>) }
        </Content>
    )
}

export default PostList