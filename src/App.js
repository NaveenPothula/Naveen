import {Route,Routes,useParams} from "react-router-dom";  
import StartPage from "./Components/StartPage";  
import ParamsPage from "./Components/ParamsPage";
const App=()=>{
  return(
    <div>

    
      <div>
      <Routes>
      <Route path="/" element= {<StartPage/>} />
       
      <Route path='/:imageUrl' element= {<ParamsPage/>}  />
        

      </Routes>
      </div>
  
      </div>
      
  );
};
 export default App;  