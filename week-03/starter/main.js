/*** DOM ***/
// Use the console to print the document title and the URL

console.log( document.title )
console.log( document.URL)


/*** Finding HTML Elements ***/
//Select the element with the id = main. Store the returned value in a variable.

const $main  = document.getElementById('main')
console.log( $main )

//Select an element by CSS selector. Target the first link inside the 'nav' element.

const $link = document.querySelector('nav a')
console.log( $link )

//Target all links in the nav element

const $navOptions = document.querySelectorAll('nav a')
console.log( $navOptions )


//Pattern CSS selectors
//select all elements in the document whose href attribute value starts with "https"

console.log(document.querySelector('[href^="https"]'))

//select all elements in the document whose href attribute value contains the string "cdn"

console.log( document.querySelector('[href*="cdn"]'))
/*** Traversing the DOM  ***/
//Return a HTMLCollection with the child elements of the main node

console.log( $main.children )

// Returns the first child node(that is an element node) of main

console.log( $main.firstElementChild)
// Returns the next sibling element of main
console.log($main.nextElementSibling)

/*** Manipulating attributes */
//getAttribute()
//Obtain the href attribute of $link

console.log($link.getAttribute('href')) 
console.log($link.href)

console.log( $link.className)


//exception calling attributes as properties
console.log( $main.className )
console.log( $main.style);
console.log( $main.getAttribute('style'));

//setAttribute()
//Set the ID 'hero' on the first 'div' element inside the 'main' element.

$main.firstElementChild.setAttribute('id', 'hero')
//Add 'text-bg-dark' class to the element with id hero; warning! (setAttribute removes current setting)

const $hero = document.getElementById('hero')
//$hero.setAttribute('class', 'text-bg-dark')


//Add the 'href' attribute to the 'continue reading...' hero link; https://imdac.github.io/mtm6302/

const $heroCTA = document.querySelector('#hero a')
$heroCTA.setAttribute('href', 'https://imdac.github.io/mtm6302/')


//set the 'target' attribute of the her link to '_blank'

$heroCTA.getAttribute('target', '_blank')

// console.log($heroCTA.getAttribute('class')); // text-white fw-bol
// console.log($heroCTA.getAttribute('href')); // https://imdac.github.io/mtm6302/
// console.log($heroCTA.getAttribute('target')); // _blank

//removeAttribute()
//Remove the attribute 'target' from the 'continue reading...' link

$heroCTA.removeAttribute('target');


/*** Manipulating classes ***/

console.log( $hero.classList)

// console.log(   $hero.classList)      // ["p-4 p-md-5 mb-4 rounded position-relative"]
// Add class 'text-bg-dark' to the element with id 'hero'
$hero.classList.add('text-bg-dark')


// console.log($hero.classList)         // ["p-4 p-md-5 mb-4 rounded position-relative text-bg-dark"]

// Remove class
// Remove the class 'text-bg-dark' from the element with id 'hero

$hero.classList.remove('text-bg-dark')

// console.log(element.classList)      // ["p-4 p-md-5 mb-4 rounded position-relative"]

//Toggle class
//Retreive the 'dark mode' button, and save it to $darkModeBtn const

// $darkModeBtn.addEventListener('click', function() {

const $darkModeBtn = document.getElementById('darkModeBtn')

    // toggle class here

    $darkModeBtn.addEventListener('click', function(){
        $hero.classList.toggle('text-bg-dark')
    })


// })


//contains() and boolean condition
// console.log($hero.classList.contains('position-relative')) // true
// console.log($hero.classList.contains('text-bg-dark'))      // false

//blog data
const blogs = [
    {
        category: 'World',
        title: 'Featured post',
        date: 'Nov 12',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        link: 'https://imdac.github.io/'
    },
    {
        category: 'Design',
        title: 'Post title',
        date: 'Nov 11',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        link: '#'
    }
]
// Set the first post title using textContent

document.querySelector('.post-title').textContent = blogs[0].title



// Set the first post using innerHTML
document.querySelector('.post').innerHTML = ''