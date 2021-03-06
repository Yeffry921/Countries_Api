import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

const Home = () => {
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

  const findCountry = (e) => {
    e.preventDefault()

    const query = e.target.country.value
    
    const newCountries = countries.filter((country) => { 

      const countryName = country.name.common.toLowerCase()

      return countryName.includes(query)

    })
    
    setCountryFilter(newCountries)
  }

  const getAllCountries = async () => {
    const res = await fetch('https://restcountries.com/v2/all')
    const json = await res.json()
    setCountries(json)
  }
  

  const handleSetRegion = (e) => {
    setRegion(e.target.value)
  }

  console.log(countries)
  return (
    <React.Fragment>
      <div className="filter__container">
        <form className='form__container' onSubmit={findCountry}>
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
      
      <ul className="card__container">
        {countryFilter.map((country) => {
          return (
            <li className='card' key={country.alpha3Code}>
              <Link to={`/country/${country.name}`}>
                <div className="card__image-wrapper">
                  <img src={country.flags.png} loading="lazy" alt="flag" />
                </div>
                <div className="card__detail-wrapper">
                  <h2>{country.name}</h2>

                  <h5>Population: <span>{country.population}</span></h5>
                  <h5>Region: <span>{country.region}</span></h5>
                  <h5>Capital: <span>{country.capital}</span></h5>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}

export default Home