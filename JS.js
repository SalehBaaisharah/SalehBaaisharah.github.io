
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});


// Filter projects by category
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



