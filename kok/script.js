var quotes=[
"First forget inspiration. Habit is more dependable. Habit will sustain you whether you're inspired or not. Habit will help you finish and polish your stories. Inspiration won't. Habit is persistence in practice.― Octavia E. Butler",

"If you get tired, learn to rest, not to quit.— Banksy",

"Perseverance is not a long race, it is many short races one after the other.— Walter Elliot",

"Setting goals is the first step in turning the invisible into the visible.— Tony Robbins",

"You miss 100% of the shots you don't take.— Wayne Gretzky",

"Always do your best. What you plant now, you will harvest later.— Og Mandino",

"Motivation will almost always beat mere talent.— Norman Ralph Augustine",

"Instead of looking at the past, I put myself ahead 20 years and try to look at what I need to do now in order to get there then.— Diana Ross",

"Obstacles can't stop you. Problems can't stop you. Most of all, other people can't stop you. Only you can stop you.— Jeffrey Gitomer",

"Whenever I feel bad, I use that feeling to motivate me to work harder. I only allow myself one day to feel sorry for myself. When I'm not feeling my best, I ask myself, 'What are you going to do about it?' I use the negativity to fuel the transformation into a better me.— Beyoncé Knowles",

"A dream does not become reality through magic it takes sweat, determination and hard work.— Colin Powell",

"Be prepared, work hard and hope for a little luck. Recognize that the harder you work and the better prepared you are, the more luck you might have.— Ed Bradley",

"Discipline is choosing between what you want now and what you want most.— Augusta F. Kantra",

"Nothing ever comes to one, that is worth having, except as a result of hard work.— Booker T. Washington",

"All growth depends upon activity. There is no development physically or intellectually without effort, and effort means work.— Calvin Coolidge",

"I never viewed myself as particularly talented. Where I excel is ridiculous, sickening work ethic. You know, while the other guy's sleeping, I'm working.— Will Smith",

"The way to get started is to quit talking and begin doing.— Walt Disney",

"Opportunities are usually disguised as hard work, so most people don't recognize them.— Ann Landers",

"I do not know anyone who has got to the top without hard work. That is the recipe. It will not always get you to the top, but should get you pretty near.— Margaret Thatcher",

"When you live for a strong purpose, then hard work isn't an option. It's a necessity.— Steve Pavlina",

"Always go with the choice that scares you the most, because that's the one that is going to require the most from you.— Caroline Myss",

"Without hard work and discipline, it is difficult to be a top professional.— Jahangir Khan",

"With hard work and dedication, anything is possible.— Timothy Weah",

"Successful people are not gifted they just work hard, then succeed on purpose.— G.K. Nielson",

"Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.— Dwayne Johnson",

"You are never too old to set another goal or to dream a new dream.- C.S. Lewis",

"The only limit to our realization of tomorrow will be our doubts of today.- Franklin D. Roosevelt",

"Don't be afraid to give up the good to go for the great.- John D. Rockefeller",

"The future depends on what you do today.- Mahatma Gandhi",

"In the middle of every difficulty lies opportunity.- Albert Einstein",

"Success is walking from failure to failure with no loss of enthusiasm.- Winston Churchill",

"Your life does not get better by chance. It gets better by change.- Jim Rohn",

"The only way to predict the future is to create it.- Peter Drucker",

"The harder you fall, the higher you bounce.- Unknown",

"The difference between a stumbling block and a stepping stone is how high you raise your foot.- Benny Lewis",

"You don't have to be great to start, but you have to start to be great.- Zig Ziglar",

"Success is not in what you have, but who you are.- Bo Bennett",

"The only limit to our realization of tomorrow will be our doubts of today.- Franklin D. Roosevelt",

"The only limit to your impact is your imagination and commitment.- Tony Robbins",

"Your life is as good as your mindset.- Unknown",

"Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.- Chantal Sutherland",

"Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.- Roy T. Bennett",

"Success is not the absence of failure it's the persistence through failure.- Aisha Tyler",

"The only place where success comes before work is in the dictionary.- Vidal Sassoon",

"The only person you should try to be better than is the person you were yesterday.- Unknown",

"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.- Albert Schweitzer",

"Your time is limited, don't waste it living someone else's life.- Steve Jobs",

"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.- Christian D. Larson",

"Challenges are what make life interesting. Overcoming them is what makes life meaningful.- Joshua J. Marine",
"The best revenge is massive success.- Frank Sinatra",

];

  
  // Function to generate random quotes
  function generateQuote() {
    // Get a random index from the quotes array
    var randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Get the quote at the random index
    var randomQuote = quotes[randomIndex];
    
    // Display the quote on the web page
    var quoteElement = document.getElementById("quote");
    quoteElement.textContent = randomQuote;
  }
  
  // Attach the generateQuote function to the button's click event
  var generateButton = document.getElementById("generateButton");
  generateButton.addEventListener("click", generateQuote);
  