function display() {
    console.log('diklik');
    const profileCard = document.getElementById('profile-card');
    const editForm = document.getElementById('edit-form');

    profileCard.style.display = 'none';
    editForm.style.display = 'block';
}

document.getElementById('profileEditForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const availability = document.getElementById('availability').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;
    const experience = document.getElementById('experience').value;
    const email = document.getElementById('email').value;

    document.getElementById('profileName').textContent = name;
    document.getElementById('profileRole').textContent = role;
    document.getElementById('profileAvailability').textContent = availability;
    document.getElementById('profileAge').textContent = age;
    document.getElementById('profileLocation').textContent = location;
    document.getElementById('profileExperience').textContent = experience;
    document.getElementById('profileEmail').textContent = email;

    document.getElementById('edit-form').style.display = 'none';
    document.getElementById('profile-card').style.display = 'flex';
});

document.getElementById('resumeBtn').addEventListener('click', function() {
    alert('Resume button clicked');
});
