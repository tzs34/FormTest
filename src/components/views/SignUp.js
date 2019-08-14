import React, {useRef, useContext} from 'react'
import {Header, Sticky, Container,  Progress} from 'semantic-ui-react'
import {FormContext } from '../../context/FormContextProvider'
import SignupForm from '../Form/SignupForm'
import Copy from '../../utils/copy'

const{headers:{companyHeader}} = Copy

const style = {
    h3: {
      fontSize: '0.6em',
      lineHeight: '1.7em',
      padding: '1em 0.5em',
      color: '#ffffff',
      backgroundColor: '#3f51b5'
    },
    containerStyle:{
        marginTop: '40px'
    },
    progress:{
        margin: '10px'
    }
  }


const Signup = () => {

    const headerRef = useRef(null)
    const context = useContext(FormContext)

    function onSubmitHandler(){

    }

    return(
        <>
            <Sticky ref={headerRef}>
                <Header as='h3'  textAlign='left' style={style.h3} >{companyHeader}</Header>
                <Progress percent={50} indicating style={style.progress}>{'50% Complete'}</Progress>
            </Sticky>
            <Container style={style.containerStyle}>

                <SignupForm onSubmit={onSubmitHandler} />
            </Container>
        </>
    )
}

export default Signup