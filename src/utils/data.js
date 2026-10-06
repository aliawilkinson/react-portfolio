export function calculateYearDifference(startDateInput = 'October 1, 2015') {
  const startDate = new Date(startDateInput);
  const today = new Date();
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;

  const differenceInMilliseconds = today - startDate;
  const differenceInYears = differenceInMilliseconds / millisecondsPerYear;

  return differenceInYears.toFixed(1);
}

// Whole completed years, for display ("11", not "11.0")
export function calculateWholeYears(startDateInput) {
  return Math.floor(Number(calculateYearDifference(startDateInput)));
}


export const projectExperience = [
  {
    name: "Systems architecture",
    date_started: "November 1, 2018",
    bg: "#6D4B8A",
  },
  {
    name: "Release automation & CI/CD",
    date_started: "January 15, 2019",
    bg: "#8897B8",
  },
  {
    name: "Internal platforms & developer tools",
    date_started: "June 1, 2018",
    bg: "#C83C63",
  },
  {
    name: "Cloud & infrastructure as code",
    date_started: "March 1, 2016",
    bg: "#B8A295",
  },
  {
    name: "AI tooling & agents",
    date_started: "January 1, 2024",
    bg: "#3D725E",
  },
];

export const caseStudies = [
  {
    slug: "productFactory",
    imgSrc: "./infoposts/product-factory.svg",
    alt: "Product Factory: reusable architecture for taking product ideas from strategy to delivery",
    bg: "#4A315F",
  },
  {
    slug: "metadataDb",
    imgSrc: "./infoposts/metadata-db.svg",
    alt: "MetadataDB: a private control plane for product ownership, operations, and delivery evidence",
    bg: "#173D35",
  },
  {
    slug: "nomadtime-case-study",
    imgSrc: "/nomadtime/icon.png",
    alt: "NomadTime: making the world feel closer through visual time comparison",
    bg: "#174f48",
  },
  {
    slug: "solarBloomCommerce",
    imgSrc: "./house-of-solar-bloom.webp",
    alt: "House of Solar Bloom: luxury editorial commerce platform",
    bg: "#2C2633",
  },
  {
    slug: "agenticWorkflowApp",
    imgSrc: "./infoposts/agentic-workflow.png",
    alt: "Agentic Workflow App: mapping what runs in production from git and Jira",
    bg: "#6D4B8A",
  },
  {
    slug: "cognitoIdentityArchitecture",
    imgSrc: "./infoposts/cognito-identity.png",
    alt: "Cognito identity architecture: sign-in for 250K agents",
    bg: "#3D725E",
  },
  {
    slug: "almModernization",
    imgSrc: "./infoposts/alm-modernization.png",
    alt: "ALM Modernization: replacing legacy systems with event-driven AWS patterns",
    bg: "#C83C63",
  },
  {
    slug: "releaseofreleases",
    imgSrc: "./infoposts/ror.png",
    alt: "Release of Releases: release orchestration through automation",
    bg: "#8897B8",
  },
  {
    slug: "iacPipelineValidation",
    imgSrc: "./infoposts/iac-pipeline-test.png",
    alt: "IaC Pipeline Validation: who tests the testers",
    bg: "#B8A295",
  },
  {
    slug: "cmdletCreationTemplate",
    imgSrc: "./infoposts/cmdletautomation.png",
    alt: "PowerShell cmdlet templates and training for a DevOps team",
    bg: "#6D4B8A",
  },
  {
    slug: "amplifyReactMigApp",
    imgSrc: "./infoposts/mig-app.png",
    alt: "Transforming app migrations with Amplify React",
    bg: "#3D725E",
  },
];

export const whatIHelpWith = [
  `I work between development teams and platform engineering. I determine the architecture, make the case for it, and partner with DevOps and platform teams to deliver it. Developers ship independently and reliably.`,
  `I also built my own delivery platform. Product Factory generates each product with infrastructure as code, pipelines, release orchestration, and observability built in. MetadataDB is the control plane for ownership, deployments, and cost optimization, tracking 66 components across 12 products. Built with it: NomadTime, a visual world clock in beta for iPhone and iPad, and House of Solar Bloom, a production beauty storefront.`,
  `Delivered: identity for a portal serving ~250,000 agents. Release automation running 26 teams and 1,200+ components in a single run. Hedging systems migrated from on-prem to AWS. An AI tool that maps production from git history, Jira releases, and runbooks.`,
];

export const workExp = [
  {
    place: "Transamerica / WFG Digital",
    tenure: "April 2026 - Present",
    role: "Principal Engineer - Architecture",
    detail:
      `<ul>
        <li>Set architecture for WFG Digital and partner with DevOps and platform engineering to deliver it.</li>
        <li>Designed and built identity for the WFG Digital Portal (~250K external agents): Cognito with enterprise federation, IAM, and API Gateway, all in Terraform.</li>
        <li>Built an agentic app that maps production applications from git history, Jira releases, and runbooks.</li>
        <li>Built developer tooling adopted as team standards: CI/CD gates, branch protections, versioning, test suites, and authentication patterns.</li>
        <li>Python, Terraform, AWS (Cognito, API Gateway, IAM), React, Jira automation, agentic AI tooling.</li>
      </ul>`,
    dotColor: '#B8A295'
  },
  {
    place: "Transamerica / ALM",
    tenure: "June 2024 - April 2026",
    role: "Principal Engineer - ALM Modernization & Architecture",
    detail:
      `<ul>
        <li>Led modernization of ALM hedging systems from on-prem and EC2 to AWS Lambda, S3, and event-driven pipelines.</li>
        <li>Designed data pipelines for high-volume financial, market, and policy data serving risk, finance, and executive stakeholders.</li>
        <li>Replaced email-based reporting with a self-service data platform and built a web application POC to replace Windows Service systems.</li>
        <li>Created reusable Python API + React frameworks, standardizing internal application development across modeling teams.</li>
        <li>Introduced AI coding tools (Amazon Q, Kiro) and agentic workflows to ALM developers.</li>
        <li>Python, AWS (Lambda, S3, EMR), Terraform, FastAPI, React, Jenkins, AI/agentic tooling.</li>
      </ul>`,
    dotColor: '#8897B8'
  },
  {
    place: "Cube Software",
    tenure: "Sept 2023 - June 2024",
    role: "Senior Software Engineer - FP&A Platform",
    detail:
      `<ul>
        <li>Built APIs integrating third-party ETL systems for financial planning and analytics (FP&A) data.</li>
        <li>Developed backend and full-stack features for managing external data source connections.</li>
        <li>Led architecture discussions on platform structure.</li>
      </ul>`,
    dotColor: '#B8A295'
  },
  {
    place: "Source 70 Consulting",
    tenure: "June 2023 - Sept 2023",
    role: "DevSecOps Architect - AWS & Azure Government Cloud",
    detail:
      `<ul>
        <li>Built DevSecOps pipelines across AWS and Azure Government Cloud.</li>
        <li>Developed ETL pipelines on AWS GovCloud for utility data.</li>
        <li>Delivered infrastructure as code in Terraform, Bicep, ARM, and AWS CDK (Python).</li>
        <li>Co-presented a NASPI seminar on storing synchrophasor data in the cloud.</li>
      </ul>`,
    dotColor: '#C83C63'
  },
  {
    place: "Amazon Web Services (AWS)",
    tenure: "Nov 2022 - June 2023",
    role: "DevOps Architect - Professional Services",
    detail:
      `<ul>
        <li>Consulted for AWS customers on architecture, automation, security, and cost efficiency.</li>
        <li>Built an Amplify + React application that made service migrations faster and more reliable.</li>
        <li>Created a Cost Optimization Blueprint for customers.</li>
        <li>Modernized internal consultant training: containers, cost optimization, and secure web application patterns.</li>
      </ul>`,
    dotColor: '#6D4B8A'
  },
  {
    place: "loanDepot LLC",
    tenure: "Feb 2021 - Nov 2022",
    role: "Senior DevOps Engineer - Lead",
    detail:
      `<ul>
        <li>Automated the on-prem batch release for 26 teams and 1,200+ components, making releases 3 to 4 hours faster on average.</li>
        <li>Ran thousands of releases through Azure DevOps YAML pipelines across hundreds of projects.</li>
        <li>Built an enterprise Terraform module suite, then re-implemented it in Bicep.</li>
        <li>Owned the configuration database coordinating deployments across the org.</li>
        <li>Designed the DevOps technical interview process and created ~75% of internal training materials.</li>
        <li>On-call escalation point for releases and production issues.</li>
      </ul>`,
    dotColor: '#8897B8'
  },
  {
    place: "loanDepot LLC",
    tenure: "Jan 2020 - Feb 2021",
    role: "DevOps Engineer",
    detail:
      `<ul>
        <li>Built CI/CD pipelines for builds, releases, and environment promotion in Azure DevOps and PowerShell.</li>
        <li>Automated the on-prem batch release process.</li>
        <li>Built Terraform templates for Azure deployments, later adopted as the team standard.</li>
        <li>Promoted to Senior DevOps Engineer - Lead in Feb 2021.</li>
      </ul>`,
    dotColor: '#8897B8'
  },
  {
    place: "COFEBE Inc",
    tenure: "Nov 2018 - Dec 2019",
    role: "Software Engineer → Team Lead - Data Platform",
    detail:
      `<ul>
        <li>Promoted from engineer to team lead within the first year.</li>
        <li>Designed data pipelines and a data lake on AWS (Redshift, Athena, CodeDeploy, Luigi).</li>
        <li>Built QA test suites and ETL validation.</li>
        <li>Coordinated directly with clients on requirements and delivery.</li>
      </ul>`,
    dotColor: '#B8A295'
  },
  {
    place: "A Show For A Change",
    tenure: "Oct 2018 - Mar 2019",
    role: "Full Stack Developer",
    detail:
      `<ul>
        <li>Built a React front end, REST endpoints, and database on a LAMP stack, deployed on AWS.</li>
        <li>Ran Scrum ceremonies for a distributed team.</li>
      </ul>`,
    dotColor: '#C83C63'
  },
  {
    place: "Sunghost Industries",
    tenure: "Oct 2015 - Oct 2018",
    role: "Software Engineer - Web & Analytics",
    detail:
      `<ul>
        <li>Built websites, SEO systems, and GIS analysis tooling for small business clients.</li>
      </ul>`,
    dotColor: '#C83C63'
  },
];


export const comments = [
  {
    name: "Brian Carpio",
    post: "Sr. Leader Focused On Cloud Engineering & Cloud Native Application Architecture",
    comment:
      "As Alia's team lead, I was impressed by her passion for technology, learning, and collaboration. She demonstrated an exceptional level of dedication to her work and was always willing to go the extra mile to ensure that the team delivered high-quality work on time. What truly sets Alia apart is her natural leadership abilities. From day one, it was evident that she had a knack for leadership and was able to inspire and motivate those around her. Her positive attitude, strong work ethic, and excellent communication skills made her a true asset to the team.",
    img: "./brian.jfif",
  },
  {
    name: "James Bailey",
    post: "Senior Software Architect at COFEBE Inc.",
    comment:
      "Alia is a motivated individual and quick to learn. She's friendly, outgoing, a great team player, and eager to learn new things. She was great to work with.",
    img: "./james_bailey.jfif",
  },
  {
    name: "James York",
    post: "Sr Cloud DevOps Engineer",
    comment:
      "Alia is one of the most brilliant engineers I have worked alongside with in my career. She can jump into any issue and pick it up like she's been working on it for years. Her knowledge on things like Azure DevOps, PowerShell, Terraform, and best practices to ensure security and repeatability were crucial to the team. Not only was she an awesome coworker professionally with her skillset, but she also was always so positive when jumping into firefighting issues. Frequently she made herself available to assist on issues when it was not required of her. I know she would make an excellent addition to any team she finds herself on.",
    img: "./james_york.jfif",
  },
  {
    name: "Patricia Chin",
    post: "Senior DevOps Engineer",
    comment:
      "Alia has led many key efforts and saw them through with much success. Some of these efforts include the migration and removal of an entire datacenter, as well as transforming/migrating of Terraform projects to Bicep. She is an amazing team player, and works well with others. Alia makes sure to keep any new processes documented, and communicates well both inside and outside the team. She is great at finding out why things are requested and figuring out the best solution for a problem. ",
    img: "./patricia.jfif",
  },
  {
    name: "Joel Bennet",
    post: "Senior DevOps Architect",
    comment:
      "When I met Alia, she had a well-deserved reputation as the expert on git and scrum, in addition to a mastery of the scripting and IaC tools and languages that made her one of the team's preferred interviewers. Her technical expertise, desire to do things well, and not settle for merely functional, and her willingness to hear out a contrary view, and rationally discuss alternative solutions also make her one of the team's favorite pairing partners.",
    img: "./joel.jfif",
  },
  {
    name: "Yaritza Cuevas",
    post: "Senior Software Engineer",
    comment:
      "It was such a pleasure to work with Alia. Her problem solving skills proved handy on many occasions while working together. She is friendly and very self motivated. She’s got a great work ethic and quick to solve problems that require immediate attention. A great addition to any team.",
    img: "./yari.jfif",
  },
  {
    name: "Stephen Berens",
    post: "Senior DevOps Engineer",
    comment:
      "Alia Wilkinson is an exceptional talent. She consistently produces exceptional work, and does so regardless of whether she’s tackling a project solo or with a team. She demonstrates mastery of seemingly any technology she works with and her contributions to both the team and teams work product are invaluable. Beyond her obvious expertise, she routinely augments the team knowledge base with detailed documentation, ensuring her progress is available to everyone and, further, is never hesitant to provide direct instruction where appropriate. She fundamentally enriches any team she is a member of by dependably delivering phenomenal solutions to any issue she addresses and continually investing in the team’s ongoing development. Working with Alia is both a privilege and a pleasure.",
    img: "./stephen.jfif",
  },
  {
    name: "Marc Foster",
    post: "Senior DevOps Engineer",
    comment:
      "I have worked with Alia on several occasions and have always been impressed with her ability to quickly identify and solve problems. She has a deep understanding of operational issues and is always willing to share her knowledge with others. She is the perfect person to have on any team, as she is always willing to jump in and help out wherever needed.",
    img: "./marc.jfif",
  },
  {
    name: "Jesse Porter",
    post: "Vice President, DevOps Engineering",
    comment:
      "Alia radiates calm and quiet competence every day. She is a top performer on my team. She consistently gives 100 percent effort to the team and plays a significant role in complex devops engineering work. She's willing to jump into any situation and provide technical expertise, whether it's a minor hiccup or an all-hands-on-deck emergency. She has formidable powershell, infrastructure, and automation skills that she leverages on the daily, and she's always excited to learn new tools and technologies",
    img: "./jesse_logo.png",
  },
];

export const projects = [
  {
    slug: "nomadtime",
    title: "NomadTime",
    subtitle: "A visual world clock & personal places",
    description: "Compare time zones, save your daily rhythms, and keep a personal map of places and memories.",
    category: "Apps",
    bg: "#174f48",
    imgSrc: "/nomadtime/icon.png",
    imageFit: "contain",
    imageBackground: "#102e3c",
    externalUrl: "/nomadtime",
  },
  {
    slug: "house-of-solar-bloom",
    title: "House of Solar Bloom",
    subtitle: "Luxury beauty e-commerce platform",
    description: "A richly branded storefront for Solar Bloom, pairing editorial storytelling with a modern beauty shopping experience.",
    category: "Apps",
    bg: "#2C2633",
    imgSrc: "./house-of-solar-bloom.webp",
    imageFit: "contain",
    imageBackground: "#171117",
    externalUrl: "https://houseofsolarbloom.com",
  },
  {
    slug: "tarot",
    title: "Tarot",
    subtitle: "Interactive tarot reading app",
    description: "A tarot card reading app for fun and reflection.",
    category: "Apps",
    bg: "#3D725E",
    imgSrc: "./tarot-cover.png",
    externalUrl: "/tarot",
  },
  {
    slug: "music",
    title: "Music",
    subtitle: "Saint Modern / Ambiguous Records",
    description: "Debut album Solar Bloom Era, released under Ambiguous Records. Available on all platforms.",
    category: "Music",
    bg: "#6D4B8A",
    imgSrc: "./solar-bloom-era.jpeg",
    soundcloudUrl: "https://soundcloud.com/afterlight-994069544/sets/solar-bloom-era",
    links: [
      { label: "SoundCloud", url: "https://soundcloud.com/afterlight-994069544" },
      { label: "YouTube", url: "https://www.youtube.com/channel/UCgmou1Q1J5MB9hsS4T7HknQ" },
      { label: "Spotify", url: "#" },
      { label: "Apple Music", url: "#" },
    ],
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
