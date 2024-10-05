"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf())) ? true : false;
    };
    console.log(Validations.validateText('Alex'));
})(Validations || (Validations = {}));
//# sourceMappingURL=main.js.map