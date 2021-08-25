const mongoose=require('mongoose');
const user=mongoose.Schema({
name:
{
    type: String,
    required:true,

},
email:
{
    type:String,
    required:true,
    unique:true

},
password:
{
    type:String,
    required:true
},

phone:
{
type:Number,
required :true,
minLength:10
}
})

module.exports = mongoose.model('UserSchema',user)