addEventListener("DOMContentLoaded", () => {
    $$("#error-msg").hide();
    $$(".btnSubmit").addEventListener("click", (event) => {
            event.preventDefault();
            const email = $$("#email");
            const password = $$("#password");
            login(email.value, password.value);
        }
    );
});

function login(email, password) {
    get("login/" + email + "/" + password).then((result) => {
        if (result === "success")
            window.location.href = "accounts";
        else
            $$("#error-msg").show();
    });
}