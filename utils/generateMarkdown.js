const queryString = require('querystring');

// function to generate markdown for README
function generateMarkdown(data) {

  // Destructure data parameter
  const { username, email, title, description, installation, usage, contributing, tests, license } = data;
  // Handle spaces in title
  const emailSubject = queryString.escape(title);
  let licenseBadge = "";
  let licenseNotice = "None";

  if (license !== "None") {
    const generateLicenseEntry = require("./generateLicenseEntry");
    const licenseEntry = generateLicenseEntry(license);
    licenseBadge = licenseEntry.badge;
    licenseNotice = licenseEntry.notice;
  } 

  let contents = "";

  for (const [key, value] of Object.entries(data)) {
    // Omit username and email
    if (key !== "username" && key !== "email" && key !== "title") {
      // Normalise key case
      const lc = key.toLowerCase();
      // Use sentence case
      const capitalised = `${key.charAt(0).toUpperCase()}${key.slice(1)}`;
      // Add to contents list
      contents += `[${capitalised}](#${key})<br />`;
    }
}
contents += `[Questions](#questions)<br />`;

// Set tests as code if not n/a
let testStr = tests === "N/A" ? tests : `\`\`\`${tests}\`\`\``;


// Assemble markup
return `# ${title}

  ${licenseBadge}

  ## Table of Contents

  ${contents}

  ## Description

  ${description}
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## Contributing
  
  ${contributing}
  
  ## Tests
  
  ${testStr}
  
  ## License
  
  ${licenseNotice}
  
  ## Questions
  
  Feel free to [email me](mailto:${email}?subject=${emailSubject}) with any queries. If you'd like to see some of my other projects, my GitHub user name is [${username}](https://github.com/${username}).`;
}

module.exports = generateMarkdown;
