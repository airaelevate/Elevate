import web11Aug from '../assets/Webinar/11 Aug 2026.jpeg';
import web12Aug from '../assets/Webinar/12 Aug 2026.jpeg';
import web18Aug from '../assets/Webinar/18 Aug 2026.jpeg';
import web18AugAlt from '../assets/Webinar/18 Aug 2026-1.jpeg';
import web21Aug from '../assets/Webinar/21 Aug 2026.jpeg';
import web25Aug from '../assets/Webinar/25 Aug 2026.jpeg';

export const programsData = {
  webinars: {
    id: 'PRODUCT 01',
    slug: 'webinars',
    title: 'Interactive Webinars',
    tagline: 'Live, expert-led interactive sessions',
    heroTitle: 'Master High-Demand Industry Skills Live',
    heroDesc: 'Power sessions with top industry leaders, AI strategists, and recruiters. Get practical insights that expand what your degree covers.',
    poster: web21Aug,
    posterTitle: 'HOW TO GET INTERNSHIPS USING AI',
    posterSub: 'Live Interactive Session',
    regLink: 'https://forms.gle/W6AZdbdbjQVxKfmE8',
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
        id: 'web-up-1',
        title: 'Business Beyond Classroom',
        tagline: 'Learn Smart. Build Stronger. Lead Tomorrow.',
        date: 'Tuesday, 18 Aug 2026',
        time: '7:00 PM - 9:00 PM IST',
        fee: '₹49',
        originalFee: '₹99',
        speaker: 'Aravind Warrier & Business Leaders',
        speakerRole: 'HR Leader & Corporate Mentor',
        image: web18Aug,
        badge: 'Upcoming Live',
        desc: 'Learn essential sales strategies for different customers, business overview, AI tools for sales, startup roadmaps, and communication improvement.',
        takeaways: [
          'Sales Strategy for Different Types of Customers',
          'Useful AI Tools for Sales & Startup Overview',
          'Roadmap to Launch a Successful Startup'
        ],
        perks: 'E-Certificate, Recorded Sessions, Exclusive Resources',
        regLink: 'https://forms.gle/3VrwrPxBddDgUShB7',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: false
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
        badge: 'Upcoming Live',
        desc: 'Master AI tools for smarter marketing, campaign automation, data-driven strategy, AI content creation, and performance marketing.',
        takeaways: [
          'AI Tools for Smarter Marketing & Campaign Automation',
          'Data-Driven Strategy & AI-Powered Content Creation',
          'Performance Marketing with AI & Career Growth'
        ],
        perks: 'E-Certificate, Recorded Sessions, Templates & Cheatsheets',
        regLink: 'https://forms.gle/GPfCv7T6yRoVEmNY9',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: false
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
        badge: 'Popular Choice',
        desc: 'Unlock internship opportunities by leveraging AI tools for mindset shift, productivity, personal branding, and smart decision making.',
        takeaways: [
          'AI for Professionals: Mindset & Internship Opportunities',
          'Boost Productivity with AI Tools & Automation',
          'Build Your Personal Brand with AI Insights'
        ],
        perks: 'Free Certificate (24hr reg), Recorded Sessions, Resources',
        regLink: 'https://forms.gle/W6AZdbdbjQVxKfmE8',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: false
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
        badge: 'Placement Special',
        desc: 'Discover in-demand future skills, high-growth career paths, interview stand-out strategies, and LinkedIn profile optimization.',
        takeaways: [
          'In-Demand Future Skills & High-Growth Career Paths',
          'How to Stand Out in Campus Placements & Interviews',
          'Personal Branding & LinkedIn Optimization Framework'
        ],
        perks: 'E-Certificate, Recorded Sessions, Exclusive Resources',
        regLink: 'https://forms.gle/y5LRRMbUe5eUE8ZK7',
        waLink: 'https://chat.whatsapp.com/',
        isCompleted: false
      }
    ],
    completedList: [
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
    title: 'Upcoming Workshops',
    tagline: 'Hands-on practice & feedback sessions',
    heroTitle: 'Build Real Deliverables with Mentor Feedback',
    heroDesc: 'Small-format, interactive bootcamps where you practice live, solve industry challenges, and leave with tangible work added to your profile.',
    poster: 'https://elevate-skills-forward.lovable.app/assets/poster-workshop-BIQz4gOa.jpg',
    regLink: 'https://forms.gle/',
    waLink: 'https://chat.whatsapp.com/',
    repLink: 'https://wa.me/917022603588',
    stats: [
      { label: 'Format', value: '2-Day Bootcamp' },
      { label: 'Outcome', value: 'Live Project Asset' },
      { label: 'Mentorship', value: '1-on-1 Reviews' },
      { label: 'Certificate', value: 'Skill Credential' }
    ],
    upcomingList: [
      {
        id: 'wrk-1',
        title: 'Resume Sculpting & ATS Optimization Studio',
        date: '25 - 26 Aug 2026',
        time: 'Weekend Batch (4 Hours Total)',
        speaker: 'HR Talent Panel',
        speakerRole: 'Corporate Recruiters',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
        badge: 'Popular Workshop',
        desc: 'Bring your draft resume and rebuild it live. Get direct feedback to ensure your resume passes Applicant Tracking Systems (ATS).',
        takeaways: [
          'ATS resume formatting and keyword density',
          'Action-verb bullet point formulas for impact',
          'Personal portfolio website setup in 60 mins'
        ],
        regLink: 'https://forms.gle/',
        waLink: 'https://chat.whatsapp.com/'
      },
      {
        id: 'wrk-2',
        title: 'Full-Stack Development Sprint',
        date: '01 - 02 Sep 2026',
        time: 'Evening Intensive (6:00 PM - 8:30 PM)',
        speaker: 'Vikramaditya S.',
        speakerRole: 'Senior Full-Stack Architect',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800',
        badge: 'Hands-on Code',
        desc: 'Build and deploy a full-stack React & Node.js application from scratch. Learn git, API integration, and cloud hosting.',
        takeaways: [
          'Building RESTful APIs with Node.js & Express',
          'React component state & modern styling',
          'Deploying live to Vercel/Netlify with custom domain'
        ],
        regLink: 'https://forms.gle/',
        waLink: 'https://chat.whatsapp.com/'
      },
      {
        id: 'wrk-3',
        title: 'UI/UX & Figma Design Systems Studio',
        date: '05 - 06 Sep 2026',
        time: 'Weekend Sprint (10:00 AM - 1:00 PM)',
        speaker: 'Ananya Roy',
        speakerRole: 'Lead Product Designer',
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800',
        badge: 'Design Sprint',
        desc: 'Design a mobile app interface in Figma. Master wireframing, component auto-layout, interactive prototypes, and design handoff.',
        takeaways: [
          'User research & journey mapping fundamentals',
          'Figma auto-layout, variants & design tokens',
          'Creating interactive clickable prototypes'
        ],
        regLink: 'https://forms.gle/',
        waLink: 'https://chat.whatsapp.com/'
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
      { label: 'Duration', value: '4 - 6 Weeks' },
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
