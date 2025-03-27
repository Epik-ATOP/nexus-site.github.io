function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_59zfy6n", "template_0r2wfbl", parms).then(alert("Email sent!"));
}