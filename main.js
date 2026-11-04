const lines = document.querySelectorAll("div span");
const runLine = document.querySelectorAll(".runLine");
let click = false;

console.log(runLine);

function particle (size, dirX, dirY) {
    this.size = size;
    this.dirX = dirX;
    this.dirY = dirY;
}

function createParticle(p, src) {
    const img = document.createElement("img");
    img.src = src;
    img.style.width = img.style.height = p.size + "px";
    img.style.position = "absolute";
    img.className = "particle";
    img.style.setProperty("--dirX", p.dirX + "px");
    img.style.setProperty("--dirY", p.dirY + "px");
    img.style.translate = "30px 30px"
    return img;
}

function animate(e, t, s, cb){
    let l = t.length;
    let i = 0;
    let interval = setInterval(() => {
        if (i < l) {
            let c = document.createElement("span");
            c.textContent = t.charAt(i);
            c.style.position = "relative";
            c.style.display = "inline-block";
            c.style.whiteSpace = "pre";
            c.style.textShadow = "0 0 10px #fff, 0 0 20px #fff";
            c.classList.add("pulse");
            c.style.setProperty("--pt", s*4 + "ms");
            //const p2 = new particle(Math.floor(Math.random() * 24) + 1, (Math.random()-0.5) * 100 + 1, (Math.random()-0.5) * 100 + 1);
            //const p3 = new particle(Math.floor(Math.random() * 24) + 1, (Math.random()-0.5) * 100 + 1, (Math.random()-0.5) * 100 + 1);
            const p1 = new particle(Math.floor(Math.random() * 24) + 1, (Math.random()-0.5) * 100 + 1, (Math.random()-0.5) * 100 + 1);
            let c1 = createParticle(p1, "resources/branch.png"); 
            //let c2 = createParticle(p2, "resources/branch.png"); 
            //let c3 = createParticle(p3, "resources/branch.png");
            c.appendChild(c1);
            //c.appendChild(c2);
            //c.appendChild(c3);
            e.appendChild(c);
            setTimeout(() => {
                c1.remove();
                //c2.remove();
                //c3.remove();
                c.classList.remove("pulse");
            }, 690);
            i++;
        } else {
            clearInterval(interval);
            if (cb) cb();
        }
    }, s);
}

runLine.forEach(line => {
    line.addEventListener("click", () => {
        if (!click) {
            click = true;
            let i = 0;
            function nextLine() {
                if (i < lines.length) {
                    let line = lines[i];
                    let text = line.getAttribute("data-text");
                    animate(line, text, 50, () => {
                        if(i%2==0){
                            setTimeout(nextLine, 320);
                        } else {
                            setTimeout(nextLine, 560);
                        }
                        i++;
                    });
                }
                else {
                    setTimeout(() => {
                        const containers = document.querySelectorAll("#left, #right");
                        containers.forEach(div => div.classList.add("fade"));
                        document.querySelectorAll("#left span span, #right span span").forEach(c => {
                            c.style.textShadow = "none";
                            c.classList.add("fadeshadow");
                        });
                        setTimeout(() => {
                            containers.forEach(div => div.classList.remove("fade"));
                            lines.forEach(line => {
                                while (line.firstChild) {
                                    line.removeChild(line.firstChild); 
                                }
                                line.textContent = ""; 
                            });
                            click = false; 
                        }, 1200);
                    }, 600);
                }
            }
        }
        nextLine();
    }
)});