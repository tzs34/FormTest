import React, { useContext, useState } from "react";
import { Form, Select } from "semantic-ui-react";
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
      <h4 className="ui dividing header">{"List the languages you know"}</h4>
      {languages.length > 0 && renderLanguageCards(languages)}
      <div className="field">
        <Form.Field
          id="language"
          control={Select}
          search={true}
          label="Select a language"
          options={languageOptions}
          placeholder="Language"
          onChange={handleOnChange}
        />
      </div>
    </>
  );
};

export default LanguageSelection;
