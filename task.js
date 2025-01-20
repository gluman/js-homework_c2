const rotator = document.querySelectorAll('class')

setInterval(() => {
    rotator.forEach(function (r) {
        if (r.classList.contains('rotator_case')) {
                r.classList.add('rotator__case_active')
                console.log(r.textContent)
                r_speed = r.getAttribute('data-speed')
                console.log(r_speed)
                setTimeout(() => {
                    r.classList.remove('rotator__case_active')
                }, r_speed)
        }}
        )
}


    , 1000)