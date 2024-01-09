import React from 'react'
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
function CreatePost() {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const postsCollectionRef = collection(db, "post");
    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            postText,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
            // color
        });
        navigate("/");
    };
    return (
        <>
            <div className="form">
                <h1 className="heading">Create A Post</h1>
                <div className="createpostheading headingCP">
                    <label>Heading</label>
                    <input className='effect-1 inp' type="text" name="heading" id="heading" placeholder='heading' onChange={(event) => {
                        setTitle(event.target.value);
                    }} />
                </div>

                <div className="createpostheading postCP">
                    <label>Post</label>
                    <textarea style={{width:'400px', height:"400px"}} width="500px" className='effect-1 inp' type="text" name="post" id="post" placeholder='Post' onChange={(event) => {
                        setPostText(event.target.value);
                    }} />
                </div>
                {/* <div className="createpostheading postCP">
                    <label>Post</label>
                    <input type="color" onChange={((event)=>{
                        setColor(event.target.value)
                    })}/>
                </div> */}
                <button onClick={createPost} className="btn">Submit</button>
            </div>
        </>
    )
}

export default CreatePost