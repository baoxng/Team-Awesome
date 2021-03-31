let newPostBtn = document.getElementById("modalBtn");

function InsertRecord() {
    let postName = document.getElementById('post-name').value;
    let postDate = document.getElementById('post-date').value;
    let postDescription = document.getElementById('post-description').value;

//     if (txtid.length != 0 || txtname.length != 0 || txtsalary.length != 0 || txtcity.length != 0) {
//         var connection = new ActiveXObject("ADODB.Connection");
//         var connectionstring = "Data Source=.;Initial Catalog=EmpDetail;Persist Security Info=True;User ID=sa;Password=****;Provider=SQLOLEDB";
//         connection.Open(connectionstring);
//         var rs = new ActiveXObject("ADODB.Recordset");
//         rs.Open("insert into Emp_Info values('" + txtid + "','" + txtname + "','" + txtsalary + "','" + txtcity + "')", connection);
//         alert("Insert Record Successfuly");
//         txtid.value = " ";
//         connection.close();
//     }
//     else {
//         alert("Please Enter Employee \n Id \n Name \n Salary \n City ");
//     }
// }

// document.querySelector(newEntryBtn).addEventListener("click", () => {
//         //adding element data to local storage
//         let newPost = {
//           postName: JSON.stringify(name),
//           postDate: JSON.stringify(date),
//           postDescription: JSON.stringify(description)
//         }
//         savePlaces.push(newPost);
//         localStorage.setItem("results-saved-1", JSON.stringify(savePosts));
//         // run function to load results
//         loadResults();    
// });

// function loadResults() {
//     var savePosts = JSON.parse(localStorage.getItem("results-saved-1"));
//     $(".saveItem").empty();
//     for (var i = 0; i < savePosts.length; i++) {
//       if (savePosts[i].postName) {
//         let postNameEl = savePosts[i].postName;
//         let postDateEl = savePosts[i].postDate;
//         let postDescriptionEl = savePosts[i].postDescription;

//         //append to the page
//         let p = document.getElementById("modalBtn");
//         let postList = $("<li class='name-title'>");
//         postList.append(postNameEl);
//         p.append(postList);

//   }};
// }