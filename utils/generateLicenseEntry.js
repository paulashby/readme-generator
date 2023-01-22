function generateLicenseEntry(license) {
    // Configure license options
    const licensePaths = {
        MIT: {
            license: "https://opensource.org/licenses/MIT",
            badge: "License-MIT-yellow.svg"
        },
        Apache2: {
            license: "https://opensource.org/licenses/Apache-2.0",
            badge: "License-Apache%202.0-blue.svg"
        },
        GNUGPL3: {
            license: "https://www.gnu.org/licenses/gpl-3.0",
            badge: "License-GPL%20v3-blue.svg"
        },
        BSD3Clause: {
            license: "https://opensource.org/licenses/BSD-3-Clause",
            badge: "License-BSD%203--Clause-blue.svg"
        }
    }
    // Remove spaces from license string
    const key = license.replace(/ /g, "");
    const badge = `https://img.shields.io/badge/${licensePaths[key].badge}`;

    return `[<img src="${badge}">](${licensePaths[key].license})`;
}

module.exports = generateLicenseEntry;