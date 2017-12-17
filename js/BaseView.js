function BaseView(attrs) {
    this.html = '';
    this.el = document.createElement('div');
    this.attributes = attrs ? attrs : [];
}

BaseView.prototype.attach = function (selector) {
    document.querySelector(selector).appendChild(this.el);
    this.render();

    return this;
};

BaseView.prototype.render = function () {
    if (this.attributes.id)
        this.el.setAttribute('id', this.attributes.id);

    if (this.attributes.class)
        this.el.classList.add(this.attributes.class);

    this.html = this.template(this.attributes);
    this.el.innerHTML = this.html;
    return this.el;
};

BaseView.prototype.remove = function () {
    this.el.remove();
};

BaseView.prototype.template = function (attrs) {
    return '';
};
