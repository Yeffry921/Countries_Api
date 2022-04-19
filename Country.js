import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Country = () => {

  const [country, setCountry] = useState('')

  const { name } = useParams()
  useEffect(() => {
    fetchCountry()
  }, [])

  console.log(country)
  const fetchCountry = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const json = await res.json()

    
    setCountry(json)
  }
 
  return (
    <nav>
      
    </nav>
  )
}

export default Country