import './../css/newPublication.css'

function NewPublicationUI({closeNewPublication, publicationsUI, getNewPublication, submitPublication}){
  return(
    <div id="newPublicationContainer">
      <div id="backgrounNewPublication">
        <div>
          <button onClick={() => closeNewPublication()}>Cerrar</button>
        </div>
        <div id="formNewPublicationContainer">
          <form onSubmit={submitPublication}>
            <div>
              <div>
                <label>Imagen</label>
              </div>
              <div>
                <input type="file" id="image-newPublication" name="image" onChange={(e) => getNewPublication(e)} />
              </div>
              <div>
                <label>Titulo</label>
              </div>
              <div>
                <input type="text" id="title-newPublication" name="title" onChange={(e) => getNewPublication(e)}/>
              </div>
              <div>
                <label>Descripción</label>
              </div>
              <div>
                <input type="text" id="description-newPublication" name="description" onChange={(e) => getNewPublication(e)}/>
              </div>
              <div>
                <input type="submit" value="guardar" />
              </div>

            </div>
          </form>
          <div style={{display:"flex", justifyContent:"center"}}>
            {publicationsUI}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPublicationUI;