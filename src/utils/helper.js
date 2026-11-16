import Podcast1Img from "../assets/img/Podcast/webp/podcast-1.webp";
import Ep7Img from "../assets/img/Podcast/webp/ep7.webp";
import Podcast2Img from "../assets/img/Podcast/webp/podcast-2.webp";
import Ep6Img from "../assets/img/Podcast/webp/ep6.webp";
import Podcast3Img from "../assets/img/Podcast/webp/podcast-3.webp";
import Ep5Img from "../assets/img/Podcast/webp/ep5.webp";

export const HUB_CARD_DATA = [
  {
    icon: "podcast",
    heading: "Podcast",
    para: "We sit down with our host Deejay, founders, and CTOs to discuss their architectural decisions, the reality of the AI transition, and the strategies they are using right now.",
    btn: "Explore the Podcast",
  },
  {
    icon: "report",
    heading: "Monthly Report",
    para: "A curated summary of our writing from the past month, distilled into one easy-to-read report. We include the key stats, facts, and biggest news stories you might have missed.",
    btn: "Explore the Reports",
  },
  {
    icon: "book",
    heading: "Book",
    para: "The #1 Bestseller. A deep dive into the Waves framework, bringing together research, patterns, and strategies for leading innovation. A must-read for teams building scalable, resilient systems.",
    btn: "Explore the Book",
  },
  {
    icon: "pattern",
    heading: "Patterns",
    para: "A shared language to navigate the next wave. Explore the full library, including our 119-card deck and workshop poster, to map your strategy and anticipate what comes next.",
    btn: "Explore the Patterns",
  },
  {
    icon: "assesment",
    heading: "Assessment",
    para: "Built on our book and patterns. Measure your readiness, identify gaps, and generate a comprehensive strategic roadmap for your organization—delivered in just 30 minutes.",
    btn: "Explore the Assessment",
  },
  {
    icon: "hub",
    heading: "HUB ",
    para: "The central hub for the AI Native community, entrusted by hundreds of technology leaders. Access all our reports, models, conversations, and tools in one unified space.",
    btn: "Join the Community",
  },
];

// Page - Podcast
export const PLATFORM_DATA = [
  {
    icon: "spotify",
    name: "Spotify",
  },
  {
    icon: "apple",
    name: "Apple",
  },
  {
    icon: "youtube",
    name: "Youtube",
  },
  {
    icon: "amazon",
    name: "Amazon",
  },
];

export const EPISODES_DATA = [
  {
    slug: "why-ai-isnt-just-more-software",
    img: Podcast1Img,
    epImg: Ep7Img,
    Heading:
      "Why AI Isn't Just More Software: A Guide to ML, MLOps, and Reinforce\nment Learning",
    Para: "Why can't you apply Agile sprints to an AI project? This episode dives into why ML development is 'fuzzy' and non-linear, unlike traditional software. We explore the '\nnothing, nothing, something' problem that frustrates engineers and managers alike. Discover the real-world challenges of MLOps, from testing non-deterministic models to deployment.",
    BadgeOneWidth: "139px",
    BadgeTwoWidth: "79px",
    BadgeOne: "Machine Learning",
    BadgeTwo: "MLOPS",
    date: "October 28, 2025",
    tags: [
      "Machine Learning",
      "MLOPS",
      "Reinforcement Learning",
      "AI Strategy",
      "Software Engineering",
    ],
    description:
      "Why can't you apply Agile sprints to an AI project? This episode dives into why ML development is 'fuzzy' and non-linear, unlike traditional software. We explore the 'nothing, nothing, something' problem that frustrates engineers and managers alike. Discover the real-world challenges of MLOps, from testing non-deterministic models to deployment. The conversation also breaks down Reinforcement Learning (RL), explaining how it learns from exploration, the high-stakes risks, and its role in training LLMs.",
    host: "Deejay",
    guest: "Phil Winder",
    guestTitle: "CEO @ Winder.AI",
    linkedin: "https://www.linkedin.com/",
    highlights: [
      "Discusses why AI projects are 'fuzzy' and non-linear, unlike the prescriptive, plannable nature of traditional \n software engineering.",
      "Explains that ML models need to be 'massaged and babied' and often show 'nothing, nothing, something' \n progress, frustrating agile teams.",
      "Testing AI models is probabilistic, not pass/fail, requiring 'fuzzing' to find edge cases where the model \n lacks data.",
      "Reinforcement Learning (RL) is defined by its 'agency to explore' an environment, a key difference from \n other ML types.",
      "The biggest challenge in RL is the need for a safe simulation, as live exploration in industrial settings 'could \n be catastrophic.'",
      "'Offline Reinforcement Learning' is a powerful alternative that can train effective agents purely from pre-\nexisting logged data.",
      "Modern LLMs are already trained using RL, which uses human feedback to fine-tune models for better \n conversational behavior.",
    ],
  },

  {
    slug: "ai-on-nightmare-difficulty",
    img: Podcast2Img,
    epImg: Ep6Img,
    Heading:
      "AI on Nightmare Difficulty: Secure Code Generation in the US Governm\nent",
    Para: "In this episode, Deejay talks with Mike Gehard, Director of R&D at Rise8, a custom software development firm on a mission to create 'a future where fewer bad things happen because of bad software.' Mike explains how they navigate the highly regulated 'nightmare difficulty' environment, from adhering to strict NIST standards to handling classified data.",
    BadgeOneWidth: "172px",
    BadgeTwoWidth: "122px",
    BadgeOne: "Secure AI Development",
    BadgeTwo: "Government AI",
    date: "October 28, 2025",
    tags: ["Secure AI Development", "Government AI"],
    description:
      "In this episode, Deejay talks with Mike Gehard, Director of R&D at Rise8, a custom software development firm on a mission to create 'a future where fewer bad things happen because of bad software.' Mike explains how they navigate the highly regulated 'nightmare difficulty' environment, from adhering to strict NIST standards to handling classified data.",
    host: "Deejay",
    guest: "Mike Gehard",
    guestTitle: "Director of R&D @ Rise8",
    linkedin: "https://www.linkedin.com/",
    highlights: [
      "Mike Gehard, Director of R&D at Rise8, joins Deejay to talk about secure code generation with AI.",
      "Rise8 is a custom software development firm on a mission to create 'a future where fewer bad things happen because of bad software.'",
      "How the team navigates the highly regulated 'nightmare difficulty' environment of US government software.",
      "From adhering to strict NIST standards to handling classified data.",
    ],
  },

  {
    slug: "the-banker-who-built-an-ai-factory",
    img: Podcast3Img,
    epImg: Ep5Img,
    Heading: "The Banker Who Built An AI \n Factory",
    Para: "Nick Gushin's journey from 18 years in banking to teaching himself Python with ChatGPT. The develop fast, fail fast philosophy behind Swiss AI Chatbot Fact\nory.",
    BadgeOneWidth: "102px",
    BadgeTwoWidth: "151px",
    BadgeOne: "AI Chatbots",
    BadgeTwo: "Prompt Engineering",
    date: "October 28, 2025",
    tags: ["AI Chatbots", "Prompt Engineering"],
    description:
      "Nick Gushin's journey from 18 years in banking to teaching himself Python with ChatGPT. The develop fast, fail fast philosophy behind Swiss AI Chatbot Factory.",
    host: "Deejay",
    guest: "Nick Gushin",
    linkedin: "https://www.linkedin.com/",
    highlights: [
      "Nick Gushin's journey from 18 years in banking to teaching himself Python with ChatGPT.",
      "The 'develop fast, fail fast' philosophy behind Swiss AI Chatbot Factory.",
    ],
  },
];

export const cleanText = (str = "") =>
  str.replace(/\n/g, "").replace(/\s+/g, " ").trim();

export const getEpisodeBySlug = (slug) =>
  EPISODES_DATA.find((ep) => ep.slug === slug);

export const THEMES_DATA = [
  {
    icon: "themeArchitecture",
    num: "01",
    heading: "AI Architecture",
    para: "Strategies for building scalable systems that move beyond simple API integrations to true AI nativity.",
    paraMaxW: "max-w-76.75",
  },
  {
    icon: "themeCulture",
    num: "02",
    heading: "Organizational Culture",
    para: "Adapting team structures and workflows to accommodate the non-deterministic nature of AI development.",
    paraMaxW: "max-w-87",
  },
  {
    icon: "themeRoi",
    num: "03",
    heading: "Strategic ROI",
    para: "How to measure the actual business impact of AI and distinguish cost centers from value drivers.",
    paraMaxW: "max-w-76.75",
  },
  {
    icon: "themeBehavior",
    num: "04",
    heading: "Human Behavior",
    para: "Understanding how users and employees truly react to, adopt, or resist AI-driven changes.",
    paraMaxW: "max-w-76.75",
  },
  {
    icon: "themePatterns",
    num: "05",
    heading: "Transformation Patterns",
    para: "Identifying recurring historical signals to anticipate market shifts and avoid repeating past mistakes.",
    paraMaxW: "max-w-76.75",
  },
  {
    icon: "themeGovernance",
    num: "06",
    heading: "Governance & Safety",
    para: "Navigating the complexities of compliance, data privacy, and ethical deployment in regulated industries.",
    paraMaxW: "max-w-76.75",
  },
];

// Page - Monthly Report : Previous Waves
export const PREVIOUS_WAVES_DATA = [
  {
    icon: "reportChain",
    date: "Jul 22, 2025",
    readTime: "3 min read",
    title: "A Reference Architecture for Modern AI Platforms",
    points: [
      "This is the familiar world of platform engineering: CI/CD pipelines, GitOps, Kubernetes, and application deployment. Its job",
      "This is where all data-centric work happens, from ETL pipelines and data warehousing to the management of fe",
    ],
    summary:
      "A tension is emerging in many engineering organizations. The world of platform engineering, which we’ve spent years refining, is built on principles of stability and repeatability. Yet the world of AI development is inherently experimental, data-intensive, and iterative. When we try to force the exploratory work of machine learning i",
    btn: "Read Report",
  },
  {
    icon: "reportChip",
    date: "Jul 01, 2025",
    readTime: "3 min read",
    title: "How We Built an AI-Powered News Analyst with n8n and Gemini",
    points: [
      "This is the familiar world of platform engineering: CI/CD pipelines, GitOps, Kubernetes, and application deployment. Its job",
      "This is where all data-centric work happens, from ETL pipelines and data warehousing to the management of fe",
    ],
    summary:
      "Staying on top of AI news is becoming harder each week, as the sheer volume of updates and noise continues to grow. The firehose of news, announcements, and research papers has become a full-time job to manage. You know the feeling: trying to",
    btn: "Read Report",
  },
  {
    icon: "reportBot",
    date: "Jun 14, 2025",
    readTime: "3 min read",
    title:
      "Building a Slack-to-Atlassian A1 Chatbot with n8n, MCP, and Kubernetes",
    points: [
      "This is the familiar world of platform engineering: CI/CD pipelines, GitOps, Kubernetes, and application deployment. Its job",
      "This is where all data-centric work happens, from ETL pipelines and data warehousing to the management of fe",
    ],
    summary:
      "In this technical post, we’re going to bridge the critical gap between team collaboration in Slack and the official record in Atlassian. We’ll be using n8n as a developer-friendly automation engine, leveraging Model Context Protocol, and deploying ",
    btn: "Read Report",
  },
  {
    icon: "reportLeaf",
    date: "Jul 17, 2025",
    readTime: "3 min read",
    title: "Welcome to Waves of Innovation — here’s what its all about",
    points: [
      "This is the familiar world of platform engineering: CI/CD pipelines, GitOps, Kubernetes, and application deployment. Its job",
      "This is where all data-centric work happens, from ETL pipelines and data warehousing to the management of fe",
    ],
    summary:
      "Over the last few weeks, a lot of new people have joined our newsletter. If that’s you, welcome. This is Waves of Innovation by re:cinq. This isn’t just a podcast or newsletter. It’s a community built to make you ",
    btn: "Read Report",
  },
];

// Page - Monthly Report : Testimonials
export const TESTIMONIALS_DATA = [
  {
    quote:
      "“I loved last month’s report. The format is great if you don’t have a lot of time for reading—it’s super concise and easy to scan. It always has something interesting that I didn’t know about. Highly recommend!”",
  },
  {
    quote:
      "“I subscribed to the Waves of Innovation community and now receive these reports once a month. I honestly look forward to them. There is often very insightful content, so I usually send it to my team. It’s a great, pragmatic AI community that goes beyond just tech to cover humans, culture, and business.”",
  },
  {
    quote:
      "“I have been following Pini’s writing for years now. I like the way he thinks about the waves of innovation—how each wave is similar, with both recurring and new patterns. His content always lives up to my expectations.”",
  },
  {
    quote:
      "“I like how all the content is neutral. They always admit when they aren’t sure if this is the definitive path or how things will evolve, giving pros and cons for both sides. It gives you room to form your own opinion, whereas other newsletters try to force theirs upon you.”",
  },
  {
    quote:
      "“There’s so much content nowadays about AI that it’s getting boring. As a Transformation Leader, I’m more interested in the sides of AI people aren’t talking about—like behavior, culture, business, and humans. This community covers that and looks at it from a holistic approach.”",
  },
  {
    quote:
      "“I’ve known Michael for years. He always knows what he is talking about and never talks nonsense. I know people who have followed him for years because of his expertise and unique approach. You see that reflected in the content of this community.”",
  },
];
