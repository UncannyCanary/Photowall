import React, { Component } from "react";
import Photo from "./Photo";
import PropType from "prop-types";
import {Link} from "react-router-dom";

function PhotoWall(props) {
  return (
    <div>
      {/* <button className="addButton" onClick={() => {
          props.onNavigate();
      }}></button> */
      // If we use button to navigate, we won't be adding the URL fragment to the page and back button won't be freed instead we use anchor and href
      }
      <Link className="addButton" to="/AddPhoto"></Link>
      <div className="photo-grid">
        {props.posts.map((pic, index) => (
          <Photo key={index} post={pic} onRemovePhoto={props.onRemovePhoto} />
        ))}
      </div>
    </div>
  );
}

PhotoWall.propType = {
  posts: PropType.array.isRequired,
  onRemovePhoto: PropType.func.isRequired,
};

// class PhotoWall extends Component {
//     render() {
//         return <div className='photo-grid'>
//         {this.props.posts.map((pic, index) => <Photo key={index} post={pic}/>)}
//     </div>
//     }
// }

export default PhotoWall;
