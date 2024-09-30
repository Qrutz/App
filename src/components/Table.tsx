import React from 'react'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import SprintCell from './SprintCell'

// Mock project data
const defaultData: Project[] = [
    {
        projectId: '12345',
        title: 'AI-Powered Chatbot',
        companyName: 'Google',
        companyLogo: '/logos/google-logo.png',
        projectType: 'Team Project',
        description: 'Create an AI-powered chatbot for customer service.',
        skillsRequired: ['JavaScript', 'Machine Learning', 'NLP'],
        rolesNeeded: {
            designers: [{ role: 'Lead Designer', status: 'open' }],
            webDevelopers: [{ role: 'Frontend Developer', status: 'filled' }, { role: 'Backend Developer', status: 'open' }],
        },
        startDate: '2024-01-01',
        endDate: '2024-03-30',
        sprintLength: '2 weeks',
        sprintCount: 6,
        milestones: [
            { milestone: 'Initial Design', dueDate: '2024-01-15' },
            { milestone: 'Backend Integration', dueDate: '2024-02-01' },
        ],
        paymentStructure: {
            type: 'Sprint-based',
            totalBudget: 5000,
            paymentPerSprint: 1000,
            paymentStatus: 'In Progress',
        },
        teamInfo: {
            teamSize: 5,
            teamMembers: ['John Doe', 'Jane Smith', 'Sarah Connor'],
            progress: 50,
        },
        status: 'In Progress',
        lastUpdated: '2024-02-01',
        currentSprint: 'Sprint 2 of 6',
        upcomingMilestones: ['Backend Integration (due 2024-02-01)'],
        files: [{ name: 'Design Mockup', url: '/files/design.png' }],
        discussion: [
            { comment: 'Initial designs are complete', author: 'John Doe', date: '2024-01-20' },
        ],
    },
    {
        projectId: '67890',
        title: 'E-commerce Platform',
        companyName: 'Amazon',
        companyLogo: '/logos/amazon-logo.png',
        projectType: 'Team Project',
        description: 'Build a scalable e-commerce platform.',
        skillsRequired: ['React', 'Node.js', 'AWS'],
        rolesNeeded: {
            designers: [{ role: 'UI/UX Designer', status: 'open' }],
            webDevelopers: [{ role: 'Frontend Developer', status: 'open' }, { role: 'Backend Developer', status: 'filled' }],
        },
        startDate: '2024-02-01',
        endDate: '2024-04-30',
        sprintLength: '3 weeks',
        sprintCount: 5,
        milestones: [
            { milestone: 'Frontend MVP', dueDate: '2024-02-28' },
            { milestone: 'Backend Deployment', dueDate: '2024-03-15' },
        ],
        paymentStructure: {
            type: 'Milestone-based',
            totalBudget: 8000,
            paymentPerMilestone: 2000,
            paymentStatus: 'Pending',
        },
        teamInfo: {
            teamSize: 4,
            teamMembers: ['Alice', 'Bob'],
            progress: 30,
        },
        status: 'In Progress',
        lastUpdated: '2024-02-05',
        currentSprint: 'Sprint 1 of 5',
        upcomingMilestones: ['Frontend MVP (due 2024-02-28)'],
        files: [{ name: 'Wireframe', url: '/files/wireframe.pdf' }],
        discussion: [
            { comment: 'Working on frontend layout', author: 'Alice', date: '2024-02-03' },
        ],
    },
];

// Setting up the columns for the table
const columnHelper = createColumnHelper<Project>()

const columns = [
    columnHelper.accessor('title', {
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.companyName, {
        id: 'companyName',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Company Name</span>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor('status', {
        header: 'Status',
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('currentSprint', {
        header: 'Current Sprint',
        cell: ({ cell, row }) => {
            return <SprintCell cell={cell} row={row} />
        },
        footer: info => info.column.id,
    }),
    columnHelper.accessor('teamInfo.progress', {
        header: 'Progress (%)',
        cell: info => `${info.getValue()}%`,
        footer: info => info.column.id,
    }),
]

export default function Table() {
    const [data, _setData] = React.useState(() => [...defaultData])
    const rerender = React.useReducer(() => ({}), {})[1]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="p-2">
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )
}
