function TextInput(attrs) {
    FormView.call(this, attrs);

    this.attributes.type = 'text';
}

TextInput.prototype = Object.create(FormView.prototype);
TextInput.prototype.constructor = TextInput;

function SubmitInput(attrs) {
    FormView.call(this, attrs);

    if (!this.get('value')){
        this.set('value', 'Отправить')
    }

    this.attributes.type = 'submit';
    this.input.classList.add('btn', 'btn-primary');
}

SubmitInput.prototype = Object.create(FormView.prototype);
SubmitInput.prototype.constructor = SubmitInput;

function NameInput(attrs) {
    FormView.call(this, attrs);

    this.attributes.type = 'text';
    this.pattern = /^[А-Яа-яЁёA-Za-z]+$/;
    this.attributes.helper = 'Имя должно состоять только из букв';
}

NameInput.prototype = Object.create(FormView.prototype);
NameInput.prototype.constructor = NameInput;

function TelephoneInput(attrs) {
    FormView.call(this, attrs);

    this.attributes.type = 'text';
    this.pattern = /^\+7\s?\(\d{3}\)[\-\s]?\d{3}[\-\s]?\d{2}[\-\s]?\d{2}$/;
    this.attributes.helper = 'Введите телефон в формате +7(000)000-0000';
}

TelephoneInput.prototype = Object.create(FormView.prototype);
TelephoneInput.prototype.constructor = TelephoneInput;


function EmailInput(attrs) {
    FormView.call(this, attrs);

    this.attributes.type = 'email';
    this.pattern = /^\w[\w\.\-]*\w@\w[\w\-]*\w\.\w+$/;
    this.attributes.helper = 'Ввведен не верный формат электронной почты';
}

EmailInput.prototype = Object.create(FormView.prototype);
EmailInput.prototype.constructor = EmailInput;


function TextAreaInput(attrs) {
    FormView.call(this, attrs);

    this.input = document.createElement('textarea');

    if (!this.get('id')) {
        this.set('id', $uniqueId('textarea'));
    }
}

TextAreaInput.prototype.renderAttributes = function () {
    FormView.prototype.renderAttributes.call(this);

    this.setAttribute.call(this.input, 'cols');
    this.setAttribute.call(this.input, 'rows');
    this.setAttribute.call(this.input, 'maxlength');

    this.input.setAttribute('readonly', !!(this.get('readonly')));
};

TextAreaInput.prototype = Object.create(FormView.prototype);
TextAreaInput.prototype.constructor = TextAreaInput;