// const closeNotif = (identifier) => {
//     //why is identifier not a string?
//     console.log("identifier", identifier);
//     identifier.classList.add("remove-notif");
//     setTimeout(() => { identifier.remove() }, 1000)
//     // const element = document.querySelector(`#${identifier}`);
//     // console.log("element", element);
// };

const createNotif = (
    title = "Sample Title",
    content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consequatur officiis iure pariatur maxime natus beatae officia distinctio doloribus modi?",
    autoClose = true,
) => {
    const identifier =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
    const notification = `
    <div class="notif" id="${identifier}">
        <div class="notif-header">
            <div class="notif-title">${title}</div>
            <div class="notif-close">&#x2715</div>
        </div>
        <div class="notif-content">${content}</div>
    </div>
    `;
    document
        .querySelector(".notif-container")
        .insertAdjacentHTML("beforeend", notification);
    document.getElementById(`${identifier}`).addEventListener("click", (e) => {
        const el = e.currentTarget;
        el.classList.add("remove-notif");
        setTimeout(() => { el.remove() }, 1000)
    })
    if (autoClose) {
        setTimeout(() => {
            const el = document.getElementById(`${identifier}`);
            if (!el) return;
            el.classList.add("remove-notif");
            setTimeout(() => { el.remove() }, 1000)
        }, 3000);
    }
};

const randomParagraph = () => {
    const paragraphs = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consequatur officiis iure pariatur maxime natus beatae officia distinctio doloribus modi?",
        "Ipsum, consequatur officiis iure pariatur maxime natus beatae officia distinctio doloribus modi?",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consequatur officiis iure pariatur maxime natus beatae officia distinctio doloribus modi?",
    ];
    const random = getRandomNumber(0, paragraphs.length - 1);
    return paragraphs[random];
}

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let counter = 0;
let randomNum = getRandomNumber(2, 10);
// setInterval(() => {
//     randomNum = getRandomNumber(2, 10);
//     counter++;
//     createNotif(`Title ${randomNum * 200}`, randomParagraph());
// }, 200 * randomNum);
createNotif();
createNotif();
createNotif();
createNotif();
createNotif();
// const addNotif = () => {
//     counter++;
//     const notifContainer = document.querySelector(".notif-container");

//     notifContainer.append(notification);
//     setTimeout(() => {
//         notification.classList.add("remove-notif");
//         // notification.remove();
//     }, 3000);
// };
// addNotif();
// setInterval(addNotif, 2000);