function PublicationsUI({product, index}){
  return(
    <div key={index} className="card">
      <img className="image-card" src={product.urlImage} alt="error" />
      <div className="text-card">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default PublicationsUI
