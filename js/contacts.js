document.getElementById("submit").addEventListener("click", redirectFunction);

function redirectFunction(){
    let name = document.querySelector("#name");
    let _replyto = document.querySelector("#email-address");
    let message = document.querySelector("#message");
    const _subject = "Contact Form Submission";

    const data = { name, _replyto, message, _subject };

    fetch("https://formspree.io/f/xdovlgozs", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
    },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Success:", data);
        // window.location.href = "/thanks.html";
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}