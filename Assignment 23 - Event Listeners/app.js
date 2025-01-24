const navbar1 = document.getElementById('navbar1');
const navbar2 = document.getElementById('navbar2');

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > 600) {
        navbar1.classList.remove('flex');
        navbar1.classList.add('hidden'); // Hide navbar1 after 600px
        navbar2.classList.add('flexbox'); // Show navbar2
        navbar2.classList.remove('hidden');
    } else {
        navbar1.classList.remove('hidden'); // Show navbar1 before 600px
        navbar2.classList.remove('flexbox'); // Hide navbar2
        navbar2.classList.add('hidden');
        navbar1.classList.add('flex');
    }
});
