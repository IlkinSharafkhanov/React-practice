import React, { useState } from "react";
import "./index.scss"

const Dashboard = () => {
const [baseImg, setBaseImg] = useState("")

const convertBase64 = (file) => {
    return new Promise ((resolve,reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
        resolve(fileReader.result)
    }
    fileReader.onerror = (error) => {
        reject(error)
    }
});
};
const uploadImg = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertBase64(file)
    setBaseImg(base64)
}
  return (
    <div className='content'>
        <input type="file" onChange={uploadImg}/>

        <div className="image">
            {baseImg ? <img src = {baseImg} alt="avatar"/> : ""}
        </div>
    </div>
  )
}

export default Dashboard