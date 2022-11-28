import React from 'react';
import './Create.css';
import create from './writeimage.jpg';
import { AiFillFileAdd } from 'react-icons/ai';

const Create = () => {
    return (
        <div className='Create'>
            <img
                className='Create__image'
                src={create}
                alt="createimage" />
            <form className="create">

                <div className="form">
                    <label htmlFor="fileInput">
                        <AiFillFileAdd className="fileIcon" />
                    </label>
                    <input type="file" id="fileInput" style={{ display: 'none' }} />
                    <input type="text" placeholder='Title' className='createinput' autoFocus={true} />
                </div>

                <div className="form">
                    <textarea placeholder='Start Writing' type='text' className='createinput write'></textarea>
                </div>

                <button className="submit">Publish Blog</button>

            </form>

        </div>
    )
}

export default Create