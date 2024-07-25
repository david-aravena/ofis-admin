import { saveImagePublication } from "../../serverless/methods/storage"
import { saveDocument } from "../../serverless/methods/db"

export const savePublication = async (publication) => {
  return saveImagePublication(publication.image)
    .then((result) => {
      const newObjPublication = Object.create(publication)
      delete newObjPublication.image
      return saveDocument({...newObjPublication, urlImage: result})
    })
    .catch((error) => {
        console.error('Error al subir el archivo', error);
    });
}