const mongoose = require('mongoose');

const OptometricsSchema = new mongoose.Schema({
    dnp: { type: Number, required: true }, 
    pio: { type: Number, required: true },
    av: { type: String, required: true }, 
    rx: { type: RxSchema, required: true }
  }, { timestamps: true });
  

const RxSchema = new mongoose.Schema({
    miopia: { type: Number, required: true },
    hipermetropia: { type: Number, required: true },
    astigmatismo: { type: Number, required: true },
    eje: { type: Number, required: true },  // Eje del astigmatismo en grados (0-180)
    cil: { type: Number, required: true }   // Cilindro
  }, { _id: false });  // No crear un _id separado para el subdocumento
  

  module.exports = mongoose.model('Optometrics', OptometricsSchema);
