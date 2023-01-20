
const path = require('path');

// function to generate markdown for README
function generateMarkdown(data) {

  const { username, email, title, description, installation, usage, contributing, tests, license } = data;
  
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

  const badge = path.format({
    dir: 'https://img.shields.io/badge',
    base: licensePaths[license].badge
  });

  const licenseUrl = licensePaths[license].license;  
  
  return `# ${title}
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
  
  If you have any queries, don't hesitate to [contact me](mailto:${email}?subject=${title}).
  
  ## License
  
  [<img src="${badge}">](${licensePaths[license].license})
`;
}

module.exports = generateMarkdown;
