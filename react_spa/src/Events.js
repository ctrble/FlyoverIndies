import React, { Component } from 'react';
import Card from './Card';
import devsAndDrinks from './img/events/devs-and-drinks.png';
import studyHall from './img/events/study-hall.png';

class Events extends React.Component {

  render() {
    return (
      <div className="">
        <p className='title fi-title'>Upcoming Events</p>
        <Card image={devsAndDrinks} title={'Devs & Drinks'} subtitle={'Second Tuesday Every Month'} text={<p>Come socialize with KC area indie game developers for a night of good beer, food, and board games! Making games can be hard work, so take some time to chill and have fun with other game makers! <br /> The Pawn & Pint in the River Market has unlimited play board games for $5. Flyover Indies meets there after 7pm every second Tuesday for this relaxed meet up of game designers, programmers, artists, musicians, and so forth. This is a public event, so even if you haven't joined the Flyover Indies we'd still love to see ya!</p>} />
        <Card image={studyHall} title={'Study Hall'} subtitle={'Every Sunday'} text={<p>Come make games with us at the Broadway Roasting Co! We meet every Sunday in the back to co-work on whatever game projects we currently have. It's a great time to make some progress on your game in a friendly environment with other devs.</p>} />
      </div>
     );
  }
}

export default Events;
