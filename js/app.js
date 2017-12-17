window.onload = function () {

        $json('./json/menu.json', function (result) {
            var menu1 = new Menu({class: "navbar-nav", items: JSON.parse(result)});

            menu1.attach('#shop-menu');
        }, null);


        $json('./json/products.json', function (result) {

            products = JSON.parse(result);

            if(typeof ProductList !== 'undefined' ){
                var productList = new ProductList({items: products});

                productList.attach('#products');
            }

            if(typeof SingleProduct !== 'undefined' ){
                var singleProduct = new SingleProduct(products);
            }

        }, null);

};