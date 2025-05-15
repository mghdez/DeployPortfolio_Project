document.addEventListener('DOMContentLoaded', function () {
    // Contact Me link
    const contactLink = Array.from(document.querySelectorAll('a')).find(a => a.textContent.trim() === 'Contact Me');
    if (contactLink) {
        contactLink.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'mailto:miguelghdez@outlook.com';
        });
    }

    // Hire me button
    const hireBtn = document.querySelector('button.hire');
    if (hireBtn) {
        hireBtn.addEventListener('click', function () {
            window.location.href = 'mailto:miguelghdez@outlook.com';
        });
    }

    // Copy my Email button
    const emailBtn = document.querySelector('button.email');
    if (emailBtn) {
        emailBtn.addEventListener('click', function () {
            navigator.clipboard.writeText('miguelghdez@outlook.com').then(function () {
                emailBtn.textContent = 'Copied!';
                setTimeout(() => {
                    emailBtn.innerHTML = 'Copy my Email <i class="far fa-copy"></i>';
                }, 1500);
            });
        });
    }

    // Github link
    const githubLink = Array.from(document.querySelectorAll('a')).find(a => a.textContent.trim() === 'Github');
    if (githubLink) {
        githubLink.addEventListener('click', function (e) {
            e.preventDefault();
            window.open('https://github.com/mghdez', '_blank');
        });
    }

    // LinkedIn link
    const linkedinLink = Array.from(document.querySelectorAll('a')).find(a => a.textContent.trim() === 'LinkedIn');
    if (linkedinLink) {
        linkedinLink.addEventListener('click', function (e) {
            e.preventDefault();
            window.open('https://www.linkedin.com/in/miguel-gil-hernandez-15140a222/', '_blank');
        });
    }
});