const {Schema, model, Types} = require('mongoose') //1 работаем с mongoos забираем {...}

const schema = new Schema({//2 создаем const через конструктор класса schema
  email: {type: String, required: true, unique: true},//3 емайл (строка,обяз.поле-true,уникальный т.е только один пользователь с таким значением)
  password: {type: String, required: true},//4
  links: [{ type: Types.ObjectId, ref: 'Link' }]//5 делаем массив что каждый пользователь видел только свои данные
})

module.exports = model('User', schema)//2 експорт где даем название модели(в даном случае User) которая работаем по модели schema
