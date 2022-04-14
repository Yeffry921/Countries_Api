import { useState, useEffect } from 'react'
import moon from './images/icon-moon.svg'
import sun from './images/icon-sun.svg'
import '/index.css'

const App = () => {
  const [theme, setTheme] = useState('light')
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

  useEffect(() => {
    getAllCountries()
  }, [])

  const getAllCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all')
    const json = await res.json()
    setCountries(json)
  }

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

        <select value={filter} className="region__filter" onChange={handleSetFilter}>
          <option value="" hidden>Filter by Region</option>
          {regions.map((region) => {
            return (
              <option key={region} value={region}>{region}</option>
            )
          })}
        </select>
      </div>

      {countries.map((country) => {
        return <p>{country.name.common}</p>
      })}
    </div>
    
  )
}

export default App