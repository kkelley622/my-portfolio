import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Languages from './components/Languages';
import Projects from './components/Projects';

function App() {
  const languages = [
    {name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"},
    {name: "Javascript", logo: "https://abrudz.github.io/logos/JS.svg"},
    {name: "Ruby on Rails", logo: "https://rubyonrails.org/assets/images/opengraph.png"}
  ]
    

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/intro" element={ <Intro /> } />
          <Route path='/languages' element={ <Languages languages={ languages }/> } />
          <Route path='/projects' element={ <Projects />} />
        </Routes>
      </BrowserRouter>  
      
    </div>
  );
}

export default App;
