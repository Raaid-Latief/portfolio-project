// 1. Projects
// 2. Resume
// 3. Testimonials

const projects = [
    {
        title: "Dream Holiday Destination",
        description: "Lorem Ipsum Dolor Simet",
        techStack: "HTML/CSS/JS",
        github: "https://github.com/Raaid-Latief/Restaurant",
        live: "https://vocal-malabi-7634f8.netlify.app/",
        imgURL: "https://i.postimg.cc/4NjG3psF/holiday-2.png",

},
{
    title: "Protein Parlour",
    description: "Lorem Ipsum Dolor Simet",
    techStack: "HTML/CSS/JS",
    github: "https://github.com/Raaid-Latief/HolidayDestination",
    live: "https://glittery-griffin-46929e.netlify.app//",
    imgURL: "https://i.postimg.cc/W4N5cbhb/protein.png",

},
];

document.getElementById("").innerHTML = projects;


const resume = [
    {
        date: "",
        place: "Lorem Ipsum Dolor Simet",
        occupation: "HTML/CSS/JS",
        responsibilities: ["Create"],

      
},
];


const testimonials = [
    {
        name: "Lunga Booi",
        testimonial: "Raaid is wise and honest person. He loves his work.  He put more effort to his work.  He doesn't hesitate to assist you"
        occupation: "Colleague"
        profile: ""
        
    

},
{ 
    name:
    testimonial:
    occupation:
    profile:
    
},
];




for (let i=0; i<projects.length; i++)
{
 document.querySelector("#projects").innerHTML+=`
 <img src=${projects[i].imgURL}>
 `;  
}

