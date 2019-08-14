import React from 'react'
import { Input, Form, Select} from 'semantic-ui-react'
import Copy from '../../utils/copy'

import "react-datepicker/dist/react-datepicker.css";

const {
  formHeaders:{personalInfo}, 
  labels:{contactDetails, fullName},
  options:{locationOptions, referralOptions}

} = Copy
const ContactDetails = ({onBlur}) => {

    function handleOnBlur(e, value){
        if(onBlur){
            onBlur(e, value)
        }
    }
    return (
        <>
        <h4 className="ui dividing header">{personalInfo}</h4>
         <div className="two fields">
                    <Form.Field required>
                        <label>First Name</label>
                        <Input placeholder="First Name" name="firstName" onBlur={handleOnBlur}/>
                      </Form.Field>
                      <Form.Field required>
                          <label>Surname</label>
                          <Input placeholder="Surname" name="surname"/>
                      </Form.Field>
                </div>
                  <div className="two fields">
                    <Form.Field required>
                      <label>Email</label>
                      <Input placeholder="Email" name="email" onBlur={handleOnBlur}/>
                    </Form.Field>
                    <Form.Field required>
                        <label>Phone Number</label>
                        <Input placeholder="Phone Number" name="phone"/>
                    </Form.Field>
                    </div>
                  <div className="two fields">
                  <Form.Field 
                    control={Select} 
                    search={true} 
                    label='Where are you based ?' 
                    options={locationOptions} 
                    placeholder='Location' 

                  />
                  <Form.Field
                    control={Select} 
                    search={true} 
                    label='How did you hear about F-LEX ?' 
                    options={referralOptions} 
                    placeholder='Referral' 
                    />
                  </div>
        </>
    )
}

export default ContactDetails