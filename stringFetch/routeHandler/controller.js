const Str = require('../models/stringFetch')

exports.stringCreate = async (req, res) => {
  try {
    const string1 = await Str.create(req.body);
    res.status(200).json(string1);
    } catch (error) {
    res.status(400).send(error);
  }
};

exports.stringDelete = async(req,res)=>{
  const _id= req.params.id
  try {
    const string = await Str.findByIdAndDelete(_id)
    res.status(200).send(string)
  } catch (error) {
    res.status(400).send(error);

  }
}

exports.getAllStrings = async(req,res)=>{
  try {
  const allStrings =  await Str.find({})
  res.status(200).send(allStrings)

  } catch (error) {
    res.status(400).send(error);
  }
}

exports.getParticularString = async(req,res)=>{
  const _id= req.params.id
  try {
    const str = await Str.findById(_id)
    if(!str){
      return res.status(400).send()
    }
    res.status(200).send(str)

  } catch (error) {
    res.status(400).send(error);

  }
}

exports.updateString = async(req,res)=>{
  const _id= req.params.id
try {
  // const str = await Str.findByIdAndUpdate(_id,{phrase:'is it ok?'})
  const str= await Str.findByIdAndUpdate(_id,req.body,{new:true,runValidators:true})
  if(!str){
    return res.status(400).send()
  }
  res.status(200).send(str)

} catch (error) {
  res.status(400).send(error);

}
}