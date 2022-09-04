// Doi tuong 
function Validator(options) {
    // ham thuc hien bao loi
    // validate cua nguoi dung
    function validate (inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    if (errorMessage) {
                        errorElement.innerText = errorMessage; 
                        inputElement.parentElement.classList.add('invalid');                 
                    } else {
                        errorElement.innerText = '';
                        inputElement.parentElement.classList.remove('invalid')
                    }
    }
    // khi nguoi dung nhap
    // function input (inputElement, inPuton) {
    //     var errorElement = inputElement.parentElement.querySelector('.form-message');
    //     errorElement.innerText = '';
    //     inputElement.parentElement.classList.remove('invalid')
    // }   
    // lay element cua for can validate
    var formElement = document.querySelector(options.form);

    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                // xu ly truong hop blur ra ngoai
                inputElement.onblur = function () {
                    validate(inputElement, rule)
                    
                }
                // khi nguoi dung  nhap vao input
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector('.form-message');
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid')
                }
            }
        });
            
    }
}


// Dinh nghia rules
// nguyen tac cua rules:
// loi => message loi
// hop le => k tra
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function (value)  {
            // value cua nguoi dung
            return value.trim() ? undefined : 'Vui lòng nhập chỗ trống.'
        }
    };
}
Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function (value)  {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập email.'

        }
    };
}
Validator.minLength = function(selector, min) {
    return {
        selector: selector,
        test: function (value)  {
            return value.length >= min ? undefined : 'Vui lòng nhập tối thiểu 8 kí tự.'
        }
    };
}
Validator.isConfirm = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value===getConfirmValue() ? undefined : message || 'Vui lòng nhập lại.'
        }
    }
}
// Signup
const modal = document.querySelector('.modal');
const openLoginBtn = document.querySelector('.header__navbar-item--strong');
const closeLoginBtn = document.querySelector('.btn--nomal');
const switchLoginBtn = document.querySelector('.auth-form__switch-btn')

function toggleModal() {
    modal.classList.toggle('hide');
}
function switchModal() {
    modal.classList.switch('login')
}
openLoginBtn.addEventListener('click', toggleModal);
closeLoginBtn.addEventListener('click', toggleModal);
switchLoginBtn.addEventListener('click', switchModal);

modal.addEventListener('.click', (a) => {
    if (a.target == a.currentTarget) switchModal();
})

modal.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) toggleModal();
})
// Signin