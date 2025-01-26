const rotator = document.getElementsByClassName('rotator__case')
let r_speed = 1000
setInterval(() => {
    let random_index = Math.floor(Math.random() * rotator.length)
    let r_color = 'black'
    console.log("random index:", random_index)
    for (i = 0; i < rotator.length; i++) {
        rspan = rotator[i]
        rspan.classList.remove('rotator__case_active')
        if (random_index === i) {
            r_speed = rspan.getAttribute('data-speed')
            r_color = rspan.getAttribute('data-color')
        }
    }
    r = rotator[random_index]
    r.classList.add('rotator__case_active')
    r.setAttribute('style', `color: ${r_color}`);
    console.log(r)
}
    , r_speed);
