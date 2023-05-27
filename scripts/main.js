import { fetchJSONData, loadData } from './helper.js';

// variables
let jsonData; // data loaded from data.json
let projectCount; // number of projects
let projectsContainer; // container that stores all the projects


// init function
async function init() {

    // fetch and store data
    jsonData = await fetchJSONData();

    // update total project number
    projectCount = jsonData.length;

    // get reference 
    projectsContainer = document.querySelector('.projects');

    // load project content to the container
    loadData(projectCount, jsonData, projectsContainer);
}

window.onload = init;
