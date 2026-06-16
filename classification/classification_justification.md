# Supplementary Material: Classification Justifications

## A Classification of Privacy Threat Modeling Frameworks

This document provides per-framework justifications for the classification decisions made in the paper. For each of the 26 identified privacy threat modeling frameworks, we document the evidence supporting its assignment to each classification dimension.

---

## Dimension Definitions (Summary)

| Dimension | Sub-Dimension | Categories |
|-----------|--------------|------------|
| Threat Elicitation | Preconditions (PC) | **C** = Comprehensive, **B** = Business-Constrained, **V** = Vulnerability-Centric |
| Threat Elicitation | Entities | **P** = Provider, **T** = Third-Party Provider, **O** = Outsider, **U** = Other User |
| Threat Elicitation | PII Types | **Extended**, **Inclusive**, **Restricted**, **Agnostic** |
| Threat Elicitation | Analytical Perspective (AP) | **System-Centric**, **Hybrid**, **Privacy Violation–Centric** |
| Practicality | Mitigation Support (MS) | **Comprehensive**, **Guidance-Based**, **None** |
| Practicality | Threat Identification Support (TIS) | **Knowledge Base**, **None** |
| Practicality | Software-based Tool Support | **Tool**, **None** |
| Application Domain | Domain (AD) | **Generic**, **Specialized** (with specific domain) |

---

## Per-Framework Justifications

### 1. LINDDUN [7]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Vulnerability-Centric | Considers threats against DFD elements, but not if the DFD itself poses threats. |
| Entities | P, O | Considers unawareness/non-compliance and vulnerability exploitation, neither of which applies to third parties and users. |
| PII | Inclusive | Considers any PII, as long as it is linkable to other data sets. |
| AP | System-Centric | Based on iterating over DFD elements. |
| MS | Comprehensive | Contains mapping table between threat categories and PETs. |
| TIS | Knowledge Base | Contains library of threat tree patterns. |
| Tool | Tool Support | Template for OWASP Threat Dragon and PILLAR (third party). |
| AD | Generic | Applicable to any "software-based system". |

---

### 2. LINDDUN GO [33]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Business-Constrained | Contains no threats regarding the intention of the system, only subjective ones like "more data than necessary". |
| Entities | P, O | Considers the threat sources "organizational" and "external". |
| PII | Inclusive | Considers any personal data, as long as it is linkable to other data sets. |
| AP | System-Centric | Based on identifying system vulnerabilities, not attacks exploiting them. |
| MS | None | The threat cards do not provide guidance on threat mitigation. |
| TIS | Knowledge Base | Contains a set of threat cards. |
| Tool | Tool Support | Digital threat cards available online serve as tool support. |
| AD | Generic | Applicable to any "software system". |

---

### 3. MAP / XCOMPASS [8]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Vulnerability-Centric | Covers only exploitations of vulnerabilities, however independent of the intention. |
| Entities | P, T, O, U | Covers among others "Inside Attacker", "Related Entities", "Cybercriminals", and "Customer". |
| PII | Agnostic | Not specified. |
| AP | Privacy Violation–Centric | Based on attacker personas performing a privacy attack. |
| MS | None | Only attack scenarios. |
| TIS | Knowledge Base | Contains set of attributes that can be combined to create personas. |
| Tool | None | No known tool. |
| AD | Generic | Applicable to any organisation performing data processing. |

---

### 4. PANOPTIC [26]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Comprehensive | Explicitly mentions that the system itself can pose threats. |
| Entities | P, T, O, U | It is threat source "agnostic". |
| PII | Agnostic | "Any otherwise unspecified data type that could result in adverse consequences for an individual or group". |
| AP | Privacy Violation–Centric | Based on creating potential privacy violations using the taxonomy. |
| MS | None | Concerned only with attack scenarios, but no mitigations. |
| TIS | Knowledge Base | Consists of a taxonomy of privacy threats. |
| Tool | None | No known tool. |
| AD | Generic | Applicable to any data processing. |

---

### 5. PITA [29]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Business-Constrained | Not limited to vulnerabilities, but is not explicitly comprehensive. |
| Entities | P, T, O, U | Concerned with privacy violations independent of the source. |
| PII | Agnostic | Uses the term "personal data" without defining it. |
| AP | Privacy Violation–Centric | Based on creating privacy impact trees. |
| MS | None | Concerned with threat and risk analysis using privacy impact trees, but not how to mitigate them. |
| TIS | None | Contains set of tree root nodes, but no, e.g., tree patterns. |
| Tool | None | No known tool. |
| AD | Generic | Applicable to any system performing data processing. |

---

### 6. IDPA [17]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Business-Constrained | Explicitly mentions "[b]alancing rights with business needs". |
| Entities | P, U | Mentions both "users" and "service provider" as sources of threats. |
| PII | Agnostic | Uses the term "personal data" without defining it. |
| AP | System-Centric | Based on analyzing system data flows. |
| MS | Guidance-Based | Contains set of general strategies depending on the threat actor. |
| TIS | None | Contains set of threat categories and threat actors, but not reusable artifacts for threat identification itself. |
| Tool | None | No known tool. |
| AD | Generic | Any system that allows users to share data. |

---

### 7. PROPAN [4]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Comprehensive | Considers privacy requirements of the stakeholders as system requirements. |
| Entities | U | Considers the different users of the system as stakeholders; ProPAn is only part of the system by definition, thus cannot have an outsider or third party processor. |
| PII | Inclusive | Explicitly recommends anonymization to preserve privacy. |
| AP | System-Centric | It is based on system requirements and adapting them. |
| MS | None | Mitigation strategies are only present within a specific case study, not as generalizable guidance. |
| TIS | None | Does not include artifacts besides the "ProPAn tool". |
| Tool | Tool Support | The authors propose the "ProPAn tool". |
| AD | Generic | Any system with data flows between multiple stakeholders. |

---

### 8. QTMM [18]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Vulnerability-Centric | Considers threats against DFD elements, but not if the DFD itself poses threats. |
| Entities | P, O | Considers unawareness/non-intervenability and vulnerability exploitation, neither of which applies to third parties and users. |
| PII | Inclusive | Considers any personal data, as long as it is linkable to other data sets. |
| AP | System-Centric | Based on iterating over DFD elements. |
| MS | None | Concerned with DFD based threat identification and risk analysis, but not how to mitigate them. |
| TIS | None | Does not include reusable assets (but mentions that it would be possible to create threat tree patterns). |
| Tool | None | No known tool. |
| AD | Generic | Applicable to any system performing data processing. |

---

### 9. Elevation of Privacy [1]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Comprehensive | Contains threats regardless the intention of their existence. |
| Entities | P, O | As the threats are based on GDPR compliance, the provider is the main source of threat, as they are responsible; additionally outsiders pose security threats. |
| PII | Agnostic | While it is inspired by the GDPR, it does not define the term "personal data" explicitly. |
| AP | System-Centric | Based on identifying system vulnerabilities, not attacks exploiting them. |
| MS | None | The threat cards do not provide guidance on threat mitigation. |
| TIS | Knowledge Base | Contains a set of threat cards. |
| Tool | None | No known tool. |
| AD | Generic | Applicable to any organisation performing data processing. |

---

### 10. UsersFirst [30]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Business-Constrained | Organizations may "determine their own [...] objectives". |
| Entities | P | It only deals with privacy notices; only the provider is responsible for them. |
| PII | Restricted | Does not deal with PII, but with privacy notices. |
| AP | System-Centric | Based on analyzing the required notices for a system, where to place them in the system and how they can pose threats. |
| MS | None | Consists of taxonomy of threats, but no mitigations. |
| TIS | Knowledge Base | Consists of a "Notice and Choice Threats Taxonomy". |
| Tool | None | No known tool. |
| AD | Generic | Applicable to any organisation performing data processing (notices are required by law). |

---

### 11. Design Science Approach PIA [21]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Comprehensive | Based on DPD principles and targets with additional ones to be defined by the threat modeller. |
| Entities | P | The provided targets are focused on the provider; while arbitrary targets could theoretically be created, this is not explicitly supported. |
| PII | Agnostic | While it is inspired by the DPD, it does not define the term "personal data" explicitly. |
| AP | System-Centric | Based on first characterizing the system and then comparing it against privacy targets. |
| MS | Guidance-Based | Contains mapping of threats to suitable controls. |
| TIS | None | Includes a set of privacy targets, but no reusable artifacts for threat identification. |
| Tool | None | No known tool. |
| AD | Generic | Any "IT application". |

---

### 12. LINE3DU [5]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Comprehensive | "The produced threat model is focused exclusively on the rights and freedoms of the subject". |
| Entities | P, T, O | Corresponding DFD entities to P and T are E2 and E3/E4 and some threats mention "external threat agent[s]". |
| PII | Extended | Considers "publish[ing] research datasets" a threat. |
| AP | System-Centric | Based on analyzing a system DFD. |
| MS | None | Contains a set of threats but no guidance on how to mitigate them. |
| TIS | Knowledge Base | Includes a set of potential threats. |
| Tool | None | No known tool. |
| AD | Specialized (Age Assurance) | "This research explores the privacy and data protection implications of age assurance". |

---

### 13. PTMF [5]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Comprehensive | It is focussed on vulnerabilities, but acknowledges that "[s]ervice provider threat actors aim to conduct 'unwanted tracking'". |
| Entities | P, T, O | Set of threat actors includes among others "Service provider", "Third-party provider", and "Skilled Outsider (Adversary)". |
| PII | Restricted | Predefined set of potential types of PII, excluding any other. |
| AP | Privacy Violation–Centric | "[A]ssessing the activities of IoT threat actors that could lead to privacy threats." |
| MS | None | Consists of a taxonomy of privacy attacks but no guidance on how to mitigate them. |
| TIS | Knowledge Base | Consists of a taxonomy of privacy attacks. |
| Tool | None | No known tool. |
| AD | Specialized (IoT) | A "methodology for assessing and analyzing privacy threats in IoT systems". |

---

### 14. TSPTM for ENS [11]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Business-Constrained | Covers "[i]ndefinite storage" as potential threat, but not intended functionality in a comprehensive way. |
| Entities | P, T, O | Mentions e.g. "authorities", and "hackers" as potential attackers, and the usage of "[t]hird-party tools". |
| PII | Restricted | Is only concerned with "Privacy Identifiers". |
| AP | Privacy Violation–Centric | The threats are based on attacker capabilities not on analyzing the system design. |
| MS | Guidance-Based | Includes some mitigation strategies mapped to the included set of potential threats. |
| TIS | Knowledge Base | Includes a set of potential threats. |
| Tool | None | No known tool. |
| AD | Specialized (ENS) | "This model reflects the comprehensive privacy concerns faced by exposure notification systems". |

---

### 15. ACPTM [12]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Business-Constrained | The privacy requirements are to be defined by the threat modeller. |
| Entities | P, T, O | "Cloud actors" include "Cloud Consumer" (the provider), "Cloud Provider" (as third party provider) - outside attackers are also considered, however not users. |
| PII | Agnostic | The privacy requirements are to be defined by the threat modeller. |
| AP | System-Centric | Based on iterating over system privacy requirements. |
| MS | None | Consists only of a high level description, without predefined privacy requirements or corresponding mitigation strategies. |
| TIS | None | Consists only of a high level description, without predefined privacy requirements or reusable artifacts for threat identification. |
| Tool | None | No known tool. |
| AD | Specialized (Cloud) | A "privacy threat modeling methodology for cloud computing environments". |

---

### 16. IoT_PTM [15]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Vulnerability-Centric | "[S]ervice related data collection is very necessary", i.e., it covers only misuse, not intended functionality. |
| Entities | P, O, U | E.g. "Unawareness" is caused by P, "Compromised Communication" is caused by O, while "Inference by Query" may be performed by U. |
| PII | Restricted | A "privacy threat model for sensitive data". |
| AP | System-Centric | Based on iterating over system elements. |
| MS | None | Consists of a list of privacy threats but no guidance on how to mitigate them. |
| TIS | Knowledge Base | Consists of a list of threats. |
| Tool | None | No known tool. |
| AD | Specialized (IoT) | A "privacy threat model for sensitive data in IoT". |

---

### 17. Rule-based GDPR Compliance Model [19]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Comprehensive | Constrained to violations to the GDPR. |
| Entities | P, O | Following the GDPR only the provider is responsible for noncompliance, while outsiders are the focus of data security. |
| PII | Inclusive | As defined by the GDPR. |
| AP | System-Centric | Based on iterating over DFD elements. |
| MS | None | The tool only provides identified threats but no guidance on mitigation. |
| TIS | Knowledge Base | Contains initial knowledge base efforts that serve as a starting point, though still a proof of concept. |
| Tool | Tool Support | Templates for MS TMT. |
| AD | Generic | Any system covered by the GDPR. |

---

### 18. DeLP-based GDPR Compliance Model [19]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Comprehensive | Constrained to violations to the GDPR. |
| Entities | P, O | Following the GDPR only the provider is responsible for noncompliance, while outsiders are the focus of data security. |
| PII | Inclusive | As defined by the GDPR. |
| AP | System-Centric | Compliance is computed by providing information about the system. |
| MS | None | The tool highlights what causes the non-compliance but no guidance on mitigation. |
| TIS | Knowledge Base | Contains initial knowledge base efforts that serve as a starting point, though still a proof of concept. |
| Tool | Tool Support | The proposed "DeLP-GDPR project". |
| AD | Generic | Any system covered by the GDPR. |

---

### 19. PTM for Online Social Networks [31]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Vulnerability-Centric | Considers only attacks, i.e., no intended functionality. |
| Entities | O, U | Considers "[m]alicious users", whose definition covers both outsiders and users. |
| PII | Restricted | "OSN privacy policies define what information is private", the remaining is not covered. |
| AP | Privacy Violation–Centric | Consists of a list of threats facilitated by the system as a whole. |
| MS | None | Consists of a list of threats but no guidance on how to mitigate them. |
| TIS | Knowledge Base | Consists of a list of threats. |
| Tool | None | No known tool. |
| AD | Specialized (OSN/SNA) | A "threat modeling framework for online social networks". |

---

### 20. PTM for Data Portability in SNAs [32]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Vulnerability-Centric | It is only concerned with access control, i.e., vulnerability exploitation. |
| Entities | O, U | It is not concerned with the system itself, i.e., only outsiders and users. |
| PII | Inclusive | User defined access control. |
| AP | System-Centric | Based on iterating over the user supplied data of the system. |
| MS | None | It identifies problematic data sharing but offers no guidance on how to mitigate the threats. |
| TIS | None | It consists of attributes that can be applied to data, but no reusable artifacts for threat identification. |
| Tool | None | No known tool. |
| AD | Specialized (OSN/SNA) | A "privacy threat model for data portability in SNAs". |

---

### 21. Privacy Threat Model in Lifelogging [10]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Vulnerability-Centric | "A threat represents the activity or capability of an adversary onto an asset of a system with an intention to invade the security of the system or invade the privacy of a user in the system". |
| Entities | P, O, U | Considers the manufacturer (provider), attackers (outsider), and other lifeloggers (other users). |
| PII | Restricted | "Sensitivity in a lifelog will determine if the lifelog can be considered private." |
| AP | System-Centric | The threats were identified by iterating over the involved assets. |
| MS | None | Consists of a list of threats but no guidance on how to mitigate them. |
| TIS | Knowledge Base | Consists of a list of threats. |
| Tool | None | No known tool. |
| AD | Specialized (Lifelogging) | Concerned with "privacy threats and [...] their implications on different aspects of lifelogging". |

---

### 22. Attack Tree for VANET Location Privacy [23]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Vulnerability-Centric | It is only concerned with an outside attacker, i.e., vulnerabilities. |
| Entities | O | It is only concerned with an outside attacker. |
| PII | Restricted | Only concerned with location data. |
| AP | Privacy Violation–Centric | Based on an attack tree. |
| MS | None | Consists of a prebuilt attack tree but offers no guidance on how to mitigate the threat. |
| TIS | Knowledge Base | Consists of a prebuilt attack tree. |
| Tool | None | No known tool. |
| AD | Specialized (VANET) | It is a "method to evaluate the security risk of VANET's privacy". |

---

### 23. EU PIA Framework for RFID [9]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Business-Constrained | DPD targets do not cover functionality besides processing has to be based on consent/contract/legal obligation. |
| Entities | P | It is based on reaching DPD privacy targets - only the provider is responsible to do so. |
| PII | Inclusive | As defined by the DPD. |
| AP | System-Centric | Based on first characterizing the system and then comparing it against privacy targets. |
| MS | Guidance-Based | Contains "a list of examples of potential controls that can help [...] to identify appropriate mitigating strategies". |
| TIS | Knowledge Base | Contains an example list of potential risks. |
| Tool | None | No known tool. |
| AD | Specialized (RFID) | A "framework for Personal Data and Privacy impact assessments of RFID Applications". |

---

### 24. BSI PIA Guideline for RFID [22]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Business-Constrained | Mentions that one might not "eliminate [a] threat completely for [...] business reasons.". |
| Entities | P | The provided targets are focussed on the provider, but it allows for the creation of arbitrary targets. |
| PII | Inclusive | As defined by EU legislation (DPD). |
| AP | System-Centric | Based on first characterizing the system and then comparing it against privacy targets. |
| MS | Guidance-Based | Contains "a guideline for which controls may be relevant". |
| TIS | Knowledge Base | Contains a list of potential threats as a starting point. |
| Tool | None | No known tool. |
| AD | Specialized (RFID) | A "framework for personal data and privacy impact assessments of RFID applications". |

---

### 25. Plot4AI [3]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Business-Constrained | "Balancing regulatory compliance with operational effectiveness". |
| Entities | P, U | Considers both the provider of an AI system and its user, but no other entities. |
| PII | Inclusive | As defined by the GDPR. |
| AP | System-Centric | Threat cards are based on system properties not attacks. |
| MS | Comprehensive | Each card contains a list of recommendations. |
| TIS | Knowledge Base | Contains a set of threat cards. |
| Tool | Tool Support | "You can use OWASP Threat Dragon, which supports PLOT4AI". |
| AD | Specialized (AI) | The threat cards "cards apply to both traditional AI and Generative AI systems". |

---

### 26. Taiga [24]

| Dimension | Category | Justification |
|-----------|----------|---------------|
| PC | Comprehensive | Explicitly considers that the system could be "evil". |
| Entities | P, T | It is only concerned with the threats posed by the system - potentially including third party providers. |
| PII | Agnostic | Not specified. |
| AP | Hybrid | Analyzes the system (System-Centric), but also takes an "evil" system perspective into account, i.e., attacks carried out with the system. |
| MS | None | Consists only of system and threat analysis using questionnaires and models, but offers no guidance on mitigation. |
| TIS | None | Contains sample questionnaires, but no reusable artifacts for threat identification. |
| Tool | None | No known tool. |
| AD | Generic | Applicable to any system that is complex. |

---

## Coding Disagreements and Resolutions

During independent coding, the following cases required discussion to reach consensus:

| Framework | Dimension | Disagreement | Resolution |
|-----------|-----------|-------------|------------|
| LINDDUN GO [33] | PC | Comprehensive vs. Business-Constrained | Business-Constrained – Vague, broader than LINDDUN, but no intention is addressed. |
| LINDDUN GO [33] | Tool | None vs. Tool Support | Tool Support – Online cards are counted as tool support. |
| IDPA [17] | MS | None vs. Guidance-Based | Guidance-Based – Defines very rough strategies. |
| PROPAN [4] | Entities | U vs. O, U | U – ProPAn is only part of the system by definition, thus cannot have an outsider. |
| PROPAN [4] | MS | Guidance-Based vs. None | None – Only in case study itself, therefore no direct guidance that works across frameworks. |
| Design Science Approach PIA [21] | Entities | P, T, O, U vs. P | P – One could theoretically reformulate other provided targets, but they are not explicitly supported. |
| Design Science Approach PIA [21] | PII | Restricted vs. Agnostic | Agnostic – PII is not defined explicitly. |
| Rule-based GDPR Compliance Model [19] | Entities | P, T, O vs. P, O | P, O – Following the GDPR only the provider is responsible for noncompliance; provider responsible for third party is implicit. |
| Rule-based GDPR Compliance Model [19] | TIS | None vs. Knowledge Base | Knowledge Base – Knowledge not ready to use but initial efforts persistent. |
| DeLP-based GDPR Compliance Model [19] | Entities | P, T, O vs. P, O | P, O – Same reasoning as Rule-based model above. |
| DeLP-based GDPR Compliance Model [19] | MS | Guidance-Based vs. None | None – Same reasoning as Rule-based model above. |
| DeLP-based GDPR Compliance Model [19] | TIS | None vs. Knowledge Base | Knowledge Base – Same reasoning as Rule-based model above. |
| EU PIA Framework for RFID [9] | PC | Comprehensive vs. Business-Constrained | Business-Constrained – User rights and consent from the user; does not question intended functionality. |
| BSI PIA Guideline for RFID [22] | Entities | P, T, O, U vs. P | P – Theoretically allows extension, but explicitly only P is mentioned. |
| Plot4AI [3] | PC | Vulnerability-Centric vs. Business-Constrained | Business-Constrained – Oriented on LINDDUN Go, more than vulnerabilities; regulatory compliance addressed. |