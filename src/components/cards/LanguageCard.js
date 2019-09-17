import React from "react";
import { Button, Icon } from "semantic-ui-react";
import {Row, CardBox, CardLabel} from '../styled-components/components'
import Copy from "../../utils/copy";

const {
  labels: { deleteLanguage }
} = Copy;

const style = {
  header: {
    fontSize: "1.25em",
    fontWeight: 600
  }
};
const LanguageCard = ({ language, deleteItem }) => {
  
  function handleOnClick(e) {
    if (deleteItem) {
      deleteItem(e.currentTarget.id);
    }
  }
  return (
    <CardBox>
      <Row>
        <div>
          <CardLabel>{language}</CardLabel>
        </div>
        <div>
            <Button
              id={language}
              animated="vertical"
              color="red"
              size='tiny'
              onClick={language => handleOnClick(language)}
            >
              <Button.Content hidden>Delete</Button.Content>
              <Button.Content visible>
                <Icon name="delete" />
              </Button.Content>
            </Button>
          </div>
      </Row>
    </CardBox>
  );
};

export default LanguageCard;
