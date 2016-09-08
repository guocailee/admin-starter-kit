/**
 * @author liguocai
 * @Date  2016-09-08
 */
import './validation-rule.scss'

export default $validationProvider => {
  'ngInject'
  var expression = {
    required: function (value) {
      return !!value
    },
    url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
    email: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
    number: /^\d+$/,
    mobile: /^1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\\d{8}$/,
    emailOrMobile: '',
    minlength: function (value, scope, element, attrs, param) {
      return value.length >= param
    },
    maxlength: function (value, scope, element, attrs, param) {
      return value.length <= param
    }
  }

  var defaultMsg = {
    required: {
      error: 'This should be Required!!'
    },
    url: {
      error: 'This should be Url'
    },
    email: {
      error: 'This should be Email'
    },
    number: {
      error: 'This should be Number'
    },
    minlength: {
      error: 'This should be longer'
    },
    maxlength: {
      error: 'This should be shorter'
    }
  }
  $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg)
  $validationProvider.setErrorHTML(function (msg, element, attrs) {
    // remember to return your HTML
    // eg: return '<p class="invalid">' + msg + '</p>';
    // or using filter
    // eg: return '<p class="invalid">{{"' + msg + '"| lowercase}}</p>';
    return '<p class="field-error">' + msg + '</p>'
  })
  $validationProvider.showSuccessMessage = false // or true(default)
}
