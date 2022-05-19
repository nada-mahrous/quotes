//array contain objects
var quotes = [
    {
        quoteText: "“Be yourself; everyone else is already taken.”",
        quoteAuther: '― Oscar Wilde'
    },
    {
        quoteText: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        quoteAuther: '― Oscar Wilde'
    },
    {
        quoteText: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        quoteAuther: '― Marilyn Monroe'
    },
    {
        quoteText: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        quoteAuther: '― Albert Einstein'
    },
    {
        quoteText: "“So many books, so little time.”",
        quoteAuther: '― Frank Zappa'
    },
    {
        quoteText: "“A room without books is like a body without a soul.”",
        quoteAuther: '― Marcus Tullius Cicero'
    }
]


function creatQuote() {
    var random = Math.floor(Math.random()*quotes.length);
    document.getElementById('quoteText').innerHTML = quotes[random].quoteText;
    document.getElementById('quoteAuther').innerHTML = quotes[random].quoteAuther;
}

