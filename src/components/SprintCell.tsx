import { Row, Cell } from '@tanstack/react-table';

interface IProps {
    cell: Cell<Project, string>;
    row: Row<Project>;
}

export default function SprintCell({ cell, row }: IProps) {
    return (
        <div><strong>{row.original.sprintCount}</strong> cool animation here</div>
    )
}
