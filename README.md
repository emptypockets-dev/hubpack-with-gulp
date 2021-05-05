<h1 align="center">HubSpot CMS Boilerplate + Gulp + Webpack + SCSS + Babel + Love </h1>

<p align="center">
  A still straight-forward starting point for building a great website on the HubSpot CMS—but better. 
</p>

## Purpose

Adds Gulp, Webpack, SCSS, and Babel to the standard Hubspot CMS boilerplate. 

## Getting started

1. Do everything that the standard boilerplate requires
2. install gulp following the instructions on https://gulpjs.com
3. `npm install`
4. create a `.env` file in `/` containing `account=4395843` (replace those random numbers with your Hubspot portal id)
5. upate `gulpfile.js/webpack.js` with your folder in Hubspot
6. Optional: set a new github remote `git remote set-url origin <your github page>`
7. Optional: push to github with gulp `gulp push -m "<your commit message>"` (stage, commit and push!)
8. `(ノಠ益ಠ)ノ彡┻━┻` if I missed an instruction (and let me know).

## Commands
Run gulp (create dist, SCSS ) + run webpack (JS, autoupload to Hubspot)
```
gulp
```
Run gulp + run webpack + (stage, commit, push) to Github
```
gulp push -m "<your commit message"
```

