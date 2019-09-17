import React, { useContext, useEffect, useState, useRef } from "react";
import { Button, Icon, Form } from "semantic-ui-react";
import { Row } from '../styled-components/components'
import { FormSubHeader } from '../styled-components/components';
import { uploadFileToS3 } from "../../utils/app-utils";
import { FormContext } from "../../context/FormContextProvider";
import { FILE_UPLOAD_STATUS } from "../../reducer";

const UploadButton = () => {
  const [file, setFile] = useState({ name: null });
  const fileInputRef = useRef(null);
  let fileRef = useRef(null);
  const context = useContext(FormContext);

  async function uploadFile(file) {
    let payload = await uploadFileToS3(file);
    context.dispatch({ type: FILE_UPLOAD_STATUS, payload });
  }

  useEffect(() => {
    if (file.name && file.name !== fileRef.name) {
      uploadFile(file);
    }
  }, [file.name]);

  function onFileChange({ target: { files } }) {
    let uploadedFile = files[0];
    setFile(uploadedFile);
  }

  return (
    <Row>
      <div style={{"width" : "100%", "marginBottom":"10px"}}>
      <FormSubHeader >{'Send us your curriculum vitae'}</FormSubHeader>
      <Row>
        <Button
          ref={fileInputRef}
          type="button"
          animated="fade"
          size='large'
          style={{"width": "200px"}}
          onClick={() => fileInputRef.current.click()}
        >
          <Button.Content visible>
            <Icon name="file" />
          </Button.Content>
          <Button.Content hidden>Choose a File</Button.Content>
        </Button>
        <input type="file" ref={fileInputRef} hidden onChange={onFileChange} />
      </Row>
    </div>
  </Row>
  );
};

export default UploadButton;
