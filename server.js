var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var PORT=process.env.PORT||3000;
var todos=[];
var todoNextId=1;
app.use(bodyParser.json());
app.get('/',function(req,res)
{
  res.send('Todo API Root');
});
app.get('/todos',function(req,res)
{
  res.json(todos);
});
app.get('/todos/:id',function(req,res)
{
  var todoId=req.params.id;
  var matchedTodo;
  for(var i=0;i<todos.length;i++)
  {
    if(todos[i].id==todoId)
     {
       matchedTodo=todos[i];
       break;
     }
  }
  if(typeof matchedTodo==='undefined')
    res.status(404).send();
  else
    res.json(matchedTodo);
});
app.post('/todos',function(req,res)
{
  var body=req.body;
  body.id=todoNextId++;
  todos.push(body);
  res.json(body);
});
app.listen(PORT,function()
{
  console.log('Server started at PORT: '+PORT+'!');
});
