import React from "react";
import { Button, Icon } from "semantic-ui-react";
import {Row, CardBox, CardLabel, FadeIn} from '../styled-components/components'

const LanguageCard = ({ language, deleteItem }) => {
  
  function handleOnClick(e) {
    if (deleteItem) {
      deleteItem(e.currentTarget.id);
    }
  }
  return (
      <CardBox>
        <FadeIn>
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
      </FadeIn>
    </CardBox>
  );
};

export default LanguageCard;
