import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import { BiUpload } from "react-icons/bi";

function ImageUpload({ getUrl, currentUser }) {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        getUrl(url)
        setImageUrls((prev) => [...prev, url]);
      }
      );
    }
    );
  }
  
  return (
    <div className= "relative group">
    <div className= "edgeGlow-NoAnim"></div>          
    <div className="pl-6 pr-6 pt-6 pb-6 flex flex-col justify-center items-center cursor-default">
    
      {imageUrls.length == 0 ? (
        <><input className="relative mb-2 bg-gray-900 rounded-md text-gray-500 focus:outline-none focus:shadow-outline cursor-pointer"
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />    
      <button className="upload-button" onClick={uploadFile}>{<BiUpload size="28"/>}</button>
      </>
      ) : null }
      
      {imageUrls.map((url) => {
        // return <img src={url} />
        //alert that image is uploaded
        return <div className="font-bold text-lg text-white">Image uploaded</div>
      })}
      
    </div>
    </div>
  );
}

export default ImageUpload;