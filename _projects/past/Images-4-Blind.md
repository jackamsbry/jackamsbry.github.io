---
layout: past-project
title: Images for the Blind
categories: projects past
order: 5
image: images-4-blind.jpg
alt: Image of the Joystick and Sensor robots
---
For this project, our team designed two robots, a scanner and a joystick, to allow a blind person to read characters on a flat surface. We used UART to communicate between the two robots with the joystick sending move commands and the scanner sending haptic feedback. 

The joystick consisted of two motors with encoders. The angles of the motors were read and sent to the scanner robot every time step. We also used a medium motor to create a rumble haptic feedback. Attached to the motor was an asymmetric weight which would shake the controller as it spun. 

The scanner consisted of two motors to drive the robot forward and a horizontal motor to move a light sensor right and left. The light sensor read the reflection underneath the robot and if the reflection was under a certain threshhold, haptic feedback would happen in the controller.