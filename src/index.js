import ReactDOM from "react-dom";
import Main from './Components/Main'
import './Styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';

//const pets = ["dog", "cat", "fish"];

// const element = React.createElement(
//   "ol",
//   null,
//   pets.map((pet, index) => React.createElement("li", {key: index}, pet))
// );

//JSX
// const element = (
//   <div>
//     <h1>Pet Shop !</h1>
//     <ol>
//       {pets.map((pet, index) => (
//         <li key={index}>{pet}</li>
//       ))}
//     </ol>
//   </div>
// );







ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById("root"));
