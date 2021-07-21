let lishku = document.querySelectorAll(".be_good li")

for (let li of lishku) {  /*перебираєм усі лішки*/
    console.log(li);
    li.addEventListener("click", /*підписуємся на подію клік по черзі кожній*/
        function () {

            for (let lii of lishku) {      //перебираєм ті самі лішки, забираючи в кожої клас action
                if (this === lii && !this.classList.contains("active")) { //якщо ми нажавши на liі отримаємо, що вона дорівнює liі "і" не має класу "active" →
                    this.classList.add("active") //→ то ми до неї додаємо клас "active" і зупиняємо дію  "continue" переходячи на ноступну lii y for//
                    continue       //якщо ми не зупинили цикл то переходимо до наступної дії, а саме видаляємо клас "active"
                }
                lii.classList.remove("active")
            }
        })
}
