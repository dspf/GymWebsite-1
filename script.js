document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('homeLink');
    const aboutLink = document.getElementById('aboutLink');
    const contactLink = document.getElementById('contactLink');

    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');

    const changeContentButton = document.getElementById('changeContentButton');

    homeLink.addEventListener('click', function() {
        showSection(homeSection);
    });

    aboutLink.addEventListener('click', function() {
        showSection(aboutSection);
    });

    contactLink.addEventListener('click', function() {
        showSection(contactSection);
    });

    changeContentButton.addEventListener('click', function() {
        homeSection.innerHTML = `
            <h1>Content Changed!</h1>
            <p>You clicked the button, and now the content has changed.</p>
        `;
    });

    function showSection(section) {
        homeSection.classList.add('hidden');
        aboutSection.classList.add('hidden');
        contactSection.classList.add('hidden');

        section.classList.remove('hidden');
    }
});
