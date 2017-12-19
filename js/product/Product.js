function Product(attrs) {
    BaseView.call(this, attrs);

    this.el = document.createElement('a');
    this.el.classList.add("product", "col-md-4");
    this.el.setAttribute('href', 'product.html?product=' + attrs.slug);
}

Product.prototype = Object.create(BaseView.prototype);
Product.prototype.constructor = MenuItem;

Product.prototype.template = function (attr) {
    return '<div class="card"><img class="card-img-top" src="' + attr.thumb + '" alt="' + attr.title + '"><div class="card-body"><h4 class="card-title">' + attr.title + '</h4><p class="card-text">' + attr.excerpt + '</p></div></div>';
};

