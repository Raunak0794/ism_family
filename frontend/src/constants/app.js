export const IIT_ISM_LOGO_URL =
  "https://commons.wikimedia.org/wiki/Special:FilePath/IIT_(ISM)_Dhanbad_Logo.svg";

export const INITIAL_SIGNUP_FORM = {
  full_name: "",
  admission_year: "",
  branch: "",
  phone_number: "",
  email: "",
  current_city: "",
  current_profession: "",
  linkedin_url: "",
};

export const SIGNUP_FIELDS = [
  ["full_name", "Full Name", "e.g. Priya Sharma", "text", true],
  ["admission_year", "Admission Year / Batch", "e.g. 2019", "number", true],
  ["branch", "Branch", "e.g. Electrical Engineering", "text", true],
  ["phone_number", "Phone Number", "+91 98765 43210", "tel", true],
  ["email", "Email ID", "you@example.com", "email", true],
  ["current_city", "Current City", "e.g. Bengaluru", "text", true],
  [
    "current_profession",
    "Current Profession / Company",
    "e.g. Software Engineer · Acme",
    "text",
    true,
  ],
  [
    "linkedin_url",
    "LinkedIn URL",
    "https://linkedin.com/in/yourname",
    "url",
    false,
  ],
];
