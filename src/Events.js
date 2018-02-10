import React, { Component } from 'react';
import Card from './Card';
import devsAndDrinksImage from './img/events/devs-and-drinks.png';
import studyHallImage from './img/events/study-hall.png';

let devsAndDrinks = {
  image: devsAndDrinksImage,
  link: 'https://www.facebook.com/events/1129070950563636/',
  title: 'Devs & Drinks',
  subtitle: '> Every Second Tuesday @ the Pawn & Pint',
  body: "Come socialize with KC area indie game developers for a night of good beer, food, and board games! Making games can be hard work, so take some time to chill and have fun with other game makers!",
};

let studyHall = {
  image: studyHallImage,
  link: 'https://www.facebook.com/events/124310738297910/',
  title: 'Study Hall',
  subtitle: '> Every Sunday @ the Broadway Roasting Co.',
  body: "Come make games with us at the Broadway Roasting Co! We meet every Sunday in the back to co-work on whatever game projects we currently have. It's a great time to make some progress on your game in a friendly environment with other devs.",
};

class Events extends React.Component {

  render() {
    return (
      <div className="">
        <p className='title fi-title'>Upcoming Events</p>

        <article className='media fi-media'>
          {/* <figure className="media-left">
            <p className="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png"/>
            </p>
          </figure> */}
          <div className="media-content">
            <div className="content">
              <p className='subtitle'><a className='link has-text-weight-bold' href={studyHall.link}>{studyHall.title}</a></p>
              <p><a className='link' href={studyHall.link}>{studyHall.subtitle}</a></p>
              <p>{studyHall.body}</p>
            </div>
          </div>
        </article>

        <article className='media fi-media'>
          {/* <figure className="media-left">
            <p className="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png"/>
            </p>
          </figure> */}
          <div className="media-content">
            <div className="content">
              <p className='subtitle'><a className='link has-text-weight-bold' href={devsAndDrinks.link}>{devsAndDrinks.title}</a></p>
              <p><a className='link' href={devsAndDrinks.link}>{devsAndDrinks.subtitle}</a></p>
              <p>{devsAndDrinks.body}</p>
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
