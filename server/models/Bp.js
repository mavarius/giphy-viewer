const mongoose = require('mongoose')

const bpSchema = new mongoose.Schema({
  bpString: { type: String },
  bpNumber: { type: Number }
})

bpSchema.methods.modelMethod = function () {
  console.log(this)
  // return this.save()
}

bpSchema.methods.instanceMethod = function () {
  console.log(this)
  // return this.save()
}

const Bp = mongoose.model('Bp', bpSchema)

module.exports = Bp
