// The Role type
type Role = {
    role: string;
    status: "open" | "filled";
};

// The PaymentStructure type
type PaymentStructure = {
    type: "Sprint-based" | "Milestone-based";
    totalBudget: number;
    paymentPerSprint?: number;
    paymentPerMilestone?: number;
    paymentStatus: "Pending" | "Completed" | "In Progress";
};

// The Milestone type
type Milestone = {
    milestone: string;
    dueDate: string;
};

// The TeamInfo type
type TeamInfo = {
    teamSize: number;
    teamMembers: string[];
    progress: number;
};

// The ProjectFile type
type ProjectFile = {
    name: string;
    url: string;
};

// The Comment type
type Comment = {
    comment: string;
    author: string;
    date: string;
};


type Project = {
    projectId: string;
    title: string;
    companyName: string;
    companyLogo: string;
    projectType: "Solo Project" | "Team Project";
    description: string;
    skillsRequired: string[];
    rolesNeeded: {
        designers: Role[];
        webDevelopers: Role[];
    };
    startDate: string;
    endDate: string;
    sprintLength: string;
    sprintCount: number;
    milestones: Milestone[];
    paymentStructure: PaymentStructure;
    teamInfo: TeamInfo;
    status: "In Progress" | "Completed" | "Paused";
    lastUpdated: string;
    currentSprint: string;
    upcomingMilestones: string[];
    files: ProjectFile[];
    discussion: Comment[];
};