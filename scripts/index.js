$("#head-container").load("/components/header.html");
$("#foot-container").load("/components/footer.html");

var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = '/favicon.ico';