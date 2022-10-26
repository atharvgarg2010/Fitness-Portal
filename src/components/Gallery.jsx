import React from 'react'
import GalleryBox from './GalleryBox'
import Gal1 from "./Gallery1.png"
import Gal2 from "./Gallery2.png"
import Gal3 from "./Gallery3.png"
import Gal5 from "./Gallery5.1.png"
function Gallery() {
    return (
        <>
            <div className='services'>
                <h1>
                    <span>G</span>
                    <span>A</span>
                    <span>L</span>
                    <span>L</span>
                    <span>E</span>
                    <span>R</span>
                    <span>Y</span>
                </h1>
            </div>
            <div className="gallery">
            <GalleryBox c="left" i={Gal1} q={"Hustle For The Muscle"}/>
            <GalleryBox c="right" i={Gal2} q={"Let The Gain Begins"}/>
            <GalleryBox c="left" i={Gal3} q="When You Want To Give Up Remember Why You Started"/>
            <GalleryBox c="right" q={"Sweat Off The Stress"} i="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"/>
            <GalleryBox c="left" q="No Pain No Gain" i={Gal5}/>
            <GalleryBox c="right" q={"Be Stronger Than Your Excuses"} i="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            </div>
        </>
    )
}

export default Gallery
