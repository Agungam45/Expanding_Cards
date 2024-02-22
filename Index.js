
//Gather all divs with the class of .panel
const panels = document.querySelectorAll('.panel')
console.log(panels)
//Add a click event listener to each panel that changes the panel status to active when clicked
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}