function BaseCollection(attrs) {
    BaseView.call(this, attrs);

    this.items = attrs.items ? attrs.items : [];

    this.el = document.createElement('div');
    this.childClass = BaseView;
}

BaseCollection.prototype = Object.create(BaseView.prototype);
BaseCollection.prototype.constructor = BaseCollection;

BaseCollection.prototype.createChild = function (attrs) {
    return new this.childClass(attrs);
};

BaseCollection.prototype.renderChilds = function () {
    for (var i = 0; i < this.items.length; i++) {
        var child = this.createChild(this.items[i]);

        if (child instanceof BaseView) {
            child.render();
            this.el.appendChild(child.el);
        }
    }
};

BaseCollection.prototype.render = function () {
    BaseView.prototype.render.call(this);

    this.renderChilds();
    return this.el;
};
