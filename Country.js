import { Link, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"

const Country = () => {

  const [country, setCountry] = useState([])

  const { name } = useParams()
  useEffect(() => {
    fetchCountry()
    
  }, [])

  const fetchCountry = async () => {
    const res = await fetch(`https://restcountries.com/v2/name/${name}`)
    const json = await res.json()

    setCountry(json)
  }

  return (
    <React.Fragment>
      <nav>
        <Link to={"/"} className='back-btn'>Back</Link>
      </nav>
      {country.length === 1 ? (
        country.map((countryData) => {
          const { name, population, region, subregion, capital,
                  topLevelDomain, currencies, languages, flags, numericCode,
                  nativeName, borders } = countryData
         
          return (
          <div className="country__container" key={numericCode}>
            <div className="country__image">
              <img src={flags.png} alt="flag" />
            </div>

            <div className="country__data">
              <h2>{name}</h2>

              <div>
                <h3>Native name: {nativeName}</h3>

                <h3>Population: {population}</h3>
                <h3>Region: {region}</h3>
                <h3>Sub Region: {subregion}</h3>
                <h3>Capital: {capital}</h3>
              </div>

              <div>
                <h3>Top Level Domain: {topLevelDomain[0]}</h3>
                <h3>Currencies: {currencies[0].name}</h3>
                <h3>Languages:  
                  {languages.map((language) => 
                    <span key={language.iso639_1}> {language.name}, </span>)
                  }
                </h3>
              </div>

            </div>
          </div>
          )
        })
      ) : null}
      
     </React.Fragment>
  )
}

export default Country

