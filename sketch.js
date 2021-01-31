let code, new_code;

function displayCode(code) {
  new_code = join(code, '\n');
  select('#code').elt.innerText = new_code;
  select('#save-code').elt.style.display = 'block';
}

function saveCode() {
  saveStrings(code, 'COVID-19 Machine Learning Detection');
}

function loadingError(error) {
  console.error(error);
}

function setup() {
  noCanvas();
  noLoop();
  code = loadStrings('code.txt', displayCode, loadingError);
}
