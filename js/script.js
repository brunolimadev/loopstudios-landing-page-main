(function () {
    let maxResolution = 768;
    let isOpenMenu = false;
    let hamburguerMenu = document.querySelector(".hamburguer-menu");
    let headerElement = document.querySelector("header");
    let menuParentElement = headerElement.querySelector(".container > nav");
    let menuElement = headerElement.querySelector(".container > nav > ul");
    let logoElement = headerElement.querySelector(".container nav img");

    // if (window.screen.width <= maxResolution) {
    //     onClickMenu();
    // }

    // if (window.screen.width > maxResolution && !isOpenMenu) {
    //     headerElement.querySelector("& > div").classList.add("container");
    // }

    // function onClickMenu() {
    //     hamburguerMenu.addEventListener("click", () => {
    //         // console.log(hamburguerMenu);
    //         isOpenMenu = !isOpenMenu;

    //         handleMobileMenu();
    //         if (isOpenMenu) {
    //             hamburguerMenu
    //                 .querySelector(".line:nth-child(1)")
    //                 .classList.add("line-1");

    //             hamburguerMenu
    //                 .querySelector(".line:nth-child(2)")
    //                 .classList.add("line-2");

    //             hamburguerMenu
    //                 .querySelector(".line:nth-child(3)")
    //                 .classList.add("line-3");
    //         } else {
    //             hamburguerMenu
    //                 .querySelector(".line:nth-child(1)")
    //                 .classList.remove("line-1");

    //             hamburguerMenu
    //                 .querySelector(".line:nth-child(2)")
    //                 .classList.remove("line-2");

    //             hamburguerMenu
    //                 .querySelector(".line:nth-child(3)")
    //                 .classList.remove("line-3");
    //         }
    //     });
    // }

    // function handleMobileMenu() {
    //     let headerContainerElement = headerElement.querySelector(
    //         "header > div"
    //     );

    //     if (isOpenMenu) {
    //         headerContainerElement.classList.remove("container");
    //         menuParentElement.classList.add("menu-mobile");
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         headerContainerElement.classList.add("container");
    //         menuParentElement.classList.remove("menu-mobile");
    //         document.body.style.overflow = "scroll";
    //     }
    // }
})();
