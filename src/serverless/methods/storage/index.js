import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import app from '../../config'


const storage = getStorage(app);

export const saveImagePublication = async (image) => {
  const storageRef = ref(storage, `${image.name}`);
  const imageUpload = await uploadBytes(storageRef, image)
  const urlImage = await getDownloadURL(imageUpload.ref)
  return urlImage
}