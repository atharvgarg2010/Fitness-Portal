import React from 'react'
import GalleryBox from './GalleryBox'
import Gal1 from "./yoga.png"
import Gal2 from "./chess.jpeg"
import Gal3 from "./medi.jpg"
import Gal4 from "./gymg.png"
import Gal5 from "./table.jpg"
import Gal6 from "./gymb.png"

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
            <GalleryBox c="right" i={Gal2} q={"Mental health is very important"}/>
            <GalleryBox c="left" i={Gal3} q="When You Want To Give Up Remember Why You Started"/>
            <GalleryBox c="right" q={"Sweat Off The Stress"} i={Gal4}/>
            <GalleryBox c="left" q="No Pain No Gain" i={Gal5}/>
            <GalleryBox c="right" q={"Be Stronger Than Your Excuses"} i={Gal6}/>
            </div>
        </>
    )
}

export default Gallery
