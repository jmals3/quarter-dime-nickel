import React from "react";
import { useParams } from "react-router";
import Topbar from './Topbar'
import './Blog.css'
import { Container } from "react-bootstrap";

function Blog() {
  const { article } = useParams();
  console.log(article);

  switch (article) {
    case undefined:
      return (
        <div className="Blog">
          <Topbar />
          <h1>Blog</h1>
          <p className="linkbox"><a href="/blog/the-tenets-of-qdn">The Tenets of QDN</a></p>
          <p className="linkbox"><a href="/blog/follow-it">The Most Important Rule</a></p>
        </div>
      );
    case "the-tenets-of-qdn":
      return (
        <div className="Blog">
          <Topbar />
          <Container className="articlebox">
            <h1>The Tenets of QDN</h1>
            <p>To the unenlightened, making a decision based on an act of chance may seem pernicious. Flipism has been around for milennia in one form or another, and is practiced by rollers to <a href="(https://www.quora.com/What-does-the-phrase-Life-is-a-gamble-Let-flipism-guide-your-ramble-mean">guide their ramble through life</a>.</p>
            <p>If practiced incorrectly, Flipism can in fact be harmful. For example, if you out of the blue decided to flip a coin to determine whether or not you should light yourself on fire, that would be a very foolish thing to do. Or if you decided to flip a coin every time you encountered even the most minor decision, such as which shoe to put on first, you'd never get anything done.</p>
            <p>To flip (a.k.a roll) in a constructive way, you must follow the <u>tenets of Quarter-Dime-Nickel (QDN)</u>:</p>
            <h2>Tenet 1</h2>
            <p>You must have 8 options to decide between. Flipping a quarter, a dime, and a nickel all at once, will lead to one of eight possible outcomes. Practically speaking, coming up with 8 options will force you to think through your problem at a deeper level. There will be options you come up with that you wouldn't have considered without turning to the game. Superstitiously, it is also believed that 8 is the "chosen" number. Eight is the number of wealth, abundance, and good fortune in Asian cultures; it is the atomic number of Oxygen; and it's the only positive Fibonacci number other than 1 that's a perfect cube. Time and time again, rollers have had the most success with 8, leading them to believe that it's something greater than superstition at play.</p>
            <h2>Tenet 2</h2>
            <p>For the options that you're deciding between, never randomly select them, and don't select options that you wouldn't do. You may throw in a couple of "cheat" options like "watch TV" when you're deciding on what to work on next for your business. But don't put an option to "give up" if it's not something you're truly considering. If it is, the Gods of QDN will let you know if that's your path. Never use QDN to bring direct harm to yourself or others.</p>
            <h2>Tenet 3</h2>
            <p>Only roll when you've hit an impasse on a meaningful decision where the time saved by acting quickly and decisively outweighs the benefit of taking time to thoroughly analyze the potential options. Don't play QDN to make decisions when your intuition is leading you in a particular direction. Trust your gut, but use QDN when you don't.</p>
            <h2>Tenet 4</h2>
            <p>Add order to your options. For example, if you're deciding what to eat for dinner, you could set all options for when the quarter is heads to cook something at home, and all options for when the quarter is tails to go out to eat. If you're deciding on an investment to make, all heads could be the least risky and all tails could be the most risky.</p>
            <h2>Tenet 5</h2>
            <p>Follow the chosen option. It is said that if you give your chosen option a good faith effort, then the gods of QDN will guide you to your destiny. If you fail to follow the chosen option, then you must repent by following up on it or paying homage to the gods in order to regain favor and trust the options chosen for you in the future.</p>
            <p>Quarter-Dime-Nickel can be a very powerful tool to help you master your indecision if you follow these tenets. Play true and achieve your goals.</p>
          </Container>
        </div>
      );
    // case "follow-it":
    //   return (
    //     <div className="Blog">
    //       <Topbar />
    //       <h1>The Most Important Rule</h1>
    //       <p>test test test</p>
    //     </div>
    //   );
    default:
      return (
        <div className="Blog">
          <Topbar />
          <h1>Blog</h1>
          <p>Article not found.</p>
        </div>
      );
  }
  // return (
  //   <div className="Blog">
  //     <Topbar />
  //     <h1>Blog</h1>
  //     <p>Article not found.</p>
  //   </div>
  // ); 
}

export default Blog
