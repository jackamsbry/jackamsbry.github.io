---
layout: project
title: balancing robot
categories: projects
order: 5
class: project
image: balance.jpg
alt: Still of the balancing robot
video: balance.mp4
type: showcase
blurb: "This project was an assignment in a project-based robotics class. The assignment was to create a self balancing robot. The problem statement was purposefully left open ended so the groups had freedom to be creative with their designs."
---
For this project, we were tasked with creating a self balancing robot that used some sort of sensor fusion. My group decided on a simple cart pendulum system for our balancing robot. We wanted to challenge and deepen our controls knowledge. Most other groups used PID or PD control to balance their robots, which would have worked well for this project given its simplicity, but I decided that I wanted a controls challenge so I taught myself LQR control. I started by using MATLAB to model the system linearizing about the point of stability. I then used MATLAB's built in controls functions to calculate the gain. Unfortunately when applying this to the real system, the response time of the cart-pendulum was too slow for stable control. A way to fix this in a future iteration would be to gear up the motor to give it more speed as the torques required for moving the cart were farily low. Below is a video of the system in action. 