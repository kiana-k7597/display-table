import styled from 'styled-components';

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ddd; // Example styling
`;

export const StyledThead = styled.thead`
    background-color: #f5f5f5; // Example styling
`;

export const StyledTh = styled.th`
    padding: 10px;
    border-bottom: 1px solid #ddd; // Example styling
`;

export const StyledTr = styled.tr`
    &:nth-child(even) {
        background-color: #f2f2f2; // Example styling for zebra striping
    }
`;

export const StyledTd = styled.td`
    padding: 10px;
    border-bottom: 1px solid #ddd; // Example styling
`;
