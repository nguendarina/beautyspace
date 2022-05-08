const selectEl = document.getElementById('select');
const lab = document.getElementById('labelCh');

selectEl.addEventListener('change', function(){
    switch(true){
        case this.value === 'morning' : lab.textContent = '9:00-12:00'
        case this.value === 'day' : lab.textContent = '13:00-16:00'
        case this.value ==='evening' : lab.textcontent = '17:00-20:00'
    }
})

