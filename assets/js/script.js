// Theme toggle
function toggleTheme(){
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if(isLight){ document.documentElement.removeAttribute('data-theme'); localStorage.setItem('theme','dark'); }
  else { document.documentElement.setAttribute('data-theme','light'); localStorage.setItem('theme','light'); }
}

// Mobile menu
function toggleMenu(){
  const m = document.getElementById('mobMenu');
  if(m) m.classList.toggle('open');
}
function closeMenu(){
  const m = document.getElementById('mobMenu');
  if(m) m.classList.remove('open');
}

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); } });
}, { threshold:0.08 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

