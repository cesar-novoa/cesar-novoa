#!/usr/bin/env node

'use strict'

const boxen = require('boxen');
const chalk = require('chalk');
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:themotokar@gmail.com");
                    console.log("\nDone, see you soon at inbox.\n" + "\nJust in case: themotokar@gmail.com \n");
                }
            },
            {
                name: `Download my ${chalk.hex('#fcba03').bold("Resume")}?`,
                value: () => {
                    open('')
                }
            },
            {
                name: 'Just quit',
                value: () => {
                    console.log(chalk.hex('#fcf003').bold("That's all folks!.\n"));
                }
            }
        ]
    }
];

const data = {
    name: '                   ' + chalk.hex('#fcba03').bold("César Nóvoa Fernández"),
            
    job: chalk.white("Web Developer at ") + chalk.hex("#ab56e9").bold("ingenyus*"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("rasekdk"),
    github: chalk.gray("https://github.com/") + chalk.green("rasekdk"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("rasekdk"),
    web: chalk.cyan("Work in Progress"),
    npx: chalk.red("npx") + " " + chalk.white("rasek"),

    
    labelWork: chalk.white.bold("       Work:") + ' ',
    labelGitHub: chalk.white.bold("     GitHub:") + ' ',
    labelTwitter: chalk.white.bold("    Twitter:") + ' ',
    labelLinkedIn: chalk.white.bold("   LinkedIn:") + ' ',
    labelWeb: chalk.white.bold("        Web:") + ' ',
    labelCard: chalk.white.bold("       Card:") + ' '
    
}


const me = boxen(
    [
        data.name,
        ``,
        data.labelWork + data.job,
        ``,
        data.labelGitHub + data.github,
        data.labelLinkedIn + data.linkedin,
        data.labelTwitter + data.twitter,
        data.labelWeb + data.web,
        ``,
        data.labelCard + data.npx,
        ``,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    ].join('\n'),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: 'single',
        borderColor: 'green'
    }
);

console.log(me);

const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");

console.log(tip);

prompt(questions).then(answer => answer.action());