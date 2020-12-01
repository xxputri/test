// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyAvjSNuTh_fPrdFFOLiIjlnqynJhdxJu0w",
  authDomain: "uidtest-d30f5.firebaseapp.com",
  databaseURL: "https://uidtest-d30f5.firebaseio.com",
  projectId: "uidtest-d30f5",
  storageBucket: "uidtest-d30f5.appspot.com",
  messagingSenderId: "1035639573171"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var iniuid = getInputVal('iniuid');

  // Save message
  saveMessage(name);
  saveMessage(iniuid);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
	iniuid: iniuid;
  });
}