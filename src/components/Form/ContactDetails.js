import React from "react";
import { Input, Form, Select } from "semantic-ui-react";
import Copy from "../../utils/copy";

import "react-datepicker/dist/react-datepicker.css";

const {
  formHeaders: { personalInfo },
  options: { locationOptions, referralOptions }
} = Copy;

const ContactDetails = ({ onBlur, onSelect}) => {

  function handleOnBlur(e) {
    let { value, name, required} = e.currentTarget;
    console.log(` I am required ${required} and have value ${value} and id = ${name}`)
    if (onBlur) {
      onBlur({[name]: value, required});
    }
  }

  function handleOnSelect(e, {name, value}) {
    if (onSelect) {
      onSelect({[name]: value});
    }
  }

  return (
    <>
      <h4 className="ui dividing header">{personalInfo}</h4>
      <div className="two fields">
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
      </div>
      <div className="two fields">
        <Form.Field required>
          <label>Email</label>
          <Input 
          placeholder="Email" 
          name="email" 
          onBlur={handleOnBlur}
          required={true}/>
        </Form.Field>
        <Form.Field required>
          <label>Phone Number</label>
          <Input 
          placeholder="Phone Number" 
          name="phone"
          onBlur={handleOnBlur}
          required={true} />
        </Form.Field>
      </div>
      <div className="two fields">
        <Form.Field
          name='location'
          control={Select}
          search={true}
          label="Where are you based ?"
          options={locationOptions}
          placeholder="Location"
         onChange={handleOnSelect}
        />
        <Form.Field
          name='referral'
          control={Select}
          search={true}
          label="How did you hear about F-LEX ?"
          options={referralOptions}
          placeholder="Referral"
          onChange={handleOnSelect}
        />
      </div>
    </>
  );
};

export default ContactDetails;
