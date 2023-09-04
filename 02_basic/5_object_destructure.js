// Object - destructuring

const course = {
    courseName :'web development',
    price : '999',
    courseInstructor: 'hitesh chaudhary'
}
// console.log (course.courseInstructor) ////hitesh chaudhary
//destructuring of courseainstructor from course object
const { courseInstructor} = course
console.log(courseInstructor)//hitesh chaudhary

const { courseInstructor: mentor } = course
console.log(mentor) //hitesh chaudhary

//Json format
[{
    "name": 'sejal',
    "id": '1',
}]
