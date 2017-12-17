function MenuItem(attrs) {
    BaseView.call(this, attrs);

    this.el = document.createElement('li');
    this.el.classList.add("nav-link");

    if (!this.attributes.href)
        this.attributes.href = '#';

    if (!this.attributes.title)
        this.attributes.title = '';
}

MenuItem.prototype = Object.create(BaseView.prototype);
MenuItem.prototype.constructor = MenuItem;

MenuItem.prototype.template = function (attr) {
    return '<a href="' + attr.href + '" class="link">' + attr.title + '</a>';
};

