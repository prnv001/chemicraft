// fn to call periodic table
const createPeriodicElement = (symbol ,atomicNumber , name)=>{
  const element = document.createElement("div");
  element.classList.add("element");
  element.innerHTML = symbol;

  element.setAttribute("data-atomic-number",atomicNumber);
  element.setAttribute("data-element-name",name);
  return element;
}

 // Event handler for periodic table element click
 const handleElementClick = (event) => {
        const target = event.target;

        if (target.classList.contains("element")) {
          const atomicNumber = target.getAttribute("data-atomic-number");
          const elementName = target.getAttribute("data-element-name");
          alert(`Atomic Number: ${atomicNumber}\nElement Name: ${elementName}`);
        }
      };

      // fn to initialize the table

      function initializePeriodicTable() {
        const mainBody = document.querySelector(".mainBody");

        // create 50 periodic table

        for (let i = 1; i <= 50; i++) {
          const element = createPeriodicElement(`Elem${i}`, i, `Element ${i}`);
          mainBody.append(element);
        }

        // add event delegation to container
        mainBody.addEventListener("click",handleElementClick)
      }

      // create function
      initializePeriodicTable();