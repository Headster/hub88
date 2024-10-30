import React from 'react';
import { TableContainer, TableWrapper } from './Table.styles';
import { Country, TableProps } from '../../types/types';

const Table: React.FC<TableProps> = ({ columns, data }) => {
    return (
        <TableWrapper>
            <TableContainer>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.accessor}>{column.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column) => (
                                <td key={column.accessor}>
                                    {row[column.accessor as keyof Country]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </TableContainer>
        </TableWrapper>
    );
};

export default Table;
