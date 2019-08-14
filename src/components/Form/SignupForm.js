import React, {useState} from 'react'
import { Input, Form, Select} from 'semantic-ui-react'
import 'react-dates/initialize'
import ContactDetails from './ContactDetails'
import ExperienceDetails from './ExperienceDetails';
import LanguageDetails from './LanguageDetails'
import Copy from '../../utils/copy'

import "react-datepicker/dist/react-datepicker.css";


const {
  formHeaders:{personalInfo}, 
  labels:{contactDetails, fullName},
  options:{locationOptions, referralOptions}

} = Copy

  const style = {
    h3: {
      marginTop: '2em',
      fontSize: '1em',
      padding: '2em 0em',
    },
    last: {
      marginBottom: '300px',
    },
  }

  const SignupForm = () => {

    function handleOnBlur(e){

    }

    function handleOnSelect(){

    }

    function handleOnSubmit(e){
      e.preventDefault()
    }

    return (
            <form className="ui form" onSubmit={handleOnSubmit}>
            <ContactDetails onBlur={handleOnBlur} />
            <ExperienceDetails onSelect={handleOnSelect} />
            <LanguageDetails onSelect={handleOnSelect} />
            <Form.Button>Submit</Form.Button>
        
         </form>
    )
  }

  export default SignupForm