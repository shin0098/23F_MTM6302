/*** Arrays - basics ***/

//Create an list of two courses
const courses = ['Math', 'Design']
//Target one element
console.log( courses )
//Reassign the value of the targeted element
courses[1] = 'WDI'
//Add a new element; warning!
// courses[5] = 'X'


/*** Arrays - Manipulation ***/
//Add a new element to the end of the array 'courses'
console.log( courses.push('WDII', 'WDIII') )
console.log( courses)
//Remove the last element of the array and save it in a variable.
console.log( courses.pop() )
//Remove the first element on the array and save it in a variable.
const course = courses.shift()
//Add a new element to the beginin of the array
courses.unshift('WDIV')
//Removes the first item, and Inserts a new one using the same function. 
 courses.splice( 0, 1, 'WDV' )



/*** Array - Sorting ***/
//Sort the array 
console.log(courses)
// ['WDV', 'WDI', 'WDII']
courses.reverse()

const grades = [2, 5, 8, 11, 200, 1]

// grades.sort( function(a,b){
//     return a - b
// } )
grades.sort( (a,b) => a - b )


/*** Array - concatenation ***/

//Create the 'student' array that contains an object with the following properties: studentNumber, name, userName, email.
const student = [
    {
        studentNumber:12,
        name: 'David',
        userName: 'platard',
        email: 'plat@alg.com'
    }
]
    

// create a new array 'students' that combine 'users' and 'student' array
const students = users.concat(student) 

//Create a string variable that contains all the elements of the 'courses' array
console.log(  courses.join(' | ')   )

//Determine if the variable has an array

Array.isArray(courses)



/*** Searching in Arrays ***/
//Obtain the index of the first item that matches the value 'WDII'
console.log(  courses.indexOf('WDII')  )

//Check if the  array includes the element 'WD'
console.log( courses.includes('WDII') )
//Find and save the student with your studentNumber; use the 'students' srray

const studentAC = students.find( student => student.studentNumber == 9   )


/*** Loops ***/
//Use 'for counting loop' to display, in the console, a list of all names; use the 'students' array.

for( let i = 0; i < students.length; i++ ){
    // console.log( students[i].name)
}

//Use a for...of to display the 'userName' and 'studentNumber' from 'students' array
for( const student of students  ) {
    console.log( student.userName + ' ' + student.studentNumber )
}

//Use a for...in to display all the properties of any object
for( const key in studentAC  ) {
    console.log( key + ' ' + studentAC[key] )
}

//Use a for...of and a for...in to display all the properties of every student from the 'students' array

for( const student of students  ) {
    console.log( '********' )
    for( const key in student  ) {
        console.log( key + ' ' + studentAC[key] )
    }
}


/*** Practice ***/

const $container = document.getElementById('blogsContainer')
$container.innerHTML = ''
for(const student of students){

 $container.innerHTML +=
    `
    <div class="col-md-6">
        <div class="ac-card">
        <div class="ac-card-image"></div>
        <div class="ac-card-info">
            <p>
                <strong id="name">${student.name}</strong><br>
                <span id="studentNumber">${student.studentNumber}</span>
            </p>
            <p id="partTime" class="hide">PART TIME</p>
            <p id="date" class="ac-card-date"></p>
        </div>
        <img class="ac-icon" src="https://imdac.github.io/images/codepen/AC_ICON_1C_BLK_70x58.png">
        <div class="ac-card-footer">
            <img class="ac-logo" src="https://imdac.github.io/images/codepen/AC_WORDMARK_1C_WHT.png">
        </div>
        </div>
    </div>
    `

}
