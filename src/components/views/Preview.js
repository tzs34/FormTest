import React, { useContext, useState } from "react";
import { Document, Page } from "react-pdf";
import { Header, Container } from "semantic-ui-react";
import { FormContext } from "../../context/FormContextProvider";

const style = {
	h3: {
		fontSize: "0.6em",
		lineHeight: "1.7em",
		padding: "1em 0.5em",
		color: "#ffffff",
		backgroundColor: "#3f51b5"
	},
	h3sub: {
		fontSize: "1em",
		lineHeight: "1.7em",
		padding: "1em 0.5em",
		color: "#000000",
		backgroundColor: "#ffffff"
	}
};

const Preview = () => {
	const context = useContext(FormContext);
	const [pdf, setPDFPages] = useState({ numPages: null, pageNumber: 1 });

	const {
		state: { publicUrl }
	} = context;
	console.log(publicUrl);
	return (
		<>
			<Header as="h3" textAlign="left" style={style.h3}>
				F-LEX
			</Header>
			<Container>
				<Header as="h3" textAlign="center" style={style.h3sub}>
					{"View Signup PDF"}
				</Header>
				<div>
					<Document
						file={publicUrl}
						onLoadSuccess={({ numPages }) => setPDFPages(numPages)}
					>
						<Page pageNumber={pdf.pageNumber} />
					</Document>
					<p>
						Page {pdf.pageNumber} of {pdf.numPages}
					</p>
				</div>
			</Container>
		</>
	);
};

export default Preview;
