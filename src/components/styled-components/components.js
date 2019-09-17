import styled from 'styled-components'

export const FormSubHeader = styled.h3`
    text-align: center;
    padding: 8px;
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
