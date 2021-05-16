// about the carousel
const slider = document.querySelector('.slider-range');
var sliderNbr = document.querySelectorAll('.nbr');

const circles = document.querySelector('.circles');
var circle = document.querySelectorAll('.circle');

const humans = document.querySelector('.images')
var human = document.querySelectorAll('.image');

//blacked text
var blackTexts = document.querySelectorAll('.blacked');

//circle link
var coloredLink = document.getElementsByClassName('blue-circle');
var blackedLink = document.getElementsByClassName('black-circle');

var navLink = document.querySelectorAll('.nav-link');

function carouselController() {
    for (let i = 0; i < sliderNbr.length; i++) {
        sliderNbr[i].addEventListener('click', () => {
            // when user clicks the first button
            if (i == 0) {
                for (let i = 2; i <= 4; i++) {
                    sliderNbr[i].classList.add('invisible');
                }

                sliderNbr[1].classList.remove('invisible');

                for (let i = 0; i <= 4; i++) {
                    sliderNbr[i].style.transform = "translateY(86px)";
                    human[i].style.transform = "translateX(2000px)";
                }

                circle[0].classList.add('larged');
                circle[0].classList.remove('minimized');
                circle[0].classList.remove('active');

                circle[1].classList.add('active');
                circle[1].classList.remove('minimized');
                circle[1].classList.remove('larged');

                for (let i = 2; i <= 4; i++) {
                    circle[i].classList.add('minimized');
                    circle[i].classList.remove('larged');
                    circle[i].classList.remove('actived');
                }

                for (let i = 0; i < blackTexts.length; i++) {
                    blackTexts[i].style.color = "var(--white)";
                }

                blackedLink[0].style.backgroundColor = "var(--white)";
                blackedLink[0].style.color = "var(--black)";

                coloredLink[0].style.backgroundColor = "var(--dark-pink)";

                sliderNbr[i + 1].style.color = "var(--gray)";

                navLink[0].classList.add('whitey');
                navLink[1].classList.add('whitey');
                navLink[2].classList.add('whitey');

                cursor.classList.add('whitey');
            }

            // when user clicks the second button
            if (i == 1) {
                sliderNbr[0].classList.remove('invisible');
                sliderNbr[2].classList.remove('invisible');
                sliderNbr[3].classList.add('invisible');
                sliderNbr[4].classList.add('invisible');

                for (let i = 0; i <= 4; i++) {
                    sliderNbr[i].style.transform = "translateY(43px)";
                    human[i].style.transform = "translateX(1000px)";
                }

                circle[1].classList.remove('active');
                circle[1].classList.remove('minimized');
                circle[1].classList.add('larged');

                circle[2].classList.remove('minimized');
                circle[2].classList.remove('larged');
                circle[2].classList.add('active');

                circle[3].classList.remove('larged');
                circle[3].classList.remove('active');
                circle[3].classList.add('minimized');

                circle[4].classList.remove('larged');
                circle[4].classList.remove('active');
                circle[4].classList.add('minimized');

                for (let i = 0; i < blackTexts.length; i++) {
                    blackTexts[i].style.color = "var(--white)";
                }

                blackedLink[0].style.backgroundColor = "var(--white)";
                blackedLink[0].style.color = "var(--black)";

                coloredLink[0].style.backgroundColor = "var(--dark-purple)";

                sliderNbr[i - 1].style.color = "var(--gray)";
                sliderNbr[i + 1].style.color = "var(--gray)";

                navLink[0].classList.add('whitey');
                navLink[1].classList.add('whitey');
                navLink[2].classList.add('whitey');

                cursor.classList.add('whitey');
            }

            // when user clicks the third button
            if (i == 2) {
                sliderNbr[0].classList.add('invisible');
                sliderNbr[1].classList.remove('invisible');
                sliderNbr[3].classList.remove('invisible');
                sliderNbr[4].classList.add('invisible');

                for (let i = 0; i <= 4; i++) {
                    sliderNbr[i].style.transform = "translateY(0px)";
                    human[i].style.transform = "translateX(0px)";
                }

                circle[0].classList.add('minimized');
                circle[0].classList.remove('larged');
                circle[0].classList.remove('active');

                circle[2].classList.add('larged');
                circle[2].classList.remove('minimized');
                circle[2].classList.remove('active');

                circle[3].classList.add('active');
                circle[3].classList.remove('larged');
                circle[3].classList.remove('minimized');

                circle[4].classList.add('minimized');
                circle[4].classList.remove('larged');
                circle[4].classList.remove('active');

                circle[5].classList.add('minimized');
                circle[5].classList.remove('larged');
                circle[5].classList.remove('active');

                for (let i = 0; i < blackTexts.length; i++) {
                    blackTexts[i].style.color = "var(--black)";
                }

                blackedLink[0].style.backgroundColor = "var(--black)";
                blackedLink[0].style.color = "var(--white)";

                coloredLink[0].style.backgroundColor = "var(--dark-blue)";

                sliderNbr[i - 1].style.color = "var(--gray)";
                sliderNbr[i + 1].style.color = "var(--gray)";

                navLink[0].classList.remove('whitey');
                navLink[1].classList.remove('whitey');
                navLink[2].classList.remove('whitey');

                cursor.classList.remove('whitey');
            }

            // when user clicks the fourth button
            if (i == 3) {
                //styling the unclicked indicators
                sliderNbr[0].classList.add('invisible');
                sliderNbr[1].classList.add('invisible');
                sliderNbr[2].classList.remove('invisible');
                sliderNbr[4].classList.remove('invisible');

                //translating the slider to the top
                for (let i = 0; i <= 4; i++) {
                    sliderNbr[i].style.transform = "translateY(-43px)";
                    human[i].style.transform = "translateX(-1000px)";
                }

                //styling the background circles
                circle[0].classList.add('minimized');
                circle[0].classList.remove('larged');
                circle[0].classList.remove('active');

                circle[1].classList.add('minimized');
                circle[1].classList.remove('active');
                circle[1].classList.remove('larged');

                circle[3].classList.add('larged');
                circle[3].classList.remove('active');
                circle[3].classList.remove('minimized');

                circle[4].classList.add('active');
                circle[4].classList.remove('minimized');
                circle[4].classList.remove('larged');

                circle[5].classList.add('minimized');
                circle[5].classList.remove('larged');
                circle[5].classList.remove('active');

                //changing the interface according to the new background theme
                for (let i = 0; i < blackTexts.length; i++) {
                    blackTexts[i].style.color = "var(--white)";
                }

                blackedLink[0].style.backgroundColor = "var(--white)";
                blackedLink[0].style.color = "var(--black)";
                coloredLink[0].style.backgroundColor = "var(--dark-green)";

                sliderNbr[i].style.color = "var(--white)";
                sliderNbr[i - 1].style.color = "var(--gray)";
                sliderNbr[i + 1].style.color = "var(--gray)";

                navLink[0].classList.add('whitey');
                navLink[1].classList.add('whitey');
                navLink[2].classList.add('whitey');

                cursor.classList.add('whitey');
            }

            // when user clicks the fifth button
            if (i == 4) {
                for (let i = 0; i <= 4; i++) {
                    sliderNbr[i].classList.add('invisible');
                    sliderNbr[i].style.transform = "translateY(-86px)";
                    human[i].style.transform = "translateX(-1950px)";
                }

                sliderNbr[3].classList.remove('invisible');

                for (let i = 0; i <= 2; i++) {
                    circle[i].classList.add('minimized');
                    circle[i].classList.remove('larged');
                    circle[i].classList.remove('active');
                }

                circle[4].classList.add('larged');
                circle[4].classList.remove('minimized');
                circle[4].classList.remove('active');

                circle[5].classList.add('active');
                circle[5].classList.remove('larged');
                circle[5].classList.remove('minimized');

                for (let i = 0; i < blackTexts.length; i++) {
                    blackTexts[i].style.color = "var(--white)";
                }

                blackedLink[0].style.backgroundColor = "var(--white)";
                blackedLink[0].style.color = "var(--black)";

                coloredLink[0].style.backgroundColor = "var(--light-brown)";

                sliderNbr[i - 1].style.color = "var(--gray)";

                navLink[0].classList.add('whitey');
                navLink[1].classList.add('whitey');
                navLink[2].classList.add('whitey');

                cursor.classList.add('whitey');
            }

            //general commands
            //indicators change classes
            sliderNbr[i].classList.add('active');
            sliderNbr[i].classList.add('blacked');
            sliderNbr[i].classList.remove('invisible');

            //humans changes classes
            human[i].classList.add('active');
            human[i].classList.remove('minimized');

            //styling unclicked buttons
            //buttons after the clicked one
            for (let j = 0; j != i; j++) {
                sliderNbr[j].classList.remove('active');
                sliderNbr[j].classList.remove('blacked');

                human[j].classList.remove('active');
                human[j].classList.add('minimized');
            }
            //buttons before the clicked one
            for (let k = 4; k != i; k--) {
                sliderNbr[k].classList.remove('active');
                sliderNbr[k].classList.remove('blacked');

                human[k].classList.remove('active');
                human[k].classList.add('minimized');
            }
        })
    }
}
carouselController();

// about the cursor
const cursor = document.getElementById('cursor');
function cursorController() {
    window.addEventListener('mousemove', (e) => {
        let topPos = e.pageY;
        let leftPos = e.pageX;

        cursor.style.top = topPos + "px";
        cursor.style.left = leftPos + "px";

        //parallax effect to backgrounds circles by the way
        for (let i = 0; i <= circle.length; i++) {
            circle[i].style.top = -(topPos / 10) + "px";
            circle[i].style.left = -(leftPos / 10) + "px";
        }
    })
}
cursorController();