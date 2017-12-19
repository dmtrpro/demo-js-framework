function FormBuilder(attrs) {
    BaseBuilder.call(this, attrs);

    this.el = document.createElement('form');
    this.childClass = FormView;

}

FormBuilder.prototype = Object.create(BaseBuilder.prototype);
FormBuilder.prototype.constructor = FormBuilder;

FormBuilder.prototype.renderAttributes = function () {
    BaseView.prototype.renderAttributes.call(this);

    this.setAttribute('action');
    this.setAttribute('enctype');
    this.setAttribute('method');
    this.setAttribute('name');
};

FormBuilder.prototype.isValid = function () {
    var result = true;
    for(var i in this.items){

        if(!this.items[i].isValid()){
            result = false;
        }
    }

    console.log('Validation check:', result);
    return result;
};