import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

export const menuItems = [
  {
    label: "LinkedIn",
    icon: (
      <LinkedIn
        sx={{
          color: "text.primary",
          marginRight: 1,
          "&:hover": { color: "secondary.main" },
        }}
        aria-label="linkedin-icon"
        aria-hidden="false"
        role="button"
      />
    ),
    getUrl: (employee: { linkedIn?: string }) =>
      `https://www.linkedin.com/${employee.linkedIn}`,
    isEnabled: (employee: { linkedIn?: string }) => Boolean(employee.linkedIn),
  },
  {
    label: "GitHub",
    icon: (
      <GitHub
        sx={{
          color: "text.primary",
          marginRight: 1,
          "&:hover": { color: "secondary.main" },
        }}
        aria-label="github-icon"
        aria-hidden="false"
        role="button"
      />
    ),
    getUrl: (employee: { gitHub?: string }) =>
      `https://www.gitHub.com/${employee.gitHub}`,
    isEnabled: (employee: { gitHub?: string }) => Boolean(employee.gitHub),
  },
  {
    label: "Twitter",
    icon: (
      <Twitter
        sx={{
          color: "text.primary",
          marginRight: 1,
          "&:hover": { color: "secondary.main" },
        }}
        aria-label="twitter-icon"
        aria-hidden="false"
        role="button"
      />
    ),
    getUrl: (employee: { twitter?: string }) =>
      `https://www.twitter.com/${employee.twitter}`,
    isEnabled: (employee: { twitter?: string }) => Boolean(employee.twitter),
  },
];
