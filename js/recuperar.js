
        const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

        const recoveryForm = document.getElementById('recoveryForm');
        const newPasswordInput = document.getElementById('newPassword');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const toggleNewPassword = document.getElementById('toggleNewPassword');
        const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
        const feedbackMessage = document.getElementById('feedbackMessage');
        const loginLink = document.getElementById('loginLink');
        const updateButton = document.getElementById('updateButton');

        function setupPasswordToggle(toggleElement, inputElement) {
            toggleElement.addEventListener('click', function () {
                const type = inputElement.getAttribute('type') === 'password' ? 'text' : 'password';
                inputElement.setAttribute('type', type);
                this.textContent = type === 'password' ? 'Mostrar Contraseña' : 'Ocultar Contraseña';
            });
        }

        function displayMessage(message, type) {
            feedbackMessage.textContent = message;
            feedbackMessage.className = `message-box message-${type}`;
            feedbackMessage.style.display = 'block';
        }

        setupPasswordToggle(toggleNewPassword, newPasswordInput);
        setupPasswordToggle(toggleConfirmPassword, confirmPasswordInput);


        recoveryForm.addEventListener('submit', function (event) {
            event.preventDefault(); 
            feedbackMessage.style.display = 'none';
            loginLink.style.display = 'none';
            
            const newPassword = newPasswordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            if (!PASSWORD_REGEX.test(newPassword)) {
                displayMessage(
                    "La nueva contraseña no cumple con los requisitos de seguridad (Mín. 8 caracteres, Mayús, Minús, Número y Especial).",'error'
                );
                return;
            }

            if (newPassword !== confirmPassword) {
                displayMessage(
                    "Las contraseñas no coinciden.",
                    'error'
                );
                return;
            }

            
            updateButton.disabled = true; 

            displayMessage(
                "Contraseña actualizada.",
                'success'
            );
            
            loginLink.style.display = 'block';

        });
