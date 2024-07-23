import { useEffect, useState } from "react";
import PublicationsUI from './views/PublicationsUI'
import NewPublicationUI from './views/NewPublicationUI'
import './css/publications.css'


function Publications(){

  const [products, setProducts] = useState([])
  const [isCreatePublication, setIsCreatePublication] = useState(false)
  const [newPublication, setNewPublication] = useState({urlImage:"", title:"", description:""})

  useEffect(() => {
    setProducts([
      {
          title: "Camiseta de algodón",
          description: "Camiseta básica de algodón orgánico, disponible en varios colores.",
          urlImage: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/119259490_01/w=800,h=800,fit=pad"
      },
      {
          title: "Zapatos deportivos",
          description: "Zapatos deportivos ideales para correr o hacer ejercicio, material transpirable.",
          urlImage: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/131832356_03/w=800,h=800,fit=pad"
      },
      {
          title: "Teléfono móvil",
          description: "Teléfono inteligente con cámara de alta resolución y gran capacidad de almacenamiento.",
          urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbkATsytgrU5OiF-TDgFAoI0GKLpsiUYlmJQ&s"
      },
      {
          title: "Silla de oficina ergonómica",
          description: "Silla ajustable ergonómica con soporte lumbar y reposabrazos ajustables.",
          urlImage: "https://www.insumestetic.cl/wp-content/uploads/2023/05/silla-lumbar-1.jpg"
      },
      {
          title: "Cámara digital profesional",
          description: "Cámara DSLR con sensor de alta definición y múltiples modos de disparo.",
          urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSTequAH26jEe3THyuhvpsZvNjBrhtSbZOrw&s"
      },
      {
          title: "Libro de cocina vegetariana",
          description: "Recetas saludables y deliciosas para una dieta vegetariana equilibrada.",
          urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnUSCRmfak3XAqD1hdo7YnjMtaKAmIMKKMvg&s"
      },
      {
          title: "Juego de sartenes antiadherentes",
          description: "Set de sartenes de diferentes tamaños con revestimiento antiadherente.",
          urlImage: "https://www.tramontinastore.com.bo/images/foto_31_05_2019_16_30_49.jpg"
      },
      {
          title: "Auriculares Bluetooth",
          description: "Auriculares inalámbricos con cancelación de ruido y alta calidad de sonido.",
          urlImage: "https://www.edgans.cl/wp-content/uploads/2022/07/AUDIFONOS-BLUETOOTH-ENERGY-SISTEM-SPORT-1-DARK.jpg"
      },
      {
          title: "Robot aspirador",
          description: "Aspiradora automática con navegación inteligente y programable desde el móvil.",
          urlImage: "https://i.blogs.es/809cb3/portada/1366_2000.jpeg"
      },
      {
          title: "Maleta de viaje resistente",
          description: "Maleta grande con ruedas giratorias y material resistente a los golpes.",
          urlImage: "https://rimage.ripley.cl/home.ripley/Attachment/MKP/5305/MPM10001122763/imagen6-1.jpeg"
      }
    ])
  }, [])

  const createPublication = () => {
    setIsCreatePublication(true)
  }

  const closeNewPublication = () => {
    setIsCreatePublication(false)
  }

  const getNewPublication = (e) => {
    if(e.target.name === "urlImage"){
      const file = e.target.files[0]
      setNewPublication({...newPublication, urlImage: URL.createObjectURL(file)})
    }else{
      setNewPublication({...newPublication, [e.target.name]: e.target.value})
    }
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
            publicationsUI={<PublicationsUI product={newPublication} index={null}/>}
            getNewPublication={getNewPublication}
          />
        </div>
      }
    </>
  )
}

export default Publications;