//Đối tượng validator
function Validator(options) {

  function Validate(inputElement, rule) {
    inputElement.onblur = function(){
      var errorMessage = rule.test(inputElement.value);
      var messageElement = inputElement.parentElement.querySelector('.form-message');

      if(errorMessage) {
        messageElement.innerText = errorMessage;
        inputElement.parentElement.classList.add('invalid');
      } else {
        messageElement.innerText = '';
        inputElement.parentElement.classList.remove('invalid');
      }
    }
  }
  var formElement = document.querySelector(options.form);
  options.rules.forEach(function(rule) {
    var inputElement = formElement.querySelector(rule.selector);
    if (inputElement) {
      inputElement.onblur = function() {
        Validate(inputElement,rule);
      }
    }
  });
}


//Định nghĩa rules
//nguyên tắt của các rules:
// 1. khi có lỗi thì trả ra message lỗi
// 2. khi hợp lệ thì không trả ra cái gì cả( hoặc trả ra underfined)
Validator.isRequired = function (selector){
  return {
    selector:selector,
    test: function(value) {
      return value.trim() ? undefined: 'vui lòng nhập trường này!!!'
    }
  }
}

Validator.isEmail = function (selector){
  return {
    selector:selector,
    test: function() {
      
    }
  }
}