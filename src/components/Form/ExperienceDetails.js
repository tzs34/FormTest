import React, {useState, useEffect} from 'react'
import { Input, Form,  Transition } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import Copy from '../../utils/copy'

import "react-datepicker/dist/react-datepicker.css";

const {
    options:{qualificationOptions, workOptions, paralegalOptions},
    showFormElement:{showParaLegalQuestionAnswer},
} = Copy

const DatePickerContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:3px;
    color: rgba(0,0,0,.87);
    font-size: .92857143em;
    font-weight: 700;
`
const ExperienceDetails = ({onSelected}) => {

    const [qualification, setQualification] = useState(null)
    const [workType, setWorkType] = useState(null)
    const [paralegal, setParalegal] = useState(null)
    const [contractFirmStartDate, setContractFirmStartDate] = useState()

    useEffect(() => {
         if(onSelected){
             onSelected({qualification, workType, contractFirmStartDate})
         }
      }, [qualification, workType, contractFirmStartDate]);

    function renderRadioButtons(data, checkedValue, callback){
       return data.map(({label, value}, index) => {
            return (
                <Form.Radio
                key={`${value}${index}`}
                label={label}
                value={value}
                checked={value === checkedValue}
                onChange={(e, {value}) => { callback(value)}}
              />
            )
       }
      )
    }

    let showParalegalSection = qualification === showParaLegalQuestionAnswer

    return (
        <>
            <h4 className="ui dividing header">Your experience</h4>
               
            <div className="two fields">
               <Form.Group grouped={true}>
                 <label>Are you a qualified lawyer?</label>
                 {
                   renderRadioButtons(qualificationOptions, qualification, setQualification)
                 }
                </Form.Group>
        
               <Form.Group grouped={true}>
                 <label>What type of work are you looking for ?</label>
                 {
                   renderRadioButtons(workOptions, workType, setWorkType)
                 }
                </Form.Group>
            </div>
            {
                showParalegalSection &&
                <Transition visible={showParalegalSection} animation='scale' duration={500}>
                    <div className="field">
                    <Form.Group grouped={true}>
                        <label> If you are a paralegal, have you secured or completed a training contract ?</label>
                        {
                        renderRadioButtons(paralegalOptions, paralegal, setParalegal)
                        }
                        </Form.Group>
                    </div>
                </Transition>
            }
            <div className="two fields">
                    <Form.Field required>
                        <label>Training Contract Firm</label>
                        <Input placeholder="contract-firm" name="contractFirm"/>
                      </Form.Field>
                      <Form.Field required>
                        <DatePickerContainer>
                        <div> 
                            <label>Training Contract Start Date</label>
                        </div>
                        <div>
                            <DatePicker
                                onChange={(date) => setContractFirmStartDate(date)}
                                placeholderText="Select Start Date"
                                />
                        </div>
                        </DatePickerContainer>
                    </Form.Field>
                </div>

               
        </>
    )
    
}


export default ExperienceDetails

{/* <div className="field">                 
<div>
<DatePicker
  onChange={(date) => setDate(date)}
  placeholderText="Select a date between today and 5 days in the future"
/>
</div>

</div> */}