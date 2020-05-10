    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBxFZwsk2Lrn5V3tDZx0X7DEPDUoPQW38k",
        authDomain: "loginjs-8294e.firebaseapp.com",
        databaseURL: "https://loginjs-8294e.firebaseio.com",
        projectId: "loginjs-8294e",
        storageBucket: "loginjs-8294e.appspot.com",
        messagingSenderId: "44505739747",
        appId: "1:44505739747:web:e6afc1f841b869affa30d6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.


        } else {
            // No user is signed in.
        }
    });


    function registrar() {

        var email = document.getElementById('usuario').value;
        var clave = document.getElementById('clave').value;


        validar();

        //

        //  console.log('click');

        // 

    }

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            //para pasar a otro documento
            window.location = 'Portal.html';
        } else {
            // No user is signed in.
        }
    });


    function resetForm() {
        document.getElementById('formulario').reset();
    }

    function validar() {

        var email = document.getElementById('usuario').value;
        var clave = document.getElementById('clave').value;


        if (email === '' || clave === '') {
            //return para que no siga ejecutando las demas funciones
            return showMessage('Por favor, rellene todos los campos', 'danger');


        } else {
            firebase.auth().createUserWithEmailAndPassword(email, clave).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

                //console.log(errorMessage);

                showMessage(errorMessage, 'danger');
                resetForm();

            });

        }


    }



    function showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Show in The DOM
        const container = document.querySelector('.contenedor');
        const app = document.querySelector('#formulario');
        // Insert Message in the UI
        container.insertBefore(div, app);
        // Remove the Message after 3 seconds
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }


    /*const email = inputEmail.value;
    const password = inputPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password)
        .then(user => {
            location = 'home.html' //Url aqui
        }).catch(error => {
            console.error(error);
        })
    promise.catch(e => console.log(e.message));*/