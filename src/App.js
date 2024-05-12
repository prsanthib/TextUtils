import './App.css'
import NavBar from './components/NavBar'
import Textform from './components/Textform'
import About from './components/About'
import { useState } from 'react'
import Alert from './components/Alert'
// import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App()
{

  const [mode,setmode] = useState('light');
  const [alert,setalert] = useState(null);

  const showalert = (message,type) =>
  {
      setalert({
        msg:message,
        type:type
      })

      setTimeout(()=>{
        setalert(null);
      },2000)
  }
  const changemode = () =>{
    if(mode === 'dark')
    {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showalert("Enabled light mode","success");
      document.title="TextUtils-LightMode";
    }
    else
    {
      setmode('dark');
      document.body.style.backgroundColor = '#1e0924';
      document.body.style.color = 'white';
      showalert("Enabled dark mode","success");
      document.title="TextUtils-DarkMode";
    }
  }

  const changemode2 = () =>{
    if(mode === 'blue')
    {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showalert("Enabled light mode","success");
    }
    else
    {
      setmode('blue');
      document.body.style.backgroundColor = 'blue';
      document.body.style.color = 'black';
      showalert("Enabled blue mode","success");
    }
  }

  return(
    // <Router>
    //   <div>
    //     <NavBar title="TextUtils" about="About" mode={mode} changemode2={changemode2} changemode = {changemode}/>
    //     <Alert alert={alert}/>
    //     <br/>
        
    //     <Routes>
    //         {/* <Route path="/about">
    //           <About />   
    //         </Route>
    //         <Route  path="/">
    //           <Textform mode={mode} showalert={showalert}/>
    //         </Route> */}
    //       <Route exact path="/" element={<Textform mode={mode} showalert={showalert}/>} />
    //       <Route path="/about" element={<About mode={mode}/>} />
    //     </Routes>       
    //   </div>  
    // </Router>
    <div>
    <NavBar title="TextUtils" about="About" mode={mode} changemode2={changemode2} changemode = {changemode}/>
     <Alert alert={alert}/>
        <br/>
         <Textform mode={mode} showalert={showalert}/>
   </div>
  );
}

export default App