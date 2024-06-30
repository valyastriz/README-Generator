// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case 'mit':
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      case 'gpl':
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      case 'apache':
        return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      case 'mozilla':
        return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
      case 'bsd3':
        return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
      case 'bsd2':
        return '![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)';
      case 'cco':
        return '![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)';
      case 'eclipse':
        return '![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)';
      case 'agpl':
        return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)';
      case 'lgpl':
        return '![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)';
      case 'unlicense':
        return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
      default:
        return '';
    }
  }


// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'mit':
      return 'https://opensource.org/licenses/MIT';
    case 'gpl':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'mozilla':
      return 'https://opensource.org/licenses/MPL-2.0';
    case 'bsd3':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'bsd2':
      return 'https://opensource.org/licenses/BSD-2-Clause';
    case 'cco':
      return 'http://creativecommons.org/publicdomain/zero/1.0/';
    case 'eclipse':
      return 'https://opensource.org/licenses/EPL-1.0';
    case 'agpl':
      return 'https://www.gnu.org/licenses/agpl-3.0';
    case 'lgpl':
      return 'https://www.gnu.org/licenses/lgpl-3.0';
    case 'unlicense':
      return 'http://unlicense.org/';
    default:
      return '';
  }
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  } else {
    return `#License
    ${data.license}: ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(license)}

  ## Description
  ${data.description}

  ## Table of Contents
  WHEN I click on the links in the Table of Contents
  THEN I am taken to the corresponding section of the README
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage) 
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Installation
  ${data.installation}

  ```


  ```

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Questions or comments? Check out my [GitHub](${data.github}) or shoot me an [email](mailto:${data.email}).

  ## License
  ${data.license}

`;
}

module.exports = generateMarkdown;
