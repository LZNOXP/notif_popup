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

createNotif();
createNotif();
createNotif();
createNotif();
createNotif();
