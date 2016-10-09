 /**
  * Form validations
  */
 module.exports = {
   isEmail: {
     pattern: /^([\w_\.\-\+])+@([\w\-]+\.)+([\w]{2,10})+$/,
     message: 'Please enter a valid email address',
   },
   isPhone: {
     pattern: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3,4})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
     // pattern: /^(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?$/,
     message: 'Please enter a valid phone number'
   },
   isFullName: {
     pattern: /(^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+)\s([a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+)$/,
     message: 'Please enter your first and last name'
   }
 }
