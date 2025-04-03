//javascript for navigation bar effects on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  header.classList.toggle("sticky", window.scrollY > 0)
})

// JavaScript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn")
const navigation = document.querySelector(".navigation")
const navigationItems = document.querySelectorAll(".navigation a")
let menuOpen = false

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("active")
    navigation.classList.add("active")
    menuOpen = true
  } else {
    menuBtn.classList.remove("active")
    navigation.classList.remove("active")
    menuOpen = false
  }
})

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active")
    navigation.classList.remove("active")
    menuOpen = false
  })
})

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn")

window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("active", window.scrollY > 500)
})

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal)

function reveal() {
  var reveals = document.querySelectorAll(".reveal")

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var revealTop = reveals[i].getBoundingClientRect().top
    var revealPoint = 50

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active")
    }
  }
}

// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear()

// Smooth scrolling for navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      })
    }
  })
})

// Initialize skill animations when they come into view
function initSkillAnimations() {
  const skillBars = document.querySelectorAll(".skills .line")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  skillBars.forEach((bar) => observer.observe(bar))
}

// Call initialization function when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initSkillAnimations()
})

