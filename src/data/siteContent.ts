export type NavItem = {
  label: string;
  path: string;
  activePaths?: string[];
};

export type Technology = string;

export type PortraitIcon = "gear" | "globe" | "star" | "boxing-gloves";

export type PortraitQuadrant = {
  id: "web-ui" | "ai-ml" | "personal-life" | "full-stack";
  icon: PortraitIcon;
  number: "01" | "02" | "03" | "04";
  category: string;
  position: "topRight" | "bottomRight" | "bottomLeft" | "topLeft";
  description: string;
  technologies: Technology[];
};

export type FunFact = {
  icon: "rocket" | "lightbulb" | "users";
  title: string;
  theme: string;
  description: string;
};

export type CurrentFocusItem = {
  title: string;
  status: string;
};

export type ProjectMedia = {
  poster: string | null;
  posterAlt: string;
  video: {
    src: string;
    type: string;
    captionsSrc: string | null;
  } | null;
  screenshots: {
    src: string;
    alt: string;
  }[];
};

export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  purpose: string;
  problemSolution: string;
  role: string;
  technologies: Technology[];
  highlights: string[];
  status: string;
  githubUrl: string | null;
  demoUrl: string | null;
  futureImprovements: string | null;
  featured: boolean;
  media: ProjectMedia;
};

export type ContactLink = {
  id: "github" | "linkedin" | "email" | "phone" | "additional";
  label: string;
  href: string | null;
  displayValue: string;
  external: boolean;
};

export type FunExperiment = {
  title: string;
  summary: string;
  technologies: Technology[];
  thumbnail: string | null;
  routeOrUrl: string | null;
  status: string;
  accessibilityNotes: string;
};

export type WorldFactCategory = "Nature" | "Culture" | "Science" | "History";

export type WorldFact = {
  category: WorldFactCategory;
  place: string;
  fact: string;
};

export const siteContent = {
  personal: {
    name: "Pyae Sone Aung",
    preferredName: "Mitch",
    displayName: "Pyae Sone Aung (Mitch)",
    professionalLabel: "Graduate Software Developer Â· Full-Stack & Applied AI",
    profilePhoto: "/assets/profile/prof-headshot.png",
    intro:
      "First-Class BSc (Hons) Applied Computing graduate from the University of Huddersfield, focused on practical full-stack products and applied AI.",
    professionalSummary:
      "I'm Pyae Sone Aung, also known as Mitch, a First-Class BSc (Hons) Applied Computing graduate from the University of Huddersfield. I enjoy building thoughtful, practical software across full-stack web development and applied AI, especially when a real problem can be turned into a clear and usable experience. I'm currently looking for a graduate software development opportunity where I can contribute, keep learning and grow alongside an experienced team."
  },
  seo: {
    siteName: "Pyae Sone Aung (Mitch) - Graduate Software Developer",
    defaultDescription:
      "Graduate software developer portfolio for Pyae Sone Aung (Mitch), covering full-stack web development, applied AI and practical software projects.",
    socialPreviewPath: null as string | null
  },
  navigation: [
    { label: "Fun", path: "/fun" },
    { label: "Contact", path: "/contact" },
    { label: "About", path: "/", activePaths: ["/", "/about"] },
    { label: "Portfolio", path: "/portfolio" },
    { label: "CV", path: "/cv" }
  ] satisfies NavItem[],
  cv: {
    pdfPath: "/assets/cv/PyaeSoneAung_Resume_New.pdf",
    downloadFilename: "PyaeSoneAung_Resume_New.pdf"
  },
  portraitQuadrants: [
    {
      id: "web-ui",
      icon: "globe",
      number: "01",
      category: "Web & UI Design",
      position: "topRight",
      description:
        "I design project interfaces around real user flows, turning forms, dashboards and galleries into responsive pages that are easy to scan.",
      technologies: ["JavaScript", "TypeScript", "React", "HTML", "CSS"]
    },
    {
      id: "ai-ml",
      icon: "star",
      number: "02",
      category: "AI and Machine Learning",
      position: "bottomRight",
      description:
        "I trained image classifiers with cleaned datasets, transfer learning and evaluation metrics, including documented results from the handwashing project.",
      technologies: ["Python", "TensorFlow/Keras", "scikit-learn", "MobileNetV2", "Cleanlab", "Streamlit"]
    },
    {
      id: "personal-life",
      icon: "boxing-gloves",
      number: "03",
      category: "Active Life & Discipline",
      position: "bottomLeft",
      description:
        "Aside from programming, I like boxing and gym training. Keeping my body fit and strong helps me stay energetic and focused.",
      technologies: []
    },
    {
      id: "full-stack",
      icon: "gear",
      number: "04",
      category: "Full Stack Development",
      position: "topLeft",
      description:
        "I built WANTED and HomeShine as database-backed web apps, implementing auth, profiles, bookings, messaging and admin workflows.",
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"]
    }
  ] satisfies PortraitQuadrant[],
  funFacts: [
    {
      icon: "rocket",
      title: "An early start",
      theme: "Curiosity and accelerated learning",
      description:
        "I started university at 16 and completed my finals at 19, which shaped how I adapt, learn quickly and stay curious when the next challenge appears."
    },
    {
      icon: "lightbulb",
      title: "Where programming began",
      theme: "Genuine enthusiasm",
      description:
        "Scratch was my first programming language, and experimenting with it was what first made me fall in love with programming."
    },
    {
      icon: "users",
      title: "Burmese Society leadership",
      theme: "Vice President and event coordination",
      description:
        "I served as Vice President and Event Manager of the university's Burmese Society, helping organise events, coordinate people and manage responsibilities as part of a team."
    }
  ] satisfies FunFact[],
  worldFacts: [
    {
      category: "Nature",
      place: "Iceland",
      fact: "Iceland sits on the Mid-Atlantic Ridge, where the North American and Eurasian tectonic plates meet."
    },
    {
      category: "Nature",
      place: "Madagascar",
      fact: "Madagascar's long isolation helped many lemur species evolve there and nowhere else."
    },
    {
      category: "Nature",
      place: "Sahara",
      fact: "The Sahara is the world's largest hot desert, stretching across much of North Africa."
    },
    {
      category: "Culture",
      place: "Japan",
      fact: "Cherry blossom forecasts are followed across Japan each spring as the blooms move north."
    },
    {
      category: "Culture",
      place: "New Zealand",
      fact: "Aotearoa is the Maori name for New Zealand, often translated as land of the long white cloud."
    },
    {
      category: "Culture",
      place: "Venice",
      fact: "Venice is built across many small islands connected by canals, bridges and narrow walking routes."
    },
    {
      category: "Science",
      place: "Paris",
      fact: "The Eiffel Tower can become slightly taller in hot weather because iron expands with heat."
    },
    {
      category: "Science",
      place: "Orbit",
      fact: "GPS satellites account for relativity so their timing stays accurate enough for navigation."
    },
    {
      category: "Science",
      place: "Polar skies",
      fact: "Auroras appear when charged particles from the Sun interact with Earth's magnetic field and upper atmosphere."
    },
    {
      category: "History",
      place: "Egypt",
      fact: "The Rosetta Stone helped scholars read Egyptian hieroglyphs because it carried the same decree in multiple scripts."
    },
    {
      category: "History",
      place: "China",
      fact: "The Great Wall was expanded across different dynasties rather than built as one single project."
    },
    {
      category: "History",
      place: "Andes",
      fact: "The Inca road system connected communities across mountains, valleys and high-altitude landscapes."
    }
  ] satisfies WorldFact[],
  currentFocus: [
    {
      title: "Building WANTED V2",
      status:
        "Working on a new and improved version of WANTED, the roommate compatibility finder web application."
    },
    {
      title: "Exploring the next project",
      status: "To be announced."
    },
    {
      title: "Studying AWS",
      status: "Preparing for the AWS Certified Developer - Associate certification."
    }
  ] satisfies CurrentFocusItem[],
  projects: [
    {
      id: "wanted",
      title: "WANTED - Roommate Compatibility Finder",
      shortTitle: "WANTED",
      purpose:
        "A full-stack web application designed to help users discover potentially compatible flatmates through profiles, preferences and compatibility scoring.",
      problemSolution:
        "WANTED turns a stressful flatmate search into a structured workflow where people can build profiles, answer preference questions, filter discovery results and move from interest to conversation.",
      role: "Final-year project owner and developer",
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
      highlights: [
        "Authentication for account-based access",
        "Profile and quiz flows for flatmate preferences",
        "Discovery filters with compatibility scoring",
        "Likes, matches and inbox messaging"
      ],
      status:
        "Original final-year project completed; an improved WANTED V2 is currently being developed.",
      githubUrl: "https://github.com/pyaesoneaungmitch/wanted-flatmate-matching-platform",
      demoUrl: null,
      futureImprovements:
        "WANTED V2 is planned as the next iteration with improved product quality and implementation details.",
      featured: true,
      media: {
        poster: "/assets/projects/wanted/poster.png",
        posterAlt: "WANTED project poster",
        video: {
          src: "/assets/projects/wanted/full-demo.mp4",
          type: "video/mp4",
          captionsSrc: null
        },
        screenshots: [
          {
            src: "/assets/projects/wanted/discover-ui.png",
            alt: "WANTED discovery interface screenshot"
          },
          {
            src: "/assets/projects/wanted/profile-ui.png",
            alt: "WANTED profile interface screenshot"
          },
          {
            src: "/assets/projects/wanted/swipe-like.png",
            alt: "WANTED swipe-like interaction screenshot"
          }
        ]
      }
    },
    {
      id: "sketchguess-ai",
      title: "SketchGuess-AI",
      shortTitle: "SketchGuess-AI",
      purpose:
        "An interactive sketch-recognition mini-game inspired by Google's Quick, Draw!, where users draw and receive ranked predictions from a trained CNN.",
      problemSolution:
        "The project connects a trained convolutional model with an interactive drawing interface, giving players ranked predictions, confidence feedback and score-driven play.",
      role: "Applied-AI project developer",
      technologies: ["Python", "Streamlit", "TensorFlow/Keras", "NumPy", "Pillow"],
      highlights: [
        "Ten-class Quick, Draw! subset",
        "Model training and interactive prediction flow",
        "Top-three ranked predictions",
        "Confidence display and scoring"
      ],
      status: "Project repository available for inspection.",
      githubUrl: "https://github.com/pyaesoneaungmitch/sketchguess-ai",
      demoUrl: null,
      futureImprovements: null,
      featured: false,
      media: {
        poster: "/assets/projects/sketchguess-ai/poster.png",
        posterAlt: "SketchGuess-AI project poster",
        video: {
          src: "/assets/projects/sketchguess-ai/demo.mp4",
          type: "video/mp4",
          captionsSrc: null
        },
        screenshots: [
          {
            src: "/assets/projects/sketchguess-ai/ui-page.png",
            alt: "SketchGuess-AI drawing game interface screenshot"
          },
          {
            src: "/assets/projects/sketchguess-ai/demo-preview.png",
            alt: "SketchGuess-AI prediction preview screenshot"
          },
          {
            src: "/assets/projects/sketchguess-ai/demo-preview-2.png",
            alt: "SketchGuess-AI alternate prediction preview screenshot"
          }
        ]
      }
    },
    {
      id: "homeshine",
      title: "HomeShine - Cleaning Service Management Web App",
      shortTitle: "HomeShine",
      purpose:
        "A PHP and MySQL web application for managing a home-cleaning service, from customer registration and booking through to admin oversight.",
      problemSolution:
        "HomeShine turns the cleaning-service workflow into a database-backed system where customers can register, book services and manage bookings while administrators handle services, users and operational records.",
      role: "Full-stack web app developer",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap", "XAMPP"],
      highlights: [
        "Customer registration and login",
        "Booking workflow for customer service requests",
        "Admin dashboard for bookings, services and users",
        "Database-backed pages and forms"
      ],
      status: "Repository available; built as a PHP/MySQL/XAMPP full-stack web app.",
      githubUrl: "https://github.com/pyaesoneaungmitch/home-cleaning-service-webapp",
      demoUrl: null,
      futureImprovements:
        "Future polish could include richer cleaner-facing scheduling tools, online payment hardening and a modern responsive UI pass.",
      featured: false,
      media: {
        poster: "/assets/projects/homeshine/poster.png",
        posterAlt: "HomeShine project poster",
        video: null,
        screenshots: [
          {
            src: "/assets/projects/homeshine/first-clean-promotion.png",
            alt: "HomeShine first-clean promotion screenshot"
          },
          {
            src: "/assets/projects/homeshine/deep-bundle-promotion.png",
            alt: "HomeShine deep-cleaning bundle promotion screenshot"
          }
        ]
      }
    },
    {
      id: "handwashing-classifier",
      title: "Handwashing Image Classifier",
      shortTitle: "Handwashing Classifier",
      purpose:
        "A MobileNetV2 transfer-learning project that recognises eight handwashing stages from image data.",
      problemSolution:
        "The classifier explores how computer vision could support hygiene training by recognising handwashing stages from images, while clearly staying framed as an experimental academic prototype rather than production healthcare software.",
      role: "Machine-learning project developer",
      technologies: [
        "Python",
        "TensorFlow/Keras",
        "MobileNetV2",
        "Cleanlab",
        "scikit-learn",
        "OpenCV",
        "NumPy"
      ],
      highlights: [
        "8,538-image, eight-stage dataset with a balanced class structure",
        "70:30 stratified split with roughly 5,976 training and 2,562 test images",
        "Cleanlab review that identified 781 possible label issues",
        "Final test accuracy of 78.3% with 0.7814 weighted F1-score"
      ],
      status: "Academic AI-module prototype documented in the repository README.",
      githubUrl: "https://github.com/pyaesoneaungmitch/hand-washing-stage-image-classifier",
      demoUrl: null,
      futureImprovements:
        "Try EfficientNet or ResNet, add Grad-CAM explanations, improve difficult stage separation and wrap the model in a simple upload/prediction web app.",
      featured: false,
      media: {
        poster: "/assets/projects/handwashing-classifier/prediction.png",
        posterAlt: "Handwashing classifier prediction examples",
        video: null,
        screenshots: [
          {
            src: "/assets/projects/handwashing-classifier/final-model.png",
            alt: "Final MobileNetV2 model optimisation setup"
          },
          {
            src: "/assets/projects/handwashing-classifier/label-errors.png",
            alt: "Cleanlab label-error review and removal notes"
          }
        ]
      }
    }
  ] satisfies Project[],
  contact: {
    invitation:
      "I'm open to graduate software development opportunities, project conversations and opportunities to keep learning with a strong engineering team.",
    links: [
      {
        id: "email",
        label: "Email",
        href: "mailto:psaungmitch25@gmail.com",
        displayValue: "psaungmitch25@gmail.com",
        external: false
      },
      {
        id: "phone",
        label: "Phone",
        href: "tel:+447557036765",
        displayValue: "07557 036765",
        external: false
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/pyaesoneaung-mitch",
        displayValue: "linkedin.com/in/pyaesoneaung-mitch",
        external: true
      },
      {
        id: "github",
        label: "GitHub",
        href: "https://github.com/pyaesoneaungmitch",
        displayValue: "github.com/pyaesoneaungmitch",
        external: true
      }
    ] satisfies ContactLink[]
  },
  funExperiments: [] as FunExperiment[]
};


