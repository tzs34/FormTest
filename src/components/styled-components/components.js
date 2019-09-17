import styled from 'styled-components'


export const FormContainer = styled.div`
    margin-top: 20px;
    padding: 10px;
`
export const FormSubHeader = styled.h3`
    width: calc(100% - 200);
    text-align: center;
    padding: 8px;
    border-bottom: 1px solid  rgb(63, 81, 181);
`
export const FormHeader = styled.h2`
    text-align: center;
    padding: 8px;
`

export const Row = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    width: 100%;
`

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

    @media only screen and (max-width: 768px)}  {
        margin: 0.25em;
        flex-direction: column;
    }


`