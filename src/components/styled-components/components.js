import styled from 'styled-components'


export const FormContainer = styled.div`
    margin-top: 20px;
    padding: 10px;
`;

export const FormSubHeader = styled.h3`
    width: calc(100% - 200);
    text-align: center;
    padding: 8px;
    border-bottom: 1px solid  rgb(63, 81, 181);
`;

export const FormHeader = styled.h2`
    text-align: center;
    padding: 8px;
`;

export const Row = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    width: 100%;
`;

export const WrapRow = styled.div`
  	margin: 0;
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
`;

export const DatePickerContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3px;
    color: rgba(0, 0, 0, 0.87);
    font-size: 0.92857143em;
    font-weight: 700;
`;

export const TwoFieldContainer = styled.div`
    display: flex;
    box-orient: horizontal;
    box-direction: normal;
    margin: 0 10em;
    justify-content: space-evenly;

    @media (max-width: 480px)   {
        margin: 0.25em;
        flex-direction: column;
    }
`;

export const CardBox = styled.div`
    box-shadow: 1px 3px #d4d4d5;
    padding: 0.5rem;
    width: 130px;
    margin: 1rem;
`;

export const CardLabel = styled.label`
    font-size: 1em;
    font-weight: bold;
    margin: 1em;
`;