function dropDown() {
    const submenu = document.getElementById('submenu');
    submenu.classList.toggle('max-h-0');
    submenu.classList.toggle('max-h-full');
    document.querySelector('#arrow').classList.toggle('rotate-0')
  }
  dropDown()

  function Openbar() {
    document.querySelector('.sidebar').classList.toggle('left-[-300px]')
  }