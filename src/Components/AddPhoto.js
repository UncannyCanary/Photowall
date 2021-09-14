import React, { Component, useCallback } from 'react';
import { useHistory } from 'react-router-dom';



const AddPhoto = (props) => {

    let history = useHistory();

     const handleSubmit = useCallback((event) => {
        event.preventDefault();
        const image = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            "id": 0,
            "description": description,
            "imageLink": image
        }
        if (description && image) {
            props.onAddPhoto(post);
            history.push("/");
        }
    },[props]);

    return (
        <div>
            <h1>Photowall</h1>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="link" name="link" />
                    <input type="text" placeholder="description" name="description" />
                    <button className="postButton">Post</button>
                </form>
            </div>
        </div>

    )
}

export default AddPhoto;