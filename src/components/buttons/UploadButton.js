import React, {useContext, useEffect, useState, useRef} from 'react'
import { Button, Icon, Form} from 'semantic-ui-react'
import {useS3FileUpload} from '../../utils/app-utils'
import {FormContext } from '../../context/FormContextProvider'
import {FILE_UPLOAD_STATUS} from '../../reducer'

const UploadButton = () => {

    const [file, setFile] = useState({name: null})
    const fileInputRef = useRef(null)
    const [fileUploadStatus, uploadFile] = useS3FileUpload()
    const context = useContext(FormContext)

    useEffect(() => {
        if(file.name){
            uploadFile(file)            
        }
        context.dispatch({type: FILE_UPLOAD_STATUS, payload:fileUploadStatus})
     }, [file.name, fileUploadStatus]);

    function onFileChange({target:{files}}){
        let uploadedFile = files[0]
        setFile(uploadedFile)
    }


    return (
            <>
              <Form.Field>
              <label>Select your Curriculum Vitae & Upload </label>
                <Button as="label"  type="button" animated="fade"  onClick={() => fileInputRef.current.click()}>
                <Button.Content visible>
                    <Icon name="file" />
                </Button.Content>
                <Button.Content hidden>Choose a File</Button.Content>
                </Button>
                <input
                type="file"
                ref={fileInputRef}
                hidden
                onChange={onFileChange}
                />
                <Form.Input
                fluid
                label="File Chosen: "
                placeholder="Use the above bar to browse your file system"
                readOnly
                value={file.name}
                />
                <Button style={{ marginTop: "20px" }} type="submit">
                Upload Curriculum Vitae
                </Button>
            </Form.Field>
        </>
       
    )
}

export default UploadButton

// /         <Button
// content="Choose File"
// labelPosition="left"
// icon="file"
// onClick={() => fileInputRef.current.click()}
// />
// <input
// ref={fileInputRef}
// type="file"
// hidden
// onChange={onFileChange}
// />
// </Form.Field>
{/* <Button type="submit">Upload</Button */}