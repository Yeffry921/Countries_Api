import { useState } from 'react'
import moon from './images/icon-moon.svg'
import sun from './images/icon-sun.svg'
import '/index.css'

const App = () => {
  const [theme, setTheme] = useState('light')

  const handleTheme = () => {
    const toggle = theme === 'light' ? 'dark' : 'light'
    document.body.setAttribute('data-theme', toggle)
    setTheme(toggle)
  }
  return (
    <div className="app">
        <header className='header__container'>
          <h1>Where in the world?</h1>

          <div className='header__theme'>
            <button onClick={handleTheme}>
              <img src={theme === 'light' ? moon : sun} alt="theme icon" />
            </button>
              
            <span>Dark Mode</span>
          </div>
        </header>

        <form className='form__container'>
          <label htmlFor="country">
            <input 
              type="text" 
              placeholder='Search for a country...' 
              id='country' 
              name='country'
            />
          </label>
        </form>
    </div>
    
  )
}

export default App