addEventListener("DOMContentLoaded", () => {
    $$("#error-msg").hide();
    $$(".btnSubmit").addEventListener("click", (event) => {
            event.preventDefault();
            const email = $$("#email");
            const password = $$("#password");
            signIn(email.value, password.value);
        }
    );
});

function signIn(email, password) {
    get("login/" + email + "/" + password).then((result) => {
        if (result === "success")
            window.location.href = "accounts";
        else
            $$("#error-msg").show();
    });
}