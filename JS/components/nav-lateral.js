const menuItem = document.querySelectorAll(".item-menu")
const btnExp = document.querySelector("#btn-exp")
const  navLateral = document.querySelector(".navegacao-lateral")

function selectTab() {
    menuItem.forEach((item)=>
        item.classList.remove("fixed")
    )
    this.classList.add("fixed")
}

menuItem.forEach((item)=>
    item.addEventListener("click", selectTab)
)

btnExp.addEventListener("click", function(){
    navLateral.classList.toggle("expandir")
})