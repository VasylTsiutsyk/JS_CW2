// global function
const setStyle = (prop, value) => {
    window.txt.style[prop] = value;
};

const _setStyle = options => {
    Object.keys(options).forEach(key => {
        window.txt.style[key] = options[key];
    })
};


// checkboxes
const chs = document.getElementsByName('slylesCheckbox');

const checkboxChange = function() {
    const data = this.dataset;
    if (this.checked) setStyle(data.prop, data.value);
    else setStyle(data.prop, null);
};

chs.forEach(el => {
    el.onchange = checkboxChange;
});


// radios text-decor
const rdsTextDecor = document.querySelectorAll('[name="textDecoration"]');
const radioChange = function() {
    if (!this.checked) return;
    const data = this.dataset;
    setStyle(data.prop, data.value);
};
rdsTextDecor.forEach(el => {
    el.onchange = radioChange;
});


// uncheck checked radio button
let booRadio;
rdsTextDecor.forEach(function(el) {
    el.onclick = function() {
        if (booRadio == this) {
            this.checked = false;
            txt.style.textDecoration = null;
            booRadio = null;
        } else {
            booRadio = this;
        }
    }
});