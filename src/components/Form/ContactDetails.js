import React, { useContext } from "react";
import { Input, Form, Select } from "semantic-ui-react";
import { FormSubHeader, TwoFieldContainer} from '../styled-components/components'
import { FormContext } from "../../context/FormContextProvider";
import Copy from "../../utils/copy";

import "react-datepicker/dist/react-datepicker.css";

const {
  formHeaders: { personalInfo },
  options: { locationOptions, referralOptions }
} = Copy;

const ContactDetails = () => {
  const context = useContext(FormContext);

  function handleOnBlur(e) {
    let { value, name, required } = e.currentTarget;
    context.dispatch({ [name]: value, required });
  }

  function handleOnSelect(e, { name, value }) {
    context.dispatch({ [name]: value });
  }

  return (
    <>
      <FormSubHeader >{personalInfo}</FormSubHeader>
      <TwoFieldContainer>
        <Form.Field required>
          <label>First Name</label>
          <Input
            placeholder="First Name"
            name="firstName"
            onBlur={handleOnBlur}
            required={true}
          />
        </Form.Field>
        <Form.Field required>
          <label>Surname</label>
          <Input
            placeholder="Surname"
            name="surname"
            onBlur={handleOnBlur}
            required={true}
          />
        </Form.Field>
      </TwoFieldContainer>
      <TwoFieldContainer>
        <Form.Field required>
          <label>Email</label>
          <Input
            placeholder="Email"
            name="email"
            onBlur={handleOnBlur}
            required={true}
          />
        </Form.Field>
        <Form.Field required>
          <label>Phone Number</label>
          <Input
            placeholder="Phone Number"
            name="phone"
            onBlur={handleOnBlur}
            required={true}
          />
        </Form.Field>
      </TwoFieldContainer>
      <TwoFieldContainer>
        <Form.Field
          name="location"
          control={Select}
          search={true}
          label="Where are you based ?"
          options={locationOptions}
          placeholder="Location"
          onChange={handleOnSelect}
        />
        <Form.Field
          name="referral"
          control={Select}
          search={true}
          label="How did you hear about Company-X ?"
          options={referralOptions}
          placeholder="Referral"
          onChange={handleOnSelect}
        />
      </TwoFieldContainer>
    </>
  );
};

export default ContactDetails;
