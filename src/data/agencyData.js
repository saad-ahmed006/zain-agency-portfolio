export const heroStats = [
  { value: '8+', label: 'Years of execution' },
  { value: '42', label: 'Brands launched' },
  { value: '96%', label: 'Client retention' },
]

export const statsData = [
  { value: '120+', label: 'Projects Done' },
  { value: '96%', label: 'Satisfaction Rate' },
  { value: '4', label: 'Specialist Team' },
]

export const servicesData = [
  {
    id: 'website-development',
    title: 'Website Development',
    description:
      'Conversion-first websites that combine clear messaging, premium visuals, and seamless performance.',
    icon: 'globe',
    accent: '#E86132',
    points: ['UX strategy', 'Responsive builds', 'Conversion optimization'],
  },
  {
    id: 'app-development',
    title: 'App Development',
    description:
      'Product experiences engineered for user delight, retention, and business growth across mobile platforms.',
    icon: 'smartphone',
    accent: '#F0835C',
    points: ['Mobile UX', 'Full-stack apps', 'Product refinement'],
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    description:
      'Fast-moving, high-impact video storytelling designed to stop the scroll and amplify brand recall.',
    icon: 'clapperboard',
    accent: '#F2A67D',
    points: ['Editing', 'Motion graphics', 'Campaign videos'],
  },
  {
    id: 'graphic-designing',
    title: 'Graphic Designing',
    description:
      'Premium visual identities and campaign assets that sharpen your message and deepen brand recognition.',
    icon: 'palette',
    accent: '#F6B7A6',
    points: ['Brand identity', 'Creative visuals', 'Social assets'],
  },
]

export const teamMembers = [
  {
    id: 'zain-azad',
    name: 'Zain Azad',
    role: 'Founder & Agency Director',
    title: 'Agency Lead, Business Strategy & Project Operations',
    bio: 'Zain leads the agency with a sharp business lens, aligning growth objectives, delivery systems, and client momentum into one focused roadmap.',
    avatar: 'ZA',
    focusAreas: ['Business Strategy', 'Client Growth', 'Operations'],
    skills: ['Leadership', 'Planning', 'Brand Positioning', 'Project Ops'],
  },
  {
    id: 'syed-muhammad-saad',
    name: 'Syed Muhammad Saad',
    role: 'Lead Web & Mobile App Developer',
    title: 'React.js, Full-Stack Architecture, App Engineering',
    bio: 'Saad designs scalable digital systems and builds polished user experiences across web and mobile with a strong engineering mindset.',
    avatar: 'SS',
    focusAreas: ['React.js', 'Full-Stack', 'App Engineering'],
    skills: ['React.js','Next js', 'Node.js', 'Architecture', 'UI Engineering'],
  },
  {
    id: 'asadullah',
    name: 'Asadullah',
    role: 'Senior Video Editor & Motion Graphics Specialist',
    title: 'Video Editing, Post-Production, VFX',
    bio: 'Asadullah transforms raw concepts into cinematic, retention-driven motion work built to feel premium and persuasive on every platform.',
    avatar: 'A',
    focusAreas: ['Video Editing', 'Post-Production', 'VFX'],
    skills: ['Editing', 'Motion Design', 'Color', 'Visual Storytelling'],
  },
  {
    id: 'sheikh-muzammil',
    name: 'Sheikh Muzammil',
    role: 'Lead Graphic Designer & Visual Artist',
    title: 'Brand Identity, UI/UX Design, Creative Visuals',
    bio: 'Muzammil creates distinctive brand systems and interface visuals that connect strategy, aesthetics, and memorable storytelling.',
    avatar: 'SM',
    focusAreas: ['Brand Identity', 'UI/UX', 'Creative Visuals'],
    skills: ['Brand Design', 'UI/UX', 'Art Direction', 'Visual Systems'],
  },
]

export const portfolioData = {
  videoEditingDriveUrl: 'https://drive.google.com/drive/folders/1i0suhM7cQyJh3p3A39903UOBQOUK52N5',
  graphicDesignDriveUrl: 'https://drive.google.com/your-graphics-portfolio-folder',
  websites: [
    {
      id: 'web-1',
      title: 'Okair Jewels',
      tagline: 'Full-Stack E-Commerce Jewellery Platform',
      description:
        'A premium, fully functional e-commerce web app built with custom database architecture, secure checkout, product management, and high-conversion UI.',
      techStack: ['React.js', 'Node.js', 'Express',, 'Database Architecture', 'Tailwind CSS'],
      liveUrl: 'https://www.okair.store',
      metrics: 'Live E-Commerce Brand',
    },
    {
      id: 'web-2',
      title: 'Royal Fumigation Services',
      tagline: 'Industrial & Commercial Pest Control Web App',
      description:
        'A high-performance corporate service web app featuring dynamic service listings, booking query engine, and scalable MongoDB integration.',
      techStack: ['Next.js', 'MongoDB', 'Tailwind CSS', 'REST API'],
      liveUrl: 'https://www.royalfumigation.services/',
      metrics: 'Commercial Web Application',
    },
    {
      id: 'web-3',
      title: 'HealthGru',
      tagline: 'Digital Health & Wellness Media Platform',
      description:
        'A fast, SEO-optimized content platform and health blog engine engineered for maximum performance, content delivery, and reader engagement.',
      techStack: ['Next.js', 'SEO Framework', 'Server Components'],
      liveUrl: 'https://www.healthgru.com/',
      metrics: 'Live Content Platform',
    },
    ,
    {
  id: "web-4",
  title: "The Gross Margin",
  tagline: "E-Commerce Analytics & Financial Margin Optimization Platform",
  description: "A modern, high-performance web platform engineered to help businesses and e-commerce operators analyze profit margins, optimize pricing strategies, and track revenue metrics seamlessly.",
  techStack: ["Next.js", "Tailwind CSS", "Node.js",'Express js','Mongo DB'],
  liveUrl: "https://www.thegrossmargin.com/",
  metrics: 'Financial Margin Optimization Platform',

}
  ],
  apps: [
    {
      id: 'app-1',
      name: 'Hundo App',
      tagline: 'International On-Demand Meal & Food Delivery Solution',
      targetAudience: 'Global / Overseas Market',
      description:
        'A cross-platform international meal ordering and food delivery ecosystem engineered for overseas markets with real-time tracking and seamless ordering flows.',
      features: [
        'International Meal Ordering System',
        'Real-Time Order & Delivery Tracking',
        'Multi-Currency & Secure Payments',
        'Customer & Vendor Interactive Dashboards',
      ],
      techStack: ['React Native / Flutter', 'Cloud Backend', 'Live Geolocation APIs'],
      appLink: 'https://play.google.com/store/apps/details?id=com.hundo.app&hl=en',
    },
    {
      id: 'app-2',
      name: 'Meri Gari',
      tagline: 'Heavy Logistics & Commercial Vehicle Transport Booking',
      targetAudience: 'Business & Fleet Operators',
      description:
        'An all-in-one commercial freight transport booking platform connecting businesses with Shahzore loaders, heavy freight trucks, and commercial transport for nationwide logistics.',
      features: [
        'Instant Commercial Transport Booking (Shahzore, Freight Trucks, Loaders)',
        'Nationwide Logistics & Fleet Route Tracking',
        'Upfront Rate Estimation & Driver Dispatch Engine',
        'Enterprise Transport Management Tools',
      ],
      techStack: ['Mobile App Architecture', 'Real-Time Tracking', 'Restful APIs'],
      appLink: '',
    },
  ],
}

export const portfolioProjects = [
  {
    id: 1,
    title: 'Website Development',
    category: 'Website Development',
    type: 'web_modal',
    description: 'High-converting digital experiences and responsive business platforms.',
  },
  {
    id: 2,
    title: 'App Development',
    category: 'App Development',
    type: 'app_modal',
    description: 'Mobile experiences engineered for speed, usability, and retention.',
  },
  {
    id: 3,
    title: 'Video Editing',
    category: 'Video Editing',
    type: 'drive_link',
    description: 'Campaign motion work, reels, and performance-driven storytelling.',
  },
  {
    id: 4,
    title: 'Graphic Designing',
    category: 'Graphic Designing',
    type: 'drive_link',
    description: 'Visual systems, campaign graphics, and brand storytelling assets.',
  },
]

export const portfolioFilters = [
  'All Work',
  'Website Development',
  'App Development',
  'Video Editing',
  'Graphic Designing',
]

export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We map the opportunity, business goals, audience, and product direction to shape a clear foundation.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We turn insights into refined positioning, messaging, and a digital roadmap built to convert.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Design, code, media, and product polish come together in a tightly managed build process.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We ship clean, tested experiences with a launch plan that supports growth and sustained traction.',
  },
]

export const testimonialsData = [
  {
    name: 'Ayesha Khan',
    role: 'Marketing Lead, Northstar',
    quote:
      'The team brought clarity, speed, and premium execution to every touchpoint. We saw better engagement within weeks of launch.',
  },
  {
    name: 'Usman Rafiq',
    role: 'Founder, Aster Labs',
    quote:
      'From vision to rollout, the strategy and design felt deeply aligned with our business goals. Everything was thoughtful and intentional.',
  },
  {
    name: 'Maham Tariq',
    role: 'Brand Manager, Vanta',
    quote:
      'The visual identity and campaign assets felt elevated and on-brand immediately. The work gave our launch a real competitive edge.',
  },
]

export const faqData = [
  {
    question: 'What kinds of projects do you take on?',
    answer:
      'We support brand launches, website builds, product marketing pages, app experiences, motion content, and complete visual systems for businesses that want a stronger digital presence.',
  },
  {
    question: 'How long does a typical engagement take?',
    answer:
      'Project timelines vary by scope, but most website and brand engagements run between 2 and 8 weeks, while larger product or multi-channel projects require a customized roadmap.',
  },
  {
    question: 'Can you work with an in-house team?',
    answer:
      'Absolutely. We often collaborate closely with founders, marketing teams, and internal stakeholders to extend capacity and ensure the final execution remains aligned with your business goals.',
  },
  {
    question: 'Do you handle strategy and execution together?',
    answer:
      'Yes. We combine strategy, design, development, and delivery under one workflow so the creative and technical work remain consistent from planning through launch.',
  },
]
