var tabs = new TabBuilder({
    id: "tabs-example"
});

tabs
    .add(new TabView({
            title: 'Tab 1',
            html: '<p>Example page 1</p>',
            state: 'active'
        })
    )
    .add(new TabView({
            title: 'Tab 2',
            html: '<p>Example page 2</p>'
        })
    )
    .add(new TabView({
            title: 'Tab 3',
            html: '<p>Example page 3</p>'
        })
    )
    .attach('#tabs');
