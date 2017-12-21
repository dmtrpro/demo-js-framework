function TabBuilder(attrs) {
    BaseBuilder.call(this, attrs);

    this.childClass = TabView;

    this.el = document.createElement('div');
    this.el.classList.add('tabs-group');

    this.tabs = document.createElement('ul');
    this.tabs.classList.add('nav', 'nav-tabs');

    this.pages = document.createElement('div');
    this.el.classList.add('tab-page');

    this.el.addEventListener('click', this.onclick.bind(this));
}

TabBuilder.prototype = Object.create(BaseBuilder.prototype);
TabBuilder.prototype.constructor = TabBuilder;

TabBuilder.prototype.renderChilds = function () {
    for(var item in this.items){

        var child = this.items[item];

        child.render();
        this.tabs.appendChild(child.el);
        this.pages.appendChild(child.page);
    }

    this.el.appendChild(this.tabs);
    this.el.appendChild(this.pages);
};

TabBuilder.prototype.onclick = function (event) {
    for (var item in this.items){
        var child = this.items[item];
        if(child.state === 'activation'){
            child.link.classList.add('active');
            child.page.classList.add('tab-active');
            child.state = 'active';
        } else {
            child.link.classList.remove('active');
            child.page.classList.remove('tab-active');
            child.state = '';
        }
    }
    console.log(event);
};