const ulti = document.querySelector(".ulti");
let posX = Math.random()*80 + 5 + "%";
let posY = Math.random()*80 + 5 + "%";

ulti.style.setProperty("--posX", posX);
ulti.style.setProperty("--posY", posY);

setTimeout(() => {
    ulti.style.visibility = "visible";
}, Math.random() *135000 + 45000);

ulti.addEventListener("click", () => {
    ulti.classList.add("disappear");
    setTimeout(() => {
        ulti.style.visibility = "hidden";
    }, 800);

    const coating = document.createElement("div");
    coating.style.zIndex = "4";
    coating.style.position = "absolute";
    coating.style.top = "100%";
    coating.style.height = "200%";
    coating.style.width = "100%";
    coating.classList.add("coating1");
    document.body.appendChild(coating);

    const ultidiv = document.createElement("div");
    ultidiv.style.zIndex = "3";
    ultidiv.style.top = "50%";
    ultidiv.style.left = "50%";
    ultidiv.style.transform = "translate(-50%, -50%)";
    ultidiv.style.position = "absolute";
    ultidiv.style.width = "100vw";
    ultidiv.style.height = "100vh";
    ultidiv.style.display = "flex";
    ultidiv.style.justifyContent = "center";
    ultidiv.style.alignItems = "center";
    ultidiv.style.overflow = "hidden";

    const ultivid = document.createElement("video");
    ultivid.src = "../resources/ulti1.mp4";
    ultivid.autoplay = true;
    ultivid.loop = false;
    ultivid.muted = true;
    ultivid.style.objectFit = "cover";
    ultivid.style.position = "absolute";
    ultivid.style.width = "100%";
    ultivid.style.height = "100%";

    setTimeout(() => {
        document.body.appendChild(ultidiv);
        ultidiv.appendChild(ultivid);
        ultidiv.classList.add("zoomAndFade");
    }, 1650);

    setTimeout(() => {
        coating.classList.remove("coating1");
        coating.classList.add("coating2");
    }, 3650);

    setTimeout(() => {
        ultidiv.classList.remove("zoomAndFade");
        ultivid.src = "../resources/ulti2.mp4";
        setTimeout(() => {
            coating.classList.remove("coating2");
            coating.classList.add("coating3");
        }, 1500)
    }, 10650);

    setTimeout(() => {
        document.body.removeChild(ultidiv);        
        setTimeout(() => {
            document.body.removeChild(coating);
            setTimeout(() => {
                ulti.classList.remove("disappear");
                ulti.style.visibility = "visible";
            }, Math.random() *135000 + 45000);
        }, 3000)
    }, 16450);
})

