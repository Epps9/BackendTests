const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe ('formatFullname', () => {

    it('returns false if fullName is empty', () => {
      expect(formatFullname(' ')).to.equal('Error');
    });

    it ('returns an Error if fullname is not a string', () => {
    if (typeof fullName !== 'string') return 'Error';
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(2)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
    });

    it ('returns an Error if fullName format is not firstName, lastName', () => {
        expect(formatFullname('Ewa')).to.equal('Error');
        expect(formatFullname('Ewa Braun Berlin')).to.equal('Error');
    });
});