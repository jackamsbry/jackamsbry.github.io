---
layout: project
title: brachiation robot
categories: projects
order: 5
class: project
image: gibbon.png
alt: Still of the brachiation robot
video: gibbon.mp4
type: showcase
blurb: "This project was the final project a graduate level robotics class. The assignment was to create a robot that could brachiate through a course of monkey bars. "
---
This robot was built as the final project for a project-based, graduate level robotics class. The assignment was to create a robot that could move through a course of "monkey bars". The robots were supposed to move through the course autonomously and through tele-operation. My group primarily used ROS as the backbone of our code and used different ROS nodes to control different aspects of the robot, such as the remote control or the communication with the Intel RealSense camera we used. As I had more limited computer science experience compared to other members of the team, I was responsible for the mechanical design of the robot, specifically the grippers. Most groups used a simple claw to grab each rung, but I wanted to challenge my mechanical design skills and create a compliant gripper that could grip different sized rungs on the bars. I decided on an under-actuated linkage system for gripping with each gripper controlled by a single continuous servo motor. Our prototype gripper was not strong enough to carry the weight of our robot, but after some recalculation and new placement of the joints and tendons on the linkages, the gripper was more than strong enough to hold our robot. The next issue we faced was errors in the control of the continuous servos, which caused the fishing line we used as our tendons to snap. Unfortunately, due to this design flaw, our robot could not navigate the course autonomously or through tele-operation. If we could redesign again, I would include either a limit switch to limit the motion of the servo through software or a mechanical limit on the force exerted on the fishing line, like a spring. Below is a video of the gripper. 