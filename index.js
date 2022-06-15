//  const { prompt } = require('inquirer');
 const fs = require('fs');
 const inquirer = require('inquirer');
 const utils = require('./utils/generateMarkdown')

 // TODO: Create a function to write README file

 // Function call to initialize app

// const init = async () => {
     const questions = [
        {
             type: 'input',
             name: 'project',
             message: 'What is the name of your project?',
         },
         {
             type: 'input',
             name: 'description',
             message: 'Where would you describe the motivation behind your project?',
         },
         {
             type: 'input',
             name: 'installations',
             message: 'Did you have to use installations?',
         },
         {
             type: 'input',
             name: 'usuage',
             message: 'What is the user story?',
         },
         {
             type: 'input',
             name: 'license',
             message: 'Are there any license supporting your project?',
         },
         {
             type: 'input',
             name: 'credits',
             message: 'Did anyone else contribute?',
         },

         {
             type: 'checkbox',
             message: 'What is included in your assignment',
             name: 'stack',
             choices: ['Title', 'Description', 'Table of Contents', 'Usuage'],
         },
         {
             type: 'list',
             message: 'What License was this created with?',
             name: 'license',
             choices: ['GPL', 'MIT', 'Apache', 'ISC'],
         },
     ];
        //  const data = await prompt(questions);
        //     return templates;
         
        //  const filename = `${data.project.toLowerCase().split(' ').join('')}.json`;

             
         inquirer.prompt(questions).then((answers) => {
            console.log(answers);
            utils.generatePage(answers);
         });
           
// init();