import { useState, useEffect } from 'react'
import moon from './images/icon-moon.svg'
import sun from './images/icon-sun.svg'
import '/index.css'

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

const App = () => {
  const [theme, setTheme] = useState('light')
  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState([])
  const [region, setRegion] = useState('All')

  useEffect(() => {
    getAllCountries()
  }, [])

  useEffect(() => {
    if(region === 'All') {
      setCountryFilter(countries)
    } else {
      setCountryFilter(countries.filter((country) => country.region === region))  
    }
  }, [region, countries])

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

  const handleSetRegion = (e) => {
    setRegion(e.target.value)
  }
  console.log(countries)
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

        <select value={region} className="region__filter" onChange={handleSetRegion}>
          <option value="" hidden>Filter by Region</option>
          {regions.map((region) => {
            return (
              <option key={region} value={region}>{region}</option>
            )
          })}
        </select>
      </div>
        
      <div className="card__container">
      {countryFilter.map((country) => {
        return (
          <div className='card'>
            <div className="card__image-wrapper">
              <img src={country.flags.png} alt="flag" />
            </div>
            <div className="card__detail-wrapper">
              <h2>{country.name.common}</h2>

              <h4>Population: <span>{country.population}</span></h4>
              <h3>Region: <span>{country.region}</span></h3>
              <h3>Capital: <span>{country.capital}</span></h3>
            </div>
          </div>
          
        )
      })}
    </div>
      
      
    </div>
    
  )
}

export default App