const run = require('../main');
const assert = require('assert');


describe('read ipv4 string and convert to 32 number', function () {
    it('should return 0 when there is space between two digits', function () {
        let result = run("17 2.168.5.1")
        assert(result === 0);
    });

    it('should return 32 number when there is spaces before or after ipv4', function () {
        assert(run(" 172.168.5.1") === 2896692481);
        assert(run(" 172.168.5.1 ") === 2896692481);
        assert(run("172.168.5.1 ") === 2896692481);
    });

    it('should return 32 number when there is spaces before or after dot', function () {
        assert(run("172 .168.5.1") === 2896692481);
        assert(run("172 . 168.5.1 ") === 2896692481);
        assert(run("172 . 168 .5. 1 ") === 2896692481);
    });

    it('should return 32 number when there is multi spaces before or after', function () {
        assert(run("       172.168.5.1     ") === 2896692481);
        assert(run("172 .    168    .5.       1 ") === 2896692481);
    });


});
