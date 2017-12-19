function ProductList(attrs) {
    BaseCollection.call(this, attrs);

    this.childClass = Product;

    this.el.classList.add("row");
}

ProductList.prototype = Object.create(BaseCollection.prototype);
ProductList.prototype.constructor = ProductList;