var self = {
    get: [
        {
            name: 'Jan',
            surname: "Kowalski",
            title: "dr inż.", 
            id: '4246c73b-db6f-446d-883a-3b5ac13c9bf0',
        },
        {
            name: 'Fabian',
            surname: "Nowicki",
            title: "dr hab. inż.", 
            id: '4246c73b-db6f-446d-883a-3b5ac13c9bf1',
        },
        {
            name: 'Józef',
            surname: "Cebula",
            title: "dr inż.", 
            id: '4246c73b-db6f-446d-883a-3b5ac13c9bf2',
        },
        {
            name: 'Andrzej',
            surname: "Mościcki",
            title: "prof.", 
            id: '4246c73b-db6f-446d-883a-3b5ac13c9bf3',
        }
    ]
}

self.get.map((x) => {
    x['displayName'] = `${x.title} ${x.name} ${x.surname}`;
});

module.exports = self;