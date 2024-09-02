export const handlePassType = e => {
    if (e.target.previousElementSibling.type == "password") {
      e.target.previousElementSibling.type = "text";
      e.target.className = "fa-regular fa-eye-slash pass_show_hide";
    } else {
      e.target.previousElementSibling.type = "password";
      e.target.className = "fa-regular fa-eye pass_show_hide";
    }
  }