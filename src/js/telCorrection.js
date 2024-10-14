export default function telCorrection(telNum) {
    return telNum.replace(/^[8]/g, '+7').replace(/-|\s|\(|\)/g, '')
}
// console.log(telCorrection('8925 (168 01-20'));
// console.log(telCorrection('8(927) 000-00-00'));
// console.log(telCorrection('+7 960 000 00 00'));
// console.log(telCorrection('+86 000 000 0000'));

// module.exports = {
//     telCorrection
// }