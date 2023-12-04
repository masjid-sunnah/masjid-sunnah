/*
 * @Author: Dicky Ermawan S 
 * @Profile: https://www.linkedin.com/in/dickyermawan/ 
 * @Date: 2023-12-04 21:44:42 
 * @Last Modified by: Dicky Ermawan S
 * @Last Modified time: 2023-12-04 22:46:37
 */



/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}
/**
 * Easy on scroll event listener 
 */
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}

/**
 * Back to top button
 */
let backtotop = select('.btn-totop')
if (backtotop) {
    const toggleBacktotop = () => {
        if (window.scrollY > 100) {
            backtotop.classList.add('aktif')
        } else {
            backtotop.classList.remove('aktif')
        }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
}