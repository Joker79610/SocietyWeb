import MarkdownIt from 'markdown-it';
var md = new MarkdownIt();
var result = md.render('# markdown-it rulezz!');

document.getElementById("test1").innerHTML = result;