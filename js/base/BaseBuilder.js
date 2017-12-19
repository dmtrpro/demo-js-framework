function BaseBuilder(attrs) {
    BaseView.call(this, attrs);

    this.items = [];

    this.el = document.createElement('div');
    this.childClass = BaseView;
}

BaseBuilder.prototype = Object.create(BaseView.prototype);
BaseBuilder.prototype.constructor = BaseBuilder;

BaseBuilder.prototype.renderChilds = function () {
    for(var item in this.items){

        var child = this.items[item];

        child.render();
        this.el.appendChild(child.el);
    }
};

BaseBuilder.prototype.render = function () {
    BaseView.prototype.render.call(this);

    this.renderChilds();

    return this.el;
};

BaseBuilder.prototype.add = function (element) {
    if(element instanceof this.childClass){
        this.items.push(element);
    }
    return this;
};