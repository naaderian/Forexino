// AOS.js
AOS.init();

// loader
window.onload = () => {
    setInterval(() => {
        document.getElementById('loading').style.display = 'none';

        // animation for header
        let headerAnimate = document.querySelectorAll('.headerAnimate')
        for (i = 0; i < headerAnimate.length; i++) {
            headerAnimate[i].classList.add('animate__zoomIn')
        }

    }, 500);
}

// owlCarousel for company-icon
$(document).ready(function () {
    $(".company-icon").owlCarousel({
        rtl: true,
        loop: true,
        center: true,
        lazyLoad: true,
        autoplay: true,
        responsiveClass: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});





let welcomToInvestment = document.getElementById('welcomToInvestment')

const mohasebe = () => {

    let mony = document.getElementById('mony').value
    let mah = document.getElementById('mah').value

    if (mony === "") {
        document.querySelector('.error-Fund').classList.remove('invisible')
        document.querySelector('.error-Fund').classList.add('animate__shakeX')
        
    } else {
        document.querySelector('.error-Fund').classList.add('animate__fadeOut')
        let cash = Math.floor(mony * 0.05 * mah) 
        document.getElementById('out').innerHTML = cash
        welcomToInvestment.classList.remove('invisible')
        welcomToInvestment.classList.add('animate__fadeInDown')
        document.getElementById('wMony').innerHTML = cash
        document.getElementById('wdarsad').innerHTML = "5%"
        
    }
}

document.getElementById('closeAdviceMessage').addEventListener('click', ()=>{
    document.querySelector('.pop-up-advice').classList.add('d-none')
})
const openAdviceMessage = () => {
    document.querySelector('.pop-up-advice').classList.remove('d-none')
}