import './style.css'

const myName = ()=> {
  const name = "Amanda"
  console.log(name.length)

  for (let i = 0; i < name.length; i++){
    console.log(name[i]);
  }
}
myName();