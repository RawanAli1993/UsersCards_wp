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
fetch("https://raw.githubusercontent.com/RawanAli1993/UsersCards_wp/main/users.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      
      
      // card.ATTRIBUTE_NODE('id', user.id)
      // const card1 = userCardTemplate.ATTRIBUTE_NODE(id, user.id)
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      const body1 = card.querySelector("[data-body1]")
      card.setAttribute( 'id', newId )
      newId = newId+1
      // console.log(card.id);
      header.textContent = user.name
      body.textContent = user.phone
      body1.textContent = user.email
      userCardContainer.append(card)
      // userCardContainer.append(modal)
      return { name: user.name, email: user.email, phone: user.phone, 
        address:user.address, department:user.department, position_name:user.position_name, hire_date:user.hire_date, element: card }
      // ( name, email, department, "address, position_name, "hire_date, phone )

    })
  })
  // function mypop(params){
  //   var card1 = document.getElementsByClassName("card");
  //    var pop1 = document.getElementById("exampleModalCenter");
  //    popup.style.display='block';

  // }
  

  
  // ocument.getElementsByClassName("modal-body").textContent;
  function getID(event){
    const pop_name =  document.querySelector(".fullname");
    const pop_email =  document.querySelector(".email");
    const pop_phone =  document.querySelector(".phone");
    const pop_address=  document.querySelector(".address");
    const pop_department=  document.querySelector(".department");
    const pop_positionname=  document.querySelector(".positionname");
    const pop_hiredate=  document.querySelector(".hiredate");
    

    var card_id = event.srcElement.id
    console.log(card_id);
    console.log(users[card_id]);
    pop_name.textContent = users[card_id].name;
    
    pop_email.textContent = "EMAIL :   " +users[card_id].email;
    pop_phone.textContent = users[card_id].phone;
    pop_address.textContent = users[card_id].address;
    pop_department.textContent = users[card_id].department;
    pop_positionname.textContent = users[card_id].position_name;

    pop_hiredate.textContent = users[card_id].hire_date;

    // pop_id.textContent = users[card_id].id;
    

  }



