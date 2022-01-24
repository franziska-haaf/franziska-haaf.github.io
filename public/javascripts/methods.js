function toggleMobileNav() {
    let topNav = document.getElementById("topNav")
    let topNavMobileToggle = document.getElementById("topNavMobileToggle")
    if (topNav.classList.contains('nav-closed')) {
        topNav.classList.remove('nav-closed')
        topNav.classList.add('nav-open')
        topNavMobileToggle.textContent = 'arrow_upward'
    } else if (topNav.classList.contains('nav-open')) {
        topNav.classList.remove('nav-open')
        topNav.classList.add('nav-closed')
        topNavMobileToggle.textContent = 'menu'
    }
}

/* Image modal */
function toggleModal(img) {
    let modal = document.getElementById('imgModal')
    if (modal.classList.contains('closed')) {
        modal.classList.remove('closed')
        modal.scrollTo(0, 0)
        modal.children.item(1).src = img.src
        modal.children.item(1).alt = img.alt
    } else {
        modal.classList.add('closed')
    }
}

/* Show active anchor on the onPageNavigation */
let sections;
let navLi;
let backToTopButton;
document.addEventListener("DOMContentLoaded", () => {
    sections = document.querySelectorAll("section.project-block");
    navLi = document.querySelectorAll('#onPageNavigation ul a');
    backToTopButton = document.querySelectorAll('#backToTopButton')
});

window.addEventListener("scroll", () => {
    let current = "";
    if (sections) sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    if (navLi) navLi.forEach(li => {
        li.classList.remove('active');
        const href = li.getAttribute('href').substring(1);
        if (href === current) {
            li.classList.add('active');
        }
    });

    if (backToTopButton) /* Also show the back to top button */{
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton[0].classList.remove('hidden')
        } else {
            backToTopButton[0].classList.add('hidden')
        }
    }

});