import React, { Component } from 'react';

class Resources extends React.Component {

  render() {
    return (
      <div className="content">
        <p className='title fi-title'>Game Making Resources</p>
        <p className='subtitle'>Game Engines</p>
          <ul>
            <li><a href='https://unity3d.com/'>Unity</a> – Popular 2D and 3D game engine.</li>
            <li><a href='http://www.puzzlescript.net/'>Puzzle Script</a> – Open-source HTML5 puzzle game engine.</li>
            <li><a href='http://www.yoyogames.com/gamemaker'>Game Maker</a> – Variable amounts of coding required, Game Maker is a good entry-level game engine. The original Spelunky was made on this.</li>
            <li><a href='https://scratch.mit.edu/'>Scratch</a> – Small, Simple, and Fun. Very friendly for beginners. HatLight was made using scratch.</li>
            <li><a href='https://www.scirra.com/'>Construct</a> – Similar to Game Maker, it’s a good way to start game development.</li>
            <li><a href='http://superpowers-html5.com/index.en.html'>Superpowers</a> – 2D and 3D open source game engine.</li>
            <li><a href='https://twinery.org/'>Twine</a> – For making interactive, nonlinear stories!</li>
            <li><a href='https://github.com/lean/phaser-es6-webpack'>Phaser ES6</a> - A bootstrap project for create games with <a href='https://phaser.io/'>Phaser.io</a> + ES6 + Webpack.</li>
          </ul>
        <p className='subtitle'>Art Tools</p>
          <ul>
            <li><a href='https://www.gimp.org/'>Gimp</a> – A free open source art program that’s similar to Photoshop.</li>
            <li><a href='https://www.getpaint.net/'>Paint.net</a> – Similar to Gimp, Windows only.</li>
            <li><a href='https://www.blender.org/'>Blender</a> – Free and open source, Blender is a 3D modeling program.</li>
            <li><a href='https://github.com/lenagroeger/gifs/blob/master/README.md'>Let’s Make Some Gifs!</a> – Tutorials on various GIF making procedures.</li>
          </ul>
        <p className='subtitle'>Music Tools</p>
          <ul>
            <li><a href='http://www.famitracker.com/'>FamiTracker</a> – A tracker that restricts you to the limitations of the NES hardware. Windows only.</li>
            <li><a href='http://milkytracker.titandemo.org/'>MilkyTracker</a> – MilkyTracker is an open source, multi-platform music application for creating .MOD and .XM module files.</li>
            <li><a href='http://www.bfxr.net/'>BFXR</a> – A small sound effect generator.</li>
            <li><a href='http://www.drpetter.se/project_sfxr.html'>SFXR</a> – A small sound effect generator. Originally made for Ludum Dare 10.</li>
            <li><a href='http://kometbomb.net/prototracker/'>Prototracker</a> - An online music tracking tool.</li>
            <li><a href='https://hundredrabbits.itch.io/marabu'>Marabu</a> - A minimal and free music tracker.</li>
          </ul>
      </div>
     );
  }
}

export default Resources;
