
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

/*function openModal(projectTitle) {
    const content = {
        "Smart Chili Farm Automation": `
            <h2>Smart Chili Farm Automation</h2>
            <p>Designed an autonomous robot to automate chili farming.</p>
            <p><b>Tech:</b> Webots, C, IoT Sensors</p>
        `
    };
    document.getElementById('modal-content').innerHTML = content[projectTitle] || "No info available.";
    document.getElementById('modal').style.display = "flex";
}*/


function filterProjects(category) {
    let projects = document.querySelectorAll(".project-card");
    if (category == 'all') {
        projects.forEach(project => {
            project.style.opacity = "0";
            setTimeout(() => {
                project.style.display = "block";
                project.style.opacity = "1";
            }, 100);

        });
    } else {
        projects.forEach(project => {
            let projectCategory = project.querySelector(".project-category").textContent.toLowerCase();
            if (projectCategory.includes(category.toLowerCase())) {
                project.style.opacity = "0";
                setTimeout(() => {
                    project.style.display = "block";
                    project.style.opacity = "1";
                }, 100);
            } else {
                project.style.display = "none";
            }
        });
    }
}



