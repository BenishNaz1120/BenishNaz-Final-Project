import React from 'react';
import featureimage from '../images/Frame 19.png'

const Features = () => {
  return (
    <div id='features'>
        <div className='features-model'>
            <img src={featureimage} alt ='feature-image' />
        </div>
        <div className='features-text'>
            <h2>Features</h2>
            <h3>This Application <span>Software</span> is Art</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum maiores voluptas dicta eius libero, culpa quae officiis natus facere mollitia necessitatibus commodi ipsum vitae tenetur suscipit amet hic exercitationem.</p>
            <button>View More Features</button>
        </div>
    </div>
  )
}

export default Features;