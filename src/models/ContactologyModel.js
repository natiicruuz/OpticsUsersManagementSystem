const mongoose = require('mongoose');

const RxSchema = new mongoose.Schema({
  miopia: { type: Number, required: true },
  hipermetropia: { type: Number, required: true },
  astigmatismo: { type: Number, required: true },
  eje: { type: Number, required: true },  
  cil: { type: Number, required: true }   
}, { _id: false });

const ContactologySchema = new mongoose.Schema({
  rx: { type: RxSchema, required: true }, 
  curvatura: { type: Number, required: true }, 
  diametro: { type: Number, required: true }, 
  material: { type: String, required: true }, 
  tipoDeLente: { type: String, required: true }, 
  usoDiarioProlongado: { type: Boolean, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Contactologia', ContactologySchema);