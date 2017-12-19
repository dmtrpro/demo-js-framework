function Submenu(attrs) {
    BaseCollection.call(this, attrs);
    MenuItem.call(this, attrs);

    this.el.classList.add("dropdown-toggle");

    this.items = attrs.menu;

    this.childClass = Menu;
}

Submenu.prototype = Object.create(BaseCollection.prototype);
Submenu.prototype.constructor = Submenu;

Submenu.prototype.renderChilds = function () {
    var child = this.createChild(this.items);

    child.render();
    this.el.appendChild(child.el);
};

Submenu.prototype.template = function (attr) {
    return '<a href="' + attr.href + '" class="link">' + attr.title + '</a>';
};

