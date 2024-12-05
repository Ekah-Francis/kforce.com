import { customAlphabet } from "nanoid";

// Define an alphabet with numbers, letters, and hyphens
const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-";
const generateID = customAlphabet(alphabet, 10); // 10-character ID

const jobs = [
  {
    id: generateID(), // Generate a random ID for this job
    title: "Software Developer",
    dateAdded: "2024-12-01",
    description: `A Kforce client is seeking to hire a Controller in Melville, New York (NY). Summary: The Controller will be reporting to the VP of Operations; With responsibilities including data analysis, preparation of financial statements, budget reports, identifying discrepancies, and assisting in establishing sound internal controls. Other duties also include managing payroll, accounts payable/receivable, reconciling accounts, and assisting with financial audits`,
    type: "Permanent",
    remote: "Full",
    areaOfExpertise: "Technology",
    industry: "Computer Hardware",
    jobSkills: ["Software Development", "Agile", "Cloud"],
    datePosted: "All Jobs",
    zip: "85001",
    city: "Tempe, AZ",
    compensation: "$140,000 - $200,000 Annually",
    responsibilities: [
      "Plan, develop, implement the company's fiscal functions including cash flow; Profitability analysis; Capital; Credit and collection policies, and compliance with regulatory, tax, and contractual obligations",
      "Plan, coordinate and lead weekly, monthly, and quarterly financial reporting and analytics, communicating opportunities, risks, and performance issues to leadership",
      "Review contracts for clients, contractors and sub-contractors and monitor compliance with all provisions of the contract",
      "Establish internal work processes for financial department (including accounting and billing) and monitor their progress",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or a related field.",
      "5+ years of experience in software development.",
      "Excellent problem-solving skills.",
    ],
    additionalInfo: [
      "Competitive benefits package",
      "Opportunities for growth",
      "Remote work flexibility",
      "Inclusive work environment",
    ],
  },
  {
    id: generateID(), // Generate a random ID for this job
    title: "Project Manager",
    dateAdded: "2024-11-30",
    description: "Manage multiple projects across different teams.",
    type: "Contract",
    remote: "Partial",
    areaOfExpertise: "Finance and Accounting",
    industry: "Business Services - Other",
    jobSkills: ["Project Management", "SQL", "Training"],
    datePosted: "3 Days",
    zip: "85002",
    city: "Phoenix, AZ",
    compensation: "$100,000 - $150,000 Annually",
    responsibilities: [
      "Define project scope, goals, and deliverables.",
      "Communicate with stakeholders to align expectations.",
      "Monitor progress and report updates.",
    ],
    requirements: [
      "PMP certification or equivalent.",
      "3+ years of experience in project management.",
      "Strong leadership and communication skills.",
    ],
    additionalInfo: [
      "Contract position with potential for extension",
      "Partial remote work available",
      "Training provided",
    ],
  },
];

export default jobs;
