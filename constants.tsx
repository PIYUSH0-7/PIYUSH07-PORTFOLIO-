import React from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Infinity, 
  Container, 
  Leaf, 
  Shield, 
  Lock,
  Globe,
  Code,
  Database,
  Smartphone,
  Terminal,
  Bot,
  MessageCircle,
  Users,
  Zap,
  Cpu,
  Layers,
  Server
} from 'lucide-react';
import { ExperienceItem, ProjectItem, SkillItem, SocialLink, EducationItem, HackathonItem } from './types';

export const SOCIALS: SocialLink[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/piyush070/", icon: <Linkedin size={18} /> },
  { name: "WhatsApp", url: "https://wa.me/918923845912?text=Hello%20Piyush.%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20opportunities.%20", icon: <MessageCircle size={18} /> },
];

export const SKILLS: SkillItem[] = [
  { name: "VS Code" },
  { name: "Git & GitHub" },
  { name: "Postman" },
  { name: "MongoDB Compass" },
  { name: "Firebase" },
  { name: "Android Studio" },
  { name: "Expo" },
  { name: "Vercel" },
  { name: "Railway" },
  { name: "Docker (Basics)" },
  { name: "DSA (Python)" },
  { name: "MERN Full Stack" },
  { name: "React.js" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "MongoDB" },
];

const LOGOS = {
  python: <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400 font-bold text-xs">PY</div>,
  mern: <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-xs">MERN</div>,
  reactNative: <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400"><Smartphone size={20}/></div>,
  dsa: <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400"><Code size={20}/></div>,
  ai: <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600 dark:text-red-400"><Bot size={20}/></div>,
  softSkills: <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-400"><Users size={20}/></div>,
  abes: <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-zinc-700 dark:text-zinc-300 font-bold text-[10px]">ABES</div>,
  school: <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-zinc-700 dark:text-zinc-300 font-bold text-[10px]">JBPS</div>,
  shield077: <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg border-2 border-white dark:border-zinc-800">077</div>,
  shieldK07: <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg border-2 border-white dark:border-zinc-800">K07</div>,
  shieldS07: <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg border-2 border-white dark:border-zinc-800">S07</div>
};

// Rich graphical icons for the Projects section to mimic PDF thumbnails
const ICONS = {
  python: (
    <div className="w-full h-full bg-white flex items-center justify-center overflow-hidden relative group">
       <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-900/10 opacity-50" />
       <Infinity size={80} className="text-yellow-500 drop-shadow-sm relative z-10 transform group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
       <div className="absolute -bottom-4 -right-4 opacity-10 text-yellow-900 dark:text-yellow-500">
         <Code size={120} />
       </div>
    </div>
  ),
  mern: (
    <div className="w-full h-full bg-white flex items-center justify-center overflow-hidden relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/10 opacity-50" />
      <div className="flex gap-2 relative z-10">
         <div className="text-4xl font-bold text-zinc-700 dark:text-zinc-300 font-mono tracking-tighter group-hover:tracking-widest transition-all duration-500">M E R N</div>
      </div>
      <div className="absolute -top-4 -left-4 opacity-10 text-green-900 dark:text-green-500">
         <Database size={120} />
       </div>
    </div>
  ),
  reactNative: (
    <div className="w-full h-full bg-white flex items-center justify-center overflow-hidden relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/10 opacity-50" />
      <div className="relative z-10">
        <Smartphone size={64} className="text-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
        <div className="animate-[spin_10s_linear_infinite]">
           <div className="w-32 h-32 rounded-full border border-blue-300/50 dark:border-blue-500/30 border-dashed" />
        </div>
      </div>
    </div>
  ),
  code: (
    <div className="w-full h-full bg-zinc-950 flex items-center justify-center overflow-hidden relative group">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4ade80 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
      <Terminal size={64} className="text-green-500 relative z-10 group-hover:text-green-400 transition-colors" />
      <div className="absolute bottom-2 right-4 text-[10px] text-green-500/50 font-mono">
         &gt; console.log("Hello World");
      </div>
    </div>
  ),
  ai: (
    <div className="w-full h-full bg-white flex items-center justify-center overflow-hidden relative group">
       <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-purple-100 dark:from-red-900/20 dark:to-purple-900/10 opacity-50" />
       <Bot size={80} className="text-purple-600 dark:text-purple-400 relative z-10 transform group-hover:-translate-y-2 transition-transform" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500/20 blur-xl rounded-full" />
    </div>
  )
};

export const DATA = {
  // ENGLISH (Default)
  en: {
    profile: {
      name: "Piyush Gangwar",
      role: "Full Stack & AI Developer in training",
      about: "B.Tech IT student (6th semester) building skills in MERN, Python-based DSA, cross-platform development, and agentic AI. I follow a strict execution-first learning system with high consistency and long-term vision to build large-scale platforms for real users. Currently working on full-stack clones, automation tools, and academic + productivity apps.",
      avatar: "/profile.jpg",
      url: "https://github.com/PIYUSH0-7",
      email: "gangwarpiyush827@gmail.com",
      phone: "+918923845912",
      location: "Ghaziabad, Uttar Pradesh"
    },
    sections: {
      about: "About",
      experience: "Learning Path & Experience",
      education: "Education",
      skills: "Skills",
      projects: "Code Portfolio",
      projectsSubtitle: "My Code Portfolio",
      projectsDesc: "A collection of my technical projects and learning milestones, ranging from algorithms to full-stack applications.",
      hackathons: "Creations",
      hackathonsTitle: "I like building things",
      hackathonsDesc: "Innovative tools and AI-powered applications developed to solve real-world student and career problems.",
      contact: "Contact",
      contactTitle: "Get in Touch",
      contactDesc: "I'm actively seeking placement opportunities in software development, AI workflows, and full-stack engineering. If you'd like to connect, collaborate, or discuss a role — feel free to reach out through any of the platforms below:"
    },
    experience: [
      { id: "1", company: "DSA with Python", role: "Algorithms & Problem-Solving", period: "Dec 2025 – Jan 2026", url: "https://github.com/PIYUSH0-7/1_DSA_with_Python", logo: LOGOS.python },
      { id: "2", company: "FullStack MERN", role: "Web Apps Development", period: "Feb 2026 – Mar 2026", url: "https://github.com/PIYUSH0-7/2_FullStack_MERN", logo: LOGOS.mern },
      { id: "3", company: "React Native", role: "Mobile App Design", period: "Apr 2026 – May 2026", url: "https://github.com/PIYUSH0-7/3_React_Native", logo: LOGOS.reactNative },
      { id: "4", company: "Advanced DSA Coding", role: "Competitive Programming", period: "Jun 2026 – Jul 2026", url: "https://github.com/PIYUSH0-7/4_Advanced_DSA_Coding", logo: LOGOS.dsa },
      { id: "5", company: "Agentic AI Vibe Coding", role: "AI Workflow Automation", period: "Aug 2026 – Sep 2026", url: "https://github.com/PIYUSH0-7/5_Agentic_AI_Vibe_Coding", logo: LOGOS.ai },
      { id: "6", company: "Soft Skills", role: "Communication & Leadership", period: "Dec 2025 – Present", url: "https://github.com/PIYUSH0-7/6_Soft_Skills", logo: LOGOS.softSkills }
    ],
    education: [
      { id: "1", institution: "ABES Engineering College, Ghaziabad", program: "B.Tech in Information Technology", period: "Nov 2023 – July 2027", logo: LOGOS.abes, url: "https://abes.ac.in/" },
      { id: "2", institution: "Jingle Bells Public School, Bareilly", program: "Class 12th (CBSE)", period: "2023", logo: LOGOS.school, url: "https://www.jbsbareilly.com/" },
      { id: "3", institution: "Jingle Bells Public School, Bareilly", program: "Class 10th (CBSE)", period: "2021", logo: LOGOS.school, url: "https://www.jbsbareilly.com/" }
    ],
    projects: [
      { id: "1", title: "DSA with Python", period: "Dec 2025", description: "Implemented algorithmic problem-solving tasks using Python for real-world scenarios. Completed challenges on arrays, recursion, hashing, dynamic programming, and optimization.", tech: ["Python", "Algorithms", "GitHub", "VS Code"], source: "https://github.com/PIYUSH0-7/1_DSA_with_Python", icon: ICONS.python, website: "#" },
      { id: "2", title: "FullStack MERN", period: "Feb 2026", description: "End-to-end web application development using the MERN stack, covering frontend, backend, and deployment.", tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "GitHub Copilot", "Vercel", "Railway"], source: "https://github.com/PIYUSH0-7/2_FullStack_MERN", icon: ICONS.mern, website: "#" },
      { id: "3", title: "React Native Mobile App Development", period: "May 2026", description: "Built cross-platform UI components using React Native and Expo. Implemented API integration, navigation flow, and state management (Redux/Context).", tech: ["React Native", "TypeScript", "Expo", "Android Studio", "Mobile UI/UX"], source: "https://github.com/PIYUSH0-7/3_React_Native", icon: ICONS.reactNative, website: "#" },
      { id: "4", title: "Advanced DSA Coding", period: "Jun 2026", description: "Advanced problem-solving and optimization techniques for competitive programming and technical interviews.", tech: ["Python", "TypeScript", "Jest", "Algorithms", "Competitive Coding"], source: "https://github.com/PIYUSH0-7/4_Advanced_DSA_Coding", icon: ICONS.code, website: "#" },
      { id: "5", title: "Agentic AI & LLM Automation", period: "July 2026", description: "Exploration of agentic workflows and automation using AI tools, backend orchestration, and containerized deployment.", tech: ["Node.js", "NestJS", "Docker", "GitHub Copilot", "AI Workflows"], source: "https://github.com/PIYUSH0-7/5_Agentic_AI_Vibe_Coding", icon: ICONS.ai, website: "#" }
    ],
    hackathons: [
      { id: "1", title: "Academia 077 (Smart Student Assistant App)", location: "Project", date: "Oct 2025", description: "Developed a lecture-note generator: records audio, sends it to an AI model, and converts it into structured notes. Built an attendance-tracking system that automatically calculates present/absent percentages.", logo: LOGOS.shield077, url: "#" },
      { id: "2", title: "Krishna07 – Bhagavad Gita AI bot", location: "Project", date: "Sept 2026", description: "Created an interactive chatbot where animated Krishna answers user questions from the Bhagavad Gita. Integrated LLM-based response generation with spiritual context grounding.", logo: LOGOS.shieldK07, url: "#" },
      { id: "3", title: "Saksham07 – Student Career Guidance AI", location: "Project", date: "Nov 2026", description: "Built an AI-powered assistant providing career assessment and personalized study recommendations. Implemented a Shorts-style recommendation system that shows relevant YouTube-style career videos.", logo: LOGOS.shieldS07, url: "#" }
    ]
  },

  // HINDI
  hn: {
    profile: {
      name: "पीयूष गंगवार",
      role: "फुल स्टैक और एआई डेवलपर (प्रशिक्षण में)",
      about: "बी.टेक आईटी छात्र (छठा सेमेस्टर) जो MERN, पायथन-आधारित DSA, क्रॉस-प्लेटफ़ॉर्म डेवलपमेंट और एजेंटिक एआई में कौशल विकसित कर रहा है।",
      avatar: "./profile.jpg",
      url: "https://github.com/PIYUSH0-7",
      email: "gangwarpiyush827@gmail.com",
      phone: "+918923845912",
      location: "गाजियाबाद, उत्तर प्रदेश"
    },
    sections: {
      about: "परिचय",
      experience: "सीखने का मार्ग और अनुभव",
      education: "शिक्षा",
      skills: "कौशल",
      projects: "कोड पोर्टफोलियो",
      projectsSubtitle: "मेरा कोड पोर्टफोलियो",
      projectsDesc: "मेरे तकनीकी प्रोजेक्ट्स और सीखने के पड़ावों का संग्रह, एल्गोरिदम से लेकर फुल-स्टैक एप्लिकेशन तक।",
      hackathons: "निर्माण",
      hackathonsTitle: "मुझे चीजें बनाना पसंद है",
      hackathonsDesc: "वास्तविक दुनिया की छात्र और करियर की समस्याओं को हल करने के लिए विकसित किए गए अभिनव उपकरण और एआई-संचालित अनुप्रयोग।",
      contact: "संपर्क",
      contactTitle: "संपर्क करें",
      contactDesc: "मैं सॉफ्टवेयर डेवलपमेंट, एआई वर्कफ़्लो और फुल-स्टैक इंजीनियरिंग में प्लेसमेंट के अवसरों की सक्रिय रूप से तलाश कर रहा हूं।"
    },
    experience: [
      { id: "1", company: "DSA with Python", role: "एल्गोरिदम और समस्या समाधान", period: "दिसंबर 2025 – जनवरी 2026", url: "https://github.com/PIYUSH0-7/1_DSA_with_Python", logo: LOGOS.python },
      { id: "2", company: "FullStack MERN", role: "वेब ऐप्स विकास", period: "फरवरी 2026 – मार्च 2026", url: "https://github.com/PIYUSH0-7/2_FullStack_MERN", logo: LOGOS.mern },
      { id: "3", company: "React Native", role: "मोबाइल ऐप डिज़ाइन", period: "अप्रैल 2026 – मई 2026", url: "https://github.com/PIYUSH0-7/3_React_Native", logo: LOGOS.reactNative },
      { id: "4", company: "Advanced DSA Coding", role: "प्रतियोगी प्रोग्रामिंग", period: "जून 2026 – जुलाई 2026", url: "https://github.com/PIYUSH0-7/4_Advanced_DSA_Coding", logo: LOGOS.dsa },
      { id: "5", company: "Agentic AI Vibe Coding", role: "एआई वर्कफ़्लो ऑटोमेशन", period: "अगस्त 2026 – सितंबर 2026", url: "https://github.com/PIYUSH0-7/5_Agentic_AI_Vibe_Coding", logo: LOGOS.ai },
      { id: "6", company: "Soft Skills", role: "संचार और नेतृत्व", period: "दिसंबर 2025 – वर्तमान", url: "https://github.com/PIYUSH0-7/6_Soft_Skills", logo: LOGOS.softSkills }
    ],
    education: [
      { id: "1", institution: "ABES इंजीनियरिंग कॉलेज, गाजियाबाद", program: "बी.टेक (सूचना प्रौद्योगिकी)", period: "2023 – 2027", logo: LOGOS.abes, url: "https://abes.ac.in/" },
      { id: "2", institution: "जिंगल बेल्स पब्लिक स्कूल, बरेली", program: "कक्षा 12 (सीबीएसई)", period: "2023", logo: LOGOS.school, url: "https://www.jbsbareilly.com/" },
      { id: "3", institution: "जिंगल बेल्स पब्लिक स्कूल, बरेली", program: "कक्षा 10 (सीबीएसई)", period: "2021", logo: LOGOS.school, url: "https://www.jbsbareilly.com/" }
    ],
    projects: [
      { id: "1", title: "DSA with Python", period: "दिसंबर 2025", description: "पायथन का उपयोग करके डेटा संरचना और एल्गोरिदम का मूलभूत प्रशिक्षण, समस्या समाधान और प्रतिस्पर्धी कोडिंग पर केंद्रित।", tech: ["Python", "Algorithms", "GitHub", "VS Code"], source: "https://github.com/PIYUSH0-7/1_DSA_with_Python", icon: ICONS.python, website: "#" },
      { id: "2", title: "FullStack MERN", period: "फरवरी 2026", description: "MERN स्टैक का उपयोग करके एंड-टू-एंड वेब एप्लिकेशन विकास, जिसमें फ्रंटएंड, बैकएंड और परिनियोजन (deployment) शामिल है।", tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "GitHub Copilot", "Vercel", "Railway"], source: "https://github.com/PIYUSH0-7/2_FullStack_MERN", icon: ICONS.mern, website: "#" },
      { id: "3", title: "React Native", period: "अप्रैल 2026", description: "React Native के साथ क्रॉस-प्लेटफ़ॉर्म मोबाइल ऐप विकास, UI/UX और प्रदर्शन अनुकूलन पर ध्यान केंद्रित करते हुए।", tech: ["React Native", "TypeScript", "Expo", "Android Studio", "Mobile UI/UX"], source: "https://github.com/PIYUSH0-7/3_React_Native", icon: ICONS.reactNative, website: "#" },
      { id: "4", title: "Advanced DSA Coding", period: "जून 2026", description: "प्रतियोगी प्रोग्रामिंग और तकनीकी साक्षात्कार के लिए उन्नत समस्या समाधान और अनुकूलन तकनीकें।", tech: ["Python", "TypeScript", "Jest", "Algorithms", "Competitive Coding"], source: "https://github.com/PIYUSH0-7/4_Advanced_DSA_Coding", icon: ICONS.code, website: "#" },
      { id: "5", title: "Agentic AI Vibe Coding", period: "अगस्त 2026", description: "एआई टूल्स, बैकएंड ऑर्केस्ट्रेशन और कंटेनरीकृत परिनियोजन का उपयोग करके एजेंटिक वर्कफ़्लो और ऑटोमेशन की खोज।", tech: ["Node.js", "NestJS", "Docker", "GitHub Copilot", "AI Workflows"], source: "https://github.com/PIYUSH0-7/5_Agentic_AI_Vibe_Coding", icon: ICONS.ai, website: "#" }
    ],
    hackathons: [
      { id: "1", title: "Academia 077 (स्मार्ट छात्र सहायक ऐप)", location: "प्रोजेक्ट", date: "अक्टूबर 2025", description: "पायथन का उपयोग करके एक व्याख्यान-नोट जनरेटर और छात्र सहायता मंच विकसित किया, जो वास्तविक दुनिया की अकादमिक उपयोगिता पर केंद्रित है।", logo: LOGOS.shield077, url: "#" },
      { id: "2", title: "Krishna07 – भगवद गीता एआई बॉट", location: "प्रोजेक्ट", date: "सितंबर 2026", description: "एक इंटरैक्टिव चैटबॉट बनाया जहाँ एनिमेटेड कृष्णा भगवद गीता से उपयोगकर्ता के सवालों के जवाब देते हैं।", logo: LOGOS.shieldK07, url: "#" },
      { id: "3", title: "Saksham07 – छात्र करियर मार्गदर्शन एआई", location: "प्रोजेक्ट", date: "नवंबर 2026", description: "करियर मूल्यांकन और व्यक्तिगत अध्ययन सिफारिशें प्रदान करने वाला एआई-संचालित सहायक बनाया।", logo: LOGOS.shieldS07, url: "#" }
    ]
  },

  // TAMIL
  tm: {
    profile: {
      name: "பியூஷ் கங்வார்",
      role: "ஃபுல் ஸ்டாக் & AI டெவலப்பர்",
      about: "MERN, Python அடிப்படையிலான DSA, கிராஸ்-பிளாட்ஃபார்ம் டெவலப்மென்ட் மற்றும் ஏஜென்டிக் AI ஆகியவற்றில் திறன்களை வளர்க்கும் B.Tech IT மாணவர்.",
      avatar: "./profile.jpg",
      url: "https://github.com/PIYUSH0-7",
      email: "gangwarpiyush827@gmail.com",
      phone: "+918923845912",
      location: "காசியாபாத், உத்தரப் பிரதேசம்"
    },
    sections: {
      about: "பற்றி",
      experience: "கற்றல் பாதை & அனுபவம்",
      education: "கல்வி",
      skills: "திறன்கள்",
      projects: "குறியீட்டுத் தொகுப்பு",
      projectsSubtitle: "எனது குறியீட்டுத் தொகுப்பு",
      projectsDesc: "அல்காரிதம்கள் முதல் ஃபுல்-ஸ்டாக் பயன்பாடுகள் வரை எனது தொழில்நுட்பத் திட்டங்கள் மற்றும் கற்றல் மைல்கற்களின் தொகுப்பு.",
      hackathons: "படைப்புகள்",
      hackathonsTitle: "நான் புதியவற்றை உருவாக்க விரும்புகிறேன்",
      hackathonsDesc: "மாணவர் மற்றும் தொழில்சார் பிரச்சினைகளைத் தீர்க்க உருவாக்கப்பட்ட புதுமையான கருவிகள் மற்றும் AI-இயங்கும் பயன்பாடுகள்.",
      contact: "தொடர்பு",
      contactTitle: "தொடர்பு கொள்ள",
      contactDesc: "மென்பொருள் மேம்பாடு, AI பணிப்பாய்வுகள் மற்றும் ஃபுல்-ஸ்டாக் இன்ஜினியரிங் ஆகியவற்றில் வேலைவாய்ப்பைத் தேடுகிறேன்."
    },
    experience: [
      { id: "1", company: "DSA with Python", role: "அல்காரிதம் & சிக்கல் தீர்த்தல்", period: "டிசம்பர் 2025 – ஜனவரி 2026", url: "https://github.com/PIYUSH0-7/1_DSA_with_Python", logo: LOGOS.python },
      { id: "2", company: "FullStack MERN", role: "வலை பயன்பாடுகள் மேம்பாடு", period: "பிப்ரவரி 2026 – மார்ச் 2026", url: "https://github.com/PIYUSH0-7/2_FullStack_MERN", logo: LOGOS.mern },
      { id: "3", company: "React Native", role: "மொபைல் பயன்பாட்டு வடிவமைப்பு", period: "ஏப்ரல் 2026 – மே 2026", url: "https://github.com/PIYUSH0-7/3_React_Native", logo: LOGOS.reactNative },
      { id: "4", company: "Advanced DSA Coding", role: "போட்டி நிரலாக்கம்", period: "ஜூன் 2026 – ஜூலை 2026", url: "https://github.com/PIYUSH0-7/4_Advanced_DSA_Coding", logo: LOGOS.dsa },
      { id: "5", company: "Agentic AI Vibe Coding", role: "AI பணிப்பாய்வு ஆட்டோமேஷன்", period: "ஆகஸ்ட் 2026 – செப்டம்பர் 2026", url: "https://github.com/PIYUSH0-7/5_Agentic_AI_Vibe_Coding", logo: LOGOS.ai },
      { id: "6", company: "Soft Skills", role: "தொடர்பு மற்றும் தலைமைத்துவம்", period: "டிசம்பர் 2025 – தற்காலம்", url: "https://github.com/PIYUSH0-7/6_Soft_Skills", logo: LOGOS.softSkills }
    ],
    education: [
      { id: "1", institution: "ABES இன்ஜினியரிங் கல்லூரி, காசியாபாத்", program: "B.Tech தகவல் தொழில்நுட்பம்", period: "2023 – 2027", logo: LOGOS.abes, url: "https://abes.ac.in/" },
      { id: "2", institution: "ஜிங்கிள் பெல்ஸ் பப்ளிக் ஸ்கூல், பரேலி", program: "வகுப்பு 12", period: "2023", logo: LOGOS.school, url: "https://www.jbsbareilly.com/" },
      { id: "3", institution: "ஜிங்கிள் பெல்ஸ் பப்ளிக் ஸ்கூல், பரேலி", program: "வகுப்பு 10", period: "2021", logo: LOGOS.school, url: "https://www.jbsbareilly.com/" }
    ],
    projects: [
      { id: "1", title: "DSA with Python", period: "டிசம்பர் 2025", description: "சிக்கல் தீர்த்தல் மற்றும் போட்டி குறியீட்டில் கவனம் செலுத்தி, பைத்தானைப் பயன்படுத்தி அடிப்படை தரவு கட்டமைப்புகள் மற்றும் வழிமுறைகள் பயிற்சி.", tech: ["Python", "Algorithms", "GitHub", "VS Code"], source: "https://github.com/PIYUSH0-7/1_DSA_with_Python", icon: ICONS.python, website: "#" },
      { id: "2", title: "FullStack MERN", period: "பிப்ரவரி 2026", description: "MERN அடுக்கைப் பயன்படுத்தி முழுமையான வலை பயன்பாட்டு மேம்பாடு, முன்-இறுதி, பின்-இறுதி மற்றும் வரிசைப்படுத்தல் ஆகியவற்றை உள்ளடக்கியது.", tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "GitHub Copilot", "Vercel", "Railway"], source: "https://github.com/PIYUSH0-7/2_FullStack_MERN", icon: ICONS.mern, website: "#" },
      { id: "3", title: "React Native", period: "ஏப்ரல் 2026", description: "UI/UX மற்றும் செயல்திறன் மேம்படுத்தலில் கவனம் செலுத்தி, React Native உடன் குறுக்கு-தள மொபைல் பயன்பாட்டு மேம்பாடு.", tech: ["React Native", "TypeScript", "Expo", "Android Studio", "Mobile UI/UX"], source: "https://github.com/PIYUSH0-7/3_React_Native", icon: ICONS.reactNative, website: "#" },
      { id: "4", title: "Advanced DSA Coding", period: "ஜூன் 2026", description: "போட்டி நிரலாக்கம் மற்றும் தொழில்நுட்ப நேர்காணல்களுக்கான மேம்பட்ட சிக்கல் தீர்த்தல் மற்றும் மேம்படுத்தல் நுட்பங்கள்.", tech: ["Python", "TypeScript", "Jest", "Algorithms", "Competitive Coding"], source: "https://github.com/PIYUSH0-7/4_Advanced_DSA_Coding", icon: ICONS.code, website: "#" },
      { id: "5", title: "Agentic AI Vibe Coding", period: "ஆகஸ்ட் 2026", description: "AI கருவிகள், பின்தள ஆர்கெஸ்ட்ரேஷன் மற்றும் கொள்கலன் வரிசைப்படுத்தலைப் பயன்படுத்தி ஏஜென்டிக் பணிப்பாய்வுகள் மற்றும் ஆட்டோமேஷனை ஆராய்தல்.", tech: ["Node.js", "NestJS", "Docker", "GitHub Copilot", "AI Workflows"], source: "https://github.com/PIYUSH0-7/5_Agentic_AI_Vibe_Coding", icon: ICONS.ai, website: "#" }
    ],
    hackathons: [
      { id: "1", title: "Academia 077 (ஸ்மார்ட் மாணவர் உதவியாளர்)", location: "திட்டம்", date: "அக் 2025", description: "நிஜ உலக கல்விப் பயன்பாட்டில் கவனம் செலுத்தி, பைத்தானைப் பயன்படுத்தி விரிவுரை-குறிப்பு ஜெனரேட்டர் மற்றும் மாணவர் உதவித் தளத்தை உருவாக்கியது.", logo: LOGOS.shield077, url: "#" },
      { id: "2", title: "Krishna07 – பகவத் கீதை AI பாட்", location: "திட்டம்", date: "செப் 2026", description: "அனிமேஷன் செய்யப்பட்ட கிருஷ்ணர் பகவத் கீதையில் இருந்து பயனர் கேள்விகளுக்கு பதிலளிக்கும் ஊடாடும் சாட்போட் உருவாக்கப்பட்டது.", logo: LOGOS.shieldK07, url: "#" },
      { id: "3", title: "Saksham07 – மாணவர் வழிகாட்டுதல் AI", location: "திட்டம்", date: "நவ 2026", description: "தொழில் மதிப்பீடு மற்றும் தனிப்பயனாக்கப்பட்ட ஆய்வுப் பரிந்துரைகளை வழங்கும் AI-இயங்கும் உதவியாளரை உருவாக்கினார்.", logo: LOGOS.shieldS07, url: "#" }
    ]
  },

  // BHOJPURI
  bj: {
    profile: {
      name: "पीयूष गंगवार",
      role: "फुल स्टैक अउर एआई डेवलपर",
      about: "बी.टेक आईटी के छात्र (छठा सेमेस्टर) जे MERN, पायथन-आधारित DSA, क्रॉस-प्लेटफ़ॉर्म डेवलपमेंट अउर एजेंटिक एआई में अपन हुनर बढ़ा रहल बा।",
      avatar: "./profile.jpg",
      url: "https://github.com/PIYUSH0-7",
      email: "gangwarpiyush827@gmail.com",
      phone: "+918923845912",
      location: "गाजियाबाद, उत्तर प्रदेश"
    },
    sections: {
      about: "परिचय",
      experience: "सीखे के रास्ता अउर अनुभव",
      education: "शिक्षा",
      skills: "हुनर (Skills)",
      projects: "कोड पोर्टफोलियो",
      projectsSubtitle: "हमार कोड पोर्टफोलियो",
      projectsDesc: "हमार टेक्निकल प्रोजेक्ट्स अउर सीखे के सफर के संग्रह, एल्गोरिदम से लेके फुल-स्टैक एप्लिकेशन तक।",
      hackathons: "रचना (Creations)",
      hackathonsTitle: "हमरा कुछ बनावल पसंद बा",
      hackathonsDesc: "नया जमाना के टूल्स अउर एआई-पावर्ड ऐप्स जे छात्र अउर करियर के असली समस्या के हल करे खातिर बनावल गइल बा।",
      contact: "संपर्क",
      contactTitle: "संपर्क करीं",
      contactDesc: "हम सॉफ्टवेयर डेवलपमेंट, एआई वर्कफ़्लो अउर फुल-स्टैक इंजीनियरिंग में नौकरी के अवसर खोज रहल बानी।"
    },
    experience: [
      { id: "1", company: "DSA with Python", role: "एल्गोरिदम अउर समस्या समाधान", period: "दिसंबर 2025 – जनवरी 2026", url: "https://github.com/PIYUSH0-7/1_DSA_with_Python", logo: LOGOS.python },
      { id: "2", company: "FullStack MERN", role: "वेब ऐप्स विकास", period: "फरवरी 2026 – मार्च 2026", url: "https://github.com/PIYUSH0-7/2_FullStack_MERN", logo: LOGOS.mern },
      { id: "3", company: "React Native", role: "मोबाइल ऐप डिज़ाइन", period: "अप्रैल 2026 – मई 2026", url: "https://github.com/PIYUSH0-7/3_React_Native", logo: LOGOS.reactNative },
      { id: "4", company: "Advanced DSA Coding", role: "प्रतियोगी प्रोग्रामिंग", period: "जून 2026 – जुलाई 2026", url: "https://github.com/PIYUSH0-7/4_Advanced_DSA_Coding", logo: LOGOS.dsa },
      { id: "5", company: "Agentic AI Vibe Coding", role: "एआई वर्कफ़्लो ऑटोमेशन", period: "अगस्त 2026 – सितंबर 2026", url: "https://github.com/PIYUSH0-7/5_Agentic_AI_Vibe_Coding", logo: LOGOS.ai },
      { id: "6", company: "Soft Skills", role: "बातचीत अउर नेतृत्व", period: "दिसंबर 2025 – अभी तक", url: "https://github.com/PIYUSH0-7/6_Soft_Skills", logo: LOGOS.softSkills }
    ],
    education: [
      { id: "1", institution: "ABES इंजीनियरिंग कॉलेज, गाजियाबाद", program: "बी.टेक (इफॉर्मेशन टेक्नोलॉजी)", period: "2023 – 2027", logo: LOGOS.abes, url: "https://abes.ac.in/" },
      { id: "2", institution: "जिंगल बेल्स पब्लिक स्कूल, बरेली", program: "कक्षा 12 (सीबीएसई)", period: "2023", logo: LOGOS.school, url: "https://www.jbsbareilly.com/" },
      { id: "3", institution: "जिंगल बेल्स पब्लिक स्कूल, बरेली", program: "कक्षा 10 (सीबीएसई)", period: "2021", logo: LOGOS.school, url: "https://www.jbsbareilly.com/" }
    ],
    projects: [
      { id: "1", title: "DSA with Python", period: "दिसंबर 2025", description: "पायथन के इस्तेमाल से डेटा स्ट्रक्चर अउर एल्गोरिदम के बुनियादी ट्रेनिंग, जे समस्या सुलझावे अउर कंपीटिटिव कोडिंग पर फोकस बा।", tech: ["Python", "Algorithms", "GitHub", "VS Code"], source: "https://github.com/PIYUSH0-7/1_DSA_with_Python", icon: ICONS.python, website: "#" },
      { id: "2", title: "FullStack MERN", period: "फरवरी 2026", description: "MERN स्टैक के इस्तेमाल से पूरा वेब एप्लिकेशन बनावल गइल, जेमे फ्रंटएंड, बैकएंड अउर डिप्लॉयमेंट शामिल बा।", tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "GitHub Copilot", "Vercel", "Railway"], source: "https://github.com/PIYUSH0-7/2_FullStack_MERN", icon: ICONS.mern, website: "#" },
      { id: "3", title: "React Native", period: "अप्रैल 2026", description: "React Native के साथ क्रॉस-प्लेटफ़ॉर्म मोबाइल ऐप विकास, UI/UX अउर परफॉरमेंस पर ध्यान देके।", tech: ["React Native", "TypeScript", "Expo", "Android Studio", "Mobile UI/UX"], source: "https://github.com/PIYUSH0-7/3_React_Native", icon: ICONS.reactNative, website: "#" },
      { id: "4", title: "Advanced DSA Coding", period: "जून 2026", description: "प्रतियोगी प्रोग्रामिंग अउर इंटरव्यू खातिर एडवांस समस्या समाधान तकनीक।", tech: ["Python", "TypeScript", "Jest", "Algorithms", "Competitive Coding"], source: "https://github.com/PIYUSH0-7/4_Advanced_DSA_Coding", icon: ICONS.code, website: "#" },
      { id: "5", title: "Agentic AI Vibe Coding", period: "अगस्त 2026", description: "एआई टूल्स, बैकएंड ऑर्केस्ट्रेशन अउर डॉकर के इस्तेमाल से ऑटोमेशन वर्कफ़्लो के खोज।", tech: ["Node.js", "NestJS", "Docker", "GitHub Copilot", "AI Workflows"], source: "https://github.com/PIYUSH0-7/5_Agentic_AI_Vibe_Coding", icon: ICONS.ai, website: "#" }
    ],
    hackathons: [
      { id: "1", title: "Academia 077 (स्मार्ट छात्र सहायक ऐप)", location: "प्रोजेक्ट", date: "अक्टूबर 2025", description: "पायथन के इस्तेमाल से एगो लेक्चर-नोट जेनरेटर अउर स्टूडेंट हेल्प प्लेटफ़ॉर्म बनावल गइल।", logo: LOGOS.shield077, url: "#" },
      { id: "2", title: "Krishna07 – भगवद गीता एआई बॉट", location: "प्रोजेक्ट", date: "सितंबर 2026", description: "एगो इंटरैक्टिव चैटबॉट बनावल गइल जहाँ एनिमेटेड कृष्णा भगवद गीता से रउआ सवाल के जवाब देवेला।", logo: LOGOS.shieldK07, url: "#" },
      { id: "3", title: "Saksham07 – छात्र करियर मार्गदर्शन एआई", location: "प्रोजेक्ट", date: "नवंबर 2026", description: "करियर अउर पढ़ाई में मदद करे वाला एगो एआई असिस्टेंट बनावल गइल।", logo: LOGOS.shieldS07, url: "#" }
    ]
  },

  // JAPANESE
  jp: {
    profile: {
      name: "ピユシュ・ガングワール",
      role: "フルスタック & AI エンジニア",
      about: "MERN、PythonベースのDSA、クロスプラットフォーム開発、およびエージェントAIのスキルを構築しているB.Tech IT学生。",
      avatar: "./profile.jpg",
      url: "https://github.com/PIYUSH0-7",
      email: "gangwarpiyush827@gmail.com",
      phone: "+918923845912",
      location: "ガーズィヤーバード、ウッタル・プラデーシュ州"
    },
    sections: {
      about: "プロフィール",
      experience: "学習パスと経験",
      education: "学歴",
      skills: "スキル",
      projects: "コードポートフォリオ",
      projectsSubtitle: "私のコードポートフォリオ",
      projectsDesc: "アルゴリズムからフルスタックアプリケーションまで、私の技術プロジェクトと学習のマイルストーンのコレクション。",
      hackathons: "制作物",
      hackathonsTitle: "モノづくりが好きです",
      hackathonsDesc: "現実世界の学生やキャリアの問題を解決するために開発された革新的なツールとAI搭載アプリケーション。",
      contact: "お問い合わせ",
      contactTitle: "お問い合わせ",
      contactDesc: "ソフトウェア開発、AIワークフロー、およびフルスタックエンジニアリングの就職活動を積極的に行っています。"
    },
    experience: [
      { id: "1", company: "DSA with Python", role: "アルゴリズムと問題解決", period: "2025年12月 – 2026年1月", url: "https://github.com/PIYUSH0-7/1_DSA_with_Python", logo: LOGOS.python },
      { id: "2", company: "FullStack MERN", role: "Webアプリ開発", period: "2026年2月 – 2026年3月", url: "https://github.com/PIYUSH0-7/2_FullStack_MERN", logo: LOGOS.mern },
      { id: "3", company: "React Native", role: "モバイルアプリ設計", period: "2026年4月 – 2026年5月", url: "https://github.com/PIYUSH0-7/3_React_Native", logo: LOGOS.reactNative },
      { id: "4", company: "Advanced DSA Coding", role: "競技プログラミング", period: "2026年6月 – 2026年7月", url: "https://github.com/PIYUSH0-7/4_Advanced_DSA_Coding", logo: LOGOS.dsa },
      { id: "5", company: "Agentic AI Vibe Coding", role: "AIワークフロー自動化", period: "2026年8月 – 2026年9月", url: "https://github.com/PIYUSH0-7/5_Agentic_AI_Vibe_Coding", logo: LOGOS.ai },
      { id: "6", company: "Soft Skills", role: "コミュニケーションとリーダーシップ", period: "2025年12月 – 現在", url: "https://github.com/PIYUSH0-7/6_Soft_Skills", logo: LOGOS.softSkills }
    ],
    education: [
      { id: "1", institution: "ABES工科大学、ガーズィヤーバード", program: "情報技術学士 (B.Tech)", period: "2023年 – 2027年", logo: LOGOS.abes, url: "https://abes.ac.in/" },
      { id: "2", institution: "ジングルベル・パブリックスクール、バレーリー", program: "12年生 (CBSE)", period: "2023年", logo: LOGOS.school, url: "https://www.jbsbareilly.com/" },
      { id: "3", institution: "ジングルベル・パブリックスクール、バレーリー", program: "10年生 (CBSE)", period: "2021年", logo: LOGOS.school, url: "https://www.jbsbareilly.com/" }
    ],
    projects: [
      { id: "1", title: "DSA with Python", period: "2025年12月", description: "Pythonを使用したデータ構造とアルゴリズムの基礎トレーニング。問題解決と競技コーディングに重点を置いています。", tech: ["Python", "Algorithms", "GitHub", "VS Code"], source: "https://github.com/PIYUSH0-7/1_DSA_with_Python", icon: ICONS.python, website: "#" },
      { id: "2", title: "FullStack MERN", period: "2026年2月", description: "MERNスタックを使用したエンドツーエンドのWebアプリケーション開発。フロントエンド、バックエンド、およびデプロイメントをカバーします。", tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "GitHub Copilot", "Vercel", "Railway"], source: "https://github.com/PIYUSH0-7/2_FullStack_MERN", icon: ICONS.mern, website: "#" },
      { id: "3", title: "React Native", period: "2026年4月", description: "UI/UXとパフォーマンスの最適化に重点を置いた、React Nativeによるクロスプラットフォームモバイルアプリ開発。", tech: ["React Native", "TypeScript", "Expo", "Android Studio", "Mobile UI/UX"], source: "https://github.com/PIYUSH0-7/3_React_Native", icon: ICONS.reactNative, website: "#" },
      { id: "4", title: "Advanced DSA Coding", period: "2026年6月", description: "競技プログラミングと技術面接のための高度な問題解決と最適化技術。", tech: ["Python", "TypeScript", "Jest", "Algorithms", "Competitive Coding"], source: "https://github.com/PIYUSH0-7/4_Advanced_DSA_Coding", icon: ICONS.code, website: "#" },
      { id: "5", title: "Agentic AI Vibe Coding", period: "2026年8月", description: "AIツール、バックエンドオーケストレーション、コンテナ化されたデプロイメントを使用したエージェントワークフローと自動化の探求。", tech: ["Node.js", "NestJS", "Docker", "GitHub Copilot", "AI Workflows"], source: "https://github.com/PIYUSH0-7/5_Agentic_AI_Vibe_Coding", icon: ICONS.ai, website: "#" }
    ],
    hackathons: [
      { id: "1", title: "Academia 077 (スマート学生アシスタント)", location: "プロジェクト", date: "2025年10月", description: "Pythonを使用して、現実世界の学術的有用性に焦点を当てた講義ノートジェネレーターと学生支援プラットフォームを開発しました。", logo: LOGOS.shield077, url: "#" },
      { id: "2", title: "Krishna07 – バガヴァッド・ギーターAIボット", location: "プロジェクト", date: "2026年9月", description: "アニメーション化されたクリシュナがバガヴァッド・ギーターからユーザーの質問に答えるインタラクティブなチャットボットを作成しました。", logo: LOGOS.shieldK07, url: "#" },
      { id: "3", title: "Saksham07 – 学生キャリア指導AI", location: "プロジェクト", date: "2026年11月", description: "キャリア評価とパーソナライズされた学習推奨を提供するAI搭載アシスタントを構築しました。", logo: LOGOS.shieldS07, url: "#" }
    ]
  }
};
