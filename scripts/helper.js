//functions

// fetch data from the data file
async function fetchJSONData() {
    const response = await fetch('./data/data.json');
    const jsonData = await response.json();
    return jsonData;
}

// load data from data.json to the projects container
function loadData(projectCount, data, projectsContainer) {

    console.log(data);

    for (let i = 0; i < projectCount; i++) {

        // store current project
        let currentProj = data[i];
        console.log(currentProj);

        // create new elements 
        let div = document.createElement('div');
        let title = document.createElement('h3');
        let anchor = document.createElement('a');
        let img = document.createElement('img');
        let description = document.createElement('p');

        div.classList.add('project');

        // append child
        div.appendChild(title);
        div.appendChild(anchor);
        anchor.appendChild(img);
        div.appendChild(description);

        // load data
        title.innerHTML = currentProj.title;
        anchor.href = currentProj.link;
        anchor.target = "blank";
        img.src = currentProj.image;
        img.alt = "project image";
        description.innerHTML = currentProj.description;
        if (currentProj.description == "") {
            description.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi autem quas amet ad, rem totam ut odit ratione deserunt fuga voluptas blanditiis corrupti velit id illum fugiat, nulla recusandae officia dolores nisi quos! Laborum expedita odit aut aliquam id rerum quam quisquam tempora! Perspiciatis recusandae perferendis explicabo dolorem ut omnis?";
        }

        // append div to the container
        projectsContainer.appendChild(div);
    }

}

export { fetchJSONData, loadData }


// other data for future use
// {
//     "title": "React Project",
//     "image":"./media/",
//     "link": "https://vanphanmade.github.io/",
//     "description": ""
// },
// {
//     "title": "API Project",
//     "image":"./media/",
//     "link": "https://vanphanmade.github.io/",
//     "description": ""
// },
// {
//     "title": "High Score Project",
//     "image":"./media/",
//     "link": "https://vanphanmade.github.io/",
//     "description": ""
// }
