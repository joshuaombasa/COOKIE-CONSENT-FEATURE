const modalEl = document.getElementById("modal")

const modalCloseBtn = document.getElementById("modal-close-btn")

const modalBtnContainer = document.getElementById("modal-btn-container")

const submitBtn = document.getElementById("submit-btn")

const modalForm = document.getElementById("modal-form")

const modalText = document.getElementById("modal-text")

const modalInner = document.getElementById("modal-inner")

const declineBtn = document.getElementById("decline-btn")

declineBtn.addEventListener("mouseenter", function () {
    console.log("hovered")
    modalBtnContainer.classList.toggle('reverse')
})


setTimeout(function () {
    modalEl.style.display = 'inline'
}, 1500)


modalCloseBtn.addEventListener("click", function () {
    modalEl.style.display = 'none'
})


modalForm.addEventListener("submit", function (e) {
    const userInfo = new FormData(modalForm)
    let name = userInfo.get('fullName')
    console.log(name)
    // console.log(userInfo)
    e.preventDefault()
    modalForm.style.display = 'none'
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

    setTimeout(function () {
        document.getElementById('modal-inner').innerHTML =  
                            `
                                <h2>Thanks you <span class="name-styling">${name}</span> for visiting Frontend Masters! </h2>
                                <p>Enjoy your content.</p>
                            `
                            modalCloseBtn.disabled = false   
        
    }, 6000)

    setTimeout(function () {
        modalEl.style.display = 'none'
    }, 9000)
})