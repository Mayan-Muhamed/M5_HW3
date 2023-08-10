import {} from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useLocation } from "react-router-dom"

function MainPosts() {
    const [posts, setPosts] = useState([])
    const { state: newPost } = useLocation()

    useEffect(() => {
        axios.get("https://dummyjson.com/posts")
            .then((response) => setPosts(response.data.posts))
            .catch((error) => console.log(error))
    }, [])
    const handleDelete = (postId) => {
        axios
            .delete(`https://dummyjson.com/posts/${postId}`)
            .then(() => {
                console.log(`Пост с ID ${postId} был успешно удален на dummyjson.com.`);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <Link to="/new-post" >+ New Post</Link>
            {newPost && (
                <div key={newPost.id} >
                    <h2>{newPost.title}</h2>
                    <p>{newPost.body}</p>
                </div>
            )}
            {posts.map((post) => (
                <div key={post.id} >
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button onClick={()=> handleDelete(post.id)}>delete</button>
                </div>
            ))}
        </div>
    );
}
export default MainPosts
