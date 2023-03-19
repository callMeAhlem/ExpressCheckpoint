const express=require('express')
const app=express();

app.set("view engine","ejs")
app.use(workDay)


app.get('/',(req,res)=>{
res.render("Home")
})

app.get('/about',(req,res)=>{
    res.render("About")
    })

    app.get('/contact',(req,res)=>{
        res.render("Contact")
        })
function workDay (req, res,next) {
let date= new Date()
let hour=date.getHours()
let day=date.getDay()
if (hour>=17 ||hour<9 ||day==0 ||day==6)
{
    res.render("Closed")
}
next()
}
        app.listen(4002)