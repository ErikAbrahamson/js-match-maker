console.log('sanity check!');
var students = [], mentors = [];

function getStudent() {
  var name = prompt('What is the student\'s name?');
  var number = prompt('What is the student\'s phone #?');
  var city = prompt('In what city does this student currently live?');
  city.toLowerCase();

  var studentInfo = {};

  studentInfo.name = name;
  studentInfo.number = number;
  studentInfo.city = city;

  students.push(studentInfo);

  var studentList = document.getElementById('student');
  var node = document.createElement('li');
  var textnode = document.createTextNode('Name: ' + students[0].name + '\n' + 'City: ' + students[0].city + '\n' + 'Number: ' + students[0].number);

  node.appendChild(textnode);
  studentList.appendChild(node);

}

function getMentor() {
  var name = prompt('What is the mentor\'s name?');
  var number = prompt('What is the mentor\'s phone #?');
  var city = prompt('In what city does this mentor currently live?');
  city.toLowerCase();
  var mentorInfo = {};
  mentorInfo.name = name;
  mentorInfo.number = number;
  mentorInfo.city = city;
  mentors.push(mentorInfo);
  var newMentor = prompt('Do you want to add another mentor?');
  if (newMentor.toLowerCase() === 'yes') {
    getMentor();
  }
}
function getCity() {
  var city = prompt('Please enter a city name to display all mentors in that city.');

  for (var i = 0; i < mentors.length; i++) {
    if (city.toLowerCase() === mentors[i]['city']) {
      for (mentors in mentors[i]['city']) {
        alert(mentors[i]['name']);
      }
    } else {
      alert('Sorry, there are no mentors in that city at this time.');
    }
  }
}

document.getElementById('get_student').addEventListener('click', function(event) {
  getStudent();
});

document.getElementById('get_mentor').addEventListener('click', function(event) {
  getMentor();
});
