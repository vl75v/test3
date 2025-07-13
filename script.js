const element = document.getElementById("root");
element.innerHTML = `<div class='card'><p>Lorem ipsum,
        dolor sit amet consectetur adipisicing elit.<br />
        Nulla saepe ex, non cupiditate,<br />
        hic ut earum in veritatis dolorum ad reprehenderit <br />
        tempora quis qui pariatur voluptatem natus tenetur,<br />
        veniam cumque.</p><button type="button">click me</button></div>`;
const newElem = document.createElement("div");
newElem.className = "card";
newElem.textContent =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla saepe ex, non cupiditate,hic ut earum in veritatis dolorum ad reprehenderit  tempora quis qui pariatur voluptatem natus tenetur, veniam cumque.";
newElem.style.padding = "20px";
document.body.appendChild(newElem);
const btn = document.createElement("button");
btn.textContent = "click ";
btn.style.padding = "10px";
btn.style.width = "150px";
document.body.appendChild(btn);
