import React, { Component } from "react";

class List extends Component {
    render() {
      return (
        <ol>
          {this.props.pets.map((pet, index) => (
            <li key={index}>{pet}</li>
          ))}
        </ol>
      );
    }
  }

  export default List;