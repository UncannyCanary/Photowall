import React, { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";

let log = console.log;
class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: "0",
          description: "beautiful landscape",
          imageLink:
            "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg",
        },
        {
          id: "1",
          description: "Aliens???",
          imageLink:
            "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg",
        },
        {
          id: "2",
          description: "On a vacation!",
          imageLink:
            "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
        },
      ],
     // screen: "Photos", //Photos or AddPhoto
    };
    //log("Inside Constructor");
    //this.removePhoto = this.removePhoto.bind(this);
  }

  removePhoto = (removedPost) => {
    console.log(removedPost.description);
    this.setState((previousState) => ({
      posts: previousState.posts.filter((prevPost) => prevPost != removedPost),
      //abc
    }));
  };

  addPhoto = (addedPhoto) => {
    this.setState((previousState) => ({
      posts: previousState.posts.concat(addedPhoto)
    }))
  }

  // navigate = () => {
  //   this.setState({
  //     screen: 'AddPhoto'
  //   })
  // }

  // simulateFetchCall() {
  //   return [{
  //     id: "0",
  //     description: "beautiful landscape",
  //     imageLink:
  //       "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
  //       "3919321_1443393332_n.jpg",
  //   },
  //   {
  //     id: "1",
  //     description: "Aliens???",
  //     imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg",
  //   },
  //   {
  //     id: "2",
  //     description: "On a vacation!",
  //     imageLink:
  //       "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
  //   }];
  // }

  // componentDidMount() {
  //   this.setState( {
  //     posts: this.simulateFetchCall()
  //   })
  //   //log("Inside ComponentDidMount");
  // }

  componentDidUpdate(prevProps, prevState) {
    log(prevState);
    //log(prevState);
    log(this.state);
    //log("Inside ComponentDidUpdate");
  }

  // render() {
  //   //log("Inside Render");
  //   return (
  //     <div>
  //       {
  //         this.state.screen === "Photos" &&
  //         <div>
  //           <Title title={"Photowall"} />
  //           <PhotoWall
  //             posts={this.state.posts}
  //             onRemovePhoto={this.removePhoto}
  //             onNavigate={this.navigate}
  //           />
  //         </div>
  //       }
  //       {
  //         this.state.screen === "AddPhoto" &&
  //         <div>
  //           <AddPhoto />
  //         </div>
  //       }
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <div>
            <Title title={"Photowall"} />
            <PhotoWall
              posts={this.state.posts}
              onRemovePhoto={this.removePhoto}
            />
          </div>
        )} />
        <Route path="/AddPhoto" render={({history}) => (
          <AddPhoto onAddPhoto={this.addPhoto}/>
        )}/>
      </div>
    );
  }
}

export default Main;
