function Menu(attrs) {
    BaseCollection.call(this, attrs);

    this.el = document.createElement('ul');
}

Menu.prototype = Object.create(BaseCollection.prototype);
Menu.prototype.constructor = Menu;

Menu.prototype.createChild = function (item) {
    if (item.menu) {
        return new Submenu(item);
    }
    return new MenuItem(item);
};