var express = require('express');
var router = express.Router();
const {OpenAIApi, Configuration} = require('openai')


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env.REACT_APP_CHATBOT_API_KEY)
  res.render('index', { title: 'Express' });
});

router.post('/getResponse', async (req,res) =>{
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_CHATBOT_API_KEY
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 20,
    temperature: 0.5,
  })

  res.send("yay")
  // console.log(response)
  // res.send(response)
})

module.exports = router;
