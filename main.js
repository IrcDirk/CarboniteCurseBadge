var req = new XMLHttpRequest();  
req.open('GET', 'https://api.cfwidget.com/wow/addons/carbonite', false);   

req.onreadystatechange=function() {

   if (req.readyState==4) {
    var dl = JSON.parse(this.responseText);
    console.log(dl.downloads.total);
    document.getElementById('dl1').textContent = dl.downloads.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('dl2').textContent = dl.downloads.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }
};

req.send(null);  
