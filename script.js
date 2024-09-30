let dropdown = document.getElementById("dropdown");
let collapsebtn = document.getElementById("collapsebtn");
let sidebar = document.querySelector(".sidebar");



dropdown.addEventListener('click', () => {
    console.log("hello")
    dropdown.style.transform = 'rotate(180deg) ';

})


collapsebtn.addEventListener('click', () => {
    sidebar.classList.toggle("collapseSidebar");
})