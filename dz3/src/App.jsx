import { Routes, Route } from "react-router-dom"
import "./App.css";
import NewPost from "./pages/NewPost/NewPost.jsx"
import Mainpost from "./pages/MainPost/MainPost"

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Mainpost />} />
                <Route path="/new-post" element={<NewPost />} />
            </Routes>
        </>
    );
}

export default App;

