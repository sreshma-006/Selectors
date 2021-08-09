let element = document.querySelector('div');
element.style.color = 'orangered';

let p_elements = document.querySelectorAll('p');
for(var p of p_elements)
    p.style.color = 'blue';

var p_new = document.createElement('p');
console.log(p_new);

p_new.textContent = "paragraph five";
element = document.querySelector('div');
element.appendChild(p_new);
let strong = document.createElement('strong');
strong.textContent = 'Strong';
element.appendChild(strong);
element.replaceChild(strong,p_new);