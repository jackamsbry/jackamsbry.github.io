---
layout: project
title: drawing robot
categories: projects
order: 3
class: project
image: draw-bot.png
alt: Still of Arm
type: showcase
blurb: "This project was the 2nd homework in a graduate robotics class. The assignment was to create a robot that could write our initials. These assignments are purposefully kept open ended to encourage student creativity. For this assignment my group decided to challenge oursleves by attempting to write our initials in 3 dimensions rather than 2."
---
This project was the second group assignment in a graduate robotics class. The goal of the project was to create a robot that could write our initials. My group wanted to challenge ourselves so our goal was to write in three dimensions rather than two. We broke the project up into three smaller parts: extracting x,y data from an SVG, inverse kinematics of the 4dof robot arm, and projecting the SVG points onto a 3D surface. My main contribution was the projection of the SVG points onto a 3D surface. The main challenge here was creating a 3D mesh of an object and to accomplish this I used a LIDAR that sampled points to create a 3D mesh of a surface. The mesh was created using a 3rd degree polynomial where the coefficients were determined by a linear regression. For our inverse kinematics we solved the system analytically using the Denavit-Hartenberg convention. Unfortunetly our inverse kinematics calculations were not correct so we were seeing strange behavior from our arm and we did not have enough time to fix the issue. 