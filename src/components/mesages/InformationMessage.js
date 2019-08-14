import React from "react";
import { Message } from "semantic-ui-react";

const InformationMessage = ({ message, title }) => (
	<Message>
		<Message.Header>{title}</Message.Header>
		<p>{message}</p>
	</Message>
);

export default InformationMessage;
