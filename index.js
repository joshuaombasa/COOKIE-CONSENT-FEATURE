const modalEl = document.getElementById("modal")

const modalCloseBtn = document.getElementById("modal-close-btn")

const submitBtn = document.getElementById("submit-btn")

const modalForm = document.getElementById("modal-form")

const modalText = document.getElementById("modal-text")

const modalInner = document.getElementById("modal-inner")


setTimeout(function () {
    modalEl.style.display = 'inline'
}, 1500)


modalCloseBtn.addEventListener("click", function () {
    modalEl.style.display = 'none'
})


modalForm.addEventListener("submit", function (e) {
    e.preventDefault()
    modalText.innerHTML = 
                        `
                            <div class="modal-inner-loading">
                                <img src="images/loading.svg" class="loading">
                                  <p id="uploadText">
                                    Saving your preference...
                                  </p>
                            </div>
                        `

    setTimeout(function () {
        modalText.innerHTML = 
                        `
                            <div class="modal-inner-loading">
                                <img src="images/loading.svg" class="loading">
                                  <p id="uploadText">
                                    Getting you the latest content...
                                  </p>
                            </div>
                        `
    }, 3000)
})