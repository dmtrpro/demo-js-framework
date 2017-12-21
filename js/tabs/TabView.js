function TabView(attrs) {
    BaseView.call(this, attrs);

    if (!this.get('id')) {
        this.set('id', $uniqueId('tab-'));
    }

    if (!this.get('title')) {
        this.set('title', 'Tab');
    }

    this.state = this.get('state');

    this.el = document.createElement('li');
    this.el.classList.add('nav-item', 'link-' + this.get('id'));

    this.link = document.createElement('a');
    this.link.classList.add('nav-link');

    this.page = document.createElement('div');
    this.page.classList.add('page-tab', 'page-' + this.get('id'));

    this.el.addEventListener('click', this.onclick.bind(this));

    if (this.state === 'active' ){
        this.link.classList.add('active');
        this.page.classList.add('tab-active');
    }
}

TabView.prototype = Object.create(BaseView.prototype);
TabView.prototype.constructor = TabView;

TabView.prototype.render = function () {
    this.renderAttributes();

    this.link.innerText = this.get('title');
    this.el.appendChild(this.link);

    this.page.innerHTML = this.template(this.attributes);

    return this.el;
};


TabView.prototype.template = function (attrs) {
    if (this.get('template') instanceof Function) {
        this.html = this.get('template')(attrs);
    } else if (this.get('html')) {
        this.html = this.get('html');
    }
    return this.html;
};

TabView.prototype.onclick = function (event) {
    this.state = 'activation';
};