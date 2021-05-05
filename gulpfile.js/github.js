const execa = require('execa'); // execute npm/node tasks
const dotenv = require('dotenv'); // env
const yargs = require('yargs'); // pull messages from env
const { m } = yargs.argv; // used like an -m flag----gulp push -m 'your message here'
const conventionalRecommendedBump = require('conventional-recommended-bump'); // bump version in package.json
const { promisify } = require('util'); // promises
const fs = require('fs'); // node events

// load environment variables
const result = dotenv.config();
if (result.error) {
  throw result.error;
}

// Conventional Changelog preset
const preset = 'eslint';
// print output of commands into the terminal
const stdio = 'inherit';

async function bumpVersion() {
  // get recommended version bump based on commits
  const { releaseType } = await promisify(conventionalRecommendedBump)({ preset });
  // bump version without committing and tagging
  await execa('npm', ['version', releaseType, '--no-git-tag-version'], {
    stdio,
  });
}

async function pushToGithub() {
  const { version } = JSON.parse(await promisify(fs.readFile)('package.json'));
  const commitMsg = `publishing to Hubspot: release ${version}`;
  let msg = m ? m : commitMsg;
  await execa('git', ['add', '.'], { stdio });
  await execa('git', ['commit', '--message', msg], { stdio });
  await execa('git', ['push', '--follow-tags'], { stdio });
}

exports.bumpVersion = bumpVersion; 
exports.pushToGithub = pushToGithub; 

