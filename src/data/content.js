export const profile = {
  name: "Privance Ulirki",
  title: "Data Analyst | Data Science Graduate",
  location: "Dar es Salaam, Tanzania",
  email: "mkendaprivance@gmail.com",
  phone: "+255 679 844 384",
  github: "https://github.com/VARANE-MKENDA",
  linkedin: "#", // placeholder — add your LinkedIn URL
  statement:
    "I specialize in Python, SQL, Power BI, and Flask to turn data into meaningful insights and build data-driven applications.",
  eyebrow: ["Data Analysis", "Data Science", "Research & Analytics"],
  heroHeading: "Transforming Data Into Insights & Practical Solutions",
  focusLine: "Focused on clarity, problem solving, and delivering real-world impact.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const quickProfile = [
  { icon: "GraduationCap", label: "Final Year Data Science Student" },
  { icon: "Building2", label: "EASTC (Tanzania)" },
  { icon: "BarChart3", label: "Data Analysis, Visualization & Dashboards" },
  { icon: "Code2", label: "Programming Languages: SQL, Python, R" },
  { icon: "MapPin", label: "Dar es Salaam, Tanzania" },
];

export const aboutQuote = "I turn data into decisions that drive impact.";

export const aboutBody = [
  "I am a final-year Data Science student at EASTC. I specialize in transforming raw data into meaningful insights and building clear, decision-ready reports.",
  "My skills include Python, SQL, Excel, Power BI, and Data Visualization. I enjoy solving real-world problems using data-driven approaches.",
];

export const skillGroups = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: ["SQL", "Python", "R"],
    description: "Core languages for analysis and modeling",
  },
  {
    category: "Data Analysis",
    icon: "BarChart3",
    skills: ["Excel", "Pandas", "NumPy"],
    description: "Data cleaning, querying, and analysis basics",
  },
  {
    category: "Data Visualization",
    icon: "LineChart",
    skills: ["Power BI", "Excel", "Matplotlib"],
    description: "Interactive dashboards & business intelligence",
  },
  {
    category: "Databases",
    icon: "Database",
    skills: ["MySQL", "Oracle"],
    description: "Querying, joins, and database management",
  },
  {
    category: "Data Science",
    icon: "Brain",
    skills: ["Scikit-learn", "Machine Learning", "EDA", "Statistics"],
    description: "Model building and statistical analysis",
  },
  {
    category: "Web Development",
    icon: "Globe",
    skills: ["Flask", "Bootstrap 5", "Chart.js", "HTML/CSS"],
    description: "Building simple data-driven web apps and dashboards",
  },
];

export const projects = [
  {
    title: "Sales Performance Dashboard",
    tech: ["Excel", "Power BI"],
    image: "/projects/sales-dashboard.png",
    description:
      "Built an interactive Power BI dashboard analyzing sales, quantity, and profit across products, categories, and payment modes — with year and month-level filtering for drill-down analysis.",
    objective: "Give stakeholders a single view of revenue and profit health by product, category, and time period.",
    insight: "A small set of top products (carpet roll, rubber mat, plastic mat) consistently drove the largest share of sales volume.",
    github: "https://github.com/VARANE-MKENDA",
    demo: "/demo/sales-dashboard.html",
    live: true,
  },
  {
    title: "Customer Churn Analysis",
    tech: ["Python", "Pandas", "Scikit-learn", "Power BI"],
    image: "/projects/customer-churn.png",
    description:
      "Built a customer retention system that predicts churn risk and estimated revenue at risk from account and usage data, with a live risk queue ranking the highest-risk accounts for follow-up.",
    objective: "Predict churn risk early enough for the business to act on it, not just explain it after the fact.",
    insight: "Contract type and tenure length were the strongest predictors of churn in the model.",
    github: "https://github.com/VARANE-MKENDA",
    demo: null,
    live: false,
  },
  {
    title: "Credit Card Fraud Detection",
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    image: "/projects/fraud-detection.png",
    description:
      "Built and deployed a machine learning classifier that flags fraudulent credit card transactions from anonymized transaction features, with an interactive Streamlit app for testing predictions on new data.",
    objective: "Catch likely-fraudulent transactions automatically instead of relying on manual review.",
    insight: "A small subset of transaction features consistently separated genuine transactions from fraudulent ones.",
    github: "https://github.com/VARANE-MKENDA",
    demo: null,
    live: false,
  },
  {
    title: "Exploratory Data Analysis",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    image: "/projects/eda-scatterplot.png",
    description:
      "Performed data cleaning, exploratory analysis, statistical summaries, and visualization on a bike-share trip dataset to uncover patterns in trip duration by hour and user type.",
    objective: "Turn a raw, messy dataset into a clear, documented set of findings.",
    insight: "Subscriber trip durations spiked sharply during evening commute hours, while casual customers stayed more consistent across the day.",
    github: "https://github.com/VARANE-MKENDA",
    demo: null,
    live: false,
  },
];

export const experience = [
  {
    role: "Data Collection, Auditing & Reporting",
    org: "CRDB Bank",
    duration: "3 months",
    points: [
      "Collected and verified operational data across branch processes.",
      "Audited records for accuracy and flagged discrepancies for correction.",
      "Organized and structured raw data to support consistent reporting.",
      "Prepared reports summarizing findings for internal review.",
      "Supported data-driven decision processes within the team.",
    ],
  },
];

export const education = [
  {
    icon: "GraduationCap",
    title: "Bachelor's Degree in Data Science",
    subtitle: "Eastern Africa Statistical Training Centre (EASTC)",
    description:
      "Final-year student specializing in data analysis, statistical modeling, and data-driven decision making using modern tools and techniques.",
    tag: "Final Year",
  },
];

export const services = [
  { icon: "BarChart3", title: "Data Analysis", description: "Clean, analyze, and interpret datasets to identify useful insights." },
  { icon: "LineChart", title: "Data Visualization", description: "Create clear dashboards and visual reports using Power BI and Excel." },
  { icon: "Sparkles", title: "Data Cleaning", description: "Transform raw and inconsistent datasets into analysis-ready data." },
  { icon: "FileText", title: "Reporting", description: "Prepare clear analytical reports that communicate findings effectively." },
  { icon: "Sigma", title: "Statistical Analysis", description: "Apply statistical techniques to understand relationships and patterns in data." },
];

export const contactPlatforms = [
  {
    icon: "MessageCircle",
    title: "WhatsApp",
    description: "Quick response for opportunities, mentorship, or collaboration.",
    action: "Chat now",
    href: "https://wa.me/255679844384",
  },
  {
    icon: "Mail",
    title: "Email",
    description: "For professional communication and business inquiries.",
    action: "Send email",
    href: "mailto:mkendaprivance@gmail.com",
  },
  {
    icon: "Github",
    title: "GitHub",
    description: "Browse my project code, notebooks, and dashboards.",
    action: "View profile",
    href: "https://github.com/VARANE-MKENDA",
  },
];
