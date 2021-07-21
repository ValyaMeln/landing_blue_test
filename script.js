let lishku = document.querySelectorAll(".be_good li")
// console.log(lishku);
for (let li of lishku) {  /*перебираєм усі лішки*/
    console.log(li);
    li.addEventListener("click", /*підписуємся на подію клік по черзі кожній*/
        function () {

            for (let lii of lishku) {      //перебираєм ті самі лішки, забираючи в кожої клас action
                if (this === lii && !this.classList.contains("active")) {
                    this.classList.add("active")
                    break
                }
                lii.classList.remove("active")

            }
            // this.classList.add("active")
            //додаємо клас action, на ту лішку на яку ми нажали (на ту яка запустила подію)
            /*  this ___ на ту лішку на яку ми нажали*/

            // if (!this.classList.contains("active")){ //* перевіряємо чи є клас active *//
            //     this.classList.remove("active")//* якщо є клас active то ми видаляємо, якщо ні то..*//
            // }
            // else {this.classList.add("active")}

            // let x = this.getAttribute('img-src') //створюємо зміну і посилаємся на ту ж саму лішку зі значення атрибута по назві 'img-src'
            // let imageSrc = `img_three/` + x // до рядка додаємо значення атрибута
            // let image = document.querySelector('#image') //знаходе в html селекор id='image'
            //
            // image.setAttribute("src", imageSrc) //вказуємо нове значення атрибута "src"
        })

}