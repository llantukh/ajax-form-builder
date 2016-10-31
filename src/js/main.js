import $ from 'jquery';


var data = $.ajax({
  url: "https://json-data.herokuapp.com/forms",
});
// console.log(data);

function makeForm (item) {
  for (var i = 0; i < item.length; i++){
    if (item[i].label === "Select Language") {
      var resultsHTML = `
        <div class = "dropDown">
          <select class="language">
            <option> Select Language</option>
            <option> ${item[i].options[0].label}</option>
            <option> ${item[i].options[1].label}</option>
            <option> ${item[i].options[2].label}</option>
            <option> ${item[i].options[3].label}</option>
            <option> ${item[i].options[4].label}</option>
          </select>
        </div>
      `;
    } else if (item[i].label === "Your Comment") {
      var resultsHTML = `
      <div class="commentBox">
      <i class="smallIcon fa ${item[i].icon}"></i>
      <textarea class="form" placeholder="${item[i].label}"></textarea>
      </div>
      `;
    } else {
    var resultsHTML = `
    <div class="other">
    <i class="smallIcon fa ${item[i].icon} formIcon" ></i>
    <input class="otherInfo" placeholder="${item[i].label}">
    </div>
    `;
    };
     $(".container").append(resultsHTML);
   }
};
// data.then(console.log);
data.then(makeForm);
