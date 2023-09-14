import md from 'markdown-it'
var singleline = md.renderInline('__markdown-it__ rulezz!'); //single line

document.getElementById("test1").innerHTML = singleline;

var multiline = md.render('# markdown-it rulezz!');

document.getElementById().innerHTML = multiline;