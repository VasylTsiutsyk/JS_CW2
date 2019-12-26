// dropdowns
const drps = document.querySelectorAll(".js-drop");
const btns = document.querySelectorAll(".js-dr-item");

const dropClick = function(e) {
    drps.forEach(i => i.classList.remove("active"));
    e.currentTarget.classList.add("active");
};

const btnClick = function(e) {
    const data = this.dataset;
    const sibling = this.closest(".js-dr-list").children;
    for (let i = 0; i < sibling.length; i++) {
        if (sibling[i].classList.contains("active")) {
            sibling[i].classList.remove("active");
            break;
        }
    }
    this.classList.add("active");
    _setStyle({
        [data.prop]: data.value
    });
};


// outside click
document.body.addEventListener("click", function(e) {
    if (e.target.closest(".js-dr-list") || e.target.closest(".js-drop")) return;
    drps.forEach(i => i.classList.remove("active"));
});

drps.forEach(el => {
    el.onclick = dropClick;
});
btns.forEach(el => {
    el.onclick = btnClick;
});