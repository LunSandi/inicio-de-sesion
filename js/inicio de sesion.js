
        const CORRECT_EMAIL = "Admin123@gmail.com"; 
        const CORRECT_PASSWORD = "Contraseña123@"; 
        let failedAttempts = 0;
        const MAX_ATTEMPTS = 3;

        const loginForm = document.getElementById('loginForm');
        const emailInput = document.getElementById('userEmail');
        const passwordInput = document.getElementById('password');
        const togglePassword = document.getElementById('togglePassword');
        const feedbackMessage = document.getElementById('feedbackMessage');
        const recoverLink = document.getElementById('recoverLink');
        const loginButton = document.getElementById('loginButton');

        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            

            this.textContent = type === 'password' ? 'Mostrar Contraseña' : 'Ocultar Contraseña';
        });


        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); 
            feedbackMessage.style.display = 'none';
            feedbackMessage.classList.remove('message-success', 'message-error');
            recoverLink.style.display = 'none';

            if (failedAttempts >= MAX_ATTEMPTS) {
                displayMessage(
                    "Cuenta bloqueada por intentos fallidos.", 
                    'error'
                );
                recoverLink.style.display = 'block';
                return;
            }

            const userEmail = emailInput.value;
            const userPassword = passwordInput.value;

            if (userEmail === CORRECT_EMAIL && userPassword === CORRECT_PASSWORD) {
                const userName = "UsuarioPrueba"; 
                displayMessage(
                    `Bienvenido al sistema, ${userName}`, 
                    'success'
                );
                failedAttempts = 0; 
                loginButton.disabled = true; 

            } else {
                failedAttempts++;
                
                if (failedAttempts >= MAX_ATTEMPTS) {
                    displayMessage(
                        "Cuenta bloqueada por intentos fallidos.", 
                        'error'
                    );
                    recoverLink.style.display = 'block';
                    loginButton.disabled = true; 
                } else {
                    const remaining = MAX_ATTEMPTS - failedAttempts;
                    displayMessage(
                        `Usuario o contraseña incorrectos. Te quedan ${remaining} intentos.`, 
                        'error'
                    );
                }
            }
        });
        function displayMessage(message, type) {
            feedbackMessage.textContent = message;
            feedbackMessage.classList.add(type === 'success' ? 'message-success' : 'message-error');
            feedbackMessage.style.display = 'block';
        }
