function reset(){
    chgWidth("300");
    chgColor("gray");
    chgBorder("1");
}
function chgColor(color){
    var a = document.getElementsByTagName('td');
    for (var i=0;i<a.length;i++){
        a[i].style.backgroundColor = color;
    }
}
function chgBorder(w){
    var a = document.getElementsByTagName('td');
    for (var i=0;i<a.length;i++){
        a[i].style.borderWidth = w+'px';
    }
    a = document.getElementsByTagName('th');
    for (var i=0;i<a.length;i++){
        a[i].style.borderWidth = w+'px';
    }
}
function chgWidth(h){
    document.getElementById('table').width = h+"px";
}
