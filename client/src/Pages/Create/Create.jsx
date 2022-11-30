import React, { useState, useContext } from 'react';
import './Create.css';
import axios from 'axios';
import { AiFillFileAdd } from 'react-icons/ai';
import { Context } from '../../context/Context';

const Create = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            description,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", filename);
            newPost.photo = filename;

            try {
                await axios.post('http://localhost:5000/api/upload')
            } catch (error) {

            }
        }
        try {
            const res = await axios.post('http://localhost:5000/api/posts', newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (error) {

        }
    }

    return (
        <div className='Create'>
            {file && (
                <img
                    className='Create__image'
                    src={URL.createObjectURL(file)}
                    alt="createimage" />
            )}
            <form className="create" onSubmit={handleSubmit}>

                <div className="form">
                    <label htmlFor="fileInput">
                        <AiFillFileAdd className="fileIcon" />
                    </label>
                    <input type="file" id="fileInput" style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])}
                    />
                    <input type="text" placeholder='Title' className='createinput' autoFocus={true} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="form">
                    <textarea placeholder='Start Writing' type='text' className='createinput write' onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                <button className="submit" type="submit">Publish Blog</button>

            </form>

        </div>
    )
}

export default Create