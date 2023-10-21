let IG = document.querySelector('#IG');

IG.addEventListener('mouseover', change_IG_logo);

function change_IG_logo(){
    IG.style.width = '12%';
}

IG.addEventListener('mouseout', remove_change_IG_logo);

function remove_change_IG_logo(){
    IG.style.width = '10%';
}

let facebook = document.querySelector('#facebook');

facebook.addEventListener('mouseover', change_facebook_logo);

function change_facebook_logo(){
    facebook.style.width = '12%';
}

facebook.addEventListener('mouseout', remove_change_facebook_logo);

function remove_change_facebook_logo(){
    facebook.style.width = '10%';
}

let line = document.querySelector('#line');

line.addEventListener('mouseover', change_line_logo);

function change_line_logo(){
    line.style.width = '12%';
}

line.addEventListener('mouseout', remove_change_line_logo);

function remove_change_line_logo(){
    line.style.width = '10%';
}