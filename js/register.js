
        const registrationForm = document.getElementById('registrationForm');

        registrationForm.addEventListener('submit', function(event) {

            if (!registrationForm.checkValidity()) {
                return;
            }
            event.preventDefault(); 
            
            console.log("Usuario registrado con éxito");

        });