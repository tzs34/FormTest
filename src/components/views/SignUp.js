import React, { useRef } from "react";
import { Header, Sticky, Container } from "semantic-ui-react";
import { CompanyName } from '../styled-components/components'
import SignupForm from "../Form/SignupForm";
import Copy from "../../utils/copy";

const {
  headers: { companyHeader }
} = Copy;

const style = {
  h3: {
    fontSize: "0.6em",
    lineHeight: "1.7em",
    padding: "1em 0.5em",
    color: "#ffffff",
    backgroundColor: "#3f51b5"
  },
  containerStyle: {
    marginTop: "40px"
  },
  progress: {
    margin: "10px"
  }
};

const Signup = ({ navigate }) => {
  const headerRef = useRef(null);

  function onSubmitHandler(e) {
    e.preventDefault();
    navigate("/signup-details");
  }

  return (
    <>
      <Sticky ref={headerRef}>
        <CompanyName>
          {companyHeader}
        </CompanyName>
      </Sticky>
      <Container style={style.containerStyle}>
        <SignupForm onSubmit={onSubmitHandler} />
      </Container>
    </>
  );
};

export default Signup;
