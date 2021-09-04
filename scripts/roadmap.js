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

for(i=0; i<roadmap.length; i++)
{

    const node = document.createElement('div');
    node.classList.add('roadmap-node-container');

    const node_heading_element = document.createElement('h1');
    node_heading_element.innerHTML = roadmap[i].heading;

    const node_para_element = document.createElement('p');
    node_para_element.innerHTML = roadmap[i].content;

    const node_tick_button = document.createElement('span');
    node_tick_button.classList.add('fa');
    node_tick_button.classList.add('fa-check-circle-o');

    node_tick_button.style.fontSize = '25px';

    node_tick_button.innerHTML = '';
    node.appendChild(node_tick_button);
    node.appendChild(node_heading_element);
    node.appendChild(node_para_element);

    if(roadmap[i].link){
        const node_link_element = document.createElement('a');
        node_link_element.href = roadmap[i].link;
        node_link_element.innerHTML = 'Youtube Tutorial for '+roadmap[i].heading;
        node_link_element.setAttribute('target', '_blank');
        node.appendChild(node_link_element);
    }

    node.setAttribute('id', 'node'+i);
    node_tick_button.addEventListener("click", function(){
        NewSession(node.id);
    });
    nodes_container.appendChild(node);
}

function CheckProgress(){
    let progress = GetCookie(cookie_name);
    let progress_reached = false;
    if(progress != ''){
        for(i=0; i<nodes.length; i++)
        {
            let node = nodes[i];
            if(progress_reached){
                node.style.background = '#1da1f2';
                node.getElementsByClassName('fa')[0].classList.remove('fa-check-circle-o');
                node.getElementsByClassName('fa')[0].classList.add('fa-check');
                node.getElementsByClassName('fa')[0].classList.add('fa-check-circle-o');
                node.getElementsByClassName('fa')[0].classList.remove('fa-check');
            }else{
                node.style.background = 'lightgreen';
                node.getElementsByClassName('fa')[0].classList.remove('fa-check-circle-o');
                node.getElementsByClassName('fa')[0].classList.add('fa-check');
            }
            if(node.id == progress){
                progress_reached = true;
            }
        }
    }
}
CheckProgress();

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
    // alert('Progress - ' + progress);
    CheckProgress();
    Redirect(progress);
}

function MyProgress(){
    let progress = GetCookie(cookie_name);
    // alert('Progress - ' + progress);
    Redirect(progress);
}

function ClearProgress(){
    document.cookie = cookie_name+'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    // alert('Cleared your progress..Hope you return soon :)');
    Redirect();
}

document.getElementById("new-session").addEventListener("click", function(){
    NewSession();
});
document.getElementById("my-progress").addEventListener("click", MyProgress);
document.getElementById("clear-progress").addEventListener("click", ClearProgress);