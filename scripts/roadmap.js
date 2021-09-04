const topic = document.getElementById('topic').innerHTML;
const cookie_name = topic+"-roadmap-progress";
const nodes = document.getElementsByClassName('roadmap-node-container');

function Redirect(progress_node_id=''){
    let redirect = '/topics/'+topic+'/roadmap.html';
    if(progress_node_id != ''){
        redirect += '#'+progress_node_id;
    }
    window.location = redirect;
}

function GetCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function NewSession(progress="node0"){
    const d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cookie_name + "=" + progress + ";" + expires + ";path=/";
    alert('Progress - ' + progress);
    Redirect(progress);
}

function MyProgress(){
    let progress = GetCookie(cookie_name);
    alert('Progress - ' + progress);
    Redirect(progress);
}

function ClearProgress(){
    document.cookie = cookie_name+'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    alert('Cleared your progress..Hope you return soon :)');
    Redirect();
}

document.getElementById("new-session").addEventListener("click", function(){
    NewSession();
});
document.getElementById("my-progress").addEventListener("click", MyProgress);
document.getElementById("clear-progress").addEventListener("click", ClearProgress);