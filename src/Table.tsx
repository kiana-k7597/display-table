import React from 'react';
import { StyledTable, StyledThead, StyledTh, StyledTr, StyledTd } from './Table.styles';


type TableProps = {
    columns: { title: string; dataIndex: string }[];
    data: { [key: string]: any }[];
};


const Table = ({ columns, data }: TableProps) => {
    return (
        <StyledTable>
            <StyledThead>
                <tr>
                    {columns.map(column => (
                        <StyledTh key={column.dataIndex}>{column.title}</StyledTh>
                    ))}
                </tr>
            </StyledThead>
            <tbody>
                {data.map((row, index) => (
                    <StyledTr key={index}>
                        {columns.map(column => (
                            <StyledTd key={column.dataIndex}>{row[column.dataIndex]}</StyledTd>
                        ))}
                    </StyledTr>
                ))}
            </tbody>
        </StyledTable>
    );
};


export default Table;
