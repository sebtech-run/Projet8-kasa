import React from "react"


function Banner({ image, texte }) {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt="Bannière" />
      { texte.length > 0 ? <span className="banner__txt">{texte}</span> : null}
    </div>
  )
}

export default Banner