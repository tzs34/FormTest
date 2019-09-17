import React, { useContext, useState } from "react";
import { Form, Select } from "semantic-ui-react";
import { FormSubHeader, Row, WrapRow } from '../styled-components/components';
import { FormContext } from "../../context/FormContextProvider";
import LanguageCard from "../cards/LanguageCard";
import Copy from "../../utils/copy";

const {
  options: { languageOptions }
} = Copy;

const LanguageSelection = () => {
  let [languages, setLanguages] = useState([]);
  const context = useContext(FormContext);

  function handleOnChange(e, { value, id }) {
    languages = [...languages, value];
    context.dispatch({ languages });
    setLanguages(languages);
  }
  function renderLanguageCards(list) {
    return list.map((language, index) => {
      return (
        <LanguageCard
          key={`${language}${index}`}
          language={language}
          deleteItem={deleteLanguage}
        />
      );
    });
  }

  function deleteLanguage(lang) {
    let languageCollection = languages.filter(language => language !== lang);
    setLanguages(languageCollection);
  }

  return (
    <>
      <FormSubHeader>{"List the languages you know"}</FormSubHeader >
      {languages.length > 0 && 
        <WrapRow>{
          renderLanguageCards(languages)
        }
        </WrapRow>}
      <Row>
        <Form.Field
          id="language"
          control={Select}
          search={true}
          label="Select a language"
          options={languageOptions}
          placeholder="Language"
          onChange={handleOnChange}
        />
      </Row>
    </>
  );
};

export default LanguageSelection;
