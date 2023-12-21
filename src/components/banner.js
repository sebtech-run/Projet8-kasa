import React from "react"


function Banniere({ image, texte }) {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt="Bannière" />
      <span className="banner__txt">{texte}</span>
    </div>
  )
}

export default Banniere