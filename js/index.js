const mobileOpen = document.querySelector(".nav-burger")
const mobileClose = document.querySelector(".mobile-close")
const mobileNav = document.querySelector(".mobile")

const switchMobileVisibility = () => {
    mobileNav.classList.toggle("mobile-visible")
    document.body.classList.toggle("body-overflow_hidden")
}

mobileClose.addEventListener("click", switchMobileVisibility)
mobileOpen.addEventListener("click", switchMobileVisibility)