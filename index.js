//
//
document.querySelector("#myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let myMoney = parseInt(document.querySelector("#money").value);
  let haveWife = document.querySelector("#haveWife").checked;
  let sonsNum = parseInt(document.querySelector("#sons").value);
  let daughtersNum = parseInt(document.querySelector("#daughters").value);

  let resultsDiv = document.querySelector("#results");
  resultsDiv.innerHTML = "";

  if (haveWife) {
    let wifeShare = myMoney / 8;
    myMoney -= wifeShare;
    resultsDiv.innerHTML += `Wife has to take ${parseInt(
      wifeShare
    )} Pounds.<br>`;
  }

  let unitShare = myMoney / (sonsNum * 2 + daughtersNum);
  let sonShare = unitShare * 2;
  let daughterShare = unitShare;

  if (sonsNum != 0) {
    resultsDiv.innerHTML += `Each son should take ${parseInt(
      sonShare
    )} Pound <br>`;
  }
  if (daughtersNum != 0) {
    resultsDiv.innerHTML += `Each daughter should take ${parseInt(
      daughterShare
    )} Pound<br>`;
  }
});
