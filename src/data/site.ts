// -----------------------------------------------------------------------------
// Central site data. Edit THIS file to update most of your portfolio content.
// Projects live as markdown files in src/content/projects/.
// -----------------------------------------------------------------------------

export const site = {
  name: 'Kai Ler Mai',
  role: 'Computer Science @ NUS · Incoming SWE Intern @ TikTok',
  tagline:
    'Year 3 Computer Science undergraduate at NUS. I build software, compete in hackathons & CTFs, and ship things I care about.',
  email: '', // add if you want a mailto link
  socials: [
    { label: 'GitHub', url: 'https://github.com/kailermai' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kai-ler-mai/' },
  ],
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  points?: string[];
};

export const experience: Experience[] = [
  {
    role: 'Software Engineer Intern (Dev Infra)',
    org: 'TikTok',
    period: 'January 2026 – December 2026',
  },
  {
    role: 'Sea Soldier',
    org: 'Republic of Singapore Navy — National Service',
    period: '2022 – 2024',
    points: ['Featured in Military Police & Security Trooper Recognition Day'],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  points?: { text: string; url?: string }[];
};

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Computing in Computer Science',
    school: 'National University of Singapore',
    period: '2024 – 2028',
    points: [
      { text: 'Matriculated 2024, expected graduation 2028' },
      {
        text: "AY2024/2025 Semester 2 Dean's List",
        url: 'https://credentials.nus.edu.sg/8141a21a-58fa-4ec0-9677-2e770185c5f6#acc.FQdLB7w0',
      },
      {
        text: 'CS2103/T Software Engineering — Top 5% scorer (AY2025/2026 Sem 1)',
      },
      {
        text: 'CS2102 Database Systems — Certificate of Outstanding Performance (AY2025/2026 Sem 2)',
      },
    ],
  },
  {
    degree: "GCE 'A' Levels",
    school: 'River Valley High School',
    period: '2020 – 2021',
    points: [
      {
        text: 'Distinctions in H2 Chemistry, Physics, Economics, Mathematics, H1 Chinese; Pass in H3 Physics',
      },
      { text: 'RV Academic Excellence Award 2022' },
      { text: 'Bronze Award, Singapore Physics League 2021' },
      { text: 'School Colours Award 2021' },
      { text: 'CCA: Cross Country' },
    ],
  },
  {
    degree: "GCE 'O' Levels",
    school: 'Presbyterian High School',
    period: '2016 – 2019',
    points: [
      { text: 'Sir Ong Siang Song Excellence in Uniformed Group Merit Award — NPCC' },
      { text: 'EAGLES Award 2019 · Edusave Character Award 2019' },
      { text: 'Best Unit Cadet by NPCC HQ 2019' },
      { text: 'CCA: National Police Cadet Corps' },
    ],
  },
];

// Modules grouped by semester
export const modules: { semester: string; mods: string[] }[] = [
  {
    semester: 'Y1S1 (AY24/25, Sem 1)',
    mods: [
      'CS1101S Programming Methodology',
      'CS1231S Discrete Structures',
      'IS1108 Digital Ethics and Data Privacy',
      'MA1522 Linear Algebra for Computing',
      'GEA1000 Quantitative Reasoning with Data',
      'CFG1003 Financial Wellbeing — Introduction',
      'CFG1004 Financial Wellbeing — Art and Science of Investing',
    ],
  },
  {
    semester: 'Y1S2 (AY24/25, Sem 2)',
    mods: [
      'CS2030S Programming Methodology II',
      'CS2040S Data Structures and Algorithms',
      'MA1521 Calculus for Computing',
      'ES2660 Communicating in the Information Age',
      'HSI1000 How Science Works, Why Science Works',
      'LSM1303 Animal Behaviour',
      'CFG1002 Career Catalyst',
    ],
  },
  {
    semester: 'Y1 Special Term',
    mods: [
      'CP2106 Independent Software Development Project (Orbital)',
      'Technical Interview Preparation — Summer 2025',
    ],
  },
  {
    semester: 'Y2S1 (AY25/26, Sem 1)',
    mods: [
      'CS2100 Computer Organisation',
      'CS2101 Effective Communication for Computing Professionals',
      'CS2103T Software Engineering',
      'CS2105 Introduction to Computer Networks',
      'GESS1025 Singapore: Imagining the Next 50 Years',
    ],
  },
  {
    semester: 'Y2S2 (AY25/26, Sem 2)',
    mods: [
      'CP3880 Advanced Technology Attachment Programme',
      'IS2218 Digital Platforms for Business',
      'CS2102 Database Systems',
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  url?: string;
  credentialId?: string;
};

export const certifications: Certification[] = [
  {
    name: 'GitHub Foundations',
    issuer: 'GitHub / Microsoft',
    date: 'July 2025',
    url: 'https://learn.microsoft.com/en-us/users/kailermai/credentials/97E1786F656083ED',
    credentialId: '97E1786F656083ED',
  },
  {
    name: 'Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: 'June 2024',
    url: 'https://learn.microsoft.com/en-us/users/kailermai/credentials/8c0187043f68a285',
    credentialId: '8C0187043F68A285',
  },
  {
    name: 'AWS Getting Started with Compute',
    issuer: 'AWS Educate',
    date: 'February 2024',
    url: 'https://www.credly.com/badges/f05ba33f-7507-4857-a2ad-eaf2bf78b5c2/linked_in_profile',
  },
  {
    name: 'AWS Educate Introduction to Cloud 101',
    issuer: 'AWS Educate',
    date: 'January 2024',
    url: 'https://www.credly.com/badges/e45e21ea-dda9-4a81-9b0a-dcf390bc3b53/linked_in_profile',
  },
  {
    name: 'Creating a Tower Defence Game in Unity',
    issuer: 'Zenva Academy',
    date: 'June 2024',
    credentialId: '126744738',
  },
  {
    name: 'Develop a City-Building Game with Unity',
    issuer: 'Zenva Academy',
    date: 'March 2024',
    credentialId: '119790232',
  },
  {
    name: 'Craft a 2D Idle Clicker Game',
    issuer: 'Zenva Academy',
    date: 'March 2024',
    credentialId: '119404948',
  },
];

export type Activity = {
  name: string;
  date: string;
  note?: string;
  links?: { label: string; url: string }[];
};

export const activities: Activity[] = [
  {
    name: 'DSTA BrainHack TIL-AI 2026',
    date: 'June 2026',
    note: 'Grand Finalist — Top 6 of 68 teams (Advanced Track)',
  },
  {
    name: 'Citadel Terminal Spring 2026 (APAC)',
    date: 'April 2026',
    note: '13th place',
  },
  {
    name: 'Hack&Roll 2026',
    date: 'January 2026',
    links: [{ label: 'Devpost', url: 'https://devpost.com/software/roomatic' }],
  },
  { name: 'PSA CodeSprint 2025', date: 'October 2025' },
  { name: 'GovTech Singapore AI CTF 2025', date: 'October 2025' },
  {
    name: 'TikTok TechJam 2025',
    date: 'August 2025',
    links: [
      { label: 'GitHub', url: 'https://github.com/kailermai/censor-it' },
      { label: 'Devpost', url: 'https://devpost.com/software/censor-it' },
    ],
  },
  { name: 'NUS Greyhat Welcome CTF 2025', date: 'August 2025' },
  {
    name: 'NUS LifeHack 2025',
    date: 'June 2025',
    links: [
      { label: 'GitHub', url: 'https://github.com/kailermai/lifehack-bambistic' },
      { label: 'Devpost', url: 'https://devpost.com/software/healthbank' },
    ],
  },
  {
    name: 'Grey Cat the Flag 2025 Qualifiers',
    date: 'May 2025',
    note: '110th of 700+ teams',
  },
  { name: 'DSTA BrainHack CDDC 2025', date: 'May 2025' },
  {
    name: 'NUS Hack&Roll 2025',
    date: 'January 2025',
    links: [
      { label: 'GitHub', url: 'https://github.com/kailermai/ChaosClock-hacknroll' },
      { label: 'Devpost', url: 'https://devpost.com/software/chaos-clock' },
    ],
  },
  { name: 'DSTA BrainHack TIL-AI and CDDC 2024', date: 'May 2024' },
  {
    name: 'The Odin Project Foundations Course',
    date: 'Nov 2023 – Feb 2024',
  },
  { name: 'GTx CS1301 Computing in Python (Georgia Tech, edX)', date: 'Feb – May 2022' },
  { name: 'DSTA BrainHack CODE_EXP Hackathon 2021', date: 'June 2021' },
];
