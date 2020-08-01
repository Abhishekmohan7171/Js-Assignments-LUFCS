var quoteList = [
    "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "You can observe a lot just by watching.",
    "Difficulties increase the nearer we get to the goal.",
    "The bored man sees the danger in every opportunity. The achiever sees opportunity in every danger.",
    "Fate is in your hands and no one elses",
    "Do one thing every day that scares you.",
    "Be the chief but never the lord.",
    "Impossible is just an opinion.",
    "One day or day one. You decide.",
    "Hustle in silence and let your success make the noise.",
    "Nothing happens unless first we dream.",
    "Some people want it to happen, some wish it would happen, others make it happen.",
    "It is better to work hard than to rust.",
    "Well begun is half done.",
    "Life is a learning experience, only if you learn.",
    "Self-complacency is fatal to progress.",
    "Peace comes from within. Do not seek it without.",
    "What you give is what you get.",
    "Life is change. Growth is optional. Choose wisely.",
    "To lead people walk behind them.",
    "Everything in life is luck.",
    "From error to error one discovers the entire truth.",
    "One today is worth two tomorrows.",
    "From small beginnings come great things.",
    "Real magic in relationships means an absence of judgement of others.",
    "He that is giddy thinks the world turns round."
];

function generate(){
    var quote = Math.floor(Math.random()*quoteList.length);
    document.getElementById("display").innerHTML = quoteList[quote]           
}

















