import { useState, useEffect } from 'react'
import moon from './images/icon-moon.svg'
import sun from './images/icon-sun.svg'
import '/index.css'

const App = () => {
  const [theme, setTheme] = useState('light')
  const [filter, setFilter] = useState('')
  
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

  const handleTheme = () => {
    const toggle = theme === 'light' ? 'dark' : 'light'
    document.body.setAttribute('data-theme', toggle)
    setTheme(toggle)
  }

  const handleSetFilter = (e) => {
    setFilter(e.target.value)
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

      <div className="filter__container">
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

        <select value={filter} name="region" id="region" class="" onChange={handleSetFilter}>
          <option value="" hidden>Filter by Region</option>
          {regions.map((region) => {
            return (
              <option key={region} value={region}>{region}</option>
            )
          })}
        </select>
      </div>
    </div>
    
  )
}

export default App