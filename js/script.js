(function () {
    let maxResolution = 768;
    let isOpenMenu = false;
    let hamburguerMenu = document.querySelector(".hamburguer-menu");

    if (window.screen.width <= maxResolution) {
        onClickMenu();
    }

    function onClickMenu() {
        hamburguerMenu.addEventListener("click", () => {
            // alert("test");
            // console.log(hamburguerMenu);
            isOpenMenu = !isOpenMenu;
            if (!isOpenMenu) {
                hamburguerMenu
                    .querySelector(".line:nth-child(1)")
                    .classList.add("line-1");

                hamburguerMenu
                    .querySelector(".line:nth-child(2)")
                    .classList.add("line-2");

                hamburguerMenu
                    .querySelector(".line:nth-child(3)")
                    .classList.add("line-3");
            } else {
                hamburguerMenu
                    .querySelector(".line:nth-child(1)")
                    .classList.remove("line-1");

                hamburguerMenu
                    .querySelector(".line:nth-child(2)")
                    .classList.remove("line-2");

                hamburguerMenu
                    .querySelector(".line:nth-child(3)")
                    .classList.remove("line-3");
            }
        });
    }

    function showMobileMenu() {}
})();
