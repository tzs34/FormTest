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

const buttonStyle = {"background-color": "rgb(63, 81, 181)", "color":"white", "padding": "1em 0.5em", "margin-bottom": "40px"};

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
      <FormHeader>
      {'Thats it ! Please send us your details'}
    </FormHeader>
    <Form.Field style={{"display": "flex", "justify-content":"center"}}>
      <Form.Button size='medium' style={buttonStyle}>Submit Your Details</Form.Button>
    </Form.Field>
    </form>
  </>
);

export default SignupForm;
