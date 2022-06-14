 const { prompt } = require('inquirer');
 const fs = require('fs');
 // TODO: Create a function to write README file

 // Function call to initialize app

const init = async () => {
     const questions = [
        {
             type: 'input',
             name: 'project',
             message: 'What is the name of your project?',
         },
         {
             type: 'input',
             name: 'description',
             message: 'How would you describe the motivation behind your project?',
         },
         {
             type: 'input',
             name: 'table of contents',
             message: 'Where can the details regarding your project be displayed?',
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
             message: 'What is your preferred method of communication?',
             name: 'method',
             choices: ['email', 'GitHub'],
         },
     ];
         const data = await prompt(questions);
         const filename = `${data.project.toLowerCase().split(' ').join('')}.json`;

         fs.writeFile(filename, JSON.stringify(data, null, 2), (err) =>
             err ? console.log(err) : console.log('Success!')
         );
     };

init();