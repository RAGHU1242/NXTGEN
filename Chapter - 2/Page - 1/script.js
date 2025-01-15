document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      alert('This feature is under construction.');
    });
  });
console.log("Damage Assessment UI loaded!");
