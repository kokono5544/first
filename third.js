var mybirthdaytime=new Date(2007, 10, 17, 12, 1);
function updateParagraph(){
    var now=new Date();
    var seconds=(now.getTime()- mybirthdaytime.getTime())/1000;
    document.getElementById('birth-time').innerText=
        '生まれてから'+seconds+'秒通過';
}
setInterval(updateParagraph,50);