const path = require('path');
const queryString = require('querystring');

// function to generate markdown for README
function generateMarkdown(data) {

  // Destructure data parameter
  const { username, email, title, description, installation, usage, contributing, tests, license } = data;
  // Handle spaces in title
  const emailSubject = queryString.escape(title);
  // Configure license options
  const licensePaths = {
    MIT: {
      license: "https://opensource.org/licenses/MIT",
      badge: "License-MIT-yellow.svg"
    },
    Apache: {
      license: "https://opensource.org/licenses/Apache-2.0",
      badge: "License-Apache%202.0-blue.svg"
    },
    GPL: {
      license: "https://www.gnu.org/licenses/gpl-3.0",
      badge: "License-GPL%20v3-blue.svg"
    },
    BSD: {
      license: "https://opensource.org/licenses/BSD-3-Clause",
      badge: "License-BSD%203--Clause-blue.svg"
    }
  }
  const badge = `https://img.shields.io/badge/${licensePaths[license].badge}`;

  let contents = "";

  for (const [key, value] of Object.entries(data)) {
    // Don't want sections for sername or email
    if (key !== "username" && key !== "email" && key !== "title") {
      // Normalise key case
      const lc = key.toLowerCase();
      // Use sentence case
      const capitalised = `${key.charAt(0).toUpperCase()}${key.slice(1)}`;
      // Add to contents list
      contents += `[${capitalised}](#${key})<br />`;
    }
}

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
  
  ${tests}
  
  ## Questions
  
Feel free to [email me](mailto:${email}?subject=${emailSubject}) if you have any queries. If you'd be interested in finding out about other projects I'm working on, please check out my [GitHub profile](https://github.com/${username}).
  
  ## License
  
  [<img src="${badge}">](${licensePaths[license].license})
`;
}

module.exports = generateMarkdown;
