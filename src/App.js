import React from 'react'
import './index.css';
import { BrowserRouter ,Routes , Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import Error from './Error'
import Youtube from './Youtube'
import Twitter from './Twitter'
import Github from './Github'
import Header from './Header';

function App() {
  return (
    <> 
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact/" element={<Contact/>}/>
          <Route path="youtube" element={<Youtube/>} />
          <Route path="twitter" element={<Twitter/>} />
          <Route path="github" element={<Github/>} />

          
      <Route path="/login" element={<Login/> } />
      <Route path="/login/:fname" element={<Login/>} />



      <Route path="*" element={<Error/>} />
      </Routes>
      </BrowserRouter>
    </>
    
  );
}


export default App;
