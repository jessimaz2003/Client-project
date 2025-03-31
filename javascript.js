const toggleSwitch = document.createElement('button'); /*Chat gpt fixed a couple of errors because the one I wrote originally was not quite working*/
toggleSwitch.innerText = 'Toggle Dark Mode';
toggleSwitch.classList.add('toggle-dark-mode');

document.querySelector('header').after(toggleSwitch);

toggleSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleSwitch.innerText = document.body.classList.contains('dark-mode') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
});