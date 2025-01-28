import { useState, useEffect } from "react";
import api_fetch from "../api";

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api_fetch
            .get("api/notes/")
            .then((resp) => resp.data)
            .then((data) => setNotes(data))
            .catch((error) => alert(error));
    };

    return <div>Home</div>;
}

export default Home;
