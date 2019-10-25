$(document).ready(function () {

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

        var firstName = $('.firstName').val();
        var lastName = $('.lastName').val();
        var email = $('.email').val();
        var feedback = $('.feedback').val();

        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(feedback);

        database.ref('/feedback').push({
            firstName: firstName,
            lastName: lastName,
            email: email,
            feedback: feedback,
            timeStamp: moment().format('MMMM D YYYY, h:mm a')
        })

        $('.firstName').val('');
        $('.lastName').val('');
        $('.email').val('');
        $('.feedback').val('');
    }

    $('.dataField1').one('click', function (event) {
        event.preventDefault();
        $('.dataField1').val('');
    })
    $('.dataField2').one('click', function (event) {
        event.preventDefault();
        $('.dataField2').val('');
    })
    $('.dataField3').one('click', function (event) {
        event.preventDefault();
        $('.dataField3').val('');
    })
    $('.dataField4').one('click', function (event) {
        event.preventDefault();
        $('.dataField4').val('');
    })

    $('.submit').on('click', function (event) {
        event.preventDefault();
        $('.contactModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
        })
        getUserFeedback();
    });
    $(document).keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            $('.contactModal').on('shown.bs.modal', function () {
                $('#myInput').trigger('focus')
            })
            getUserFeedback();
        };
    });
});