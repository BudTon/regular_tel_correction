/* eslint-disable no-undef */

import telCorrection from "../telCorrection.js";
// const { telCorrection } = require("../telCorrection.js");

test.each([
    [
        '8925 (168 01-20)',
        '+79251680120'
    ], [
        '8(927) 000-00-00',
        '+79270000000'
    ], [
        '+7 960 000 00 00',
        '+79600000000'
    ], [
        '+86 000 000 0000',
        '+860000000000'
    ]],
)(`testing validateUsername telNum = %s`, (telNum, expected) => {
    const result = telCorrection(telNum);
    expect(result).toBe(expected);
});

