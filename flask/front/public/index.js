async function acquireListData(route) {
  const response = await fetch(route)
  const data = await response.json()

  return [...data]

}

document.addEventListener("DOMContentLoaded", async () => {
  const teachersList = document.querySelector('#teachersList')
  const studentsList = document.querySelector('#studentsList')
  const studentForm = document.querySelector('#studentForm')

  teacherData = await acquireListData('http://localhost:3001/teachers')
  console.log(teacherData)
  for(item of teacherData) {
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    h3.innerHTML += (item.subject_name + ': ' + item.first_name)
    li.append(h3)
    teachersList.append(li)
  }

  studentData = await acquireListData('http://localhost:3001/students')
  console.log(studentData)
  for(item of studentData) {
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    h3.innerHTML += (item.first_name)
    li.append(h3)

    studentsList.append(li)
  }

  studentForm.addEventListener('submit', async (event) => {
    console.log('form submitted')
    event.preventDefault()
    const formData = new FormData(studentForm)
    const {studentFirst, studentLast, studentAge, studentGrade, studentTeacherID} = Object.fromEntries(formData.entries());

    // NO DATA CHECKING HERE HEHE

    const response = await fetch('http://localhost:3001/student', {
      method: 'POST',
      body: JSON.stringify({
        'first_name': studentFirst,
        'last_name': studentLast,
        'age': parseInt(studentAge),
        'grade': studentGrade,
        'teacher_id': parseInt(studentTeacherID)
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response)









    // const constraints = [
    //   { value: studentFirst, name: "Student First Name", check: (v) => { v.length <= 25 && v.length > 1}},
    //   { value: studentLast, name: "Student Last Name", check: (v) => { v.length <= 25 && v.length > 1}},
    //   { value: studentAge, name: "Student Age", check: (v) => {typeof(v) == 'number' && v > 1}},
    //   { value: studentGrade, name: "Student Grade", check: (v) => { v.length == 1}},
    //   { value: studentTeacherID, name: "Student Teacher ID", check: (v) => {v.length <= 3 && v.length >= 1}}
    // ]

    // const invalidField = constraints.find(({value, check}) => {
    //   console.log(value)
    //   // const val = formData.get(value)
    //   return check(!value)
    // })

    // console.log(invalidField)


  })






})