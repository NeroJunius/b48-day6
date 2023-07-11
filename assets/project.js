let blogs = []

// alert project page
function formAlert() {
  let projectName = document.getElementById("projectName").value;
  let startDate = document.getElementById("startDate").value;
  let endDate = document.getElementById("endDate").value;
  let projectDescription = document.getElementById("projectDescription").value;
  let reactJS = document.getElementById("reactJS").value;
  let nodeJS = document.getElementById("nodeJS").value;
  let nextJS = document.getElementById("nextJS").value;
  let typeScript = document.getElementById("typeScript").value;
  let imageProject = document.getElementById("imageProject").value;
  
  if(projectName == "") {
      return alert("Input the title of project, please!");
  } else if(startDate == "") {
      return alert("Input start of Project's date, please!");
  } else if(endDate == "") {
      return alert("Input end of Project's date, please!");
  } else if(projectDescription == "") {
      return alert("Input description, please!");
  } else if( reactJS.checked == "" || nodeJS.checked == "" || nextJS.checked == "" || typeScript.checked == "") {
      return alert("Choose technology, please!");
  } else if(imageProject == "") {
      return alert("Inpu an image, please!");
  }
};

function getBlog(event){
    event.preventDefault()

    // time
    function getDistanceTime(){
      let diff = new Date(endDate) - new Date(startDate);

      let days = Math.floor(diff / (24 * 60 * 60 * 1000));
      let months = Math.floor(days / 30);
      let years = Math.floor(months / 12);
      let remainingDays = days % 30;
      let remainingMonths = months % 12;
      let daysAffix = `$`
    
      if (years > 0 && remainingMonths > 0 && remainingDays > 0) {
          return `${years} Years ${remainingMonths} Months ${remainingDays} Days`;
      } else if (years > 0 && remainingMonths > 0 && remainingDays == 0){
          return `${years} Years ${remainingMonths} Months`;
      } else if (years > 0 && remainingMonths == 0 && remainingDays == 0){
          return `${years} Years`;
      } else if (years > 0 && remainingMonths == 0 && remainingDays > 0){
          return `${years} Years ${remainingDays} Days`;
      } else if (years == 0 && remainingMonths > 0 && remainingDays > 0){
          return `${remainingMonths} Months ${remainingDays} Days`;
      } else if (years == 0 && remainingMonths > 0 && remainingDays == 0){
          return `${remainingMonths} Months`;
      } else if (years == 0 && remainingMonths == 0 && remainingDays > 0){
          return `${remainingDays} Days`;
      } 
  }

  // input project

    let projectName = document.getElementById("projectName").value
    let startDate = document.getElementById("startDate").value
    let endDate = document.getElementById("endDate").value
    let projectDescription = document.getElementById("projectDescription").value
    let imageProject = document.getElementById("imageProject").files
    let duration = getDistanceTime()

    const nodeJS = `<i class="fa-brands fa-node-js"></i>`;
    const nextJS = `<i class="fa-solid fa-n"></i>`;
    const reactJS = `<i class="fa-brands fa-react"></i>`;
    const typeScript = `<i class="fa-solid fa-scroll"></i>`;

    let JSnode = document.getElementById("nodeJS").checked? nodeJS : ""
    let JSnext = document.getElementById("nextJS").checked? nextJS : ""
    let JSreact = document.getElementById("reactJS").checked? reactJS : ""
    let scriptType = document.getElementById("typeScript").checked? typeScript : ""
  
    const image = URL.createObjectURL(imageProject[0])

    let blog = {
        projectName,
        startDate,
        endDate,
        duration,
        projectDescription,
        JSnode,
        JSnext,
        JSreact,
        scriptType,
        image,
    }

    blogs.push(blog)    
    renderBlog()
}

function renderBlog(){
  for(let i = 0; i < blogs.length; i++) {
    document.getElementById("project").innerHTML += `
      <div class="projectDetail" >
        <div class="itemProject">
          <div class="header card border-0">
            <img src="${blogs[i].image}" alt="Dokutah" class="img-card-top"/>
              <a class="titleP" href="project-detail.html" target="_blank"
              >${blogs[i].projectName}
              </a>
            <div class="detailP">
            ${blogs[i].duration}
            </div>
          </div>
          <div class="projectContent">
            <p>
            ${blogs[i].projectDescription}
            </p>
          </div>
          <p class="technologies">
          ${blogs[i].JSnode}
          ${blogs[i].JSnext}
          ${blogs[i].JSreact}
          ${blogs[i].scriptType}
          </p>
          <div class="btnGroups">
              <button class="btn">Edit</button>
              <button class="btn">Delete</button>
          </div>
        </div>
      </div> 
    `
  }
    
}
  
    