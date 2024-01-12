import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './sidebar';
import Nav from './nav';
import About from '../pages/about';
import Resume from '../pages/resume'
import Project from '../pages/project'
import Contact from '../pages/contact';
import './style/main.css';

const Main = () => {
  return (
    <Router>
      <div className="main">
        <Sidebar/>
        <div className="main-content">
          <Nav/>
          <Routes>
            <Route path='/' element={<About/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default Main;
