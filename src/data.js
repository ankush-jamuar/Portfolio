export const PROFILE = {
  name: "Ankush Jamuar",
  shortName: "Ankush.",
  role: "Full Stack Developer & Mobile Engineer",
  tagline: "who ships",
  email: "ankush.jamuar@gmail.com",
  phone: "+91 8825054246",
  github: "https://github.com/ankush-jamuar",
  linkedin: "https://www.linkedin.com/in/ankushxjamuar/",
  location: "Hazaribagh, JH",
  availability: "Available for opportunities",
  cvFile: "/CVLatest.pdf",
  photo: "/img.png",
};

export const HOME_WORDS = [
  "Scalable Web Apps.",
  "AI-Powered Solutions.",
  "Clean Architectures.",
  "Real-World Impact.",
  "Exceptional UX."
];

export const STATS = [
  { value: "5", suffix: "+", label: "Projects" },
  { value: "280", suffix: "+", label: "LeetCode" },
  { value: "4", suffix: "", label: "Certs" },
  { value: "8.16", suffix: "", label: "CGPA" }
];

export const SKILLS_CATEGORIES = [
  { 
    label: "Languages",           
    items: [["Java", 88], ["C/C++", 78], ["JavaScript", 92], ["Kotlin", 75], ["SQL", 80]] 
  },
  { 
    label: "Frameworks & Libs",   
    items: [["React.js", 90], ["Node.js", 85], ["Express", 83], ["Tailwind", 88], ["Socket.io", 80], ["Axios", 82], ["Jetpack Compose", 74]] 
  },
  { 
    label: "Mobile Dev",          
    items: [["Android Studio", 76], ["Kotlin", 75], ["Jetpack Compose", 74]] 
  },
  { 
    label: "Tools & Platforms",   
    items: [["MongoDB", 85], ["Git/GitHub", 90], ["Figma", 78], ["Postman", 82], ["Canva", 75]] 
  },
];

export const SOFT_SKILLS = [
  { name: "Problem-Solving", desc: "Analytical approach to complex challenges" },
  { name: "Team Leadership", desc: "Guiding teams toward shared goals" },
  { name: "Emotional Intelligence", desc: "Empathetic & self-aware" },
  { name: "Adaptability", desc: "Fast learner in dynamic environments" }
];

export const PROJECTS = [
  { 
    name: "Sprintify", 
    tag: "AI SaaS", 
    screenshot: "/screenshots/Sprintify.png", 
    desc: "AI-Powered Project Management SaaS — automates sprint planning with GroqAI, real-time collaboration via Socket.io.", 
    bullets: ["Reduced sprint planning time by 40% with GroqAI", "Real-time sync via Socket.io — zero-latency overhead", "30% task visibility improvement via drag-and-drop UX"], 
    tech: ["React.js","Node.js","MongoDB","Socket.io","GroqAI","Express.js"], 
    live: "https://sprintify-woad.vercel.app/", 
    github: "https://github.com/ankush-jamuar/Sprintify"
  },
  { 
    name: "Billiant",  
    tag: "FinTech",  
    screenshot: "/screenshots/Billiant.png",
    desc: "Online Invoicing & Billing Platform — secure financial ops with JWT auth, automated tracking, high-performance REST APIs.", 
    bullets: ["100% data integrity via JWT + Bcrypt", "Automated invoice tracking reducing admin overhead", "25% faster response via optimized NoSQL + APIs"], 
    tech: ["MERN Stack","JWT","Bcrypt","REST API","MongoDB","PDF Gen"], 
    live: "https://billiant.vercel.app/", 
    github: "https://github.com/ankush-jamuar/Billiant"
  },
];

export const TRAINING = {
  title: "Placement Ace: Java Bootcamp",
  institution: "Lovely Professional University · Jun–Jul 2025",
  tags: ["Java DSA", "OOP"],
  image: "/certs/training.png", // PLACEHOLDER: Please replace with the exact bootcamp image path
  link: "https://drive.google.com/file/d/1UOrZMzQ9hnm6cpiAimZZaXEJMlfsGpiV/view?usp=drive_link", // PLACEHOLDER: Please insert exact correct URL here
  bullets: [
    "Strengthened DSA proficiency — faster problem-solving and cleaner code", 
    "Mastered Java Collections Framework through real-world data scenarios", 
    "Built a Pacman-style arcade game applying OOP, collision detection & grid logic"
  ]
};

export const CERTIFICATIONS = [
  { name: "Java Programming",             platform: "iamneo",  date: "May 2025", skills: "Core Java, OOP, Collections", image: "/certs/java.png", link: "https://drive.google.com/file/d/1d3Wch3iOWB4loyTlaRVtTKnJQYOWObVd/view?usp=drive_link" },
  { name: "Cloud Computing",              platform: "NPTEL",   date: "Apr 2025", skills: "AWS, GCP, Cloud Architecture", image: "/certs/cloud.png", link: "https://drive.google.com/file/d/1Ar0_3c_Qn_HDhayi4OPr3jZtE-jk_lys/view?usp=drive_link" },
  { name: "Data Structures & Algorithms", platform: "iamneo",  date: "Dec 2024", skills: "Arrays, Trees, Graphs, DP", image: "/certs/dsa.png", link: "https://drive.google.com/file/d/135_vqQ8MqoGFwifhLTU_PVvYjRxVnh6f/view?usp=drive_link" },
  { name: "Object Oriented Programming",  platform: "iamneo",  date: "Dec 2024", skills: "Encapsulation, Polymorphism", image: "/certs/oop.png", link: "https://drive.google.com/file/d/1OX67Ci8PSRgnwKYvYQ9ks-9IixAfO8rT/view?usp=drive_link" },
];

export const ACHIEVEMENTS = {
  stats: [
    { value: "280+", label: "Problems Solved" },
    { value: "50+", label: "Day Streak" },
    { value: "DSA", label: "Specialization" }
  ],
  badges: ["50 Days Badge", "Daily Streak", "Strong DSA", "Discipline"]
};

export const EDUCATION = [
  { logo: "LPU", name: "LPU", handle: "B.Tech Information Technology", rows: [["CGPA", "8.16 / 10"], ["Batch", "Aug 2023 – Present"], ["Stream", "IT Engineering"]] },
  { logo: "A+", name: "Academic", handle: "School Background", rows: [["Matriculation (DAV)", "87%"], ["Intermediate — PCM", "69%"], ["Location", "Hazaribagh, JH"]] },
];

export const RESUME_INFO = [
  { title: "Education", rows: [["B.Tech — IT", "Lovely Professional University", "CGPA 8.16 · 2023–Present"], ["Intermediate — PCM", "Munam Public School", "69% · 2022–23"], ["Matriculation", "D.A.V Public School", "87% · 2020–21"]] },
  { title: "Projects",  rows: [["Sprintify", "AI-Powered PM SaaS", "MERN · GroqAI · Socket.io"], ["Billiant", "Online Invoicing Platform", "MERN · JWT · REST API"], ["Pacman Game", "Java Bootcamp · LPU", "Java OOP · Jun–Jul 2025"]] },
  { title: "Certs",     rows: [["Java Programming", null, "iamneo · May 2025"], ["Cloud Computing", null, "NPTEL · Apr 2025"], ["DSA & OOP", null, "iamneo · Dec 2024"]] },
];

export const RESUME_TAGS = ["MERN", "Android", "AI Integration", "280+ LC"];
export const RESUME_CORE_SKILLS = ["React.js","Node.js","MongoDB","Express.js","Kotlin","Java","JavaScript","Socket.io","Jetpack Compose","REST API","Git","Figma"];

export const BOT_KB = { 
  skills:"MERN stack, Java, Kotlin, Android, Tailwind, Socket.io, Figma, Git.", 
  sprintify:"AI-powered PM SaaS using GroqAI + Socket.io — 40% faster sprint planning.", 
  billiant:"Invoicing platform with JWT+Bcrypt security and 25% faster APIs.", 
  projects:"Sprintify (AI PM SaaS) and Billiant (invoicing) — both live on MERN.", 
  contact:"ankush.jamuar@gmail.com | +91 8825054246 | @ankush-jamuar on LinkedIn/GitHub", 
  education:"B.Tech IT at LPU (CGPA 8.16, 2023–present). 87% 10th, 69% 12th.", 
  achieve:"280+ LeetCode solved, 50 Days Badge, daily streak.", 
  certs:"Java (iamneo May 2025), Cloud (NPTEL Apr 2025), DSA+OOP (iamneo Dec 2024).", 
  hire:"Open to full-time, freelance & internships. Email ankush.jamuar@gmail.com!", 
  hello:"Hi! I'm Ankush's AI. He's a Full Stack & Mobile Developer. Ask me anything!", 
  def:"Ask about skills, projects, education, certs, achievements, or contact." 
};
