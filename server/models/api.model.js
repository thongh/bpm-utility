import mongoose from 'mongoose';

const api = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});


const groupSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  childs: {
    type: [api]
  }
});

const apiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  childs:{
    type : [groupSchema]
  }
});

apiSchema.method({});


apiSchema.statics={
  list(){
    return this.find();
  }
};

export default mongoose.model('Api', apiSchema);
