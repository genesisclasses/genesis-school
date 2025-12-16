export const mandateDisclosureSections = [
  {
    title: "General Information",
    minWidth: "900px",
    rows: [
      ["NAME OF THE SCHOOL", "THE GENESIS SCHOOL"],
      ["AFFILIATION NO (IF APPLICABLE)", "530266"],
      ["SCHOOL CODE (IF APPLICABLE)", "40242"],
      [
        "COMPLETE ADDRESS WITH PIN CODE",
        "SECTOR-8, CHAND ENCLAVE, U.E, KARNAL, HARYANA (132001)",
      ],
      ["PRINCIPAL NAME", "MONIKA CHOPRA"],
      ["PRINCIPAL QUALIFICATION", "MSc (Physics), BEd"],
      [
        "SCHOOL EMAIL ID",
        {
          type: "link",
          label: "thegenesisschoolkarnal@gmail.com",
          href: "mailto:thegenesisschoolkarnal@gmail.com",
        },
      ],
      ["CONTACT DETAILS", "9671111069"],
      [
        "Mandatory Public Disclosure",
        {
          type: "link",
          label: "Click here",
          href: "#",
        },
      ],
    ],
  },

  {
    title: "Teaching Staff",
    minWidth: "820px",
    rows: [
      ["PRINCIPAL NAME & QUALIFICATION", "MONIKA CHOPRA"],
      ["PRINCIPAL QUALIFICATION", "MSc (Physics), BEd"],
      ["TOTAL NO. OF TEACHERS", "31"],
      ["PGT", "16", true],
      ["TGT", "11", true],
      ["PRT", "4", true],
      ["DETAILS OF SPECIAL EDUCATOR", "—"],
      ["DETAILS OF COUNSELLOR AND WELLNESS TEACHER", "Palak Singh"],
    ],
  },

  {
    title: "Documents and Information",
    minWidth: "820px",
    isActionTable: true,
    rows: [
      {
        label: "Affiliation Letter",
        href: "/assets/mandate-disclosure/affiliation-certificate.pdf",
      },
      {
        label: "No Objection Certificate",
        href: "#",
      },
      {
        label: "Building Safety Certificate",
        href: "/assets/mandate-disclosure/building-safety-certificate.pdf",
      },
      {
        label: "Fire Safety Certificate",
        href: "/assets/mandate-disclosure/fire-safety-certificate.pdf",
      },
      {
        label: "Navyug Shiksha Samiti Society Certificate",
        href: "#",
      },
      {
        label: "Water Health and Sanitation Certificate",
        href: "/assets/mandate-disclosure/sanitation-&-hygine.pdf",
      },
    ],
  },

  {
    title: "Result and Academics",
    minWidth: "820px",
    isActionTable: true,
    rows: [
      {
        label: "Annual Academic Calendar",
        href: "#",
      },
      {
        label: "School Management Committee",
        href: "#",
      },
      {
        label: "List of Parent Teacher Association Members (PTA)",
        href: "#",
      },
      {
        label: "Last Three Years Result of the Board Examination",
        href: "#",
      },
    ],
  },

  /* ===================================================== */
  /* CLASS X (as per screenshot) */
  /* ===================================================== */
  {
    title: "Class X",
    minWidth: "820px",
    type: "singleYearTable",
    year: "2024",
  },

  /* ===================================================== */
  /* CLASS XII (as per screenshot) */
  /* ===================================================== */
  {
    title: "Class XII",
    minWidth: "820px",
    type: "singleYearTable",
    year: "2024",
  },

  {
    title: "School Infrastructure",
    minWidth: "1050px",
    rows: [
      ["TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)", "6149"],
      ["NO. AND SIZE OF THE CLASS ROOMS", "31"],
      ["NO. AND SIZE OF LABORATORIES", "6"],
      ["INTERNET FACILITY", "YES"],
      ["NO. OF GIRLS TOILET", "6"],
      ["NO. OF BOYS TOILET", "6"],
      [
        "LINK OF YOUTUBE VIDEO OF THE INSPECTION",
        {
          type: "link",
          label: "Youtube",
          href: "#",
        },
      ],
    ],
  },
];
