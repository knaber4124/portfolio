$(document).ready(function () {
    console.log('loaded');
    var firebaseConfig = {
        apiKey: "AIzaSyDg2t3WNDNYgvlUTXfw57lKRGuxqAntImE",
        authDomain: "portfolio-d4563.firebaseapp.com",
        databaseURL: "https://portfolio-d4563.firebaseio.com",
        projectId: "portfolio-d4563",
        storageBucket: "",
        messagingSenderId: "731464129313",
        appId: "1:731464129313:web:4f88f05a3407dad0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();

    function getUserFeedback() {
        event.preventDefault();
        let firstName = $('.firstName').val();
        let lastName = $('.lastName').val();
        let email = $('.email').val();
        let feedback = $('.feedback').val();

        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(feedback);


        database.ref('/feedback').push({
            firstName: firstName,
            lastName: lastName,
            email: email,
            feedback: feedback
        })

        $('.firstName').val('');
        $('.lastName').val('');
        $('.email').val('');
        $('.feedback').val('');
    }

    $('.submit').on('click', function (event) {
        getUserFeedback();
    });
    $(document).keypress(function (event) {
        if (event.which == 13) {
            getUserFeedback();
        };
    });


});