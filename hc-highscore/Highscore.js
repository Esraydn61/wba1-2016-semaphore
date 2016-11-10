( function () {
 
  "use strict";
 
  var tableSort = function (tab) {
    var titel = tab.getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].getElementsByTagName("th");
    var tbdy = tab.getElementsByTagName("tbody")[0];
    var tz = tbdy.rows;
    var nzeilen = tz.length;
    if (nzeilen == 0) return;
    var nspalten = tz[0].cells.length;
    var arr = new Array(nzeilen);
    var sortiert = -1;
 
    var sortbuttonStyle = document.createElement("style"); // Stylesheet für Button im TH
    sortbuttonStyle.innerText = ".sortbutton { width:100%; height:100%; border: none; background-color: transparent; font: inherit; color: inherit; text-align: inherit; padding: 0; cursor: pointer; } .sortbutton::-moz-focus-inner { margin: -1px; border-width: 1px; padding: 0; }";
    document.head.appendChild(sortbuttonStyle);
 
    var initTableHead = function (sp) { // Kopfzeile vorbereiten
      var b = document.createElement("button");
      b.type = "button";
      b.className = "sortbutton";
      b.innerHTML = titel[sp].innerHTML;
      b.addEventListener("click", function () { tsort(sp); },false);
      titel[sp].innerHTML = "";
      titel[sp].appendChild(b);
    }
 
    var getData = function (ele) {
      return ele.innerHTML;
    }
 
    var vglFkt_s = function (a, b) {
      var as = a[sortiert], bs = b[sortiert];
      if (as < bs) return 1;
      else return -1;
    } // vglFkt_s
 
    var tsort = function (sp) {
      if (sp == sortiert) arr.reverse(); // Tabelle ist schon nach dieser Spalte sortiert, also nur Reihenfolge umdrehen
      else { // Sortieren
        sortiert = sp;
        arr.sort(vglFkt_s);
      }      
      for (var z = 0; z < nzeilen; z++) tbdy.appendChild(arr[z][nspalten]); // Sortierte Daten zurückschreiben
    } // tsort
 
    // Kopfzeile vorbereiten
    for (var i = 0; i < titel.length; i++) initTableHead(i) ;
 
    // Tabelleninhalt in ein Array kopieren
    for (var z = 0; z < nzeilen; z++) {
      var zelle = tz[z].getElementsByTagName("td"); // cells;
      arr[z] = new Array(nspalten +1);
      arr[z][nspalten] = tz[z];
      for (var s = 0; s < nspalten; s++) {
        var zi = getData(zelle[s]);
        arr[z][s] = zi ;
        // zelle[s].innerHTML += "<br>" +zi; // zum Debuggen
      }
    }
 
  } // tableSort
 
 
  var initTableSort = function () { 
    var sort_Table = document.querySelectorAll("table.liste");
    for (var i = 0; i < sort_Table.length;i++) new tableSort(sort_Table[i]);
  } // initTable
 
  if (window.addEventListener) window.addEventListener("DOMContentLoaded", initTableSort, false); // nicht im IE8
 
})();