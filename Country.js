import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { FaLongArrowAltLeft} from 'react-icons/fa'

const Country = () => {

  const [country, setCountry] = useState([])
  const { name } = useParams()

  useEffect(() => {
    fetchCountry()
    
  }, [])

  const fetchBorderCountry = async (name) => {
    const res = await fetch(`https://restcountries.com/v2/alpha/${name}`)
    const json = await res.json()

    setCountry([json])
  } 

  const fetchCountry = async () => {
    const res = await fetch(`https://restcountries.com/v2/name/${name}`)
    const json = await res.json()

    setCountry(json)
  }
  console.log(country)
  return (
    <section className="country__container">
      <div className="nav">
        <button className="nav-btn">
          <Link to={"/"} className='nav-link'>
            <FaLongArrowAltLeft/>
            <span>Back</span> 
          </Link>
        </button>
        
      </div>
      

      {country.length === 1 ? (
        country.map((countryData) => {
          const { name, population, region, subregion, capital,
                  topLevelDomain, currencies, languages, flags, numericCode,
                  nativeName, borders } = countryData
         
          return (
          <div className="country__container-data" key={numericCode}>
            <div className="country__image">
              <img src={flags.png} alt="flag" />
            </div>

            <div className="country__data">
              <h2>{name}</h2>

              <div className="country__data-wrapper">
                <div className="country__data-left">
                  <h3 className="text-dark">Native name: <span className="text-light">{nativeName}</span></h3>
                  <h3 className="text-dark">Population: <span className="text-light">{population}</span></h3>
                  <h3 className="text-dark">Region: <span className="text-light">{region}</span></h3>
                  <h3 className="text-dark">Sub Region: <span className="text-light">{subregion}</span></h3>
                  <h3 className="text-dark">Capital: <span className="text-light">{capital}</span></h3>
                </div>

                <div className="country__data-right">
                  <h3 className="text-dark">Top Level Domain: <span className="text-light">{topLevelDomain[0]}</span></h3>
                  <h3 className="text-dark">Currencies: <span className="text-light">{currencies[0].name}</span></h3>
                  <h3 className="text-dark">Languages:  
                    {languages.map((language, index) => 
                      <span key={language.iso639_1} className="text-light"> {(index ? ', ' : '') + language.name} </span>)
                    }
                  </h3>
                </div>
              </div>

              <div className="country__data-borders">

                
                {borders ? borders.map((border) => {
                  return (
                    <div>
                      <h3>Border Countries:</h3>
                      <button
                        className="country__border-btn" 
                        onClick={() => fetchBorderCountry(border)} 
                        key={border}
                      >
                      {border}
                      </button>
                    </div>
                  )
                }): null}
              </div>
            </div>
          </div>
          )
        })
      ) : null}
      
     </section>
  )
}

export default Country

