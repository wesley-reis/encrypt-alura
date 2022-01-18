  
  var btn = document.querySelector("#btn-theme")

  btn.addEventListener('click', () => {
     event.preventDefault();
     var app = document.querySelector("#app")

     if(app.classList == 'light'){
         app.classList.remove('light');
         app.classList.add('dark')
         localStorage.setItem("theme", "dark")
         setIcon()
     }else{
        app.classList.add("light")
        app.classList.remove("dark")
        localStorage.setItem("theme", "light")
        setIcon()
     }
     
     
 
 });


  //Setando o icone de acordo com o theme ativo
function setIcon(){

  if(localStorage.theme === 'dark'){
    var moon = document.querySelector('#moon')
    var sun = document.querySelector('#sun')
    moon.classList.add('hidden')
    sun.classList.remove('hidden')

  }else{
  var moon = document.querySelector('#moon')
  var sun = document.querySelector('#sun')
  moon.classList.remove('hidden')
  sun.classList.add('hidden')
  }
}

 
 
 //verificando opção do thema ja escolhida no storage
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    setIcon()
  } else {
    document.documentElement.classList.remove('dark')
    setIcon()
  }



  //Year
var yearTag = document.querySelector('#year')
var year = new Date().getFullYear()

yearTag.textContent=year
