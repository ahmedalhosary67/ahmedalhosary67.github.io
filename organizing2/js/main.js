// setTimeout(() => {
//   $("#loader").fadeOut("slow");

// }, 2000);
$(this).on("keydown click", () => {
  $("#loader").fadeOut("slow");
  $(".welcome").addClass("animate__animated animate__fadeInDownBig");
  $(".usage").addClass("animate__animated animate__fadeInRightBig");
  $("table").addClass("animate__animated animate__zoomIn");
  $("header img").addClass("animate__animated animate__zoomIn");
  $("section .export-pdf-button").addClass("animate__animated animate__fadeInLeftBig");
});

function openModel(type, e) {
  document.getElementById("modal-wrapper").innerHTML += getModal(type);
  $("#clothName").focus();
}

function closeModal() {
  document.getElementById("modal-wrapper").innerHTML = "";
}

function addItem(type, event) {
  event.preventDefault();

  const clothName = document.getElementById("clothName");
  const clothColor = document.getElementById("clothColor");
  const clothType = document.getElementById("clothType");

  const targetCategory = document.getElementById(clothType.value);
  const table = targetCategory.getElementsByClassName(type)[0];

  clothName.nextSibling.remove();

  if (!clothName.value == "" || !clothColor.value == "") {
    table.innerHTML += `<span class="task-box">${clothName.value} _ ${clothColor.value}</span><br />`;

  }

  document.getElementById("modal-wrapper").innerHTML = "";
}

// Define the function
// to screenshot the div
function takeshot() {
  let div = document.getElementById("example").cloneNode(true);
  // Use the html2canvas
  // function to take a screenshot
  // and append it
  // to the output div
  $("#output").children().remove();
  setTimeout(() => {
    if ($("#output").parent().parent().parent().hasClass("show")) {
        document.getElementById("output").append(div);
      }
      let x = $('#output #example thead th')
        x.each(i => {
            if (x[i].children[1] == undefined) {
    
            } else {
                x[i].children[1].classList.add('hide')
            }
        })
      
  }, 200);
}



function getModal(type) {
  return `<div id="custom-model-main" class="custom-model-main model-open">
<div class="container">
  <div class="row">
    <div class="col-12 col-md-8">
      <div class="custom-model-inner">
        <div class="custom-model-wrap">
          <div class="pop-up-content-wrap">
            <div class="items">
              <div class="adding row">
                <div class="add col-6">Add Item</div>
                <div class="close col-6" onclick="closeModal()">×</div>
              </div>
              <form onsubmit="addItem( '  ${type}  ', event)">
                <div class="input-ele row">
                  <div class="mb-3 col-lg-6">
                    <label
                      for="staticEmail"
                      class=" col-form-label"
                      >Clothe Name</label
                    >
                    <input
                      id="clothName"
                      type="text"
                      class="form-control"
                      min="1"
                    />
                  </div>
                  <div class="mb-3 col-lg-6">
                    <label
                      for="inputPassword"
                      class=" col-form-label"
                      >Clothe Color</label
                    >
                    <input
                      id="clothColor"
                      type="text"
                      class="form-control"
                      min="1"
                    />
                  </div>
                  <div class="mb-4  col-lg-12">
                    <label
                      class=" col-form-label"
                      >Cloth type</label
                    >
                      <select
                        id="clothType"
                        class="form-control"
                      >
                      <option value="workware">Workware</option>
                      <option value="home">Home</option>
                      <option value="sport">Sport</option>
                      <option value="partyware">Partyware</option>
                      </select>

                  </div>
                </div>
                <button
                  id="saveData"
                  class="btn btn-primary text-center submit"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="bg-overlay"  onclick="closeModal()"></div>
</div>`;
}
