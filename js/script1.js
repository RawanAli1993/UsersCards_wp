// Access-Control-Allow-: "https://github.com";

const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

var newId = 0
fetch("https://raw.githubusercontent.com/RawanAli1993/test_task_fullstack/main/db.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      
      
      // card.ATTRIBUTE_NODE('id', user.id)
      // const card1 = userCardTemplate.ATTRIBUTE_NODE(id, user.id)
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      card.setAttribute( 'id', newId )
      newId = newId+1
      // console.log(card.id);
      header.textContent = user.name
      body.textContent = user.email
      userCardContainer.append(card)
      // userCardContainer.append(modal)
      return { name: user.name, email: user.email,  element: card }

    })
  })
  // function mypop(params){
  //   var card1 = document.getElementsByClassName("card");
  //    var pop1 = document.getElementById("exampleModalCenter");
  //    popup.style.display='block';

  // }
  

  
  // ocument.getElementsByClassName("modal-body").textContent;
  function getID(event){
    const pop_name =  document.querySelector(".modal-body");
    const pop_email =  document.querySelector(".b1");
    // const pop_username =  document.querySelector(".b2");
    const pop_id=  document.querySelector(".b3");
    var card_id = event.srcElement.id
    console.log(card_id);
    console.log(users[card_id]);
    pop_name.textContent = users[card_id].name;
    pop_email.textContent = "EMAIL   " +users[card_id].email;
    // pop_username.textContent = users[card_id].username;

    pop_id.textContent = users[card_id].id;
    

  }



