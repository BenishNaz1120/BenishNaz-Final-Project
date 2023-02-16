import React from 'react'

const Box = (props) => {
  return (
    <div className='s-box'>
      <div className='s-b-img'>
        <img src={props.image} alt={props.alte} />
      </div>
      <div className='s-b-text'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil porro adipisci eum quibusdam expedita! Ullam corrupti vel nam deleniti! Sunt ipsa aperiam neque! Obcaecati tempora sint odit, perferendis officiis facilis.</p>
        <a href='#home' className='cv-btn'>{props.button}</a>
      </div>
    </div>
  )


}

export default Box