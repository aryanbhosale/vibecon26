// Mock data for team members
export const teamData = [
  {
    name: "Tanish Desai",
    photo: "https://customer-assets.emergentagent.com/job_f8f950c9-0e48-4739-9c73-c2c4fcde623f/artifacts/kbgmlamd_Image_26-03-26_at_8.48_AM.png",
    bio: "Builder, open-source contributor, and problem solver. Passionate about leveraging technology to create real-world impact.",
    tags: ["MCP Contributor", "QEMU Contributor", "Full-Stack Developer"],
    portfolio: "https://tanish111.github.io/tanishd/",
    github: "https://github.com/tanish111",
    isPlaceholder: false,
    keyContributions: [
      {
        name: "MCP Rust SDK",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXocOCzJuO37fZSfyuM-UvrMwujVYGODmpp2eh-fvfw&s=10",
        commits: "Multiple contributions",
        githubUrl: "https://github.com/modelcontextprotocol/rust-sdk/commits/main/?author=tanish111"
      },
      {
        name: "QEMU Project",
        logo: "https://canada1.discourse-cdn.com/flex036/uploads/mender/original/1X/81316d46fd53857998394469204a2805a1a2e415.png",
        commits: "Major patches",
        githubUrl: "https://github.com/qemu/qemu/commits?author=tanish111"
      }
    ],
    achievements: [
      {
        date: "May 2024",
        organization: "Coursera",
        title: "AI-Powered Grading System",
        description: "Built an AI agent that uses LLMs to read rubrics and grade scanned submissions automatically in the pre-MCP era.",
        highlights: [
          "Automated grading system using advanced LLM technology",
          "Acknowledged by Greg Hart, CEO of Coursera"
        ],
        logo: {
          type: "image",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Coursera-Logo.png/200px-Coursera-Logo.png"
        },
        impact: "Recognized by Coursera leadership for innovation"
      },
      {
        date: "2024",
        organization: "QEMU",
        title: "Rust Adoption Project Contributor",
        description: "Contributed to QEMU's Rust adoption initiative, solving key problems in virtual machine implementation.",
        highlights: [
          "Added full Rust tracing support in QEMU",
          "Submitted RFC PATCH 00/14 for tracetool Rust support (Major Patch)",
          "Fixed QEMU Rust Mode build issue on macOS (symbol compiler conflict)",
          "Optimized traditional tracing module, saving ~5 ASM instructions per trace call"
        ],
        logo: {
          type: "image",
          src: "https://canada1.discourse-cdn.com/flex036/uploads/mender/original/1X/81316d46fd53857998394469204a2805a1a2e415.png"
        },
        links: [
          {
            label: "View Commits",
            url: "https://github.com/qemu/qemu/commits?author=tanish111"
          }
        ]
      },
      {
        date: "2024",
        organization: "BITS Goa",
        title: "On-Campus Housing Allocation System",
        description: "Developed a comprehensive hostel allocation system for the Student Welfare Division of BITS Goa.",
        highlights: [
          "Enables students to form groups and get assigned rooms in close proximity",
          "Currently used annually by 900+ students at BITS Goa",
          "Streamlined the entire housing allocation process"
        ],
        logo: {
          type: "image",
          src: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/200px-BITS_Pilani-Logo.svg.png"
        },
        impact: "Serving 900+ students annually"
      },
      {
        date: "2025",
        organization: "MCP",
        title: "MCP Rust SDK Contributor",
        description: "Contributing to the Model Context Protocol Rust SDK with focus on improving client identification systems.",
        highlights: [
          "Added CIMD (Client ID) support for URL-based client identification",
          "Enhanced SDK functionality and developer experience"
        ],
        logo: {
          type: "image",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXocOCzJuO37fZSfyuM-UvrMwujVYGODmpp2eh-fvfw&s=10"
        },
        links: [
          {
            label: "View Commits",
            url: "https://github.com/modelcontextprotocol/rust-sdk/commits/main/?author=tanish111"
          }
        ]
      }
    ]
  },
  {
    name: "Mahir Ghadiali",
    photo: "/mahir-photo.jpg",
    bio: "Systems-focused builder with a strong interest in AI agents, distributed systems, and production-grade backend architecture. Passionate about shipping scalable, real-world systems end-to-end.",
    tags: ["AI Agents", "Rust Backend", "Distributed Systems", "Full-Stack Developer"],
    portfolio: "",
    github: "https://github.com/fizy069",
    isPlaceholder: false,
    keyContributions: [
      {
        name: "Multi-Agent Automation",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/200px-Cisco_logo.svg.png",
        commits: "Production system",
        githubUrl: "https://github.com/fizy069"
      },
      {
        name: "Rust Backend Systems",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
        commits: "8-crate workspace",
        githubUrl: "https://github.com/fizy069"
      }
    ],
    achievements: [
      {
        date: "2026",
        organization: "Cisco",
        title: "Multi-Agent Web Automation System",
        description: "Architected a multi-agent orchestration pipeline using Playwright MCP for autonomous web interaction and workflow execution.",
        highlights: [
          "Designed context-gathering agent to traverse component trees and map application flows",
          "Built downstream agents to synthesize and execute workflows across dynamic web interfaces",
          "Enabled fully automated end-to-end testing with zero manual intervention"
        ],
        logo: {
          type: "image",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/200px-Cisco_logo.svg.png"
        }
      },
      {
        date: "2025",
        organization: "Svision",
        title: "Production-Grade Monitoring & RBAC System",
        description: "Built a scalable backend system in Rust with real-time streaming, secure authentication, and modular architecture.",
        highlights: [
          "Designed 8-crate Rust workspace with strict compile-time boundaries",
          "Implemented WebSocket-based real-time monitoring system",
          "Engineered RBAC with fine-grained permissions and JWT auth with revocation",
          "Built analytics engine with background jobs to optimize DB load"
        ],
        logo: {
          type: "text",
          text: "SV"
        }
      },
      {
        date: "2025",
        organization: "Cisco",
        title: "AI Data Analytics Agent",
        description: "Developed an AI-powered agent for querying structured enterprise data using natural language.",
        highlights: [
          "Achieved 95%+ accuracy on financial and engineering datasets",
          "Built tool-calling system to parse and query Excel data (100K+ rows)",
          "Implemented SQL-like operators for filtering, aggregation, and joins"
        ],
        logo: {
          type: "image",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/200px-Cisco_logo.svg.png"
        }
      },
      {
        date: "2025",
        organization: "Personal Project",
        title: "ConversAI - AI Video Generation Platform",
        description: "Built a scalable AI video generation system with multilingual voice synthesis and automated content creation.",
        highlights: [
          "14+ AI characters with emotion-aware voice synthesis",
          "Reduced video rendering time by 40% via optimized pipeline",
          "Deployed on AWS with GPU instances, SQS queueing, and auto-scaling"
        ],
        logo: {
          type: "text",
          text: "AI"
        }
      },
      {
        date: "2024",
        organization: "BITS Goa",
        title: "BPI - High-Scale Payment System",
        description: "Developed a campus-wide payment platform handling high concurrency during a major fest.",
        highlights: [
          "Processed ₹6M+ transactions across 5,000+ users in 3 days",
          "Handled peak load of 20,000 requests/second",
          "Implemented secure token-based transaction system with logging"
        ],
        logo: {
          type: "image",
          src: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/200px-BITS_Pilani-Logo.svg.png"
        },
        impact: "Handled ₹6M+ in transactions at scale"
      },
      {
        date: "2024–2025",
        organization: "BITS Goa",
        title: "Head of Development",
        description: "Led engineering efforts for campus-wide applications and systems.",
        highlights: [
          "Managed 40+ developers across multiple teams",
          "Delivered 6 major products impacting 5,000+ students",
          "Maintained critical campus repositories and systems"
        ],
        logo: {
          type: "image",
          src: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/200px-BITS_Pilani-Logo.svg.png"
        }
      }
    ]
  },
  {
    name: "Aryan Bhosale",
    photo: "/aryan-photo.jpeg",
    bio: "Backend engineer at Alaan (YC W23), GSoC '24 alum, and open-source toolmaker. Builds systems that ship — from solar forecasting platforms to CLI tools used by hundreds of developers.",
    tags: ["GSoC '24", "GitHub CLI Contributor", "Open Source", "Backend Engineer"],
    portfolio: "",
    github: "https://github.com/aryanbhosale",
    isPlaceholder: false,
    keyContributions: [
      {
        name: "OpenAI Parameter Golf",
        logo: "/openai-logo.png",
        commits: "7 PRs, record: 0.1310 bpb",
        githubUrl: "https://github.com/openai/parameter-golf/pull/893"
      },
      {
        name: "GitHub CLI (cli/cli)",
        logo: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
        commits: "4 merged PRs",
        githubUrl: "https://github.com/cli/cli/pulls?q=is%3Apr+author%3Aaryanbhosale+is%3Amerged"
      },
      {
        name: "pick CLI",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
        commits: "40 commits, 866 tests",
        githubUrl: "https://github.com/aryanbhosale/pick"
      },
      {
        name: "Open Source Quartz Solar Forecast",
        logo: "https://avatars.githubusercontent.com/u/80507572",
        commits: "GSoC '24 contributor",
        githubUrl: "https://github.com/openclimatefix/Open-Source-Quartz-Solar-Forecast"
      }
    ],
    achievements: [
      {
        date: "2025–Present",
        organization: "Alaan (YC W23)",
        title: "SDE-1 Backend",
        description: "Building backend systems for a YC-backed fintech platform handling bills, reconciliations, and accounting integrations.",
        highlights: [
          "Integrated with Xero, QuickBooks, Odoo, Wafeq, and Microsoft Finance & Operations",
          "Implemented backend optimizations improving performance and reliability",
          "Collaborated on frontend delivering UI enhancements and resolving defects"
        ],
        logo: {
          type: "image",
          src: "/alaan-logo.png"
        }
      },
      {
        date: "Feb–Sep 2025",
        organization: "Kendal",
        title: "Full Stack Engineer",
        description: "Built core product features for a real-estate tech startup, integrating property APIs and building admin tooling.",
        highlights: [
          "Integrated PropertyFinder APIs for user profiles, listings, UAE compliance, and locations",
          "Built dynamic admin dashboard using Next.js, TypeScript, Tailwind CSS, and DaisyUI",
          "Reduced insight-gathering time by 50% with real-time performance metrics filtering",
          "Helped the company break even within 6 months of joining"
        ],
        logo: {
          type: "image",
          src: "/kendal-logo.png"
        }
      },
      {
        date: "Aug 2024–Feb 2025",
        organization: "GitHub",
        title: "GitHub CLI (gh) Contributor — 4 Merged PRs",
        description: "Contributed multiple features and fixes to GitHub's official CLI tool (cli/cli), all merged as external contributions.",
        highlights: [
          "Fixed gh project item-edit to allow --number 0 as a valid value (#10417)",
          "Added non-TTY output when a fork is newly created in gh repo fork (#10158)",
          "Fixed attestation verification for 2nd artifact without swapping order (#9532)",
          "Enabled offline verification using bundled attestations (#9523)"
        ],
        logo: {
          type: "image",
          src: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
        },
        links: [
          {
            label: "View PRs",
            url: "https://github.com/cli/cli/pulls?q=is%3Apr+author%3Aaryanbhosale+is%3Amerged"
          }
        ],
        impact: "4 merged PRs to GitHub's official CLI"
      },
      {
        date: "2026",
        organization: "OpenAI",
        title: "Parameter Golf Challenge Competitor",
        description: "Competing in OpenAI's parameter-golf challenge to build the most efficient language model within 16MB, trained in under 10 minutes on 8×H100 GPUs.",
        highlights: [
          "Submitted 20+ experimental runs exploring quantization, sliding window attention, and EMA techniques",
          "Implemented novel architectures including XSA, SmearGate, and BigramHash approaches",
          "Achieved competitive bits-per-byte scores on FineWeb validation dataset"
        ],
        logo: {
          type: "image",
          src: "/openai-logo.png"
        },
        links: [
          {
            label: "View Fork",
            url: "https://github.com/aryanbhosale/parameter-golf"
          }
        ]
      },
      {
        date: "2025",
        organization: "Personal Project",
        title: "pick — Universal Data Extraction CLI",
        description: "Built a Rust CLI tool that extracts values from JSON, YAML, TOML, .env, HTTP headers, logfmt, CSV, and more with a single unified syntax.",
        highlights: [
          "20+ GitHub stars with 866 tests and MIT licensed",
          "Published to 7 package managers (Cargo, Homebrew, npm, Snap, Chocolatey, WinGet, Docker)",
          "Auto-detects format, supports filtering, mutation, piping, and streaming",
          "~1.6MB binary, entire release pipeline auto-publishes on every push"
        ],
        logo: {
          type: "text",
          text: "PICK"
        },
        links: [
          {
            label: "GitHub Repo",
            url: "https://github.com/aryanbhosale/pick"
          }
        ],
        impact: "20+ stars, 7 package managers"
      },
      {
        date: "May–Aug 2024",
        organization: "Open Climate Fix",
        title: "Google Summer of Code 2024",
        description: "Enhanced the Open Source Quartz Solar Forecast by integrating live multi-inverter data for more accurate solar energy predictions.",
        highlights: [
          "Enhanced solar forecast accuracy by 20% through Enphase, GivEnergy, Solis, and Solarman integration",
          "Built interactive Streamlit dashboard for homeowners and grid operators",
          "Implemented OAuth 2.0 and robust API endpoints",
          "Dockerized the API for streamlined deployment across multiple inverter brands"
        ],
        logo: {
          type: "image",
          src: "/gsoc-logo.png"
        },
        links: [
          {
            label: "View Project",
            url: "https://github.com/openclimatefix/Open-Source-Quartz-Solar-Forecast"
          }
        ],
        impact: "20% improvement in solar forecast accuracy"
      },
      {
        date: "2023–2024",
        organization: "IEEE / ICOIN 2024",
        title: "Published Research — Digital Twinning on SoC",
        description: "Co-authored an IEEE-accepted paper on digital twinning of multiple sensors on a cloudlet system built using Qualcomm Snapdragon 410c.",
        highlights: [
          "Presented at the 38th International Conference on Information Networking (ICOIN 2024)",
          "Implemented real-time IMU sensor visualization using Django, Three.js, and Python",
          "Processed sensor data via UDP into dataframes with dynamic 3D frontend visualization"
        ],
        logo: {
          type: "image",
          src: "/ieee-logo.png"
        },
        links: [
          {
            label: "View Paper",
            url: "https://drive.google.com/file/d/1qZz0MJqfIGYSnthqncW6raxPIOJrrljj/view"
          }
        ]
      },
      {
        date: "Sep 2022–Jul 2025",
        organization: "BITS Pilani",
        title: "Practice School LMS — Core Developer",
        description: "Built and maintained the Practice School Learning Management System used across all three BITS Pilani campuses (Pilani, Goa, Hyderabad).",
        highlights: [
          "Serving 10,000+ students and professors across 3 campuses every semester",
          "Built admin portal, grading system, and quiz creation tools",
          "Optimized platform performance using ReactJS, NodeJS, ExpressJS, MongoDB, and Redis",
          "Implemented grade analysis and submission viewing in the mentor portal"
        ],
        logo: {
          type: "image",
          src: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/400px-BITS_Pilani-Logo.svg.png"
        },
        impact: "10,000+ users across all 3 BITS Pilani campuses"
      },
      {
        date: "Jul 2023–May 2024",
        organization: "Developers' Society, BITS Goa",
        title: "Head of Web Development",
        description: "Led the web development vertical at DevSoc, managing large-scale campus software projects and events.",
        highlights: [
          "Led and managed a team of 100+ junior developers across 16 production-level projects",
          "Revitalized DevFest 3.0, attracting over 1,000 participants nationwide",
          "Supervised curriculum development across multiple tech stacks"
        ],
        logo: {
          type: "image",
          src: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/400px-BITS_Pilani-Logo.svg.png"
        },
        impact: "100+ developers, 16 projects, 1000+ participants at DevFest"
      }
    ]
  }
];
