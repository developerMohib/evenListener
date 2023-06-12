let headLine = document.querySelector('#HeadLine');
// let headLine = document.getElementById('HeadLine');
headLine.style.color = 'red';
headLine.addEventListener('mouseover',function() {
    headLine.style.color = 'black';
});
headLine.addEventListener('mouseout',function() {
    headLine.style.color = 'red';
});
function heading(){
    headLine.style.color = 'green';
    headLine.style.fontSize = '2rem';
    // headLine.classList.add('#HeadLine');
}

function paragraph(){
    headLine.style.color = 'black';
    headLine.style.fontSize = '1rem';
}