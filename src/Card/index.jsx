import React from "react";

import "./styles.css";

export const Card = ({user,urls}) => {
  if (!user || !urls) return null
  return(
    <section className="cardWrapper">
      <div className="cardHeader">
        <img src={user.thumbnail} height='80'/>
      </div>
      <div className="cardGrid">
        <img src={urls[0]} height='120' width='120' />
        <img src={urls[1]} height='120' width='120' />
        <img src={urls[2]} height='120' width='120' />
        <img src={urls[3]} height='120' width='120' />
        <img src={urls[4]} height='120' width='120' />
        <img src={urls[5]} height='120' width='120' />
        <img src={urls[6]} height='120' width='120' />
        <img src={urls[7]} height='120' width='120' />
        <img src={urls[8]} height='120' width='120' />
      </div>
    </section>
  )
}
