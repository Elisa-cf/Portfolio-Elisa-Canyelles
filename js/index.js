const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})




//showing card button when mouseover:

//We create the variables for container and for my-work-button
// const container = document.querySelectorAll('.container');
// const workBtn = document.querySelectorAll('.my-work-button');


// container.forEach(el => {
//     el.addEventListener('mouseover', (e) => {
//        workBtn.forEach(element => {
//     element.style.visibility ="visible"
// })
//     })
// })

// container.forEach(el => {
//     el.addEventListener('mouseleave', (e) => {
//         workBtn.forEach(element => {
//             element.style.visibility = "hidden"
//         })
//     })
// })



