import styled from "styled-components";

export const Input = styled.input`
    padding: 7px;
    border-radius: 6px;
    font-size: 16px;
    background: #fbfbfb;
    border: 2px solid transparent;
    height: 24px;
    box-shadow: 0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0 rgb(0 0 0 / 5%);
    margin-left: 20px;
    :focus{
        border: 2px solid #000;
        border-radius: 4px;
    }        
`;