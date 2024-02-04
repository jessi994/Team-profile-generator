const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");
console.log(outputPath)
// TODO: Write Code to gather information about the development team members, and render the HTML file.
team = []
function employeePrompts() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
        }
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager)
        menu();
    })
}

function menu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Which type of team member would you like to add?',
            choices: ['Add an engineer', 'Add an intern', 'Finish building team']
        }
    ]).then(answers => {
        switch (answers.role) {
            case 'Add an engineer':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is the engineer's name?",
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: "What is the engineer's employee ID?",
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What is the engineer's email address?",
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: "What is the engineer's github?",
                    }


                ]).then(answers => {
                    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    team.push(engineer)
                    menu();
                })
                break;
            case 'Add an intern':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is the intern's name?",
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: "What is the intern's employee ID?",
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What is the intern's email address?",
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: "Which school is the intern studying at?",
                    }
                ]).then(answers => {
                    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    team.push(intern)
                    menu();

                })
                break;
            case 'Finish building team':
                const team_build = render(team)
                console.log(outputPath)
                fs.writeFile(outputPath, team_build, (err) => {
                    if (err) {
                        console.error('Error writing file:', err);
                    } else {
                        console.log('Team file written successfully');
                    }
                });
                break;

        }


    })

}
employeePrompts()