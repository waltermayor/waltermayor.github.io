//const allContainer = document.getElementById('all');
const categoryContainer = document.getElementById('a');

const loadProjects = async () => {
  try {
    const response = await fetch('single-page/projects.json');
    const data = await response.json();
    localStorage.setItem('projectData', JSON.stringify(data));

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const project = data[key];
        const projectPath = `single-page/projects/${key}/`;
        
        // Generate the HTML for each project
        const projectHTML = `
          <div class="col-md-4 col-sm-6 col-xs-12 grid inRight">
            <figure class="port-effect">
              <img src="${project.images[0]}" class="img-responsive" alt="portfolio-demo"/>
              <figcaption>
                <h2>${project.name}</h2>
                <p>${project.phrase}</p>
                <a href="single-portfolio.html?id=${project.id}">View more</a>
              </figcaption>
            </figure>
          </div>
        `;

        // Append the project HTML to both 'all' and 'a' containers
        categoryContainer.innerHTML += projectHTML;
      }
    }
  } catch (error) {
    console.error('Failed to load projects:', error);
  }
};

// Call the function to load all projects
loadProjects();