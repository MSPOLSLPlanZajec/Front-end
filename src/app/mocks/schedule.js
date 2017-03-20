var teachers = require('./teacher').get;
var groups = require('./group').get;

var data = {
    name: teachers[0].name,
    schedule: [
        [{
            name: 'Programowanie 1',
            teacher: teachers[0],
            classroom: {
                name: 309,
                id: ''
            },
            group: {
                name: groups[0].groups[0].groups[0].name,
                id: groups[0].groups[0].groups[0].id
            },
            type: 'laboratories',
            duration: 6,
            startsAt: 6
        },
        {
            name: 'Algebra i logika 1',
            teacher: teachers[1],
            classroom: {
                name: 408,
                id: ''
            },
            group: {
                name: groups[0].groups[0].groups[0].name,
                id: groups[0].groups[0].groups[0].id
            },
            type: 'lecture',
            duration: 6,
            startsAt: 13
        }], // poniedziałek
        [
            {
                name: 'Algebra i logika 1',
                teacher: teachers[1],
                classroom: {
                    name: 408,
                    id: ''
                },
                group: {
                    name: groups[0].groups[0].groups[0].name,
                    id: groups[0].groups[0].groups[0].id
                },
                type: 'exercises',
                duration: 6,
                startsAt: 8
            }
        ],
        [
            {
                name: 'Systemy sztucznej inteligencji',
                teacher: teachers[2],
                classroom: {
                    name: 408,
                    id: ''
                },
                group: {
                    name: groups[0].groups[0].groups[0].name,
                    id: groups[0].groups[0].groups[0].id
                },
                type: 'lecture',
                duration: 6,
                startsAt: 3
            },
            {
                name: 'Systemy sztucznej inteligencji',
                teacher: teachers[2],
                classroom: {
                    name: 408,
                    id: ''
                },
                group: {
                    name: groups[0].groups[0].groups[0].name,
                    id: groups[0].groups[0].groups[0].id
                },
                type: 'laboratories',
                duration: 6,
                startsAt: 10
            }
        ],
        [],
        [
            {
                name: 'Bazy danych',
                teacher: teachers[3],
                classroom: {
                    name: 408,
                    id: ''
                },
                group: {
                    name: groups[0].groups[0].groups[0].name,
                    id: groups[0].groups[0].groups[0].id
                },
                type: 'laboratories',
                duration: 6,
                startsAt: 10
            },
            {
                name: 'Bazy danych',
                teacher: teachers[3],
                classroom: {
                    name: 408,
                    id: ''
                },
                group: {
                    name: groups[0].groups[0].groups[0].name,
                    id: groups[0].groups[0].groups[0].id
                },
                type: 'lecture',
                duration: 6,
                startsAt: 17
            }
        ],
        [],
        [] // dzień bez zajęć
    ],
    notScheduled: [
        {
            name,
            teacher: {
                name: '',
                id: ''
            },
            type: 'lecture',
            duration: 6
        }
    ]
};

module.exports = {
    get: function (type) {
        return data;
    }
}