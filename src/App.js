import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Projects } from './components/projects'
import { Home } from './components/home'
import './app.scss'

function App() {
  return (
    <BrowserRouter basename="/le-portfolio">
      <Routes>
        {/* <Route path="/" element={<Home/>}></Route> */}
        {/* <Route path="/programming-experience" element={<Projects/>}></Route> */}
        <Route path="/" element={<Projects/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
