import React, { useContext, useState, useEffect } from "react";
import { Input, Form, Transition } from "semantic-ui-react";
import { FormContext } from "../../context/FormContextProvider";
import DatePicker from "react-datepicker";
import { FormSubHeader, DatePickerContainer, TwoFieldContainer } from '../styled-components/components'
import Copy from "../../utils/copy";

import "react-datepicker/dist/react-datepicker.css";

const {
  options: { qualificationOptions, workOptions, paralegalOptions },
  showFormElement: { showParaLegalQuestionAnswer }
} = Copy;


const ExperienceDetails = () => {
  const [qualification, setQualification] = useState(null);
  const [workType, setWorkType] = useState(null);
  const [paralegal, setParalegal] = useState(null);
  const [contractFirmStartDate, setContractFirmStartDate] = useState();
  const context = useContext(FormContext);

  useEffect(() => {
    context.dispatch({ qualification, workType, contractFirmStartDate });
  }, [qualification, workType, contractFirmStartDate]);

  function renderRadioButtons(data, checkedValue, callback) {
    return data.map(({ label, value }, index) => {
      return (
        <Form.Radio
          key={`${value}${index}`}
          label={label}
          value={value}
          checked={value === checkedValue}
          onChange={(e, { value }) => {
            callback(value);
          }}
        />
      );
    });
  }

  let showParalegalSection = qualification === showParaLegalQuestionAnswer;

  return (
    <>
      <FormSubHeader>Your experience</FormSubHeader>
      <TwoFieldContainer>
        <Form.Group grouped={true}>
          <label>Are you a qualified lawyer?</label>
          {renderRadioButtons(
            qualificationOptions,
            qualification,
            setQualification
          )}
        </Form.Group>

        <Form.Group grouped={true}>
          <label>What type of work are you looking for ?</label>
          {renderRadioButtons(workOptions, workType, setWorkType)}
        </Form.Group>
      </TwoFieldContainer>
      {showParalegalSection && (
        <Transition
          visible={showParalegalSection}
          animation="scale"
          duration={500}
        >
          <div className="field">
            <Form.Group grouped={true}>
              <label>
                {" "}
                If you are a paralegal, have you secured or completed a training
                contract ?
              </label>
              {renderRadioButtons(paralegalOptions, paralegal, setParalegal)}
            </Form.Group>
          </div>
        </Transition>
      )}
      <TwoFieldContainer>
        <Form.Field required>
          <label>Training Contract Firm</label>
          <Input placeholder="contract-firm" name="contractFirm" />
        </Form.Field>
        <Form.Field required>
          <DatePickerContainer>
            <div>
              <label>Training Contract Start Date</label>
            </div>
            <div>
              <DatePicker
                onChange={date => setContractFirmStartDate(date)}
                placeholderText="Select Start Date"
              />
            </div>
          </DatePickerContainer>
        </Form.Field>
      </TwoFieldContainer>
    </>
  );
};

export default ExperienceDetails;

{
  /* <div className="field">                 
<div>
<DatePicker
  onChange={(date) => setDate(date)}
  placeholderText="Select a date between today and 5 days in the future"
/>
</div>

</div> */
}
