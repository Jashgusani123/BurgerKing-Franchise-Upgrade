let input = document.querySelectorAll("input");
input.forEach((z) => {
    z.addEventListener("click", () => {
        z.style.display = "none";
        z.parentElement.children[3].style.display = "block";
    });
})
let deecriment = document.querySelectorAll(".de");
deecriment.forEach((q) => {
    q.addEventListener("click", () => {
        // console.log(q.parentElement.children[1].innerText);
        if (q.parentElement.children[1].innerText > 1)
            q.parentElement.children[1].innerText -= 1;
        else if (q.parentElement.children[1].innerText > 0) {
            let i = q.parentElement.parentElement.
                parentElement.children[2];
            i.style.display = "block";
            i.checked = false;
            let i2 = q.parentElement.parentElement.
                parentElement.children[3];
            i2.style.display = "none";
            // i.preventDefault();
        }

    })
})
let increement = document.querySelectorAll(".in");
increement.forEach((q) => {
    q.addEventListener("click", () => {
        // console.log(q.parentElement.children[1].innerText);
        let inc = Number(q.parentElement.children[1].innerText);
        inc += 1;
        q.parentElement.children[1].innerText = inc;
        // q.parentElement.children[1].innerText += 1;
    })
})

let btn = document.getElementById("btn1");
btn.addEventListener("click", function (e) {
    let loding = document.getElementById("mainl");
    let con1 = document.getElementById("con");
    con1.style.display = "none";
    let count = document.querySelector(".counter");
    let bar = document.getElementById("loading-bar-front");
    let i = 0;
    lod();



    function lod() {
        count.innerText = i + "%";
        bar.style.width = i + "%";
        let p = 0;
        let qn = 0;
        let t = 0;

        i++;
        if (i < 101) {
            loding.style.display = "block";
            setTimeout(lod, 20);
        } else {
            // let con = document.getElementById("container");
            loding.style.display = "none";
            let cart = document.getElementById("cart");
            let check = document.querySelectorAll("input");
            let arr = [100, 150, 30, 50];
            check.forEach((w) => {
                if (w.checked) {
                    let count = Number(w.parentElement.children[3].children[0].children[1].innerText);
                    let r = w.value;
                    let div = document.createElement("div");

                    if (r === "Pizaa") {
                        p = (arr[0]) * count;
                        div.innerHTML = `<p class="name">${w.value}</p>
             <p id="count">${count}</p> 
            <p class="text">${p}/-</p>
            `;
                        qn += count;
                        t += p;
                    }
                    else if (r === "Sandwich") {
                        p = (arr[1]) * count;
                        div.innerHTML = `<p class="name">${w.value}</p>
             <p id="count">${count}</p> 
            <p class="text">${p}/-</p>
            `;
                        qn += count;
                        t += p;
                    }
                    else if (r === "Panipuri") {
                        p = (arr[2]) * count;
                        div.innerHTML = `<p class="name">${w.value}</p>
             <p id="count">${count}</p> 
            <p class="text">${p}/-</p>
            `;
                        qn += count;
                        t += p;
                    }
                    else if (r === "Dabelii") {
                        p = (arr[3]) * count;
                        div.innerHTML = `<p class="name">${w.value}</p>
             <p id="count">${count}</p> 
            <p class="text">${p}/-</p>
            `;
                        t += p;
                        qn += count;
                    }
                    cart.style.display = "block";
                    cart.append(div);
                }
                // console.log(idx);
            })
            let total = document.createElement("div");
            total.innerHTML = `<p class="totalm">Total : </p>
            <p class="total">${qn} </p>
            <p class="total">${t}/- </p>`
            cart.append(total)
            // console.log(p);
        }
    }
    // 
})