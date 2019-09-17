import React from "react";
import "react-dates/initialize";
import { Form } from "semantic-ui-react";
import { FormHeader } from '../styled-components/components'
import ContactDetails from "./ContactDetails";
import ExperienceDetails from "./ExperienceDetails";
import LanguageDetails from "./LanguageDetails";
import UploadButton from "../buttons/UploadButton";
import Copy from '../../utils/copy'
import "react-datepicker/dist/react-datepicker.css";


const {headers:{signupHeader}} = Copy

const SignupForm = ({ onSubmit }) => (
  <>
      <FormHeader>
      {signupHeader}
    </FormHeader>
    <form className="ui form" onSubmit={onSubmit}>
      <ContactDetails />
      <ExperienceDetails />
      <LanguageDetails />
      <UploadButton />
      <Form.Button size='medium'>Submit Your Details</Form.Button>
    </form>
  </>
);

export default SignupForm;
