
// Create new comments -Asma
app.post("/articles/:id/comments",(req,res)=>{
    let {comment,commenter}=req.body
    const id=req.params._id

    const Comment1=new comment({
        comment,
        commenter,
    })
    
    Comment1
    .save()
    .then((result)=>{
res.json(result)
    }).catch((err)=>{
        res.status(201)
    })
})