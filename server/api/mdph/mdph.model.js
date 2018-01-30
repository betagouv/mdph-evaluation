'use strict';

import mongoose, {Schema} from 'mongoose';

var MdphSchema = new Schema({
  zipcode:      { type: String, unique: true },
  name:         { type: String }
});

export default mongoose.model('Mdph', MdphSchema);
