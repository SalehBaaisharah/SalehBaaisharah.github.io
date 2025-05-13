
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function filterProjects(category) {
    let projects = document.querySelectorAll(".project-card");
    if (category == 'all') {
        projects.forEach(project => {
            project.style.display = "block";
        });
    } else {
        projects.forEach(project => {
            let projectCategory = project.querySelector(".project-category").textContent.toLowerCase();
            if (projectCategory.includes(category.toLowerCase())) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    }
}



