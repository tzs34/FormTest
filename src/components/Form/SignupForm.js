import React from "react";
import { Header, Form } from "semantic-ui-react";
import "react-dates/initialize";
import ContactDetails from "./ContactDetails";
import ExperienceDetails from "./ExperienceDetails";
import LanguageDetails from "./LanguageDetails";
import UploadButton from "../buttons/UploadButton";

import "react-datepicker/dist/react-datepicker.css";

const style = {
  h3: {
    marginTop: "2em",
    fontSize: "1em",
    padding: "2em 0em"
  },
  last: {
    marginBottom: "300px"
  }
};

const SignupForm = ({ onSubmit }) => (
  <>
    <Header as="h3" textAlign="center" style={style.h3}>
      {"Sign up with F-LEX"}
    </Header>
    <form className="ui form" onSubmit={onSubmit}>
      <ContactDetails />
      <ExperienceDetails />
      <LanguageDetails />
      <UploadButton />
      <Form.Button>Submit Your Details</Form.Button>
    </form>
  </>
);

export default SignupForm;
