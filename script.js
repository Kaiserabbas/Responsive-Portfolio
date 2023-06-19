/* eslint-disable no-unused-vars */
function toggleDropdown() {
  const dropdown = document.getElementById('dropdownContent');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  const bground = document.getElementById('main');
  bground.classList.add('blurr');
  const bgroundLogo = document.getElementById('logo');
  bgroundLogo.classList.add('blurr');
}

function closeDropdown() {
  const dropdown = document.getElementById('dropdownContent');
  dropdown.style.display = 'none';
  const bground = document.getElementById('main');
  bground.classList.remove('blurr');
  const bgroundLogo = document.getElementById('logo');
  bgroundLogo.classList.remove('blurr');
}
/* eslint-enable no-unused-vars */
