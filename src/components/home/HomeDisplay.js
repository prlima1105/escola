import React, { Component } from 'react';
import './Home.css';
import sr from './scrollReveal.js';
import {NosotrosDisplay} from './NosotrosDisplay';
import {SlideDisplay} from './SlideDisplay';
import {RelevantesDisplay} from './RelevantesDisplay';
import {NosDisplay} from './NosDisplay';
import {SendFreeDisplay} from './SendFreeDisplay';
import {DestacadosDisplay} from './DestacadosDisplay';

class HomeDisplay extends Component {
  render() {
    return (
      <div>
        <SlideDisplay />
        <NosDisplay />
        <NosotrosDisplay />
        <SendFreeDisplay/>
        <DestacadosDisplay/>
      </div>
    );
  }
}

export  default HomeDisplay;
