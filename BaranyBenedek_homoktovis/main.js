import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

function kepkattintas()
{
    console.log('Képre kattintottunk');
}
function colorpick()
{
    let szin=document.getElementById('color').value;
    document.getElementById('cim').style.backgroundColor=szin;
}

function init()
{
    document.getElementById('kep')?.addEventListener('click',kepkattintas)
    document.getElementById('color')?.addEventListener('change', colorpick)
}

document.addEventListener('DOMContentLoaded',init);
