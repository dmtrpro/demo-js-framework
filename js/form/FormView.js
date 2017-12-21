function FormView(attrs) {
    BaseView.call(this, attrs);

    if (!this.get('id')) {
        this.set('id', $uniqueId('form-element'));
    }

    this.el = document.createElement('div');
    this.el.classList.add('form-group');

    this.input = document.createElement('input');

    this.attributes.helper = '';
    this.helper = document.createElement('small');
    this.helper.classList.add('form-text', 'text-muted', 'form-helper');

    this.label = document.createElement('label');
    this.label.setAttribute('for', this.get('id'));
    this.label.innerText = this.get('label');

    this.pattern = new RegExp(this.get('pattern'));
}

FormView.prototype = Object.create(BaseView.prototype);
FormView.prototype.constructor = FormView;

FormView.prototype.renderAttributes = function () {
    //BaseView.prototype.renderAttributes.call(this);

    this.input.classList.add('form-control');

    this.input.setAttribute('id', this.get('id'));
    this.input.setAttribute('type', this.get('type'));
    this.input.setAttribute('value', this.get('value'));
    this.input.setAttribute('name', this.get('name'));
    this.input.setAttribute('placeholder', this.get('placeholder'));

    this.input.setAttribute('pattern', this.pattern.source);
    this.input.setAttribute('required', !!(this.get('required')));
    //this.input.setAttribute('disabled', !!(this.get('disabled')));
};

FormView.prototype.isValid = function () {
    var valid = this.pattern.test(this.input.value);

    if (!valid) {
        this.input.classList.add('invalid');
    } else {
        this.input.classList.remove('invalid');
    }

    return valid;
};

FormView.prototype.render = function () {
    this.renderAttributes();

    if (this.get('label')) {
        this.el.appendChild(this.label);
    }

    this.el.appendChild(this.input);

    if (this.get('helper')) {
        this.helper.innerText = this.get('helper');
        this.el.appendChild(this.helper);
    }
    return this.el;
};
