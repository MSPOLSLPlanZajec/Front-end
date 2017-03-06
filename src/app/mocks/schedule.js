var teachers = require('./teacher').get;
var groups = require('./group').get;

var data = {
    name: teachers[0].name,
    schedule: [
        [{
            name: 'Programowanie 1',
            teacher: {
                name: teachers[0].name,
                id: teachers[0].id
            },
            classroom: {
                name: 408,
                id: ''
            },
            group: {
                name: groups[0].groups[0].groups[0].name,
                id: groups[0].groups[0].groups[0].id
            },
            type: ['laboratories'],
            duration: 15 * 6,
            startsAt: 6
        }], // poniedziałek
        [] // dzień bez zajęć
    ],
    notScheduled: [
        {
            name,
            teacher: {
                name: '',
                id: ''
            },
            type: ['lecture'],
            duration: 6
        }
    ]
};

module.exports = {
    get: function (type) {
        return data;
    }
}