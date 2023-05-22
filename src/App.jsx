import './App.css'
import Home from './Page/Home'
import Course from './Page/Course'
import SignIN from './Page/SignIN';
import SignUp from './Page/SignUp';
import{Routes,Route} from 'react-router-dom';

function App() {

  return (
      <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/course" element={<Course/>}/>
          <Route path="/signin" element={<SignIN/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>

      </>
  )
}

export default App
