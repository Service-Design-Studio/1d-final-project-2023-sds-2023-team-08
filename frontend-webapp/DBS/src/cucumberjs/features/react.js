const { register } = require('react-cucumber');

// assuming your build process drops your complied JS into dist/
const {HomeToRecent} = require('../../dist/f1');

register([
        HomeToRecent
]);

