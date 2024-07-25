function PublicationsUI({product, index}){
  return(
    <div key={index} className="card">
      {product.urlImage && <img className="image-card" src={product.urlImage} alt="error" />}
      {product.image && <img className="image-card" src={URL.createObjectURL(product.image)} alt="error" />}
      <div className="text-card">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default PublicationsUI
