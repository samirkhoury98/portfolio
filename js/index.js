// pseudo
// grab all of the nav-anchor-link elements
// loop through all the Node
// create an event listener onClick
// get the path of the selected link
// remove and active class of the nav links
// add the active class to the slective link

const navLinks = document.querySelectorAll('.navul a');

navLinks.forEach(link => {
    link.addEventListener('click',(event) => {
       document.querySelector('navul a.is-active').classList.remove('is-active');
            event.target.classList.add('is-active');
    })
})