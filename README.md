# Pacmen Factory
## About
This project consists of a 'pacman factory' where the user may populate the browser window with pacmen objects set at a pseudorandom velocities which then bounce between the edges of the page window. 
The majority of the code for this project was provided by Dr. John Williams for this student's use pursuant to the completion of MIT xPRO's Professional Certificate in Coding: Fullstack Development with MERN course. All errors are my own.

## How to Run
This project can be run in a chromium browser - download and extract this repo from the zip file and open the .html file to view. Dependencies are limited to the pacman.js script and pacman png image files.

## Current Bugs and Errors:
* Pacmen do not change 'direction' independently; the direction variable currently applies to all the objects and the pacmens' orientation changes globally.
* Repeated calls to update() via the 'start game' button result in increased speed of every pacman currently in the document until failure.

## Roadmap for Future Improvements:
* Inclusion of a counter in the DOM which will display the number of pacmen created.
* Inclusion of pause and reset features.

## LICENSE
MIT License

Copyright (c) 2020 John Williams

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
