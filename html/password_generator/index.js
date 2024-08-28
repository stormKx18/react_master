
function copyText(option) {
    navigator.clipboard.writeText("Geeksforgeeks is best learning platform.");
    const commentEl = document.querySelector("#comment");
    commentEl.textContent="Password copied to clipboard!"
}
