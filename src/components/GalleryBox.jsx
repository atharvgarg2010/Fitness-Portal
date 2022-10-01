import React from 'react'

function GalleryBox(props) {
    const {i,c}=props
  return (
    <div className={`gallerybox ${c}`}>
      <img src={i} alt="" />

      <div className="contennt">
        {/* <h1>+</h1> */}
        <h1 className="fas fa-plus">+</h1>
        {/* <p>{p}</p> */}
      </div>
    </div>
  )
}

export default GalleryBox
