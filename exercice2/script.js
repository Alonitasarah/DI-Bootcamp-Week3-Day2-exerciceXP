let elementform = document.forms[0]
console.log(elementform);

let elementinput1 = document.getElementById('fname')
console.log(elementinput1);

let elementinput2 = document.getElementById('lname')
console.log(elementinput2);

let elementsubmit = document.getElementById('submit')
console.log(elementsubmit);

let elemAttribut1 = document.getElementsByName('fname')
console.log(elemAttribut1);

let elemAttribut2 = document.getElementsByName('lname')
console.log(elemAttribut2);


   let element = document.getElementById("submit").addEventListener("click", function(event){
    alert('pourquoi ?')
        event.preventDefault()
      }, false);
      console.log(element);

      function  information(){
        let inputs = document.getElementById('fname').value;
        let input = document.getElementById('lname').value;
         console.log(inputs);
        console.log(input);
      }

    let elementLi = document.createElement("li");
    let elementUl = document.getElementsByTagName("ul")[0].appendChild(elementLi);
    let addphrase = document.createTextNode("first name of the user")
     let applphrase = elementLi.appendChild(addphrase)
       console.log(elementLi);

       let elementLi2 = document.createElement("li");
    let elementUl2 = document.getElementsByTagName("ul")[0].appendChild(elementLi2);
    let addphrase2 = document.createTextNode("last name of the user")
     let applphrase2 = elementLi2.appendChild(addphrase2)
       console.log(elementLi2);
    