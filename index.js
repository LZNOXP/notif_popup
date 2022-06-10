const createNotif = (
    title = "Sample Title",
    content = "Sample Content",
    autoClose = true,
    time = 2000
) => {
    const identifier =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
    const notification = document.createElement("div");
    notification.classList.add("notif");
    notification.id = identifier;
    notification.innerHTML = `
    <div class="notif-header">
        <div class="notif-title">${title}</div>
        <div class="notif-close">&#x2715</div>
    </div>
    <div class="notif-content">${content}</div>
    `
    document.querySelector(".notif-container").append(notification)

    const notifClose = notification.querySelector(".notif-close")
    notifClose.addEventListener("click", closeNotif)

    setTimeout(() => {
        const height = notification.clientHeight;
        notification.style = `--height: ${height}px`;
    }, 50)

    if (autoClose) {
        setTimeout(() => notifClose.click(), time);
    }
};

const closeNotif = e => {
    const el = e.currentTarget.parentElement.parentElement;
    el.classList.add("remove-notif");
    setTimeout(() => { el.remove() }, 1000)
}

const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at blandit orci, at lobortis ipsum. Nulla nisl ex, ultrices ornare tempus ac, semper ut est",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at blandit orci, at lobortis ipsum. Nulla nisl ex, ultrices ornare tempus ac, semper ut est. Nunc blandit mauris massa, vitae consectetur mi gravida ut. Curabitur varius nisi sit amet bibendum gravida. Maecenas vel rhoncus enim. Donec non tortor lacus. Duis eu dictum lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus",
]
createNotif("Title", paragraphs[0], false);
createNotif("Title", paragraphs[2], false);
createNotif("Title", paragraphs[1], false);
createNotif("Title", paragraphs[0], true, 3000);
createNotif("Title", paragraphs[0], false);
