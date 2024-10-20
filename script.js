function displayEditForm() {

    const storedName = localStorage.getItem('profileName') || "Nama Anda";
    const storedRole = localStorage.getItem('profileRole') || "Front End Designer";
    const storedAvailability = localStorage.getItem('profileAvailability') || "Full Time";
    const storedAge = localStorage.getItem('profileAge') || "19";
    const storedLocation = localStorage.getItem('profileLocation') || "Jakarta";
    const storedExperience = localStorage.getItem('profileExperience') || "2";
    const storedEmail = localStorage.getItem('profileEmail') || "email@gmail.com";

    document.getElementById('name').value = storedName;
    document.getElementById('role').value = storedRole;
    document.getElementById('availability').value = storedAvailability;
    document.getElementById('age').value = storedAge;
    document.getElementById('location').value = storedLocation;
    document.getElementById('experience').value = storedExperience;
    document.getElementById('email').value = storedEmail;


    document.getElementById('profile-card').style.display = 'none';
    document.getElementById('edit-form').style.display = 'block';
}


document.getElementById('profileEditForm').addEventListener('submit', function(event) {
    
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const availability = document.getElementById('availability').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;
    const experience = document.getElementById('experience').value;
    const email = document.getElementById('email').value;

    localStorage.setItem('profileName', name);
    localStorage.setItem('profileRole', role);
    localStorage.setItem('profileAvailability', availability);
    localStorage.setItem('profileAge', age);
    localStorage.setItem('profileLocation', location);
    localStorage.setItem('profileExperience', experience);
    localStorage.setItem('profileEmail', email);

    updateProfile();

    document.getElementById('edit-form').style.display = 'none';
    document.getElementById('profile-card').style.display = 'block';
});

window.onload = function() {
    updateProfile();
};

function updateProfile() {
    if (localStorage.getItem('profileName')) {
        document.getElementById('profileName').textContent = localStorage.getItem('profileName');
        document.getElementById('profileRole').textContent = localStorage.getItem('profileRole');
        document.getElementById('profileAvailability').textContent = localStorage.getItem('profileAvailability');
        document.getElementById('profileAge').textContent = localStorage.getItem('profileAge');
        document.getElementById('profileLocation').textContent = localStorage.getItem('profileLocation');
        document.getElementById('profileExperience').textContent = localStorage.getItem('profileExperience');
        document.getElementById('profileEmail').textContent = localStorage.getItem('profileEmail');
    }
}