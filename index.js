const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(
  __dirname,
  "dist"
);
const outputPath = path.join(
  OUTPUT_DIR,
  "team.html"
);
const generateTeam = require("./src/template.js");

const teamArray = [];

function runApp() {
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message:
            "What type of employee would you like to add to your team?",
          name: "addEmployeePrompt",
          choices: [
            "Manager",
            "Engineer",
            "Intern",
            "No more team members are needed.",
          ],
        },
      ])
      .then(function (userInput) {
        switch (
        userInput.addEmployeePrompt
        ) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;

          default:
            htmlBuilder();
        }
      });
  }

  // Add Manager function
  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message:
            "What is the manager's name?",
        },

        {
          type: "input",
          name: "managerId",
          message:
            "What is the manager's employee ID number?",
        },

        {
          type: "input",
          name: "managerEmail",
          message:
            "What is the manager's email address?",
        },

        {
          type: "input",
          name: "managerOfficeNumber",
          message:
            "What is the manager's office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamArray.push(manager);
        createTeam();
      });
  }

  // Add Engineer function
  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message:
            "What is the engineer's name?",
        },

        {
          type: "input",
          name: "engineerId",
          message:
            "What is the engineer's employee ID number?",
        },

        {
          type: "input",
          name: "engineerEmail",
          message:
            "What is the engineer's email address?",
        },

        {
          type: "input",
          name: "engineerGithub",
          message:
            "What is the engineer's GitHub username?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamArray.push(engineer);
        createTeam();
      });
  }

  // Add Intern function
  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message:
            "What is the intern's name?",
        },

        {
          type: "input",
          name: "internId",
          message:
            "What is the intern's employee ID number?",
        },

        {
          type: "input",
          name: "internEmail",
          message:
            "What is the intern's email address?",
        },

        {
          type: "input",
          name: "internSchool",
          message:
            "What school does the intern attend?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamArray.push(intern);
        createTeam();
      });
  }

  // Generate HTML
  function htmlBuilder() {
    console.log("Team created!");

    fs.writeFileSync(
      outputPath,
      generateTeam(teamArray),
      "UTF-8"
    );
  }

  createTeam();
}

runApp();
