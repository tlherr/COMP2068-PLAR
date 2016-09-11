'use strict';

import mongoose from 'mongoose';

var ThingSchema = new mongoose.Schema({
  description: String,
  completed: Boolean
});

export default mongoose.model('Thing', ThingSchema);
