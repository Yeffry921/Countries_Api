import { Routes, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Country from './Country'
import '/index.css'


const App = () => {

  return (
    <div className="app">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/country/:name' element={<Country/>}></Route>
        </Routes>
    </div>
    
  )
}

export default App