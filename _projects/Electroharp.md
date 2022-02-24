---
layout: project
title: electroharp
categories: projects
order: 2
image: electroharp.jpg
alt: A Photo of the Electroharp
class: project
type: showcase
blurb: "This project was a senior capstone design project. The instrument works by using midi data from the keyboard to control motor speed to create a novel instrument tone. This project was completed over the course of a semester with everything except the keyboard being designed and built by a team of 3 students."
---
This was my senior design project. The Electroharp is an electromechanical musical instrument combining aspects of more traditional instruments like the piano, guitar, and harp to create a unique timbre. MIDI data is sent to main PCB where a microcontroller which reads and interprets the signal. The microcontroller sends a PWM signal out to another set of PCBs where the PWM signal activates MOSFETs to control the speed of several motors. The motors each pluck an associated string with a pick. 
<br><br>
## Mechanical Design
<br>
The design of the instrument is modeled after the mechanical design of the piano. There are two main parts to the instrument: the frame and the case. 
<br><br>
a. 	The frame is closely modeled after the cast iron frame of a piano that is designed to hold the strings at tension (See Table 1 in Appendix).  Instead of cast iron, the Imberchord frame is built from 80/20 aluminum extrusions. The design (Figure 1 in the appendix) has a pentagonal shape which allows the strings with a smaller diameter to be at a lower tension. On one side of the frame are holes that the strings are threaded through. The other side of the frame has the pinblock where the tuning pins are held. The pinblock is made from ¾ inch plywood planks glued together. The holes that the tuning pins go into are smaller than the diameter of the pins themselves, so the pins stay in the block from friction. In the center of the frame are several hori-zontal crossbars to distribute the compressive load and neatly divide the instrument into five groups of five strings. On the underside of the frame is a vertical crossbar that holds the mounts for the DC motors and the MOSFET control PCBs. 
<br><br>
b.	The case of the instrument was originally designed to act as an acoustic radiator, but after building and experimentation, the design changed to simplify and strengthen the structure of the case.
<br><br>
## Electrical Design
<br>
There are two printed circuit board designs in the Imberchord. The first board has a voltage regulation IC, a MIDI input circuit and a logic level converter. The second board is the MOSFET control board. 
a. 	The main control circuit takes MIDI data from a 25-key MIDI controller as one input and 9V as the other input. The MIDI controller and the microcontroller are electrically isolated to pre-vent voltage surges from damaging the microcontroller. The 9V input is stepped down using a linear voltage regulator to 5V because the microcontroller and MIDI controller take 5V as inputs. Circuit Schematic and PCB design are shown in detail in the appendix.  
b.	The MOSFET circuit uses a set of five MOSFETs as switches to control DC motor speed. A 10 kOhm resistor is used as a pull-down resistor to have the default logic state of the MOSFET be low. Circuit Schematic and PCB design are shown in detail in the appendix. 
<br><br>
## Software
<br>
The software for the Imberchord is surprisingly simple, yet effective. The code, shown in the Ap-pendix, implements an open source Arduino library to interpret the MIDI data which is sent over serial communication. The interpreted data gives the specific note played and the force at which the note is played.  The speed of the motor is calculated using the force data where the speed of the motors is directly proportional to the force applied. The outputs are sent to different PWM output channels on the microcontroller using a switch statement. 
<br><br>
Pictured below is the completed instrument. The Electroharp sounds unlike any other instrument we have heard before. Peers have said that it sounds like “a musical chainsaw” and “if fairy lights had a sound”. In the future, more improvements can be made to the instrument to increase playability and musicial expression capabilities. Some damping system should also be added to dampen the strings when they are not being played similar to the piano damping system. 
