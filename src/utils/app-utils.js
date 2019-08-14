import React, {useState} from 'react'
import axios from 'axios'

const useS3FileUpload = () => {

    let [uploadStatus, setUploadStatus] = useState({
        success: false, 
        error: false, 
        uploading: true, 
        returnData: null,
        errormsg: ''
    })

    const uploadFile = (file) =>{
        let fileParts = file.name.split('.');
        let fileName = fileParts[0];
        let fileType = fileParts[1];
        console.log(process.env.REACT_APP_S3_BUCKET_ENDPOINT)
        // axios.post("http://localhost:3001/sign_s3",{
        //   fileName : fileName,
        //   fileType : fileType
        // })
        // .then(response => {
        //   let returnData = response.data.data.returnData;
        // //   var signedRequest = returnData.signedRequest;
        // //   var url = returnData.url;
        //   let status = {...uploadStatus, returnData}  
        //   setUploadStatus(status)
        //   console.log("Recieved a signed request " + returnData);
          
        //  // Put the fileType in the headers for the upload
        //   var options = {
        //     headers: {
        //       'Content-Type': fileType
        //     }
        //   };
        //   axios.put(returnData.signedRequest,file,options)
        //   .then(result => {
        //     console.log("Response from s3")
        //     let status = {...uploadStatus, ...{success: true, uploading: false}}
        //     setUploadStatus(status);
        //   })
        //   .catch(error => {
        //     let status = {...uploadStatus, ...{uploading: false, error: true, errormsg: JSON.stringify(error)}}
        //     setUploadStatus(status);
        //   })
        // })
        // .catch(error => {
        //     let status = {...uploadStatus, ...{uploading: false, error: true, errormsg: JSON.stringify(error)}}
        //     setUploadStatus(status);
        // })
    }

  

    return [uploadStatus, uploadFile]
  }
  

  export {
      useS3FileUpload
  }