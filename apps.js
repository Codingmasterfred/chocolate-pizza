const checkboxes = document.querySelectorAll("input[type='checkbox']");
console.log(checkboxes);
// checkboxes.
for(let i = 0; i < checkboxes.length; i++){
    checkboxes[i].addEventListener('change',function(e) {
        e.preventDefault();
        checkboxes[i].parentElement.classList.toggle('LT');
    })
}
