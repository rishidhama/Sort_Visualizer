// alert("hoo")
window.addEventListener("load", () => {
    // fillBox();
    // document.getElementById("audio").addEventListener("click", audioButton);
    // updateAudioIcon();

    // sleep(1432).then(() => {
    //     if (!running) shuffle();
    // });

    let menu = document.getElementById("menu-btns");
    if (!menu) return;
    for (let i = 0; i < menu.children.length; i++) {
        menu.children[i].addEventListener("click", () => {
            loadCode(menu.children[i]);
        })
    }
    loadCode(menu.children[0]);
    // fillBox();
});

function loadCode(btn) {
    let lang = btn.firstElementChild.title;
    let menu = byId("menu-btns");
    for (let i = 0; i < menu.children.length; i++) {
        menu.children[i].classList.remove("menu-btns-activated");
    }

    btn.classList.add("menu-btns-activated");
    let code = byId("code");
    code.innerHTML = codes[lang];
    code.className = '';
    code.classList.add(lang.toLowerCase())
    hljs.highlightAll();
}
var elements = [];
function fillBox() {
    value=7;
    let box = document.getElementById("sort-container");
    let size = 100 / value;
    clearBox(box);
    elements = [];

    for (let i = 0; i < value; i++) {
        let element = document.createElement("div");
        element.classList.add("element");
        element.style.left = i*size + "%";
        element.style.width = size + "%";
        element.style.height = (i+1)*size + "%";
        element.push(element);
        box.append(element);
    }
}
function clearBox(box) {
    while (box.lastElementChild) {
        box.removeChild(box.lastElementChild);
    }
}