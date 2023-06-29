const userData = {
    firstName: "John",
    secondName: "Smith",
    age: "35",
    email: "js@gmail.com",
    position: "Director",
    location: {
        country: "Ukraine",
        city: "Kyiv",
        street: "Dehtarna",
        streetNumber: "11"
    },

    keySkills: [
        "Team Management",
        "Scope Management",
        "Planning",
        "Estimations"
    ]
};

const submitButton = document.querySelector('.button');

function buttonHandler() {
    if (document.body.classList.contains('showTable')) {
        document.querySelector(".container").style.display = 'none';
        document.body.classList.remove("showTable");
    } else {
        document.querySelector('.firstName').innerHTML = userData["firstName"] + " " + userData["secondName"];
        document.querySelector('.age').innerHTML = userData["age"];
        document.querySelector('.email').innerHTML = userData["email"];
        document.querySelector('.position').innerHTML = userData["position"];
        document.querySelector('.keySkills').innerHTML = userData["keySkills"].join(', ');
        document.querySelector('.location').innerHTML = userData["location"]["country"]+", "+userData["location"]["city"]+", "+userData["location"]["street"]+", "+userData["location"]["streetNumber"];
        document.querySelector(".container").style.display = 'block';
        document.body.classList.add("showTable");
    }
};
submitButton.addEventListener("click", buttonHandler);
