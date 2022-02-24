---
layout: project
title: lego sorter
categories: projects
order: 5
class: project
image: lego-sorter.png
alt: Image of the conveyor belt and hopper system
video: lego-sorter.mp4
---
For this project, my team built a robot that sorted red Lego bricks from other colors. The main features of are robot were a shaking hopper that loaded individual bricks onto a conveyor belt, a Raspberry Pi with a camera set up for image processing, and two cups into which the sorted bricks would fall. The algorithm we used to sort the bricks was fairly simple. First we took a photo of a brick on the conveyor belt which was then converted to an array of RGB values. We applied a mask to the array to find where the red values were higher than a threshold that we determined experimentally. Finally, we averaged the array after applying the mask and if the average was above a certain threshold, the brick was red and if the average was below the threshold the brick was not red. The decision was sent over serial to the EV3 where a motor rotated the cups so the brick would fall into the correct bin. We also implemented a queue for the bricks, so if the bricks were spaced close together, the cups could still move fast enough so that the bricks were sorted correctly. Initially, we built a convolutional neural net that could predict the color of a brick with 97% accuracy. When we began the process of transferring the neural net to the Raspberry Pi we realized that the neural net would not work properly on the RPi because it was compiled on a machine with a different architecture. Once we switched to conventional image processing, we saw similar results to our neural net. Below is a video of our robot sorting assorted Lego bricks into two bins, red and not red. 