addEventListener("DOMContentLoaded", () => {
    $$("#error-msg").hide();
    $$(".btnSubmit").addEventListener("click", (event) => {
            event.preventDefault();
            const firstName = $$("#first_name");
            const lastName = $$("#last_name");
            const email = $$("#email");
            const password = $$("#password");
            register(firstName.value, lastName.value, email.value, password.value);
        }
    );
});

function register(firstName, lastName, email, password) {
    const user = new User();
    user.first_name = firstName;
    user.last_name = lastName;
    user.email = email;
    user.password = password;
    user.create().then((result) => {
        if (result === "success")
            window.location.href = "accounts";
        else
            $$("#error-msg").show();
    });
}