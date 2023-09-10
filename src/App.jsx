import './App.css'
import Home from './Page/Home'
import Course from './Page/Course'
import SignIN from './Page/SignIN';
import SignUp from './Page/SignUp';
import LearnMore from './Page/LearnMore';
import{Routes,Route} from 'react-router-dom';

function App() {

  return (
      <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/course" element={<Course/>}/>
          <Route path="/signin" element={<SignIN/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/learnmore" element={<LearnMore/>}/>
        </Routes>

      </>
  )
}

export default App
