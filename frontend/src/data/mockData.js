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
          type: "text",
          text: "CRS"
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
          type: "text",
          text: "QEMU"
        },
        links: [
          {
            label: "View RFC Patch",
            url: "https://github.com/qemu"
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
          type: "text",
          text: "BITS"
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
          type: "text",
          text: "MCP"
        }
      }
    ]
  },
  {
    name: "Team Member",
    isPlaceholder: true
  },
  {
    name: "Team Member",
    isPlaceholder: true
  }
];
