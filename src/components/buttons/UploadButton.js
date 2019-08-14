import React, { useContext, useEffect, useState, useRef } from "react";
import { Button, Icon, Form } from "semantic-ui-react";
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
    <>
      <Form.Field>
        <label>Select your Curriculum Vitae & Upload </label>
        <Button
          as="label"
          type="button"
          animated="fade"
          onClick={() => fileInputRef.current.click()}
        >
          <Button.Content visible>
            <Icon name="file" />
          </Button.Content>
          <Button.Content hidden>Choose a File</Button.Content>
        </Button>
        <input type="file" ref={fileInputRef} hidden onChange={onFileChange} />
        <Form.Input
          fluid
          label="File Chosen: "
          placeholder="Use the above bar to browse your file system"
          readOnly
          value={file.name}
        />
      </Form.Field>
    </>
  );
};

export default UploadButton;
