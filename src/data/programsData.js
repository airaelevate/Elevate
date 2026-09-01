import web11Aug from '../assets/Webinar/11 Aug 2026.jpeg';
import web12Aug from '../assets/Webinar/12 Aug 2026.jpeg';
import web18Aug from '../assets/Webinar/18 Aug 2026.jpeg';
import web18AugAlt from '../assets/Webinar/18 Aug 2026-1.jpeg';
import web21Aug from '../assets/Webinar/21 Aug 2026.jpeg';
import web25Aug from '../assets/Webinar/25 Aug 2026.jpeg';
import web18Sep from '../assets/Webinar/18 Sep 2026.jpeg';
import web19Sep from '../assets/Webinar/19 Sep 2026.jpeg';
import web19SepAuto from '../assets/Webinar/19 Sep 2026 Automobile.jpg';
import web21Sep from '../assets/Webinar/21 Sep 2026.jpeg';
import web24Sep from '../assets/Webinar/24 Sep 2026.jpeg';
import web26Sep from '../assets/Webinar/26 Sep 2026.jpeg';
import web26SepCyber from '../assets/Webinar/26 Sep 2026 Cybersecurity.jpg';
import web27SepResearch from '../assets/Webinar/27 Sep 2026 Research.jpg';

// Workshop
import workshop_1 from '../assets/Workshop/Workshop 27th August_page-0001.jpg';
import wrkAIMarketing from '../assets/Workshop/AI Marketing Studio 25-27 Aug 2026.jpg';
import wrkCAFoundation from '../assets/Workshop/CA Foundation 25-27 Aug 2026.jpg';
import wrkPowerBI from '../assets/Workshop/Power BI Dashboard 28-30 Aug 2026.jpg';

export const programsData = {
  webinars: {
    id: 'PRODUCT 01',
    slug: 'webinars',
    title: 'Interactive Webinars',
    tagline: 'Live, expert-led interactive sessions',
    heroTitle: 'Master High-Demand Industry Skills Live',
    heroDesc: 'Power sessions with top industry leaders, AI strategists, and recruiters. Get practical insights that expand what your degree covers.',
    poster: web27SepResearch,
    posterTitle: 'RESEARCH METHODOLOGY FOR FACULTY & STUDENTS',
    posterSub: 'Live Interactive Session • 27th Sept 2026',
    regLink: 'https://forms.gle/CmNuQipsUAxECi57',
    waLink: 'https://chat.whatsapp.com/',
    repLink: 'https://wa.me/917022603588',
    stats: [
      { label: 'Session Duration', value: '2 Hours' },
      { label: 'Format', value: 'Live + Q&A' },
      { label: 'Certificate', value: 'E-Certificate' },
      { label: 'Offer Price', value: '₹49 (Reg. ₹99)' }
    ],
    upcomingList: [
      {
        id: 'web-up-sep-18',
        title: 'What Makes People Click? Digital Marketing Strategies That Work',
        tagline: 'Learn Smart. Market Smarter. Grow Faster.',
        date: 'Friday, 18 Sep 2026',
        time: '7:00 PM - 9:00 PM IST',
        fee: '₹49',
        originalFee: '₹99',
        speaker: 'Digital Marketing & AI Panel',
        speakerRole: 'AI Marketing & Performance Strategists',
        image: web18Sep,
        badge: 'Upcoming Live',
        desc: 'Discover the fundamentals of Digital Marketing integrated with AI tools. Learn real-world applications, AI content generation, and strategies that drive audience engagement.',
        takeaways: [
          'Basics of Digital Marketing & AI',
          'Using AI in Digital Marketing & Content Creation',
          'Real-World Scope of Digital Marketing & AI',
          'Interactive Discussion & Q&A Session'
        ],
        perks: 'Register under 24 hours & get a FREE E-Certificate!, Practical Skills, Growth Tools',
        regLink: 'https://forms.gle/CmNuQipsUAxECi57',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: false
      },
      {
        id: 'web-up-sep-19-auto',
        title: 'SKETCH TO STREET - The Future of Automobile Design',
        tagline: 'Innovate. Automate. Elevate.',
        date: 'Saturday, 19th Sept 2026',
        time: '07:00 PM – 09:00 PM (IST)',
        fee: '₹49',
        originalFee: '₹99',
        speaker: 'Automobile & Industrial Design Panel',
        speakerRole: 'Automotive Designers & CAD Tool Specialists',
        image: web19SepAuto,
        badge: 'Automobile Design Special',
        desc: 'Explore concept sketching, automotive styling, 3D modeling tools, and modern industry applications shaping the future of vehicle design.',
        takeaways: [
          'Concept Sketching & Automotive Styling',
          '3D Modelling & Digital Design Tools',
          'Applications in Modern Industry',
          'Benefits & Impact on Industries',
          'Q&A Session'
        ],
        perks: 'Learn from Industry Experts, Gain Practical Knowledge, Enhance Career Opportunities',
        regLink: 'https://forms.gle/nuE1VfapidivecvR6',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: false
      },
      {
        id: 'web-up-sep-19',
        title: 'Before You Start CA, Know This!',
        tagline: 'A practical guide for CA aspirants',
        date: 'Saturday, 19 Sep 2026',
        time: '7:00 PM - 9:00 PM IST',
        fee: '₹49',
        originalFee: '₹99',
        speaker: 'Industry CA Professionals & Mentors',
        speakerRole: 'Chartered Accountants & Financial Advisors',
        image: web19Sep,
        badge: 'CA Aspirants Special',
        desc: 'An essential practical roadmap for Chartered Accountancy aspirants. Learn how to plan smart, study better, avoid common pitfalls, and build the right mindset for success.',
        takeaways: [
          'Understand the CA Journey & Clear Roadmap',
          'Plan Smart & Study Better (Tips to Stay Ahead)',
          'Avoid Common Mistakes & Build the Right Mindset',
          'Expert Guidance & Real Stories from CA Achievers'
        ],
        perks: 'E-Certificate!, Expert Mentorship, Practical Study Tips',
        regLink: 'https://forms.gle/CmNuQipsUAxECi57',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: false
      },
      {
        id: 'web-up-sep-21',
        title: 'Can AI Replace Humans? The Real Answer',
        tagline: 'Innovate. Automate. Elevate.',
        date: 'Monday, 21 Sep 2026',
        time: '7:00 PM - 9:00 PM IST',
        fee: '₹49',
        originalFee: '₹99',
        speaker: 'AI Researchers & Industry Leaders',
        speakerRole: 'AI Strategists & Technology Mentors',
        image: web21Sep,
        badge: 'Trending AI Webinar',
        desc: 'Delve into the real capabilities and limitations of Artificial Intelligence compared to human creativity, emotional intelligence, and critical judgment in modern industries.',
        takeaways: [
          'Understanding the strengths and limitations of AI',
          'AI capabilities vs. human intelligence, creativity & judgment',
          'Applications, Benefits & Impact on Modern Industry',
          'Interactive Q&A Session with Industry Experts'
        ],
        perks: 'Learn from Industry Experts, Gain Practical Knowledge, Enhance Career Opportunities',
        regLink: 'https://forms.gle/nuE1VfapidivecvR6',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: false
      },
      {
        id: 'web-up-sep-24',
        title: 'The Design Thinking Journey: ReThink Everything.',
        tagline: 'Learn Smart. Market Smarter. Grow Faster.',
        date: 'Thursday, 24th Sep 2026',
        time: '7:00 PM - 9:00 PM IST',
        fee: '₹49',
        originalFee: '₹99',
        speaker: 'Product Design & UX Leaders',
        speakerRole: 'Design Strategists & Innovation Mentors',
        image: web24Sep,
        badge: 'Featured Live',
        desc: 'Master problem-solving and user-centric innovation. Learn empathy mapping, creative ideation, prototyping, and rapid testing to solve real-world challenges.',
        takeaways: [
          'Understand the User (Empathy & real user needs)',
          'Brainstorming & Creative Ideation Techniques',
          'Prototype & Experiment (Simple, testable solutions)',
          'Interactive Discussion & Q&A Session'
        ],
        perks: 'Register under 24 hours & get a FREE E-Certificate!, Practical Skills & Innovation Tools',
        regLink: 'https://forms.gle/CmNuQipsUAxECi57',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: false
      },
      {
        id: 'web-up-sep-26-cyber',
        title: 'Inside the World of Cybersecurity',
        tagline: 'Innovate. Automate. Elevate.',
        date: 'Saturday, 26th Sept 2026',
        time: '07:00 PM – 09:00 PM (IST)',
        fee: '₹49',
        originalFee: '₹99',
        speaker: 'Cybersecurity & Ethical Hacking Panel',
        speakerRole: 'Security Analysts & Cyber Threat Mentors',
        image: web26SepCyber,
        badge: 'Cybersecurity Special',
        desc: 'Understand digital threats, vulnerabilities, attacker tricks, modern attack vectors, and how cybersecurity safeguards modern industries.',
        takeaways: [
          'Understand threats, vulnerabilities & digital risks',
          'Recognize the tricks attackers use to target people',
          'Understand how modern attacks work',
          'Benefits & Impact on Industries',
          'Q&A Session'
        ],
        perks: 'Learn from Industry Experts, Gain Practical Knowledge, Enhance Career Opportunities',
        regLink: 'https://forms.gle/nuE1VfapidivecvR6',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: false
      },
      {
        id: 'web-up-sep-27-research',
        title: 'Research Methodology For Faculty and Students',
        tagline: 'Explore principles, processes, and practical tools of research',
        date: 'Sunday, 27th Sept 2026',
        time: '07:00 PM – 09:00 PM (IST)',
        fee: '₹49',
        originalFee: '₹99',
        speaker: 'Academic Research Mentors & Scholars',
        speakerRole: 'Faculty & Research Methodology Experts',
        image: web27SepResearch,
        badge: 'Faculty & Students Special',
        desc: 'Explore the principles, processes, and practical tools of research to build rigor, clarity, and impact in your academic and professional work.',
        takeaways: [
          'Understand research foundations and design',
          'Learn data collection and analysis techniques',
          'Apply methods to real academic contexts',
          'Strengthen academic and professional impact'
        ],
        perks: 'Register under 24 hours & get a FREE E-Certificate!, Practical Research Tools, Academic Impact',
        regLink: 'https://forms.gle/CmNuQipsUAxECi57',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: false
      }
    ],
    completedList: [
      {
        id: 'web-up-1',
        title: 'Business Beyond Classroom',
        tagline: 'Learn Smart. Build Stronger. Lead Tomorrow.',
        date: 'Tuesday, 18 Aug 2026',
        time: '7:00 PM - 9:00 PM IST',
        fee: '₹49',
        originalFee: '₹99',
        speaker: 'Corporate & Business Leaders',
        speakerRole: 'HR Leader & Corporate Mentor',
        image: web18Aug,
        badge: 'Completed',
        desc: 'Learn essential sales strategies for different customers, business overview, AI tools for sales, startup roadmaps, and communication improvement.',
        takeaways: [
          'Sales Strategy for Different Types of Customers',
          'Useful AI Tools for Sales & Startup Overview',
          'Roadmap to Launch a Successful Startup'
        ],
        perks: 'E-Certificate, Recorded Sessions, Exclusive Resources',
        regLink: 'https://forms.gle/3VrwrPxBddDgUShB7',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: true
      },
      {
        id: 'web-up-2',
        title: 'AI Driven Digital Marketing Bootcamp',
        tagline: 'Learn Smart. Market Smarter. Grow Faster.',
        date: 'Tuesday, 18 Aug 2026',
        time: '7:00 PM - 9:00 PM IST',
        fee: '₹49',
        originalFee: '₹99',
        speaker: 'Growth & Digital Marketing Panel',
        speakerRole: 'AI Marketing & Performance Strategists',
        image: web18AugAlt,
        badge: 'Completed',
        desc: 'Master AI tools for smarter marketing, campaign automation, data-driven strategy, AI content creation, and performance marketing.',
        takeaways: [
          'AI Tools for Smarter Marketing & Campaign Automation',
          'Data-Driven Strategy & AI-Powered Content Creation',
          'Performance Marketing with AI & Career Growth'
        ],
        perks: 'E-Certificate, Recorded Sessions, Templates & Cheatsheets',
        regLink: 'https://forms.gle/GPfCv7T6yRoVEmNY9',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: true
      },
      {
        id: 'web-up-3',
        title: 'How to Get Internships Using AI',
        tagline: 'Adapt. Upgrade. Lead the Future.',
        date: 'Friday, 21 Aug 2026',
        time: '7:00 PM - 9:00 PM IST',
        fee: '₹49',
        originalFee: '₹99',
        speaker: 'Talent Acquisition & AI Mentors',
        speakerRole: 'Career Strategists & Industry Practitioners',
        image: web21Aug,
        badge: 'Completed',
        desc: 'Unlock internship opportunities by leveraging AI tools for mindset shift, productivity, personal branding, and smart decision making.',
        takeaways: [
          'AI for Professionals: Mindset & Internship Opportunities',
          'Boost Productivity with AI Tools & Automation',
          'Build Your Personal Brand with AI Insights'
        ],
        perks: 'Free Certificate (24hr reg), Recorded Sessions, Resources',
        regLink: 'https://forms.gle/W6AZdbdbjQVxKfmE8',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: true
      },
      {
        id: 'web-up-4',
        title: 'Boost Your Placement Odds',
        tagline: 'Unlock. Network. Achieve.',
        date: 'Tuesday, 25 Aug 2026',
        time: '7:00 PM - 9:00 PM IST',
        fee: '₹49',
        originalFee: '₹99',
        speaker: 'Senior Placement & HR Leaders',
        speakerRole: 'Corporate Recruiters & Placement Mentors',
        image: web25Aug,
        badge: 'Completed',
        desc: 'Discover in-demand future skills, high-growth career paths, interview stand-out strategies, and LinkedIn profile optimization.',
        takeaways: [
          'In-Demand Future Skills & High-Growth Career Paths',
          'How to Stand Out in Campus Placements & Interviews',
          'Personal Branding & LinkedIn Optimization Framework'
        ],
        perks: 'E-Certificate, Recorded Sessions, Exclusive Resources',
        regLink: 'https://forms.gle/y5LRRMbUe5eUE8ZK7',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: true
      },
      {
        id: 'web-comp-1',
        title: 'Elevate Open House',
        tagline: 'Your Questions. Real Answers. Real Opportunities.',
        date: 'Tuesday, 11 Aug 2026',
        time: '7:00 PM - 9:00 PM IST',
        fee: 'Free of Cost',
        speaker: 'Team Elevate & Mentors',
        speakerRole: 'Career Advisors & Student Community Leads',
        image: web11Aug,
        badge: 'Completed',
        desc: 'Interactive student open house featuring fun activities, career talks, real Q&A, and networking opportunities across different colleges.',
        takeaways: [
          'Fun activities & real career conversations',
          'Ask questions, share thoughts & get real answers',
          'Connect with students across top colleges'
        ],
        perks: 'Community Access & Network Growth',
        regLink: 'https://forms.gle/1XwfiBpaR1jdmKjJ8',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: true
      },
      {
        id: 'web-comp-2',
        title: 'Robotics and Automation in Modern Manufacturing',
        tagline: 'Innovate. Automate. Elevate.',
        date: 'Wednesday, 12 Aug 2026',
        time: '10:00 AM - 12:00 PM IST',
        fee: '₹49',
        originalFee: '₹99',
        speaker: 'Automation & Industry 4.0 Experts',
        speakerRole: 'Robotics & Manufacturing Specialists',
        image: web12Aug,
        badge: 'Completed',
        desc: 'Comprehensive deep dive into robotics, automation systems, and real-world industrial applications transforming modern manufacturing.',
        takeaways: [
          'Introduction to Robotics in Modern Manufacturing',
          'Automation Technologies & Systems Overview',
          'Gain Practical Knowledge & Career Guidance'
        ],
        perks: 'Recorded Session & Industry Certificate',
        regLink: 'https://forms.gle/nuE1VfapidivecvR6',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: true
      }
    ]
  },

  workshops: {
    id: 'PRODUCT 02',
    slug: 'workshops',
    title: 'Hands-on Workshops',
    tagline: 'Practical learning & real project execution',
    heroTitle: 'Build Real Deliverables with Mentor Feedback',
    heroDesc: 'Interactive 2-3 day bootcamps where you practice live, solve real industry challenges, build portfolio projects, and earn verified skill credentials.',
    poster: wrkPowerBI,
    posterTitle: 'YOUR POWER BI DASHBOARD JOURNEY',
    posterSub: '3 Days Hands-on Workshop',
    regLink: 'https://forms.gle/hdGy5nzz3Bb4sCsUA',
    waLink: 'https://chat.whatsapp.com/',
    repLink: 'https://wa.me/917022603588',
    stats: [
      { label: 'Duration', value: '3 Days (2 Hrs/Day)' },
      { label: 'Format', value: 'Live Hands-on' },
      { label: 'Certificate', value: 'Industry Credential' },
      { label: 'Offer Price', value: '₹399 (Reg. ₹699)' }
    ],
    upcomingList: [
      {
        id: 'wrk-up-aug-28-pbi',
        title: 'Your Power BI Dashboard Journey',
        tagline: 'Learn By Doing — Transform Raw Data into Dashboards',
        date: '28th – 30th August 2026',
        time: '7:00 PM - 9:00 PM IST (3 Days)',
        fee: '₹399',
        originalFee: '₹699',
        speaker: 'Data Analytics & Power BI Mentors',
        speakerRole: 'Senior Data Analytics Consultants',
        image: wrkPowerBI,
        badge: 'Upcoming Live',
        desc: 'A practical Power BI workshop that helps students transform raw data into interactive dashboards, uncover meaningful insights, and make confident, data-driven decisions.',
        takeaways: [
          'Connect Your Data & Build Interactive Dashboards',
          'Visualize Insights, Analyze Trends & Share Impact',
          'Uncover meaningful insights for confident data-driven decisions'
        ],
        perks: 'Certificate Provided, Hands-on Dashboard Projects',
        regLink: 'https://forms.gle/hdGy5nzz3Bb4sCsUA',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: false
      },
      {
        id: 'wrk-up-aug-25-ai',
        title: 'AI Marketing Studio: Learn By Doing',
        tagline: 'Learn By Doing',
        date: '25th – 27th August 2026',
        time: '7:00 PM - 9:00 PM IST (3 Days)',
        fee: '₹399',
        originalFee: '₹699',
        speaker: 'AI & Growth Marketing Specialists',
        speakerRole: 'Digital Campaign & SEO Experts',
        image: wrkAIMarketing,
        badge: 'Upcoming Live',
        desc: 'A practical AI Marketing Studio workshop that helps students master digital campaigns, SEO, email marketing, video content, and analytics with real projects.',
        takeaways: [
          'Work on real projects with practical skills for the real world',
          'Get Experienced as a Fresher & Build Digital Campaigns',
          'SEO, Email Marketing, Social Media & Video Content'
        ],
        perks: 'Certificate Provided, Work on Real Projects',
        regLink: 'https://forms.gle/hdGy5nzz3Bb4sCsUA',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: false
      },
      {
        id: 'wrk-up-aug-25-ca',
        title: 'CA Foundation: Are You Exam Ready?',
        tagline: 'Build Your Professional Edge',
        date: '25th – 27th August 2026',
        time: '7:00 PM - 9:00 PM IST (3 Days)',
        fee: '₹399',
        originalFee: '₹699',
        speaker: 'CA Mentors & Accounting Leaders',
        speakerRole: 'Chartered Accountants & Financial Analysts',
        image: wrkCAFoundation,
        badge: 'Upcoming Live',
        desc: 'A practical CA Foundation workshop for students to strengthen accounting concepts, develop analytical skills, understand real-world business scenarios, and prepare confidently.',
        takeaways: [
          'Strengthen accounting concepts & analytical thinking',
          'Understand real-world business scenarios & financial statements',
          'Prepare confidently for exams and professional journey'
        ],
        perks: 'Certificate Provided, Professional Readiness Edge',
        regLink: 'https://forms.gle/hdGy5nzz3Bb4sCsUA',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: false
      }
    ],
    completedList: [
      {
        id: 'wrk-comp-1',
        title: 'UI/UX & Figma Design Systems Studio',
        tagline: 'Design Interactive App Prototypes',
        date: '02nd – 03rd Aug 2026',
        time: 'Weekend Sprint (10:00 AM - 1:00 PM)',
        speaker: 'Lead Product Designers',
        speakerRole: 'Lead Product Designer',
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800',
        badge: 'Completed',
        desc: 'Designed a mobile app interface in Figma. Wireframing, component auto-layout, interactive prototypes, and design handoff.',
        takeaways: [
          'User research & journey mapping fundamentals',
          'Figma auto-layout, variants & design tokens',
          'Creating interactive clickable prototypes'
        ],
        perks: 'Design Asset Library & Certificate',
        regLink: 'https://forms.gle/',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: true
      },
      {
        id: 'wrk-comp-2',
        title: 'Digital Personal Branding & LinkedIn Studio',
        tagline: 'Stand Out to Corporate Recruiters',
        date: '08th – 09th Aug 2026',
        time: 'Weekend Batch (2 Hours/Day)',
        speaker: 'Elevate Growth Mentors',
        speakerRole: 'Head of Growth, Elevate',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
        badge: 'Completed',
        desc: 'Optimized student profiles, created content calendar strategy, and learned how talent acquisition teams source candidates.',
        takeaways: [
          'LinkedIn profile headline & summary framework',
          'Content creation roadmap for student creators',
          'Direct networking script for industry outreach'
        ],
        perks: 'Profile Audit Checklist & Verified Certificate',
        regLink: 'https://forms.gle/',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: true
      }
    ]
  },

  courses: {
    id: 'PRODUCT 03',
    slug: 'courses',
    title: 'Value Added Certificate Courses',
    tagline: 'Structured certification & mentorship',
    heroTitle: 'Industry-Recognized Certifications That Elevate Your Degree',
    heroDesc: 'Multi-week structured certification batches with real capstone projects, expert mentors, and a verified credential for your LinkedIn & resume.',
    poster: 'https://elevate-skills-forward.lovable.app/assets/poster-course-DYoVQKkh.jpg',
    regLink: 'https://forms.gle/',
    waLink: 'https://chat.whatsapp.com/',
    repLink: 'https://wa.me/917022603588',
    stats: [
      { label: 'Duration', value: '4 - 12 Weeks' },
      { label: 'Projects', value: 'Capstone Projects' },
      { label: 'Evaluation', value: 'Mentor Assessed' },
      { label: 'Credential', value: 'Verifiable Digital Badge' }
    ],
    upcomingList: [
      {
        id: 'crs-1',
        title: 'Financial Modeling, Valuation & Analytics',
        date: 'Starts 01 Sep 2026',
        time: '4 Weeks • Live + Recorded Access',
        speaker: 'CA & Finance Advisory Mentors',
        speakerRole: 'Corporate Advisory Team',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
        badge: 'Certification Batch',
        desc: 'Master Excel financial modeling, discounted cash flow (DCF) valuation, three-statement modeling, and equity research fundamentals.',
        takeaways: [
          'Building 3-statement integrated financial models',
          'DCF valuation & comparable company analysis',
          'Capstone project with real company financial data'
        ],
        regLink: 'https://forms.gle/',
        waLink: 'https://chat.whatsapp.com/'
      },
      {
        id: 'crs-2',
        title: 'Applied Data Analytics & Python Specialization',
        date: 'Starts 05 Sep 2026',
        time: '6 Weeks • Weekend Live Masterclasses',
        speaker: 'Data Science Practitioners',
        speakerRole: 'Senior Data Analysts',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        badge: 'High Demand',
        desc: 'Learn Python data manipulation (Pandas, NumPy), SQL query optimization, Power BI dashboarding, and exploratory data analysis.',
        takeaways: [
          'End-to-end data processing with Pandas & NumPy',
          'SQL querying, joins, and database structuring',
          'Building interactive executive dashboards in Power BI'
        ],
        regLink: 'https://forms.gle/',
        waLink: 'https://chat.whatsapp.com/'
      },
      {
        id: 'crs-3',
        title: 'AI-Powered Product Management & Business Growth',
        date: 'Starts 10 Sep 2026',
        time: '4 Weeks • Intensive Cohort',
        speaker: 'Strategy & Product Leaders',
        speakerRole: 'Product Directors',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
        badge: 'Executive Certification',
        desc: 'Learn product roadmap building, user stories, GTM strategies, and how to integrate Generative AI tools into business operations.',
        takeaways: [
          'Writing PRDs (Product Requirement Documents)',
          'User metrics: CAC, LTV, Retention & Churn analysis',
          'Generative AI workflows for product strategy'
        ],
        regLink: 'https://forms.gle/',
        waLink: 'https://chat.whatsapp.com/'
      }
    ]
  },

  internships: {
    id: 'PRODUCT 04',
    slug: 'internships',
    title: 'Internship & Placement Assistance',
    tagline: 'Career accelerator & recruiter bridge',
    heroTitle: 'From Learning to Your First Offer Letter',
    heroDesc: 'Bridge the gap to your career with curated internship placements, 1-on-1 mock interview panels, profile building, and corporate hiring connections.',
    poster: 'https://elevate-skills-forward.lovable.app/assets/poster-placement-CwbKdW8l.jpg',
    regLink: 'https://forms.gle/',
    waLink: 'https://chat.whatsapp.com/',
    repLink: 'https://wa.me/917022603588',
    stats: [
      { label: 'Placement Help', value: '1-on-1 Guidance' },
      { label: 'Interviews', value: 'Mock HR Panels' },
      { label: 'Opportunities', value: 'Curated Roles' },
      { label: 'Community', value: 'Direct Recruiter Access' }
    ],
    upcomingList: [
      {
        id: 'int-1',
        title: 'Fall 2026 Corporate Internship Cohort',
        date: 'Applications Open • Rolling Admissions',
        time: '2 - 3 Months Internship',
        speaker: 'Corporate Hiring Partners',
        speakerRole: 'Recruiter Network',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800',
        badge: 'Internship Batch',
        desc: 'Get matched with partner companies for live internships in Software, Marketing, Finance, Operations, and Business Development.',
        takeaways: [
          'Direct matching with verified hiring companies',
          'Real project deliverables with accountable leads',
          'Certificate of Internship Completion & LOR'
        ],
        regLink: 'https://forms.gle/',
        waLink: 'https://chat.whatsapp.com/'
      },
      {
        id: 'int-2',
        title: 'Campus Placement Final Mile Accelerator',
        date: 'Starts 15 Sep 2026',
        time: '3 Weeks Placement Prep',
        speaker: 'Senior HR Directors',
        speakerRole: 'Industry Placement Board',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
        badge: 'Placement Accelerator',
        desc: 'Intensive placement training: resume audit, mock interview feedback from HR leaders, aptitude prep, and recruiter referrals.',
        takeaways: [
          '1-on-1 mock interview with senior HR feedback',
          'Resume & LinkedIn profile endorsement',
          'Exclusive entry to Elevate hiring drives'
        ],
        regLink: 'https://forms.gle/',
        waLink: 'https://chat.whatsapp.com/'
      }
    ]
  }
};
