
function Items(category) {

    // hide everything 
    document.getElementById("clothing").style.display = "none";
    document.getElementById("baby").style.display = "none";
    document.getElementById("books").style.display = "none";
    document.getElementById("household").style.display = "none";

    // only shows selected category.\
    document.getElementById(category).style.display = "block";
}
