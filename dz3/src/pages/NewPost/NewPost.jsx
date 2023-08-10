import {} from "react"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

function NewPost() {
    const [formData, setFormData] = useState(null)
    const [userId, setUserId] = useState()
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        const postFormData = new FormData()
        postFormData.append("title", event.target.title.value)
        postFormData.append("body", event.target.body.value)
        postFormData.append("userId", event.target.userId.value)
        setFormData(postFormData)
    }

    useEffect(() => {
        if (formData) {
            axios.post("https://dummyjson.com/posts/add", formData)
                .then((response) => {
                    console.log(response.data)
                    navigate("/", { state: response.data })
                })
                .catch((error) => console.warn(error))
        }
    }, [formData])

    return (
        <div>
            <Link to="/">Back to posts</Link>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" />
                <label htmlFor="title">User Id(1-100):</label>
                <input type="text" name="userId" id="userId" value={userId} onChange={(e) => setUserId(e.target.value)}/>
                <label htmlFor="body">Body:</label>
                <textarea name="body" id="body" rows="10"></textarea>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default NewPost
