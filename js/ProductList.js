function ProductList(attrs) {
    BaseCollection.call(this, attrs);

    this.child = Product;

    this.el.classList.add("row");
}

ProductList.prototype = Object.create(BaseCollection.prototype);
ProductList.prototype.constructor = ProductList;