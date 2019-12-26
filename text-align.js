const rdsAlign = document.querySelectorAll('[name="alingRadio"]');
rdsAlign.forEach(el => {
    el.onchange = radioChange;
});