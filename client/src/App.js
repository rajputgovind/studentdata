import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/components/Home"
import Student from './components/Student';
import { AddStudents } from './components/AddStudents';

function App() {
  return (
   <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path='/students' element={<Student/>}></Route>
      <Route exact path='/addstudents' element={<AddStudents/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
