import React from 'react'
import Nav from './nav'
import Footer from './footer'
import QuotesCard from './quotesCard'
function Quotes() {
  let quotesData=[
    {
      "quote":"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.","author":"Adam Scott"},
{
      "quote":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill"},
{
      "quote":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein"},
{
      "quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","author":"Robert Frost"},
{
      "quote":"I attribute my success to this: I never gave or took any excuse.","author":"Florence Nightingale"},
{
      "quote":"at is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, Your fatness is an affront to me, so we have the right to treat you as offensively as you appear. Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.","author":"Anthelme Brillat-Savarin"},
{
      "quote":"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.","author":"Michael Jordan"},
{
      "quote":"The most difficult thing is the decision to act, the rest is merely tenacity.","author":"Amelia Earhart"},
{
      "quote":"Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good.","author":"Calvin Trillin"},
{
      "quote":"Definiteness of purpose is the starting point of all achievement.","author":"W. Clement Stone"},
{
      "quote":"The people who can most successfully lose weight and maintain a healthy life style are foodies. When it comes to healthy eating, people who know how to cook and make ingredients taste good have a distinct advantage over those who can't.","author":"G. K. Chesterton"},
{
      "quote":"Life is what happens to you while you’re busy making other plans.","author":"John Lennon"},
{
      "quote":"We become what we think about.","author":"Earl Nightingale"},
{
      "quote":"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.","author":"Mark Twain"},
{
      "quote":"Life is 10% what happens to me and 90% of how I react to it.","author":"Charles Swindoll"},
{
      "quote":"The most common way people give up their power is by thinking they don’t have any.","author":"Alice Walker"},
{
      "quote":"The mind is everything. What you think you become.","author":"Buddha"},
{
      "quote":"The best time to plant a tree was 20 years ago. The second best time is now.","author":"Chinese Proverb"},
{
      "quote":"An unexamined life is not worth living.","author":"Socrates"},
{
      "quote":"Eighty percent of success is showing up.","author":"Woody Allen"},
{
      "quote":"Your time is limited, so don’t waste it living someone else’s life.","author":"Steve Jobs"},
{
      "quote":"Winning isn’t everything, but wanting to win is.","author":"Vince Lombardi"},
{
      "quote":"I am not a product of my circumstances. I am a product of my decisions.","author":"Stephen Covey"},
{
      "quote":"Every child is an artist.  The problem is how to remain an artist once he grows up.","author":"Pablo Picasso"},
{
      "quote":"You can never cross the ocean until you have the courage to lose sight of the shore.","author":"Christopher Columbus"},
{
      "quote":"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.","author":"Maya Angelou"},
{
      "quote":"Either you run the day, or the day runs you.","author":"Jim Rohn"},
{
      "quote":"Whether you think you can or you think you can’t, you’re right.","author":"Henry Ford"},
  ]
  return (
    <div style={{}}>
       <Nav/>
       {
        quotesData.map((ele, index, array) => {
          return <QuotesCard quote={ele.quote} author={ele.author} />
        })
       }
     
       <Footer/>
    </div>
  )
}

export default Quotes