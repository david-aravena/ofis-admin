import { useEffect, useState } from "react";
import PublicationsUI from './views/PublicationsUI'
import NewPublicationUI from './views/NewPublicationUI'
import { getUserPublications } from "../serverless/methods/db";
import { savePublication } from "./utils/publications";
import './css/publications.css'


function Publications(){

  const [products, setProducts] = useState([])
  const [isCreatePublication, setIsCreatePublication] = useState(false)
  const [newPublication, setNewPublication] = useState({})

  useEffect(() => {
    getUserPublications().then((result) => setProducts(result))
  }, [])

  const createPublication = () => {
    setIsCreatePublication(true)
  }

  const closeNewPublication = () => {
    setIsCreatePublication(false)
  }

  const getNewPublication = (e) => {
    if(e.target.name === "image"){
      const file = e.target.files[0]
      setNewPublication({...newPublication, image: file})
    }else{
      setNewPublication({...newPublication, [e.target.name]: e.target.value})
    }
  }

  const submitPublication = (e) => {
    e.preventDefault()
    savePublication(newPublication)
      .then(() => closeNewPublication())
      .then(() => {
        setProducts([...products, newPublication])
      })
      .then(() => setNewPublication({}))
  }

  return(
    <>
      <div id="publicationsContainer">
        {products.map((product, index) => {
          return(
            <PublicationsUI product={product} index={index} />
          )
        })}
        <button onClick={() => createPublication()}>Nueva publicación</button>
      </div>
      
      {isCreatePublication &&
        <div style={{width:"100vw", height:"100vh"}}>
          <NewPublicationUI 
            closeNewPublication={closeNewPublication} 
            publicationsUI={<PublicationsUI product={newPublication} index={null} />}
            getNewPublication={getNewPublication}
            submitPublication={submitPublication}
          />
        </div>
      }
    </>
  )
}

export default Publications;