
import logo from './logo.svg';
import React, { useState } from 'react';
import './MasterPage.css';
// import './App.css';
import ReactDOM from 'react-dom'; // Import ReactDOM
 
import MyComponent from './component/MyComponent'
import MasterPage from './component/MasterPage'
import { Link } from 'react-router-dom';
import Demo from './component/Demo';
function App()   {
  const [count, setCount] = useState(0); // State variable
  return (

    <div>
 

       
       {/* <MasterPage  /> Passing state as props */}
       {/* <Demo  />  */}
        <MyComponent count={count} />
</div>
    
    
  );
}

export default App;

// ReactDOM.render(<App/>, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);
 
