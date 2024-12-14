const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");

const calendarDays = 24;

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#fff";
}

const createCalendar = () => {
    for(let i = 0; i  < calendarDays; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        let imagePath = ""
        imageNumber = i + 1;
        imagePath = `./images/image-${imageNumber}.gif`;
        

        calendarDoorText.addEventListener("click", openDoor.bind(null,  imagePath));
    }
}

calendarButton.addEventListener("click", createCalendar);

const surprise = document.querySelector("#surprise");
xmasDate = new Date("December 25")
if(Date.now == xmasDate){
    surprise.innerHTML = `<img class="img_xmas" data-aos="fade-in" data-aos-duration="5000" src="images/ronin.webp" alt="Ronin Malli">`;
}