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

BaseView.prototype.renderAttributes = function () {
    this.setAttribute('id');

    if (this.attributes.class)
        this.el.classList.add(this.get('class'));
};

BaseView.prototype.render = function () {
    this.renderAttributes();

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

BaseView.prototype.get = function (attr) {
    if(attr in this.attributes) {
        return this.attributes[attr];
    }
    return '';
};

BaseView.prototype.set = function (attr, value) {
    return this.attributes[attr] = value;
};

BaseView.prototype.check = function (attr) {
    return !!(this.get(attr));
};

BaseView.prototype.setAttribute = function (attr) {
    if (attr in this.attributes)
        this.el.setAttribute(attr, this.get(attr));
};
