import React from 'react'

function GalleryBox(props) {
    const {i,c,q}=props
  return (
    <div className={`gallerybox ${c}`}>
      <img src={i} alt="" />

      <div className="contennt">
        {/* <h1>+</h1> */}
        <h2 className="fas quote fa-plus">{q}</h2>
        {/* <p>{p}</p> */}
      </div>
    </div>
  )
}

export default GalleryBox
