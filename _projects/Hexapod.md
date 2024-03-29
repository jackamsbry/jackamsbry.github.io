---
layout: project
title: hexapod
categories: projects
order: 1
image: hexapod.jpg
alt: A photo of the unfinished version 1 hexapod.
class: project
type: showcase
--- 
This project began in December 2019 after I had finished my senior capstone project. I wanted to get more hands on engineering experience and teach myself new software skills. The idea for a hexapod came after seeing similar robots created by students the previous semester. I wanted to improve my knowledge of Python, CAD (specifically SolidWorks), Linux, and general robotics.
<br><br>
I started by planning out the project steps. I thought I would first prototype the hexapod leg and use a controller to control the motion on a 2D plane. Next I would design, print, and build the full hexapod. Then I would begin coding the logic to control the 18 servo motors to get the robot moving. I wanted to complete all of this before the end of the semester, which was quite ambitious.
<br><br>
I began by learning how to set up and use a headless Raspberry Pi. I had never used a Raspberry Pi or similar single board computer before and I wanted to challenge myself by using it without a monitor to farmiliarize myself with the Linux command line and SSH. I found some Python code for communicating with a Steam Controller (The only controller I had available) on the RPi operating system that I used to control the motion of the hexapod test leg. These two steps proved more challenging than I anticipated, and I spent much of the first month of this project adapting the Python code for my specific use. Once I returned to campus, I immediately began to CAD the hexapod. This took me about two weeks, working only when I had free time. Now the most boring and time-consuming step: 3D printing everything. I wanted my hexapod to be big, which in retrospect was not the best choice as I had to wait several weeks for all the parts to be printed. Once all the parts were finally printed, I began assembly. While I was assembling the robot, I also began to work on the code. Through research and talking with professors and fellow students, I discovered inverse kinematics was necessary for this project. After many hours of research on computation of inverse kinematics using numerical methods, I decided to take an analytical approach which ended up being quite simple. 
<br><br>
With the robot built and the inverse kinematics solved, finally it was time to sequence the movement of the legs. The motion of each leg was hard-coded where the tip of each leg would follow a Bezier curve path in order to prevent slipping. The legs would then be sequenced to produce a specific gait. There are three main gaits used for hexapod motion, sometimes seen as the tripod, ripple, and wave gaits. I decided to focus on the most common gait, the tripod gait, but also to build my code in such a way that it would easily adapt to other gaits. Unfortunately, at this point in the project, all students were sent home due to COVID-19 and I was forced to finish the project at home with significant lack of tools. This distruption made it much more difficult to work on the project, but I was determined to get the robot walking with at least the tripod gait, and eventually, after much trial and error, the robot was on the move! 
<br><br>
<p align="center">
<img src="/assets/gif/hexapod.gif">
</p>
<br><br>
There were two primary issues with this iteration of the robot: the Python code was not running fast enough to give good control of the robot, and the complexity of the electronics. To address these issues, I plan on using a Teensy microcontroller on version 2 and a custom PCB and different motors (either better servo motors or dc motors) to consolidate the electronics. I look forward to reviving the project at some point and I have already designed version 2 of the robot with a full enclosure and two robot arms. With no current access to 3D printers and other competing priorities, this project is on hold for now.