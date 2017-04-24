var self = {
    get: [
        {
            name: 'Jan',
            surname: "Kowalski",
            titles: "dr inż.", 
            id: '4246c73b-db6f-446d-883a-3b5ac13c9bf0',
        },
        {
            name: 'Fabian',
            surname: "Nowicki",
            titles: "dr hab. inż.", 
            id: '4246c73b-db6f-446d-883a-3b5ac13c9bf1',
        },
        {
            name: 'Józef',
            surname: "Cebula",
            titles: "dr inż.", 
            id: '4246c73b-db6f-446d-883a-3b5ac13c9bf2',
        },
        {
            name: 'Andrzej',
            surname: "Mościcki",
            titles: "prof.", 
            id: '4246c73b-db6f-446d-883a-3b5ac13c9bf3',
        }
    ]
}

self.get.map((x) => {
    x['displayName'] = `${x.titles} ${x.name} ${x.surname}`;
});

module.exports = self;