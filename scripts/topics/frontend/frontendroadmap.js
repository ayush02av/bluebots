const nodes_container = document.getElementById('roadmap-nodes-container');

const roadmap = [
    {
        heading:'HTML Basics',
        content:'Learn Hyper Text Markup Language, the markup language which sits at the base of every webpage. It is used to make the structure of a webpage, just like the bone structure of a human body.'
    },
    {
        heading:'CSS Basics',
        content:'Learn Cascading Style Sheets, a language used to design webpages, and make them attractive.'
    },
    {
        heading:'Javascript Basics',
        content:'Learn the most interesting aspect of frontend development - Javascript. It\'s the brain of any website. It can make cool animations, intuitive and interactive webpages, you name it.'
    },
    {
        heading:'Blog Website',
        content:'Practice your skills by making a simple blog website. Use some frontend CSS library like Bootstrap or Tailwind.'
    },
    {
        heading:'Full Fledged Web App',
        content:'Enhance your skills by making a Full Fledged Web App. Use some frontend javascript library like React or Angular.'
    },
]

for(i=0; i<roadmap.length; i++)
{

    const node = document.createElement('div');
    node.classList.add('roadmap-node-container');

    const node_heading_element = document.createElement('h1');
    const node_heading_data = document.createTextNode(roadmap[i].heading);
    node_heading_element.appendChild(node_heading_data);

    const node_para_element = document.createElement('p');
    const node_para_data = document.createTextNode(roadmap[i].content);
    node_para_element.appendChild(node_para_data);
    
    node.appendChild(node_heading_element);
    node.appendChild(node_para_element);

    node.setAttribute('id', 'node'+i);
    node.addEventListener("click", function(){
        NewSession(node.id);
    });
    nodes_container.appendChild(node);
}