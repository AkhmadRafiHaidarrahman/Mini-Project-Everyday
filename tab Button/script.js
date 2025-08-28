document.addEventListener("DOMContentLoaded", () => {
    let tabbtn = document.querySelectorAll(".tab-btn")
    let about = document.querySelector(".about")
    let articles = document.querySelectorAll(".content")

    about.addEventListener("click", function(e){
        let id = e.target.dataset.id
        if(id){
            tabbtn.forEach(btn => btn.classList.remove("active"))
            e.target.classList.add("active")

            articles.forEach(item => item.classList.add("hidden"))

            const element = document.getElementById(id)
            element.classList.remove("hidden")
        }
    })
})
