var faviconURL = "https://drive.google.com/file/d/1X0hPrFicwEmp2Eqv303dQCPFJnnJHUzH/view"; 

faviconURL = faviconURL.substring(32);
faviconURL = faviconURL.substring(0, faviconURL.indexOf("/"));
faviconURL = "https://drive.google.com/thumbnail?id=" + faviconURL;

// append favicon
var favicon = document.createElement('link');
favicon.setAttribute('rel', 'icon');
favicon.setAttribute('type', 'image/png');
favicon.setAttribute('href', faviconURL);

document.querySelector('head').appendChild(favicon);