var firebaseConfig = {
    apiKey: "AIzaSyA5yGTArRgc9iajmF3uPNdnGAylmyUfrVo",
    authDomain: "fir-1c429.firebaseapp.com",
    databaseURL: "https://fir-1c429-default-rtdb.firebaseio.com",
    projectId: "fir-1c429",
    storageBucket: "fir-1c429.appspot.com",
    messagingSenderId: "337539674170",
    appId: "1:337539674170:web:c3d60bb0b29224921dc503",
    measurementId: "G-MJ58MTZQWG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var dbRef=firebase.database().ref().child("students")
function insertData()
{
    console.log("inserting data...")
    var sname=document.getElementById("sname").value
    var rno=document.getElementById("rno").value
    dbRef.child(rno).set({sname:sname,rno:rno})
} 
function deleteData()
{
    var rno=window.prompt("Enter rollno to be deleted");
    dbRef.child(rno).remove()
    console.log("data deleted")
} 
function updateData()
{
    var newName=document.getElementById("sname").value
    var rno=document.getElementById("rno").value
    dbRef.child(rno).update({sname:newName})
    console.log("data updated")
} 
function loadData()
{
    dbRef.on("value",(snap)=>{
        snap.forEach((data)=>{
            console.log(data.val().sname)
            console.log(data.val().rno)
        })
    })
}