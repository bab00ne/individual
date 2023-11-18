const header = document.createElement('header');
header.className = 'header text-center';
document.body.appendChild(header);

let h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('Практика 9'));
header.appendChild(h1);

const main = document.createElement('main');
main.className = 'content';
document.body.appendChild(main);

let h2 = document.createElement('h2');
h2.appendChild(document.createTextNode('Lorem ipsum'));
main.appendChild(h2);

let h3 = document.createElement('h3');
h3.appendChild(document.createTextNode('Dolor sit amet'));
main.appendChild(h3);

let p = document.createElement('p');
p.appendChild(document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend sem a ligula sagittis, ac finibus mauris aliquet. '));
main.appendChild(p);

let h4 = document.createElement('h3');
h4.appendChild(document.createTextNode('Aliquam eleifend'));
main.appendChild(h4);

let p2 = document.createElement('p');
p2.appendChild(document.createTextNode('Aliquam eleifend consequat purus, a tincidunt odio vehicula eget. Sed sollicitudin, urna vitae elementum iaculis, leo tellus tristique tortor, quis condimentum justo sem sit amet sem. Fusce mattis metus metus, sed egestas tellus faucibus quis.'));
main.appendChild(p2);

let h5 = document.createElement('h3');
h5.appendChild(document.createTextNode('Nunc a ante feugiat'));
main.appendChild(h5);

let p3 = document.createElement('p');
p3.appendChild(document.createTextNode('Nunc a ante feugiat, hendrerit nunc sed, tristique ipsum. In hac habitasse platea dictumst. Etiam dapibus mattis nulla a consequat. Phasellus nec nunc et dui condimentum tristique.'));
main.appendChild(p3);

let h6 = document.createElement('h3');
h6.appendChild(document.createTextNode('Ut consequat auctor enim et dictum'));
main.appendChild(h6);

let p4 = document.createElement('p');
p4.appendChild(document.createTextNode('Ut consequat auctor enim et dictum. Maecenas venenatis et diam porta egestas. Suspendisse id erat lorem. Aenean consequat magna vitae eleifend accumsan. Suspendisse rhoncus pulvinar interdum. Aliquam vitae diam sed massa fermentum elementum.'));
main.appendChild(p4);

let h7 = document.createElement('h3');
h7.appendChild(document.createTextNode('Sed ultricies mauris quam'));
main.appendChild(h7);

let p5 = document.createElement('p');
p5.appendChild(document.createTextNode('Sed ultricies mauris quam, vel feugiat leo iaculis vitae. Donec nulla ex, maximus ac dapibus posuere, sagittis at nisi.'));
main.appendChild(p5);

const footer = document.createElement('footer');
main.className = 'footer';
document.body.appendChild(footer);

let span = document.createElement('span');
span.appendChild(document.createTextNode('Практику выполнила Фадеева А. И.'));
footer.appendChild(span);

let br = document.createElement('br');
footer.appendChild(br);

let span1 = document.createElement('span');
span1.appendChild(document.createTextNode('ГБПОУ "Пермский краевой колледж "ОНИКС"'));
footer.appendChild(span1);




var snowsrc="http://zornet.ru/Aben/Gsa/8.gif"
  var no = 15;
  var hidesnowtime = 0;
  var snowdistance = "pageheight";
  var ie4up = (document.all) ? 1 : 0;
  var ns6up = (document.getElementById&&!document.all) ? 1 : 0;
  function iecompattest(){
  return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
  }
  var dx, xp, yp; 
  var am, stx, sty; 
  var i, doc_width = 800, doc_height = 600;
  if (ns6up) {
  doc_width = self.innerWidth;
  doc_height = self.innerHeight;
  } else if (ie4up) {
  doc_width = iecompattest().clientWidth;
  doc_height = iecompattest().clientHeight;
  }
  dx = new Array();
  xp = new Array();
  yp = new Array();
  am = new Array();
  stx = new Array();
  sty = new Array();
  snowsrc=(snowsrc.indexOf("dynamicdrive.com")!=-1)? "http://zornet.ru/Aben/Gsa/2.gif" : snowsrc
  for (i = 0; i < no; ++ i) {
  dx[i] = 0; 
  xp[i] = Math.random()*(doc_width-50); 
  yp[i] = Math.random()*doc_height;
  am[i] = Math.random()*20; 
  stx[i] = 0.02 + Math.random()/10;
  sty[i] = 0.7 + Math.random(); 
  if (ie4up||ns6up) {
  if (i == 0) {
  document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ i +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><a href=\"http://delaisait.ucoz.ru\"><img src='"+snowsrc+"' border=\"0\"><\/a><\/div>");
  } else {
  document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ i +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='"+snowsrc+"' border=\"0\"><\/div>");
  }
  }
  }
  function snowIE_NS6() { 
  doc_width = ns6up?window.innerWidth-10 : iecompattest().clientWidth-10;
  doc_height=(window.innerHeight && snowdistance=="windowheight")? window.innerHeight : (ie4up && snowdistance=="windowheight")? iecompattest().clientHeight : (ie4up && !window.opera && snowdistance=="pageheight")? iecompattest().scrollHeight : iecompattest().offsetHeight;
  for (i = 0; i < no; ++ i) { 
  yp[i] += sty[i];
  if (yp[i] > doc_height-50) {
  xp[i] = Math.random()*(doc_width-am[i]-30);
  yp[i] = 0;
  stx[i] = 0.02 + Math.random()/10;
  sty[i] = 0.7 + Math.random();
  }
  dx[i] += stx[i];
  document.getElementById("dot"+i).style.top=yp[i]+"px";
  document.getElementById("dot"+i).style.left=xp[i] + am[i]*Math.sin(dx[i])+"px";
  }
  snowtimer=setTimeout("snowIE_NS6()", 10);
  }
  function hidesnow(){
  if (window.snowtimer) clearTimeout(snowtimer)
  for (i=0; i<no; i++) document.getElementById("dot"+i).style.visibility="hidden"
  }
if (ie4up||ns6up){
  snowIE_NS6();
  if (hidesnowtime>0)
  setTimeout("hidesnow()", hidesnowtime*1000)
  }