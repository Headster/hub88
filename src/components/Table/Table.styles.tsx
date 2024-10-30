import styled from "styled-components";

export const TableWrapper = styled.div`
    max-height: calc(100vh - 200px);
    overflow-y: auto;
    width: 100%;
`;

export const TableContainer = styled.table`
    border-collapse: collapse;
    border-radius: 10px;
    font-size: 15px;
    color: gray;
    line-height: 1.2;
    margin: 24px 0;
    width: 100%;

    td, th {
        padding: 8px;
    }

    tr {
        background-color: #fff;
    }
    
    tr:nth-child(even){
        background-color: #f2f2f2;
    }
    
    tr:hover {
        background-color: #ddd;
    }

    th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #000;
        color: white;
    }

`;