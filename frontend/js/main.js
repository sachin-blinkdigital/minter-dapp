var viewportWidth = $(window).width();
      $(window).resize(function () {
        viewportWidth = $(window).width();
        if (viewportWidth > 768) {
          $(".hidden-lg .panel").remove();
        } else {
          $(".hidden-xs .panel").remove();
        }
      });

      if (viewportWidth > 768) {
        $(".hidden-lg .panel").remove();
      } else {
        $(".hidden-xs .panel").remove();
      }

      gsap.registerPlugin(ScrollTrigger);

      let sections = gsap.utils.toArray(".panel");
      //console.log(sections);

      gsap.to(sections, {
        xPercent:
          viewportWidth > 768
            ? -100 * (sections.length - 1)
            : -110 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#roadmap",
          pin: true,
          scrub: 1,
          snap: viewportWidth > 768 ? 1 / (sections.length - 1) : "",
          // base vertical scrolling on how wide the container is so it feels more natural.
          end:
            viewportWidth > 768
              ? `+=${(sections.length / 2 - 1) * 100}%`
              : `+=100%`,
        },
      });

const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);

$(".navbar-link.scroll").click(function () {
  toggleNavbarVisibility();
  $("html, body").animate(
    {
      scrollTop: $("#" + $(this).attr("target")).offset().top - 50,
    },
    700
  );
});


MicroModal.init({
  // onShow: (modal) => console.info(`${modal.id} is shown`), // [1]
  // onClose: (modal) => console.info(`${modal.id} is hidden`), // [2]
  openTrigger: "data-custom-open", // [3]
  closeTrigger: "data-custom-close", // [4]
  openClass: "is-open", // [5]
  disableScroll: true, // [6]
  disableFocus: false, // [7]
  awaitOpenAnimation: false, // [8]
  awaitCloseAnimation: false, // [9]
  debugMode: true, // [10]
});