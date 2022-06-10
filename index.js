const createNotif = (
    title = "Sample Title",
    content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consequatur officiis iure pariatur maxime natus beatae officia distinctio doloribus modi?",
    autoClose = true,
    time = 3000
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
    const notifEl = document.getElementById(`${identifier}`)
    const notifClose = notifEl.querySelector(".notif-close")
    notifClose.addEventListener("click", closeNotif)
    if (autoClose) {
        setTimeout(() => {
            const el = document.getElementById(`${identifier}`);
            if (!el) return;
            el.classList.add("remove-notif");
            setTimeout(() => { el.remove() }, 1000)
        }, time);
    }
};

const closeNotif = e => {
    const el = e.currentTarget.parentElement.parentElement;
    el.classList.add("remove-notif");
    setTimeout(() => { el.remove() }, 1000)

    const allNotif = document.querySelectorAll(".notif");
    allNotif.forEach(notif => {
        if (notif === el) return;
        notif.classList.add("slide-down");
    })
}

const paragraphs = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consequatur officiis iure pariatur maxime natus beatae officia distinctio doloribus modi?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consequatur officiis iure pariatur maxime natus beatae officia distinctio doloribus modi?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consequatur officiis iure pariatur maxime natus beatae officia distinctio doloribus modi?"
]
createNotif("Title", paragraphs[0], false);
createNotif("Title", paragraphs[0], false);
createNotif("Title", paragraphs[0], false);
createNotif("Title", paragraphs[0], false);
createNotif("Title", paragraphs[0], false);
