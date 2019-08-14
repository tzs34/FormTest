import React, { useState, useContext } from "react";
import { Header, Form } from "semantic-ui-react";
import "react-dates/initialize";
import { FormContext } from "../../context/FormContextProvider";
import ContactDetails from "./ContactDetails";
import ExperienceDetails from "./ExperienceDetails";
import LanguageDetails from "./LanguageDetails";
import UploadButton from "../buttons/UploadButton";
import Copy from "../../utils/copy";
import { UPDATE_FORM_STATE } from "../../reducer";
import "react-datepicker/dist/react-datepicker.css";

const {
  formHeaders: { personalInfo },
  labels: { contactDetails, fullName },
  options: { locationOptions, referralOptions }
} = Copy;

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

const SignupForm = () => {
  const context = useContext(FormContext);

  function handleOnBlur(payload) {
    context.dispatch({
      type: UPDATE_FORM_STATE,
      payload
    });
  }

  function handleOnSelect() {}

  function handleOnSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <Header as="h3" textAlign="center" style={style.h3}>
          {'Sign up with F-LEX'}
      </Header>
      <form className="ui form" onSubmit={handleOnSubmit}>
        <ContactDetails onBlur={handleOnBlur} />
        <ExperienceDetails onSelect={handleOnSelect} />
        <LanguageDetails onSelect={handleOnSelect} />
        <UploadButton />
        <Form.Button>Submit Your Details</Form.Button>
      </form>
    </>
  );
};

export default SignupForm;
