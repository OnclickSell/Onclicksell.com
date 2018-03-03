const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const wrapAsync = require('../../packages/wrapAsync')
const db = require('../../database/config');
const bcrypt = require('bcrypt');
const auth = require('../../packages/auth');
let validator = require('../../packages/validator');
validator = new validator()
let uploader = require('../../packages/uploader')
uploader = new uploader('OnclickSell.com/')

let sender = require('../../packages/sender')






router.get('/', wrapAsync(async function(req, res) {
   const data = await setTimeout(() => {
    //  return await setTimeout(() => {
         return 'working'
    //  }, 2000);
   }, 2000)



    return res.json({
        data: data
    })
    // Async error!
    throw Error('woops');
  }));

router.post('/validate', (req, res, next) => {

})







router.post('/upload', wrapAsync( async (req, res, next) => {

 try {
  const result = await uploader.upload(req, {fields: [{name: 'avatar'}], folder: 'OnclickSell.com/'})
  console.log(result)
 } catch(err) {
   console.log(err)
 }
  
  
  
}))

router.get('/mail', wrapAsync( async (req, res, next) => {

  try {
   const result = await sender.send('<h1>Hi</h1>', 'aliakbar.su@hotmail.com')
   console.log('email sent')
  } catch(err) {
    console.log(err)
  }
   
   
   
 }))


module.exports = router;