console.log('sanity check!');
// Init both student and mentor object array
var students = [], mentors = [];
// Pushes new student data to student object array
function getStudent() {
  var name = prompt('What is the student\'s name?');
  var number = prompt('What is the student\'s phone #?');
  var city = prompt('In what city does this student currently live?');

  var studentInfo = {
    name: '',
    number: '',
    city: ''
  };

  studentInfo.name = name;
  studentInfo.number = number;
  studentInfo.city = city;
  students.push(studentInfo);

  var newStudent = prompt('Do you want to add another student?');
  if (newStudent.toLowerCase() === 'yes') {
    getStudent();
  }
}
