const fs = require('fs');

const generateLicense = (type) => {
    let color;
    if (type === "MPL") color = "red";
    if (type === "GPL") color = "gray";
    if (type === "Apache") color = "green";
    if (type === "MIT") color = "blue";
    if (type === "CC") color = "orange";
    if (type === "BSD") color = "goldenrod";

    return (
        `![${type}](https://img.shields.io/badge/license-${type}-${color})`

    );
};


const generatePage = ({
    project,
    description,
    usuage,
    credits,
    license,
}) => {
    console.log('GENERATING README');
    const template = (
        `
# Project-Name

## Description


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation



## Usage 


## Credits


## ${generateLicense(license)}
`
    );
    fs.writeFileSync('./output/README.md', template);
    console.log('TEMPLATE GENERATED!');
    process.exit();
};

module.exports = {
    generatePage
};