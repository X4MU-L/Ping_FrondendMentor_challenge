const selectElements = selector =>{
    const element = document.querySelector(selector);
    if (element) return element; 
    else throw new Error(`something went wrong check to see if ${selector} is typed correctly`);
}

const validateEmail = typedEmail => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(typedEmail)) {
      return true;
    }
    return false;
  };

  const setErrorMessage = (selected,message) =>{
      const inputField = selected.parentElement;
      inputField.querySelector(".error-message").textContent = message;
      inputField.classList.add("error")
  }

  const setSuccessMessage = selected =>{
    const inputField = selected.parentElement;
    inputField.classList.remove("error")
  }

  selectElements(".btn").addEventListener("click",(e) =>{
    e.preventDefault;
      const input = selectElements(".input").value.trim();
      if(input === ""){
          setErrorMessage(selectElements(".input"),"Whoops! It looks like you forgot to add your email")
      }else if(!validateEmail(input)){
        setErrorMessage(selectElements(".input"),"Please provide a valid email address")
      }else{setSuccessMessage(selectElements(".input"))}
  })