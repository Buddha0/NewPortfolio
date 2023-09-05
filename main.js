// MODAL
const modal = document.querySelector(".form-section");
const openButton = document.querySelectorAll(".about");

openButton.forEach((btns)=>{
  console.log(btns)
  console.log("asd")
  btns.addEventListener("click",()=>{
    modal.classList.toggle("contact-show");
  })
})

function closeModal(){
  modal.classList.remove("contact-show");
}

// MY PROJECTS
const projects = [
  {
    title: "Ecommerce-Website",
    description: `  This is a ecommerce website made with <span>React</span>. It have dynamic routing for all the items.
        It have add to cart functunality and price functionality. It also have dynamic stars for the
        ratings. You can sort the items by price or ratings and u can also search for the items. Implemented skeleton loading when images are not loaded.`,
    githubLink: "https://github.com/Buddha0/Ecommerce-",
    websiteLink: "https://animeshopy.netlify.app/",
    websiteImage:
      "./images/screencapture-localhost-5174-2023-06-30-23_00_20.png",
  },
  {
    title: "Carbon Tracker",
    description: `A hacakathon project to reduce the impact of Carbon on the environment. Made With <span>HTML,</span> <span>JavaScript</span> , <span>CSS</span> and <span>React</span>`,
    githubLink: "https://github.com/Buddha0/CarbonEmission",
    websiteLink: "https://thunderous-cannoli-eaf462.netlify.app/",
    websiteImage: "./images/carbon.png",
  },
  {
    title: "Movie Website",
    description: `A movie app made with <span>React</span> using the TMDb API where you can watch the movie trailers, select your genres and search for the movies. It have carousel scrooling. All the movies have dynamic routing and have skeleton loading when the images are not loaded.`,
    githubLink: "https://github.com/Buddha0/Movie-App",
    websiteLink: "https://321movies.netlify.app/",
    websiteImage: "./images/movie_screenshot.png",
  },
  {
    title: "Twitter Clone",
    description: `Twitter clone made with <span>Next Js,</span> and <span>Firebase,</span>`,
    githubLink: "https://github.com/Buddha0/twitterClone",
    websiteLink: "https://twitter-clone-rtge.vercel.app/",
    websiteImage: "./images/twitter.png",
  },
  {
    title: "SVG_LandingPage",
    description: `A Single Page Landing Page made with <span>HTML</span> and <span>CSS</span>`,
    githubLink: "https://github.com/Buddha0/SVG_LandingPage",
    websiteLink: "https://filolanding.netlify.app/",
    websiteImage: "./images/screenshot.png",
  },
  {
    title: "loopStudio LandingPage",
    description: `A Single Page Landing Page made with <span>HTML,</span> <span>JavaScript</span> and <span>CSS</span>`,
    githubLink: "https://github.com/Buddha0/LandingPage",
    websiteLink: "https://looppstudio.netlify.app/",
    websiteImage: "./images/loopstudio.png",
  },
 
  
];
const projectsContainer = document.querySelector(".column");


projectsContainer.innerHTML = projects
  .map((project) => {
   

    return `
    <div class="cards">

    <img src="${project.websiteImage}">

    <div class="cards-description">
        <h1 class="heading">${project.title}</h1>
        <p>
            ${project.description}
        </p>
        <div class="buttons">
            <a href=${project.websiteLink} target="_blank"> <i class="fa-solid fa-link"></i></a>
            <a href=${project.githubLink} target="_blank">  <i class="fa-brands fa-github github-logo"></i>
           </a>
          
        </div>
    </div>
</div>
   
        `;
  })
  .join("");
