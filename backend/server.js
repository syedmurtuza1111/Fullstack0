import express from "express"

const app = express();
const port = process.env.PORT || 4000;

// app.get("/",(req, res)=>{
//     res.send("yoyo")

// })

app.get('/api/okes',(req,res)=>{
    const jokes = [
        { id: 1, title: 'Why don’t skeletons fight each other?', content: 'They don’t have the guts.' },
        { id: 2, title: 'What do you call fake spaghetti?', content: 'An impasta!' },
        { id: 3, title: 'Why don’t eggs tell jokes?', content: 'They’d crack each other up.' },
        { id: 4, title: 'Why did the scarecrow win an award?', content: 'Because he was outstanding in his field.' },
        { id: 5, title: 'Why can’t your nose be 12 inches long?', content: 'Because then it would be a foot.' }
    ];
    res.send(jokes);
    
})

app.listen(port,()=>{
    console.log(`app listing at ${port}`)
})