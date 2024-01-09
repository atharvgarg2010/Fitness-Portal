import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
function Blog() {
    const [postLists, setPostLists] = useState([]);
    const postsCollectionRef = collection(db, 'post')
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            // setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getPosts()
    })
    return (
        <>
        <div className='services'>
      <h1>
        <span>B</span>
        <span>L</span>
        <span>O</span>
        <span>G</span>
        <span>S</span>
        </h1>
    </div>
        <div className="blog">
            
            {postLists.map((post)=>{
                return <div className='posts'>
                    <h1>{post.title}</h1>
                    <h2>{post.postText}</h2>
                    <h3>@{post.author.name}</h3>
                    <img src={post.file} alt="" />
                    </div>
            })

            }
        </div>
        </>

    )
}

export default Blog