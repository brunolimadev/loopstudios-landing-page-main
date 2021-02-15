(function () {
    let hamburguerMenuElement = document.querySelector(".hamburguer-menu");
    let mobileMenuElement = document.querySelector(".mobile-menu");
    let headerElement = document.querySelector("header");
    let buttonElement = document.querySelector(".btn");
    let cardsContainerElement = document.querySelector(".our-creations__cards");
    let ourCreationsTopElement = document.querySelector(".our-creations__top");
    let footerTopContainer = document.querySelector(".footer-top");
    let footerMiddleContainer = document.querySelector(".footer-middle");
    let socialMediaContainerElement = document.querySelector(
        ".footer-top__social-media"
    );

    handleDetecScreenAndAjustElements();
    handleResizeDocument();
    handleClickOnHeader();

    function handleDetecScreenAndAjustElements() {
        if (window.screen.width <= 768 || window.outerWidth <= 768) {
            buttonElement.classList.add("--lg");
            cardsContainerElement.appendChild(buttonElement);
            footerMiddleContainer
                .querySelector("nav")
                .insertAdjacentElement(
                    "beforeend",
                    socialMediaContainerElement
                );
            socialMediaContainerElement.style.display = "block";
        }
    }

    function handleResizeDocument() {
        window.addEventListener("resize", () => {
            if (window.screen.width <= 768 || window.outerWidth <= 768) {
                buttonElement.classList.add("--lg");
                cardsContainerElement.appendChild(buttonElement);
                footerMiddleContainer
                    .querySelector("nav")
                    .insertAdjacentElement(
                        "beforeend",
                        socialMediaContainerElement
                    );
                socialMediaContainerElement.style.display = "block";
            }
            if (window.screen.width > 768) {
                buttonElement.classList.contains("--lg") &&
                    buttonElement.classList.remove("--lg");
                ourCreationsTopElement.appendChild(buttonElement);
                footerTopContainer.appendChild(socialMediaContainerElement);
            }
        });
    }

    function handleClickOnHeader() {
        headerElement.addEventListener("click", (event) => {
            let target = event.target;

            if (
                target.classList[0] === "hamburguer-menu" ||
                target.classList[0] === "hamburguer-menu__line"
            ) {
                mobileMenuElement.classList.toggle("d-none");
                mobileMenuElement.classList.toggle("mobile-menu--open");
                hamburguerMenuElement.classList.toggle("open");
                mobileMenuElement.classList.contains("d-none")
                    ? (document.body.style.overflow = "auto")
                    : (document.body.style.overflow = "hidden");
            }
        });
    }
})();
