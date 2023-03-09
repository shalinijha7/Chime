const quoteText=document.querySelector(".quote"),
 quoteBtn=document.querySelector("button"),
 authorName=document.querySelector(".author .name"),
 soundBtn=document.querySelector(".sound"),
 copyBtn=document.querySelector(".copy"),
 twitterBtn=document.querySelector(".twitter");
// random quote function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText="Loading Quote...";
    // fetching random quotes from the API and parsing it into Js object
    fetch("https://api.quotable.io/random").then(res=>res.json()).then(result=>{
        quoteText.innerText=result.content;
        authorName.innerText=result.author;
        quoteBtn.innerText="New Quote";
        quoteBtn.classList.remove("loading");
    });
}
soundBtn.addEventListener("click",()=>{
    // SpeechSynthesisUtterence is a web speech API that represents a speech request
    let utterance=new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);

    // Speak method of speechSynthesis speaks the utterence
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click",()=>{
    // Copying teh quote text on copyBtn click
    // writeText() property writes the specified text string to the clipboard
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click",()=>{
    let tweetUrl=`https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    
    // Opening a new twitter tab with passing quote in the URL
    window.open(tweetUrl,"_blank");
});
quoteBtn.addEventListener("click",randomQuote);

