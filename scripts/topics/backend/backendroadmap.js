const nodes_container = document.getElementById('roadmap-nodes-container');

const roadmap = [
    {
        heading:'Python Basics',
        content:'Learn Programming basics in Python Language'
    },
    {
        heading:'OOPs in Python',
        content:'Learn OOPs concepts in Python Language'
    },
    {
        heading:'Django Web Framework',
        content:'Learn Django Web Framework based on Python Language'
    },
    {
        heading:'Blog Website',
        content:'Practice your skills by making a simple blog website'
    },
    {
        heading:'Full Fledged Web App',
        content:'Enhance your skills by making a Full Fledged Web App'
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