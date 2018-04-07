import React, { Component } from 'react';
import Card from './components/Card';
import devsAndDrinksImage from './img/events/devs-and-drinks.png';
import studyHallImage from './img/events/study-hall.png';
import coffeeIcon from './img/icons/coffee.svg';
import beerIcon from './img/icons/beer.svg';
import calendarIcon from './img/icons/calendar.svg';

let devsAndDrinks = {
  image: devsAndDrinksImage,
  link: 'https://calendar.google.com/event?action=TEMPLATE&tmeid=MzZoYW81bHUzNjJxa29jb3N2NHNsbWtib21fMjAxODA0MTFUMDAwMDAwWiAxbzNmcmdzam84anNmZ3JldXE4ZDhucTlqMEBn&tmsrc=1o3frgsjo8jsfgreuq8d8nq9j0%40group.calendar.google.com&scp=ALL',
  title: 'Devs & Drinks',
  time: '7-9:30pm > Every Second Tuesday',
  location: '@ the Pawn & Pint',
  body: "Come socialize with KC area indie game developers for a night of good beer, food, and board games! Making games can be hard work, so take some time to chill and have fun with other game makers!",
};

let studyHall = {
  image: studyHallImage,
  link: 'https://calendar.google.com/event?action=TEMPLATE&tmeid=bGVlcnFydXBtNDZoMDdkNjhncDJzNDZvdWtfMjAxODA0MDFUMTcwMDAwWiAxbzNmcmdzam84anNmZ3JldXE4ZDhucTlqMEBn&tmsrc=1o3frgsjo8jsfgreuq8d8nq9j0%40group.calendar.google.com&scp=ALL',
  title: 'Study Hall',
  time: 'Noon to 5pm > Every Sunday',
  location: '@ the Broadway Roasting Co.',
  body: "Come make games with us at the Broadway Roasting Co! We meet every Sunday in the back to co-work on whatever game projects we currently have. It's a great time to make some progress on your game in a friendly environment with other devs.",
};

class Events extends React.Component {

  render() {
    return (
      <div className="">
        <p className='title fi-title'>Upcoming Events</p>

        <article className='media fi-media'>
          <figure className="media-left">
            <p className="image is-64x64">
              <img src={coffeeIcon} alt="Study Hall" />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p className='subtitle'>{studyHall.title}</p>
              <div class="tags has-addons">
                <span class="tag is-light">{studyHall.time}</span>
                <span class="tag is-dark">{studyHall.location}</span>
              </div>
              <p>{studyHall.body}</p>
              <a className='button fi-button' href={studyHall.link} target='_blank'>Add to Calendar</a>
            </div>
          </div>
        </article>

        <article className='media fi-media'>
          <figure className="media-left">
            <p className="image is-64x64">
              <img src={beerIcon} alt={devsAndDrinks.title} />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p className='subtitle'>{devsAndDrinks.title}</p>
              <div class="tags has-addons">
                <span class="tag is-light">{devsAndDrinks.time}</span>
                <span class="tag is-dark">{devsAndDrinks.location}</span>
              </div>
              <p>{devsAndDrinks.body}</p>
              <a className='button fi-button' href={devsAndDrinks.link} target='_blank'>Add to Calendar</a>
            </div>
          </div>
        </article>

        {/* <Card image={devsAndDrinks.image} link={devsAndDrinks.link} title={devsAndDrinks.title} subtitle={devsAndDrinks.subtitle} /> */}

        {/* <Card image={studyHall.image} link={studyHall.link} title={studyHall.title} subtitle={studyHall.subtitle} /> */}

      </div>
     );
  }
}

export default Events;
