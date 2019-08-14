import React from "react";
import { Button, Card, Icon } from "semantic-ui-react";
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
    <Card.Content>
      <Card.Header style={style.header}>{language}</Card.Header>
      <Card.Content extra>
        <div className="ui button">
          <Button
            id={language}
            animated="vertical"
            color="red"
            onClick={language => handleOnClick(language)}
          >
            <Button.Content hidden>Delete</Button.Content>
            <Button.Content visible>
              <Icon name="delete" />
            </Button.Content>
          </Button>
        </div>
      </Card.Content>
    </Card.Content>
  );
};

export default LanguageCard;
