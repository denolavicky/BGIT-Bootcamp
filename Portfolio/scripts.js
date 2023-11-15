 // Function to fetch a random quote from the Quotes API
 function getRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const quoteElement = document.getElementById('quote');
            quoteElement.textContent = `"${data.content}" - ${data.author}`;
        })
        .catch(error => console.error('Error fetching quote:', error));
}

// Get an initial quote when the page loads
getRandomQuote();


// // Example: Fetching and displaying blog posts
// document.addEventListener('DOMContentLoaded', () => {
//     const tweetsContainer = document.getElementById('tweets-container');

//     // Mock data for tweets (replace this with actual Twitter API integration)
//     const tweetData = [
//         { tweet: 'This is a sample tweet. #SampleTweet' },
//         { tweet: 'Another sample tweet for the Twitter feed. #TwitterAPI' },
//     ];

//     // Display tweets
//     tweetData.forEach(tweet => {
//         const tweetElement = document.createElement('p');
//         tweetElement.textContent = tweet.tweet;
//         tweetsContainer.appendChild(tweetElement);
//     });
// });
