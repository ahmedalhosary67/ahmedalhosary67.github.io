// function togglePopup() {
//   document.getElementById("popup-1").classList.toggle("active");
// }
let newModal = `<div class="custom-model-main">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8">
        <div class="custom-model-inner">
          <div class="custom-model-wrap">
            <div class="pop-up-content-wrap">
              <div class="items">
                <div class="adding row">
                  <div class="add col-6">Add Item</div>
                  <div class="close-btn col-6">×</div>
                </div>
                <form >
                  
                  <div class="input-ele">
                    <div class="mb-3 row">
                      <label for="staticEmail" class="col-3 col-form-label">Clothe Name:</label>
                      <div class="col-8">
                        <input type="text" class="form-control clotheName" />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="inputPassword" class="col-3 col-form-label">Clothe Color:</label>
                      <div class="col-8">
                        <input type="text" class="form-control clotheColor" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary text-center submit">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-overlay"></div>
  </div>`;

function downloadPdf() {
  $("#organizer").tableHTMLExport({ type: "pdf", filename: "organizer.pdf" });
  // $(".modal")
}

// function addItem(e) {}
$(".Click-here").on("click", function () {
  $(".custom-model-main").addClass("model-open");
  let saveButton = $(".submit"),
    closeButton = $(".close-btn, .bg-overlay");
  that = $(this),
    td = $(this.parentNode);

  // console.log(this.parentNode.classList.contains("notUsed"));
  console.log($(this.parentNode).hasClass('bad'));

  ////////////////// save button //////////////////////
  saveButton.click((e) => {
    e.preventDefault();

    let clotheNameInput = $(".clotheName").val(),
      clotheColorInput = $(".clotheColor").val(),
      newTask = `<span class="task-box">${clotheNameInput} _ ${clotheColorInput}</span>`;

    that.parent().append(newTask).addClass("filled");
    that.remove();
    $(".custom-model-main").remove();
    $(".collect-parts").append(newModal);
    let notUsed = $(".notUsed");
    let bad = $(".bad");
    let good = $(".good");

    // console.log(this);
    if (td.hasClass("notUsed")) {
      console.log("notUsed");
      for (let i = 0; i < notUsed.length; i++) {
        const element = notUsed[i];
        let itemButton = `<button class="Click-here" onclick="addItem(e)">+ Item</button>`;
        // element.append(itemButton)
        if (element.childNodes[0].classList.contains("hideItem")) {
          element.childNodes[0].classList.remove("hideItem");
          // element.innerHTML += itemButton;
          break;
        }
      }
    } else if (td.hasClass("bad")) {
      console.log("bad");
      for (let i = 0; i < bad.length; i++) {
        const element = bad[i];
        let itemButton = `<button class="Click-here" onclick="addItem(e)">+ Item</button>`;
        // element.append(itemButton)
        if (element.childNodes[0].classList.contains("hideItem")) {
          element.childNodes[0].classList.remove("hideItem");
          // element.innerHTML += itemButton;
          break;
        }
      }
    } else if (td.hasClass("good")) {
      console.log("good");
      for (let i = 0; i < good.length; i++) {
        const element = good[i];
        let itemButton = `<button class="Click-here" onclick="addItem(e)">+ Item</button>`;
        // element.append(itemButton)
        if (element.childNodes[0].classList.contains("hideItem")) {
          element.childNodes[0].classList.remove("hideItem");
          // element.innerHTML += itemButton;
          break;
        }
      }
    }
    // clickHere += itemButton;
  });
  ////////////////// close button //////////////////////
  closeButton.click((e) => {
    // console.log("close");
    $(".custom-model-main").removeClass("model-open");
    $(".custom-model-main").remove();
    $(".collect-parts").append(newModal);
  });
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus');
  $('#myModal').modal('show')
})
