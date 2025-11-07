const pemmActivities = [
  {
    title: "Consider how to integrate Privacy Engineering in the Development Process",
    summary: "Embed privacy considerations inside the software development lifecycle from ideation to deployment.",
    levels: [
      {
        number: 1,
        headline: "Privacy reviewed during initial phases",
        description: "Privacy is considered in an initial phase of development.",
        criteria: [
          "Privacy considerations are included in requirements analysis and design.",
          "Privacy aspects are checked at least once during development (e.g., pre-release)."
        ]
      },
      {
        number: 2,
        headline: "Privacy woven through all SDL phases",
        description: "Privacy is systematically integrated into each phase of the SDL.",
        criteria: [
          "Dedicated roles (such as privacy experts) guide developers and ensure accountability.",
          "Privacy reviews occur at predefined milestones (design reviews, sprint reviews, etc.).",
          "Templates and checklists support recurring evaluation of privacy aspects."
        ]
      },
      {
        number: 3,
        headline: "Privacy part of everyday DevSecOps",
        description: "Privacy is systematically integrated into every phase of the development lifecycle.",
        criteria: [
          "Privacy principles are part of daily agile/DevOps practices (user stories, CI/CD, acceptance criteria).",
          "Automated tools enforce privacy compliance (code scanning, data minimization checks, retention enforcement).",
          "Privacy requirements evolve dynamically with changes and are automatically verified."
        ]
      }
    ]
  },
  {
    title: "Define Privacy & Data Usage Policies",
    summary: "Create and maintain privacy policies that accurately reflect data usage, storage, and sharing.",
    levels: [
      {
        number: 1,
        headline: "Manual policies and audits",
        description: "Manual creation of privacy policies with documented audit procedures.",
        criteria: [
          "Documentation explains personal data usage, storage, and sharing practices.",
          "Basic audit procedures are documented and periodically executed for compliance."
        ]
      },
      {
        number: 2,
        headline: "Semi-automated policy lifecycle",
        description: "Semi-automated creation and maintenance of privacy policies.",
        criteria: [
          "Tools help extract and document processing activities (processing, storing, etc.).",
          "Policies receive regular semi-automated updates (e.g., monthly) reflecting operational changes.",
          "Audit and review processes leverage automation to ensure accurate documentation."
        ]
      },
      {
        number: 3,
        headline: "Fully automated policy governance",
        description: "Privacy policy management is fully integrated and aligned with the SDL.",
        criteria: [
          "Continuous monitoring compares policies against actual system behavior via code and text analysis.",
          "Policies are created and updated automatically in response to deviations or system changes."
        ]
      }
    ]
  },
  {
    title: "Privacy Threat Modeling",
    summary: "Identify and mitigate privacy threats across systems, data flows, and trust boundaries.",
    levels: [
      {
        number: 1,
        headline: "Manual threat modeling for external flows",
        description: "Manual focus on data flows and interactions involving external data recipients.",
        criteria: [
          "Documentation of data flows, actors, and system boundaries (e.g., data flow diagrams).",
          "Threat modeling frameworks (e.g., LINDDUN) are used to identify threats focusing on external data recipients.",
          "Threat documentation and mitigations emphasize external recipients."
        ]
      },
      {
        number: 2,
        headline: "System-wide manual threat analysis",
        description: "Manual threat modeling covers the entire system, including internal threats.",
        criteria: [
          "Trust boundaries are reduced to the minimum (often only the user).",
          "Detailed documentation of threats with corresponding mitigation strategies across the complete system."
        ]
      },
      {
        number: 3,
        headline: "(Semi-) automated threat modeling",
        description: "(Semi-) automated threat modeling integrated into SDLs.",
        criteria: [
          "Use of tools such as PPG or Privado.",
          "Threat modeling is integrated in SDL processes (e.g., CI/CD pipelines).",
          "Automation triggers analyses on SDL events (e.g., before releases)."
        ]
      }
    ]
  },
  {
    title: "Privacy Risk Assessment",
    summary: "Quantify and mitigate privacy risks across all data processing activities.",
    levels: [
      {
        number: 1,
        headline: "Manual assessment for external data recipients",
        description: "Risk assessment focuses on risks from external data flows.",
        criteria: [
          "Documentation of privacy threats and related risks.",
          "Risk calculations cover all data processing activities.",
          "Mitigations address risks when data is sent to external recipients."
        ]
      },
      {
        number: 2,
        headline: "Comprehensive manual risk assessment",
        description: "Manual risk assessment covers the entire system and all recipients.",
        criteria: [
          "Possible mitigations of the risks for all parts of data processing are considered."
        ]
      },
      {
        number: 3,
        headline: "Automated risk assessment in the SDL",
        description: "(Semi-) automated privacy risk assessment is integrated into SDLs.",
        criteria: [
          "Automated tools assess privacy risks.",
          "Risk assessment hooks into SDL workflows (e.g., CI/CD pipelines)."
        ]
      }
    ]
  },
  {
    title: "Define Privacy Requirements and Goals",
    summary: "Translate regulations and risks into concrete, traceable privacy requirements.",
    levels: [
      {
        number: 1,
        headline: "Regulation-driven requirements",
        description: "Requirements primarily satisfy basic regulatory obligations.",
        criteria: [
          "Basic recognition of relevant legal and regulatory requirements (e.g., GDPR).",
          "Requirements are reviewed reactively in response to regulatory changes or incidents."
        ]
      },
      {
        number: 2,
        headline: "Risk-informed requirements",
        description: "Requirements are systematically defined based on privacy risk management outputs.",
        criteria: [
          "System components, data flows, and data categories are documented.",
          "Privacy threats are identified and described (e.g., via threat trees).",
          "Mitigation measures addressing high-risk threats are clearly documented."
        ]
      },
      {
        number: 3,
        headline: "Continuous requirement lifecycle",
        description: "Privacy requirements are continuously reviewed and proactively updated.",
        criteria: [
          "All privacy requirements and associated risk documentation are reviewed regularly."
        ]
      }
    ]
  },
  {
    title: "Privacy Enhancing Architecture Design",
    summary: "Design architectures that embed privacy strategies with increasing automation.",
    levels: [
      {
        number: 1,
        headline: "Manual alignment of design and requirements",
        description: "Design principles and privacy strategies shape the architecture.",
        criteria: [
          "Privacy requirements are manually mapped to architectural components.",
          "Privacy strategies or patterns are evaluated and applied when possible."
        ]
      },
      {
        number: 2,
        headline: "Semi-automated architectural validation",
        description: "(Semi-) automated verification checks the application of privacy principles.",
        criteria: [
          "Architecture is specified formally or semi-formally to enable automated analysis.",
          "Architectural conformance is periodically validated against updated requirements."
        ]
      },
      {
        number: 3,
        headline: "SDL-integrated privacy architecture",
        description: "Privacy-enhancing design is fully integrated into the SDL.",
        criteria: [
          "Validation triggers automatically when features, data processing, or requirements change.",
          "Automated tools detect divergences between models and implementation.",
          "Continuous improvement leverages audit feedback, reviews, and performance."
        ]
      }
    ]
  },
  {
    title: "Static Privacy Analysis",
    summary: "Verify implementations against privacy requirements using static analysis techniques.",
    levels: [
      {
        number: 1,
        headline: "Manual checklist-based reviews",
        description: "Implementations are manually verified against privacy requirements.",
        criteria: [
          "Checklists guide assessments of implementation compliance.",
          "Assessment results are documented.",
          "Manual assessments occur on a fixed cadence (e.g., yearly)."
        ]
      },
      {
        number: 2,
        headline: "Semi-automated static analysis",
        description: "(Semi-) automated verification compares implementations to formalized requirements.",
        criteria: [
          "Privacy requirements are formalized to enable automated analysis.",
          "Semi-automated tools assess fulfillment of those requirements.",
          "Assessment results are automatically documented.",
          "Static analysis runs before each major release."
        ]
      },
      {
        number: 3,
        headline: "Continuous static privacy analysis",
        description: "Static privacy analysis is highly integrated and semi-automated.",
        criteria: [
          "Analyses execute automatically when each new feature development finishes.",
          "Test cases are automatically re-evaluated and updated when privacy requirements change."
        ]
      }
    ]
  },
  {
    title: "Dynamic Privacy Analysis",
    summary: "Exercise systems at runtime to validate privacy behavior and detect regressions.",
    levels: [
      {
        number: 1,
        headline: "Planned manual dynamic tests",
        description: "Dynamic privacy tests are systematically planned, defined, and documented.",
        criteria: [
          "Test scenarios include expected inputs and outputs.",
          "Execution results and issues are documented.",
          "Dynamic analysis runs on a fixed cadence (e.g., yearly)."
        ]
      },
      {
        number: 2,
        headline: "Semi-automated runtime validation",
        description: "Semi-automated dynamic testing validates runtime behavior against requirements.",
        criteria: [
          "Requirements are formalized for automated behavioral validation.",
          "Semi-automated tools detect runtime privacy violations.",
          "Logging and documentation of test results are automated.",
          "Dynamic analysis executes before each major release."
        ]
      },
      {
        number: 3,
        headline: "SDL-integrated dynamic testing",
        description: "Dynamic privacy testing is fully integrated into the SDL.",
        criteria: [
          "Analyses execute automatically after each feature is developed or modified.",
          "Test cases re-evaluate and update automatically when privacy requirements change."
        ]
      }
    ]
  },
  {
    title: "Privacy Impact Assessment",
    summary: "Ensure PIAs remain accurate by connecting them to development and monitoring.",
    levels: [
      {
        number: 1,
        headline: "One-time PIA with reactive updates",
        description: "Threat models and PIAs are created once and reviewed on demand.",
        criteria: [
          "Initial threat model documented and linked to processing activities.",
          "Initial PIA performed for high-risk processing.",
          "Updates happen only when issues emerge post-implementation."
        ]
      },
      {
        number: 2,
        headline: "Scheduled PIA reviews",
        description: "Threat models and PIAs receive periodic re-evaluation at defined milestones.",
        criteria: [
          "Threat models re-checked regularly (e.g., annually or after major change).",
          "PIAs update whenever purposes, technologies, or recipients change.",
          "Risks and mitigations are documented and traceable.",
          "Reviews integrate into project documentation."
        ]
      },
      {
        number: 3,
        headline: "Continuous automated PIA management",
        description: "Continuous and automated re-check of threat models and PIAs.",
        criteria: [
          "Threat model validation integrates into CI/CD pipelines and monitoring.",
          "PIAs update dynamically when components or data flows change.",
          "Automated alerts flag new risks or regulation changes.",
          "Mitigations link to accountability dashboards and compliance reports."
        ]
      }
    ]
  },
  {
    title: "Publish Privacy Notices and PIA Results",
    summary: "Share privacy commitments and outcomes with stakeholders at increasing levels of transparency.",
    levels: [
      {
        number: 1,
        headline: "Static notices on request",
        description: "Basic privacy notices and PIA summaries are provided when requested.",
        criteria: [
          "Privacy notices available in static form (PDF or webpage).",
          "PIA results shared only with regulators or on demand.",
          "No standardized update cycle for notices."
        ]
      },
      {
        number: 2,
        headline: "Regular public updates",
        description: "Privacy notices and PIA results are regularly published for stakeholders.",
        criteria: [
          "Notices appear in structured, accessible formats.",
          "PIA summaries are proactively communicated.",
          "Notices update on each major release or processing change.",
          "Transparency logs capture when and how updates were published."
        ]
      },
      {
        number: 3,
        headline: "Automated and dynamic transparency",
        description: "Privacy notices and PIA outcomes are fully automated and transparent.",
        criteria: [
          "Notices generate dynamically from system documentation and remain up to date.",
          "PIA summaries feed public dashboards or APIs for real-time access.",
          "Multi-language, machine-readable notices support automated compliance checking.",
          "Continuous monitoring ensures changes immediately update published notices."
        ]
      }
    ]
  },
  {
    title: "Track Personal Data Accesses to Detect Misuse",
    summary: "Monitor who accesses personal data and detect anomalies as maturity grows.",
    levels: [
      {
        number: 1,
        headline: "Manual logging on critical stores",
        description: "Access tracking is implemented manually for selected critical data stores.",
        criteria: [
          "Logging is enabled for access to sensitive personal data.",
          "Access logs are inspected manually when misuse is suspected."
        ]
      },
      {
        number: 2,
        headline: "System-wide logging and reviews",
        description: "All personal data access events are logged and monitored systematically.",
        criteria: [
          "Centralized log management (e.g., SIEM) is in place.",
          "Logging covers all major data repositories handling personal data.",
          "Periodic audits detect anomalies and policy violations."
        ]
      },
      {
        number: 3,
        headline: "Automated anomaly detection",
        description: "Automated monitoring detects misuse and integrates with operations.",
        criteria: [
          "(Semi-) automated tools spot unusual or unauthorized access patterns.",
          "Automated alerts connect to incident response processes.",
          "Continuous monitoring covers all data stores and access channels."
        ]
      }
    ]
  },
  {
    title: "Track Data Flows & Measure Privacy Indicators",
    summary: "Observe data movements and privacy indicators from manual checks to automated dashboards.",
    levels: [
      {
        number: 1,
        headline: "Limited monitoring",
        description: "Monitoring covers only a few key systems, with no systematic indicators.",
        criteria: [
          "Manual static checks detect deviations in intended data flows.",
          "Privacy indicators are not systematically measured."
        ]
      },
      {
        number: 2,
        headline: "Continuous monitoring with periodic indicators",
        description: "Operational data flows are continuously monitored with manual or semi-automated anomaly detection.",
        criteria: [
          "Automated tools track transfers between major system components.",
          "Periodic reporting surfaces indicators (unused datasets, long retention, unexpected stores).",
          "Coverage extends to most personal data processing systems."
        ]
      },
      {
        number: 3,
        headline: "Real-time indicators and dashboards",
        description: "Data flow monitoring and privacy indicators are fully automated and integrated into governance dashboards.",
        criteria: [
          "Real-time monitoring spans all systems.",
          "Automated detection flags anomalies such as shadow pipelines or data hoards.",
          "Indicators continuously update and visualize in dashboards."
        ]
      }
    ]
  },
  {
    title: "Handle Privacy Incidents",
    summary: "Prepare, test, and integrate privacy-focused incident response capabilities.",
    levels: [
      {
        number: 1,
        headline: "Documented plan for high-risk data",
        description: "Roles and processes are defined to execute an incident response plan for high-risk personal data.",
        criteria: [
          "An incident response plan describes processes such as notifying affected users.",
          "Roles and responsibilities are clearly assigned.",
          "The plan explicitly addresses high-risk personal data and related threats."
        ]
      },
      {
        number: 2,
        headline: "Reviewed and tested plan",
        description: "Incident response plans are periodically reviewed and scenario-tested.",
        criteria: [
          "Plan updates ensure coverage of current data usage, including new personal data types.",
          "Simulated executions are documented and reviewed for improvements."
        ]
      },
      {
        number: 3,
        headline: "Fully integrated incident response",
        description: "Incident response is integrated into the SDL and covers all personal data risks.",
        criteria: [
          "Plan reviews happen as part of each feature release cycle.",
          "Coverage extends to all privacy threats, including low-risk scenarios."
        ]
      }
    ]
  },
  {
    title: "Handle Personal Data Requests",
    summary: "Enable data subjects to exercise their rights with increasing automation and transparency.",
    levels: [
      {
        number: 1,
        headline: "Manual request handling",
        description: "User rights requests are handled manually via informal processes.",
        criteria: [
          "Requests arrive through generic channels such as support email.",
          "User identity is verified manually.",
          "Responses are compiled manually across different systems."
        ]
      },
      {
        number: 2,
        headline: "Standardized, semi-automated processes",
        description: "Processes and tools manage data subject requests consistently across systems.",
        criteria: [
          "Dedicated submission channels exist (e.g., web forms).",
          "Standard operating procedures cover access, correction, deletion, etc.",
          "Semi-automated tools help retrieve and process data from multiple systems.",
          "Requests are logged and documented for accountability."
        ]
      },
      {
        number: 3,
        headline: "Self-service request orchestration",
        description: "Fully automated user rights management with self-service capabilities.",
        criteria: [
          "Self-service portals allow data subjects to exercise their rights directly.",
          "Automated orchestration fulfills requests across all systems and third parties.",
          "Continuous monitoring ensures deadlines are met.",
          "Transparency dashboards show real-time request status."
        ]
      }
    ]
  },
  {
    title: "Decommissioning of Personal Data",
    summary: "Plan, test, and integrate decommissioning activities to retire personal data responsibly.",
    levels: [
      {
        number: 1,
        headline: "Defined decommissioning plan",
        description: "A plan exists for decommissioning personal data when systems shut down.",
        criteria: [
          "Personal data requiring deletion after operations stop is identified.",
          "Required operations such as deletion, anonymization, or obfuscation are defined.",
          "Responsibilities for executing the plan are assigned."
        ]
      },
      {
        number: 2,
        headline: "Reviewed and tested plan",
        description: "Decommissioning plans are reviewed and tested periodically.",
        criteria: [
          "Regular evaluations capture new personal data categories (e.g., yearly).",
          "Simulations verify operational readiness and reveal gaps.",
          "Updates and corrections are documented and tracked."
        ]
      },
      {
        number: 3,
        headline: "SDL-integrated decommissioning",
        description: "Decommissioning is fully integrated into the SDL.",
        criteria: [
          "Procedures are reviewed during release cycles for new features.",
          "Plans update in response to changes in data processing, infrastructure, or regulations."
        ]
      }
    ]
  }
];

window.activities = pemmActivities;
