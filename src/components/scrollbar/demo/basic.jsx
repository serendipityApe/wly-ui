import React from 'react';
import { Scrollbar } from 'wly-ui';
import './basic.css'
export default () => (
  <Scrollbar>
    <div className="test">
      <p>
        Custom scrollbars are getting more popular nowadays, and I’m very keen to dig into them.
        There are different reasons why to customize a scrollbar. For example, the default scrollbar
        can make an app UI look inconsistent across multiple operating systems, and here we can get
        the benefit of having a unified style.
      </p>

      <p>
        I have always been interested in learning about how to customize a scrollbar in CSS but
        didn’t get the chance to do so. In this article, I will take the opportunity and learn about
        them and document this journey.
      </p>
      <p>
        Having a custom scrollbar used to be webkit only so Firefox and IE were out of the game. We
        have a new syntax that works only in Firefox and will make things easier for us when it’s
        fully supported. I will go through the old Webkit syntax, and then the new one.
      </p>
      <p>
        The first thing that I want to explain is the components or the parts of a scrollbar. A
        scrollbar contains the track and the thumb. Here is a visual that shows them: The track is
        the base of the scrollbar, where the thumb is what the user drag to scroll within a page or
        a section.
      </p>
      <p>
        There is one important thing to keep in mind that a scrollbar can work horizontally or
        vertically, depending on the design. Also, that can change while working on a multilingual
        website that works in both left-to-right (LTR) and right-to-left (RTL) directions
      </p>
    </div>
  </Scrollbar>
);
