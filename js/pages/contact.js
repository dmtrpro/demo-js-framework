
// Задание 3
var form = new FormBuilder({
    id: "contact-form",
    method: "GET"
});

form
    .add(new NameInput({
        label: 'Ваше имя:',
        placeholder: 'Иван'
    }))
    .add(new TelephoneInput({
        label: 'Ваш телефон:',
        placeholder: '+7 (987) 654-3210'
    }))
    .add(new EmailInput({
        label: 'Ваша электронная почта:',
        placeholder: 'ivan.vasiliev@email.test'
    }))
    .add(new TextAreaInput({
        id: 'text-area',
        label: 'Ваше сообщение:',
        placeholder: 'Заменяем одинарные кавычки на двойные'
    }))
    .add(new SubmitInput({
        id: 'submit-button'
    })).attach('#form');


// Задание 1-2

var text = $s('#text');
var textArea = $s('#text-area');

$s('#submit-button').addEventListener('click', function (event) {
    event.preventDefault();

    form.isValid();

    text.innerText = textArea.value.replace(/\s'[а-яё\w]|[а-яё\w]'\s|^'[а-яё\w]|[а-яё\w]'$/ig, function (str2) {
        return str2.replace("'", '"');
    });
});