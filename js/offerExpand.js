const physiogoExpandableList = document.querySelector(".offer-physiogo_expandList")
const physiogoExpandableListElements = physiogoExpandableList.querySelectorAll("li")
const solluxExamples = document.querySelector(".offer-sollux_examples")
const lympha = document.querySelector(".offer-lympha_examples.outside_image")


physiogoExpandableListElements.forEach( el => el.addEventListener("click", () => el.classList.toggle("span-visible")))

solluxExamples.addEventListener("click", () => solluxExamples.classList.toggle("list-visible"))

lympha.addEventListener("click", () => lympha.classList.toggle("list-visible"))