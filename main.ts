import './style.css'

const myName = ()=> {
  const name = "Amanda"
  console.log(name.length)

  for (let i = 0; i < name.length; i++){
    console.log(name[i]);
  }
}
myName();
window.onload = function() {

const myName: string = "Philip"

let output = ""; 

for (let i = 0; i < myName.length; i++) {
  output += `<p>${myName[i]}</p>`;

      
      if (i < myName.length - 1) {
        output += " ";

        console.log(myName);
        
    }
}





}


