const rotator = document.querySelectorAll('span')
// const rotator = document.getElementsByClassName('rotator_case')
console.log(rotator)
function rotate(r, index) {
    r.classList.add

}
setInterval(() => {

    random_index = random.nextInt(r.lenght)
    console.log(random_index)
    rotator.forEach((r) => {
        if (r.classList.contains('rotator_case')) {
            r.classList.add('rotator__case_active')
            console.log(r.textContent)
            r_speed = r.getAttribute('data-speed')
            console.log(r_speed)
            // setTimeout(() => {
            //     r.classList.remove('rotator__case_active')
            // }, r_speed)
            r.classList.remove('rotator__case_active')
        }
    }
    )
}
    , 1000)