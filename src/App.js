import { Route, Routes } from 'react-router-dom';
import './App.css';
import Instruction from './component/Instruction';
import Navbar from './component/Navbar';
import Quiz from './component/Quiz';
import Result from './component/Result';
import Hadiah from './component/Hadiah';
import Start from './component/Start';

function App() {
  return (
    <>
      <Navbar/>
      <Instruction/>
      <Routes>
        <Route exact path='/khal' element={<Start/>} />
        <Route exact path='/khal/quiz' element={<Quiz/>} />
        <Route exact path='/khal/result' element={<Result/>} />
        <Route exact path='/khal/hadiah' element={<Hadiah/>} />
      </Routes>
    </>
  );
}

export default App;
