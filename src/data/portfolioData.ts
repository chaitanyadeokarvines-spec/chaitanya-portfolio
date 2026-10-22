import { ProjectCaseStudy, ServiceItem, ProcessStep, SkillItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Chaitanya Deokar',
  brandName: 'CHAITANYA®',
  title: 'Social Media Marketer | Creative Strategist | Video Editor | AI & Data Science Graduate',
  email: 'chaitanyadeokarvines@gmail.com',
  instagram: 'https://www.instagram.com',
  linkedin: 'https://www.linkedin.com',
  location: 'Available Worldwide for Remote Projects & Consultations',
  heroBadge: 'AI × CREATIVITY',
  heroSecondary: 'Turning Ideas Into Impact.',
  heroDescription:
    "I'm Chaitanya Deokar, an AI & Data Science graduate with a passion for creative storytelling, digital marketing, and brand development. I combine technology, creativity, and strategy to create engaging content and help brands strengthen their digital presence.",
  aboutTitle: 'More Than Just Creative.',
  aboutSubtitle: 'Where Technology Meets Creativity.',
  aboutParagraphs: [
    "My name is Chaitanya Deokar, and I'm an AI & Data Science graduate with knowledge of AI technologies.",
    "Alongside my technical background, I have experience in creative work, including video editing, branding, and social media marketing.",
    "I've worked with established YouTubers, social media influencers, and architecture firms to create engaging content and strengthen their online presence.",
    "My approach combines creativity, technology, and strategic thinking to produce meaningful digital experiences."
  ],
  aboutBadges: [
    'Creative Strategy',
    'Social Media Marketing',
    'Video Editing',
    'AI & Technology'
  ]
};

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'hgpworld',
    title: 'HGPworld',
    client: 'HGPworld',
    category: 'YouTube Content & Branding',
    accentColor: '#FF6418',
    externalUrl: 'https://www.youtube.com/@HGPworld',
    shortDescription:
      'Creative content and digital branding work supporting the online presence of HGPworld.',
    tags: ['YouTube Production', 'Visual Branding', 'Thumbnail Design', 'Audience Retention'],
    caseStudy: {
      overview:
        'Collaborative creative content and digital branding effort dedicated to elevating the digital presentation and YouTube presence of HGPworld through engaging video narratives and sharp visual design.',
      objectives: [
        'Establish an instantly identifiable visual identity across YouTube uploads',
        'Optimize video editing pace to improve average view duration and viewer retention',
        'Design high-contrast, click-worthy custom thumbnails and brand packaging',
        'Align digital content with broader audience growth initiatives'
      ],
      role: 'Creative Strategist & Video Editor',
      creativeApproach:
        'Focused on narrative hooks in the opening 30 seconds, dynamic pacing, curated motion graphics, and bold typographic framing that aligns with modern digital consumption habits.',
      workShowcaseDescription:
        'Video packaging, episodic title animations, high-retention editing timeline layouts, and YouTube channel brand kit.',
      outcomeAndLearnings:
        'Successfully delivered consistent, high-standard content assets reinforcing brand equity, streamlined post-production workflows, and established repeatable creative guidelines for future releases.'
    }
  },
  {
    id: 'worldatlas',
    title: 'WorldAtlas',
    client: 'WorldAtlas',
    category: 'YouTube Content & Branding',
    accentColor: '#3467FF',
    externalUrl: 'https://www.youtube.com/@worldatlas',
    shortDescription:
      'Content-focused creative work supporting WorldAtlas and its digital presence.',
    tags: ['Educational Media', 'Visual Storytelling', 'Documentary Editing', 'Digital Branding'],
    caseStudy: {
      overview:
        'Content-focused creative support for WorldAtlas, bringing educational, geographical, and cultural narratives to life for a global YouTube audience through crisp editing and thoughtful visual branding.',
      objectives: [
        'Translate intricate geographic and educational research into captivating visual stories',
        'Maintain impeccable brand consistency across all digital content assets',
        'Improve viewer engagement through dynamic map visualizations and animated graphic overlays',
        'Strengthen YouTube content delivery with structured visual chapters'
      ],
      role: 'Content Strategist & Video Editor',
      creativeApproach:
        'Employed clean motion design, carefully timed soundtrack integration, and visual pacing designed to educate while captivating general interest audiences across age demographics.',
      workShowcaseDescription:
        'Motion graphic map overlays, documentary-style transitions, informative lower thirds, and video chapter title sequences.',
      outcomeAndLearnings:
        'Reinforced WorldAtlas as a go-to educational digital platform while deepening engagement and viewer retention on complex documentary topics.'
    }
  },
  {
    id: 'aye-mumbhai',
    title: 'Aye Mumbhai',
    client: 'Aye Mumbhai',
    category: 'Channel Growth & Revitalization',
    accentColor: '#FFD329',
    externalUrl: 'https://www.youtube.com/@AyeMumbhai',
    shortDescription:
      "Contributed to improving content strategy and supporting efforts to rebuild the channel's online presence.",
    tags: ['Channel Revitalization', 'Content Strategy', 'Urban Culture', 'Pacing Optimization'],
    caseStudy: {
      overview:
        "Contributed to improving overall content strategy and supporting strategic efforts to rebuild and modernize Aye Mumbhai's online presence and YouTube channel reach.",
      objectives: [
        'Analyze legacy content performance to pinpoint opportunities for editorial renewal',
        'Formulate a refreshed content format celebrating urban culture, streets, and human stories',
        'Upgrade editing rhythm with fast-paced contemporary cuts and upbeat sound design',
        'Re-engage existing subscribers while expanding algorithmic reach to new viewers'
      ],
      role: 'Creative Strategist & Channel Consultant',
      creativeApproach:
        'Conducted an in-depth audit of viewer drop-off points, developed a revitalized thumbnail and title taxonomy, and introduced punchy multi-camera edits designed to captivate urban storytelling enthusiasts.',
      workShowcaseDescription:
        'Revitalized episodic thumbnails, dynamic intro cuts, sound effect staging, and restructured content calendars.',
      outcomeAndLearnings:
        'Re-ignited channel momentum with improved audience interaction and laid down a structured content roadmap for sustained audience growth.'
    }
  },
  {
    id: 'prapti-chowdhury',
    title: 'Prapti Chowdhury',
    client: 'Prapti Chowdhury',
    category: 'Influencer Advertising Campaigns',
    accentColor: '#B794F4',
    externalUrl: 'https://www.instagram.com/prapti_chowdhuryy/',
    shortDescription:
      'Collaborated on advertising content and brand promotional campaigns for social media.',
    tags: ['Influencer Marketing', 'Sponsored Campaigns', 'Short-form Video', 'Brand Partnerships'],
    caseStudy: {
      overview:
        'Collaborated on high-impact advertising content and branded promotional campaigns on Instagram, balancing authentic creator voice with strict sponsor brand guidelines.',
      objectives: [
        'Produce seamless promotional Reels and Stories that feel organic to the creator’s feed',
        'Satisfy brand partnership deliverables while maximizing audience comments and shares',
        'Apply high-precision color grading, audio mixing, and kinetic typography',
        'Drive viewer action through subtle, natural call-to-actions'
      ],
      role: 'Creative Collaborator & Video Editor',
      creativeApproach:
        'Blended editorial lifestyle aesthetic with punchy short-form storytelling techniques, utilizing hook-based opening sequences and kinetic captions to ensure maximum scroll-stopping power.',
      workShowcaseDescription:
        'Short-form vertical video edits (9:16), animated brand callouts, aesthetic transition cuts, and promotional story assets.',
      outcomeAndLearnings:
        'Delivered brand partner campaigns that met high aesthetic standards while generating authentic organic conversation and positive sponsor feedback.'
    }
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'smm',
    title: 'SOCIAL MEDIA MANAGEMENT',
    description:
      'Managing business social media accounts, maintaining consistent branding, and creating content that connects with the right audience.',
    colorName: 'Orange',
    bgColor: '#FF6418',
    textColor: '#FFFFFF',
    borderColor: '#111111',
    iconType: 'social',
    deliverables: [
      'Profile & Grid Visual Overhaul',
      'Consistent Weekly Scheduling',
      'Community Engagement & Outreach',
      'Monthly Content Cadence Planning'
    ]
  },
  {
    id: 'strategy',
    title: 'CONTENT STRATEGY',
    description:
      'Developing creative strategies designed to increase audience engagement, strengthen brand identity, and support business growth.',
    colorName: 'Electric Blue',
    bgColor: '#3467FF',
    textColor: '#FFFFFF',
    borderColor: '#111111',
    iconType: 'strategy',
    deliverables: [
      'Audience Persona Research',
      'Content Pillar Architecture',
      'Competitor & Trend Analysis',
      'Long-Term Brand Positioning'
    ]
  },
  {
    id: 'creation',
    title: 'CONTENT CREATION & EDITING',
    description:
      'Creating, editing, and publishing engaging videos, social media posts, promotional content, and visual storytelling experiences.',
    colorName: 'Bright Yellow',
    bgColor: '#FFD329',
    textColor: '#111111',
    borderColor: '#111111',
    iconType: 'video',
    deliverables: [
      'High-Retention Video Editing',
      'YouTube Packaging & Thumbnails',
      'Short-Form Reels / Shorts (9:16)',
      'Motion Graphics & Sound Design'
    ]
  },
  {
    id: 'advertising',
    title: 'PAID ADVERTISING',
    description:
      'Planning and managing Facebook and Instagram advertising campaigns focused on reaching relevant audiences and supporting marketing goals.',
    colorName: 'Light Lavender',
    bgColor: '#E2D9F3',
    textColor: '#111111',
    borderColor: '#111111',
    iconType: 'ads',
    deliverables: [
      'Meta Ads Campaign Architecture',
      'Creative Ad Copy & Visuals',
      'Target Audience Segmentation',
      'Performance Tracking & Optimization'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    name: 'DISCOVER',
    description: 'Understand the brand, audience, challenges, and objectives.',
    color: '#FF6418',
    badgeBg: '#FF6418'
  },
  {
    number: '02',
    name: 'STRATEGIZE',
    description: 'Develop a clear creative direction and content strategy.',
    color: '#3467FF',
    badgeBg: '#3467FF'
  },
  {
    number: '03',
    name: 'CREATE',
    description: 'Transform ideas into engaging content, campaigns, and visual experiences.',
    color: '#FFD329',
    badgeBg: '#FFD329'
  },
  {
    number: '04',
    name: 'OPTIMIZE',
    description: 'Review performance, identify opportunities, and continuously improve.',
    color: '#111111',
    badgeBg: '#111111'
  }
];

export const SKILLS_LIST: SkillItem[] = [
  { name: 'Social Media Marketing', category: 'Marketing', colorClass: 'bg-[#FF6418] text-white border-black' },
  { name: 'Social Media Management', category: 'Marketing', colorClass: 'bg-[#111111] text-white border-black' },
  { name: 'Content Strategy', category: 'Strategy', colorClass: 'bg-[#3467FF] text-white border-black' },
  { name: 'Video Editing', category: 'Content', colorClass: 'bg-[#FFD329] text-black border-black' },
  { name: 'Branding', category: 'Strategy', colorClass: 'bg-[#FFFFFF] text-black border-black' },
  { name: 'Creative Direction', category: 'Strategy', colorClass: 'bg-[#FF6418] text-white border-black' },
  { name: 'Influencer Marketing', category: 'Marketing', colorClass: 'bg-[#E2D9F3] text-black border-black' },
  { name: 'Paid Advertising', category: 'Marketing', colorClass: 'bg-[#3467FF] text-white border-black' },
  { name: 'AI Technologies', category: 'Technical', colorClass: 'bg-[#111111] text-[#FFD329] border-black' },
  { name: 'Digital Content Creation', category: 'Content', colorClass: 'bg-[#FFD329] text-black border-black' }
];
