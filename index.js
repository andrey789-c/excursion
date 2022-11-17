const slider = document.querySelector('.slider')
const sliderItems = document.querySelector('.slider__items')
const {width} = slider.getBoundingClientRect()
const offsetWidth = window.outerWidth

slider.addEventListener('mousemove', e => {
    let x = e.clientX / 5
    if(window.innerWidth > 768) {
        if(x > 0 && x <= width) {
            sliderItems.style.transform = `translateX(-${x}px)`
        }
    }
    
})

slider.addEventListener('mouseleave', e => {
    sliderItems.style.transform = 'translateX(-69px)'
    
})

// смена карты
const buttonRed = document.querySelector('#red_button')
const buttonAdler = document.querySelector('#adler_button')


buttonAdler.addEventListener('click', e => {
    buttonAdler.classList.add('active')
    buttonRed.classList.remove('active')
    if(window.innerWidth > 1000) {
        document.querySelector('#adler').style.display = 'flex'
    } else {
        document.querySelector('#adler').style.display = 'block'
    }
    document.querySelector('#red').style.display = 'none'
})

buttonRed.addEventListener('click', e => {
    buttonRed.classList.add('active')
    buttonAdler.classList.remove('active')
    if(window.innerWidth > 1000) {
        document.querySelector('#red').style.display = 'flex'
    } else {
        document.querySelector('#red').style.display = 'block'
    }
    document.querySelector('#adler').style.display = 'none'
})

// маршрут

if(window.innerWidth < 1000) {
    buttonRed.innerHTML = 'из красной поляны'
    buttonAdler.innerHTML = 'из адлера/сочи'
}

window.addEventListener('resize', e => {
    if(window.innerWidth < 1000) {
        buttonRed.innerHTML = 'из красной поляный'
        buttonAdler.innerHTML = 'из адлера/сочи'
        
        if(buttonRed.classList.contains('active')) {
            document.querySelector('#red').style.display = 'block'
        } else {
            document.querySelector('#adler').style.display = 'block'
        }
    } else {
        buttonRed.innerHTML = 'маршрут из красной поляный'
        buttonAdler.innerHTML = 'маршрут из адлера/сочи'
        
        if(buttonRed.classList.contains('active')) {
            document.querySelector('#red').style.display = 'flex'
        } else {
            document.querySelector('#adler').style.display = 'flex'
        }
    }

    
})