//import logo from './logo.svg';
import './App.css';
//import IconSettings from '@salesforce/design-system-react/components/icon-settings';
//import Input from '@salesforce/design-system-react/components/input'; 
//import IconSettings from '@salesforce/design-system-react/components/icon-settings';
//import Button from '@salesforce/design-system-react/components/button'; 
import Componentone from './componentone';
import Componenttwo from './componenttwo';


function App() {
  return (

  
  <div style={{height:"100px",width:"800px", marginLeft:"200px"}}>
   <br/><br/><br/><br/><br/><br/>
   <div align="right">
   <Componenttwo/>
   </div><br/>
   <div class="slds-box" style={{backgroundColor:"#ffcccc"}}>
   <Componentone/>
   </div><br/><br/>
   
  </div>

  
   
  );
}

export default App;
