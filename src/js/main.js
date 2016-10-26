//firstname <i class="fa fa-user" aria-hidden="true"></i>
//lastname <i class="fa fa-user" aria-hidden="true"></i>
// email <i class="fa fa-envelope" aria-hidden="true"></i>
// website <i class="fa fa-globe" aria-hidden="true"></i>
// comments <i class="fa fa-comments" aria-hidden="true"></i>
// mobile number <i class="fa fa-comments" aria-hidden="true"></i>
// home number <i class="fa fa-phone" aria-hidden="true"></i>


//

import $ from 'jquery';


var data = $.ajax({
  url: "http://json-data.herokuapp.com/forms",
});
console.log(data);



function makeForm (item) {
for (var i = 0; i < item.length; i++){
  // if (item[i].label === "Last Name"){
    var resultsHTML = `
      <div class="oneLiners">
      <input type="text" placeholder=" ${item[i].label}">

      </div>
     `
   $(".container").append(resultsHTML);
// }
 }
};

data.then(makeForm);




  //   console.log();
  // }
  // } else {
  // if (data[i].type === "email") {
  //   return ``
  // } else {
  // if (data[i].type === "select") {
  //   return ``
  // } else {
  // if (data[i].type === "textarea") {
  //   return ``
  // } else {
  //   if (data[i].type === "tel") {
  //   return ``
  //   }
  // }
  // }
  // }
  // }
//
//   $(".container").append(makeForm);
// };
//



// {
//   var HTML = `<input type="text" placeholder="poo">`;
//   $(".container").html(HTML);
//   console.log(data);
// };

//





// // pull the data we need:
//
// function pullData (data){
//   var dataArray = [];
//   for (var i= 0; i< data.results.length; i++){
//
//   var itemName = data.results[i].title;
//   var itemURL = data.results[i].url;
//   var price = data.results[i].price;
//   var image = data.results[i].Images[0].url_fullxfull;
//   var storeName = data.results[i].Shop.shop_name;
//   var storeURL = data.results[i].Shop.url;
//
//
// // get the data structured how you want it on the page:
//
//   var resultHTML = `
//     <div class = "singleItem">
//       <img src = ${image}>
//       <div>
//         <a href = ${itemURL}>
//         ${itemName}
//         </a>
//          <div>
//           <span class = "store"> <a href = ${storeURL}>${storeName} </a></span>
//           <span class = "price"> $${price} <span>
//         </div>
//       </div>
//     </div>`;
//
// // get the data onto the page:
//
//     $(".searchResults").append(resultHTML);
//
// }
// };
//
//
// // run the function we just wrote.
//
// pullData(allData);
