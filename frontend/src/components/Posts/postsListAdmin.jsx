import { useContext } from "react";
import PostCard from "./Post/postCard";
import Content from "../Content/Content";
import PostCardAdmin from "./Post/postCardAdmin";
import { usePosts } from "../../context/PostContext";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function AdminPanel(request) {
    const { posts, loading: postsLoading, fetchPosts } = usePosts()
    const { user, loading: userLoading } = useUser()
    const navigate = useNavigate()
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

    if (!user || user.scope !== "admin") {
        navigate("/")
    }
    
    const filteredPosts = posts

    return (
        <Content>
            { filteredPosts.map(post => <PostCardAdmin user={user} title={post.title} description={post.description} date={post.date} id={post._id} key={post._id}/>) }
        </Content>
    )
}



export default AdminPanel