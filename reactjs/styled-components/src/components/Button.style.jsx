import styled from "styled-components";

export const Button = styled.button`
    background-color: ${prop => prop.backgroundColor ? prop.backgroundColor : 'hotpink'};
    color: lightgreen;
    font-size: ${({ theme }) => theme.sizes.s};
    border: none;
    cursor: pointer;

    &:hover {
        background-color: aliceblue;
    }
`;

export const Button2 = styled(Button)`
    color: red;
    background-color: black;
`

