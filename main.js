const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");

const calendarDays = 24;

let openedDoors = [];

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#fff";

    const r = /\d+/;

    openedDoors.push(path.match(r));
    
    document.getElementById("list-num").innerHTML = `The opened number doors are ${openedDoors.join(', ')}`;
}

const createCalendar = () => {
    const currentDate = new Date().getDate();

    for (let i = 0; i < calendarDays; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        let imagePath = `./images/image-${i + 1}.gif`;

        if (currentDate >= i + 1) {
            calendarDoorText.addEventListener("click", openDoor.bind(null, imagePath));
        }
    }

    openedDoors.sort((a, b) => a - b);
    document.getElementById("list-num").innerHTML = `The opened number doors are ${openedDoors.join(', ')}`;

    calendarButton.disabled = true;
};

calendarButton.addEventListener("click", createCalendar);

const surprise = document.querySelector("#surprise");
xmasDate = new Date("December 25")
if (Date.now == xmasDate) {
    surprise.innerHTML = `<img class="img_xmas" data-aos="fade-in" data-aos-duration="5000" src="./images/xmas.jpg" alt="Ronin Malli" style="width:50%;">`;
}
document.getElementById("countdown").innerHTML = `So, try to be patient... because there are ${xmasDate.getDate() - new Date().getDate()} days left to see it!`;