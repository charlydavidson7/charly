
const Courses = [{
  id: 1, name: 'CSE'
}, { id: 2, name: 'ECE' }, { id: 3, name: 'Mech' }]

function addNewCourse (courseName) {
  if (courseName) {
    const newCourse = {
      id: Courses.length + 1,
      name: courseName
    }
    Courses.push(newCourse)
    return Courses
  } else return null
}

function getSelectedCourses (data) {
 
  const selectedCourse = Courses.find(c => c.id === parseInt(data.params.id))
  console.log(selectedCourse)
  if (selectedCourse) { return selectedCourse } else return null
}

function getAllCourses () {
  return Courses
}

module.exports = { addNewCourse, getSelectedCourses, getAllCourses, Courses }
