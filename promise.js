const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (rasa) => {
  try {
    const IXX = await promiseTheaterIXX();
    const VGC = await promiseTheaterVGC();
    let i = 0;
    IXX.forEach(hitung);
    VGC.forEach(hitung);
    function hitung(item, index) {
      if (item.hasil==rasa){i++}
    }
    return i;

  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
