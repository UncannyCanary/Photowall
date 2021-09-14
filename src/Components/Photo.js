import React, { Component } from "react";
import PropType from 'prop-types';

function Photo(props) {
  const picture = props.post;
  return (
    <figure className="figure">
      <img
        className="photo"
        src={picture.imageLink}
        alt={picture.description}
      />
      <figcaption>
        <p>{picture.description}</p>
      </figcaption>
      <div className="button-container">
        <button className="remove-button" onClick={() => props.onRemovePhoto(picture)}>Delete</button>
      </div>
    </figure>
  );
}

Photo.propType = {
  post: PropType.array.isRequired,
  onRemovePhoto: PropType.func.isRequired
}

// class Photo extends Component {
//     render() {
//          const picture = this.props.post;
//          return <figure className='figure'>
//              <img className='photo' src={picture.imageLink} alt={picture.description}/>
//              <figcaption><p>{picture.description}</p></figcaption>
//              <div className='button-container'>
//                 <button className='remove-button'>Delete</button>
//              </div>
//          </figure>
//     }
// }

export default Photo;
