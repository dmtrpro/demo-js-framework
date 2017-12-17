function SingleProduct (products) {
    this.products = products;
    this.product = this.searchProduct();

    if(!this.product) {
        alert("Упс! Что-то пошло не так!");
    }

    console.log(this.product);

    this.img = $s('#product-image img');
    this.img.setAttribute('src', this.product.img);

    this.title = $s('#product-title');
    this.title.innerText = this.product.title;

    this.excerpt = $s('#product-excerpt');
    this.excerpt.innerText = this.product.excerpt;

    this.content = $s('#product-content');
    this.content.innerText = this.product.content;

    this.price = $s('#product-price');
    this.price.innerText = this.product.price;
}

SingleProduct.prototype.searchProduct = function () {
    var productSlug = $get('product');

    for(var i in this.products){
        if(this.products[i].slug === productSlug){
            return this.products[i];
        }
    }
};
