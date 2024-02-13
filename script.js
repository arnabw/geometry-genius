function firstCalculation(fistInput, secondInput, computeValue) {
  const firstInputValue = parseFloat(fistInput.value);
  const secondInputValue = parseFloat(secondInput.value);
  if (!isNaN(firstInputValue) && !isNaN(secondInputValue)) {
    if (computeValue === 0.5) {
      return (equationValue =
        computeValue * firstInputValue * secondInputValue);
    } else if (computeValue == 1) {
      return (equationValue = firstInputValue * secondInputValue);
    } else {
      return (equationValue =
        computeValue * firstInputValue * secondInputValue);
    }
  } else return false;
}
let countCalc = 1;
function displayValue(displayPlace, value, areaDisplay) {
  displayPlace.innerText = value;
  const areaCalculation = document.getElementById("areaCalc");
  if (areaCalculation.children.length >= 13)
    areaCalculation.removeChild(areaCalculation.children[1]);
  const cloneNode = areaDisplay.cloneNode(true);
  areaCalculation.append(cloneNode);
  cloneNode.innerText = `${countCalc}. ${cloneNode.innerText}`;
  countCalc++;
}

//Triangle
function triangleBtn() {
  const compute = firstCalculation(
    document.getElementById("triangleHeight"),
    document.getElementById("triangleBase"),
    0.5
  );
  if (compute === false) return alert("Invalid Input");
  displayValue(
    document.getElementById("triangleDisplay"),
    compute,
    document.getElementById("triangleText")
  );
  document.getElementById("triangle").style.backgroundColor = "#FBBCED";
}
//Rhombus
function rhombusBtn() {
  const compute = firstCalculation(
    document.getElementById("rhombusD1"),
    document.getElementById("rhombusD2"),
    0.5
  );
  if (compute === false) return alert("Invalid Input");
  displayValue(
    document.getElementById("rhombusDisplay"),
    compute,
    document.getElementById("rhombusText")
  );
  document.getElementById("rhombus").style.backgroundColor = "#69C7F0";
}
//Pentagon
function pentagonBtn() {
  const compute = firstCalculation(
    document.getElementById("pentagonP"),
    document.getElementById("pentagonB"),
    0.5
  );
  if (compute === false) return alert("Invalid Input");
  displayValue(
    document.getElementById("pentagonDisplay"),
    compute,
    document.getElementById("pentagonText")
  );
  document.getElementById("pentagon").style.backgroundColor = "#FBBCED";
}
//Rectangle
function rectangleBtn() {
  const compute = firstCalculation(
    document.getElementById("rectangleWidth"),
    document.getElementById("rectangleHeight"),
    1
  );
  if (compute === false) return alert("Invalid Input");
  displayValue(
    document.getElementById("rectangleDisplay"),
    compute,
    document.getElementById("rectangleText")
  );
  document.getElementById("rectangle").style.backgroundColor = "#69C7F0";
}
//Parallelogram
function parallelogramBtn() {
  const compute = firstCalculation(
    document.getElementById("parallelogramB"),
    document.getElementById("parallelogramH"),
    1
  );
  if (compute === false) return alert("Invalid Input");
  displayValue(
    document.getElementById("parallelogramDisplay"),
    compute,
    document.getElementById("parallelogramText")
  );
  document.getElementById("parallelogram").style.backgroundColor = "#FBBCED";
}
//Ellipse
function ellipseBtn() {
  const compute = firstCalculation(
    document.getElementById("ellipseA"),
    document.getElementById("ellipseB"),
    3.14159265359
  );
  if (compute === false) return alert("Invalid Input");
  displayValue(
    document.getElementById("ellipseDisplay"),
    compute,
    document.getElementById("ellipseText")
  );
  document.getElementById("ellipse").style.backgroundColor = "#69C7F0";
}
