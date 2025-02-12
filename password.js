document.addEventListener('DOMContentLoaded', function () {
    function password_check() {
        var correct_pw = "micmic0430";

        while (true) {
            var pw = prompt("Enter Password:");

            if (pw === null) {
        
                document.getElementById('resume').click();
                break;
            }

            if (pw === correct_pw) {
                
                document.getElementById('content').style.display = 'block';
                break;
            }

            alert("Incorrect password.Contact me for the password");
        }
    }

    password_check();
});