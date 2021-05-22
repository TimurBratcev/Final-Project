function Function1() {
    document.getElementById("dropdown-content1").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = getElemntByClassName("dropdown-content");
        var i;
        for (i = 0;i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classlist.contains('show')){
                openDropdown.classlist.remove('show');
            }
        }
    }
}
function Function2() {
    document.getElementById("dropdown-content2").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = getElemntByClassName("dropdown-content");
        var i;
        for (i = 0;i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classlist.contains('show')){
                openDropdown.classlist.remove('show');
            }
        }
    }
}
