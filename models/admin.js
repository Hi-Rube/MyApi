var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = new Schema({
    username:{type:String},
    password:{type:String}
  },
  {
    collection: 'admin'
  });

mongoose.model('Admin', AdminSchema);