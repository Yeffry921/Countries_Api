import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import '/index.css'


const App = () => {

  return (
    <div className="app">
      <Header/>
      <Home/>
    </div>
    
  )
}

export default App