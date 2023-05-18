 function dropDown() {
   document.querySelector('#submenu').classList.toggle('hidden')

      document.querySelector('#arrow').classList.toggle('rotate-0')
    }
    dropDown()
    function Openbar() {
      var sidebar = document.querySelector('.sidebar');
      var mainContent = document.querySelector('.main-content'); // Replace with the actual selector for your main content
  
      sidebar.classList.toggle('left-[-300px]');
      mainContent.classList.toggle('ml-300'); // This class should add a left margin of 300px
  }
  