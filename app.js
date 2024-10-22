


    
document.getElementById('searchButton').addEventListener('click', function () {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredApplets = applets.filter(applet =>
      applet.title.toLowerCase().includes(searchInput)
    );


    
