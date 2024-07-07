var classes=['a','b','c','d'];
document.write(classes[3]);
classes.push('e');
var chars=['あ','い','う','え','お','か','き','く','け','こ'];
for(var i = 0;i < chars.length; i++){
    for(var j = 0;j < chars.length; j++){
        document.write('<p>' + chars[i] + chars[j] + '</p>');
    }
}