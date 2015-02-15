/**
 * Created by Rube on 15/2/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApiDataSchema = new Schema({
    doc:{type:Schema.Types.Mixed},
    api:{type:Schema.Types.Mixed}
  },
  {
    collection: 'api'
  });

mongoose.model('Api', ApiDataSchema);