import logo from './logo.svg';
import './App.css';
import Title from './Title';
import MenuItems from './component/MenuItems';
import {useState} from 'react';


const Page = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      <div>{props.text}</div>
      <img src={props.image} />
    </div>
  )
}

const MainContent = (props) => { 

  const handleButtonClick = (event) => {    //arrow function
      props.function(event);
  }
   
  
  if(props.display == "home") {
    return (
      <div> 
        <button id="products" onClick={handleButtonClick}> Products</button>
         <Page
          title ="Home"
          text = "We are a fantastic company with great people!"     
          image ="images/normal.jpg"
       />
      </div>
    );
  } 
  else if(props.display == "products") {
    return (
      <Page
      title ="Products"
      text = "Here is a list of our fantastic products"     
      image ="images/normal2.jpg"
    />
    );
  } 
  else if(props.display == "aboutus") {
    return (
      <Page
      title ="About Us"
      text = "We were founded in 2010 and we have had an amazing journey."     
      image ="images/normal3.jpg"
    />

    );
  }          
}

function App() {

  const [data, setData] = useState( "React is fun!" );   //state value is within parenthesis

  // menuItems holds the data for the menuItems.
  const [menuItems, setMenuItems] = useState({ i1: "Home", i2: "Our Services", i3: "Our Stores" });

  // new state variable for display options
  const [displayOptions, setDisplayOptions] = useState("home");


  function handleClick(event){
     if(event.target.id == "home" ){
       setDisplayOptions("home");
     }
     else if (event.target.id == "products" ){
      setDisplayOptions("products");
     }
     else if(event.target.id == "aboutus" ){
      setDisplayOptions("aboutus");
     }

  }
 
  return (
    <div className="App">
      <h1>Hello React!!!</h1>       
      <Title />
      <ul>
          <li><a id="home"     onClick={handleClick} href="#">Home</a></li>
          <li><a id="products" onClick={handleClick} href="#">Produucts</a></li>
          <li><a id="aboutus"  onClick={handleClick} href="#">About us</a></li>
        </ul>

      <MainContent display = {displayOptions} function={handleClick}/>
    </div>
  );
}

export default App;