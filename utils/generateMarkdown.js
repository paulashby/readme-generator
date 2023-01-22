const queryString = require('querystring');

// function to generate markdown for README
function generateMarkdown(data) {

  // Destructure data parameter
  const { username, email, title, description, installation, usage, contributing, tests, license } = data;
  // Handle spaces in title
  const emailSubject = queryString.escape(title);
  let licenseEntry = license;

  if (licenseEntry !== "None") {
    const generateLicenseEntry = require("./generateLicenseEntry");
    licenseEntry = generateLicenseEntry(license);
  } 

  let contents = "";

  for (const [key, value] of Object.entries(data)) {
    // Don't want sections for username or email
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
let testStr = tests === "N/A" ? tests : `    ${tests}`;

// Assemble markup
return `# ${title}

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
  
  ${licenseEntry}
  
  ## Questions
  
  Feel free to [email me](mailto:${email}?subject=${emailSubject}) if you have any queries. If you'd be interested in finding out about other projects I'm working on, please check out my [GitHub profile](https://github.com/${username}).`;
}

module.exports = generateMarkdown;
