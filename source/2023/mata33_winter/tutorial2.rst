.. _2023_mata33_winter_tut_2:

Tutorial Week 2
===============

.. toctree::
   :hidden:
   

.. raw:: html

      <script>
      window.MathJax = {
      loader: {load: ['[tex]/ams']},
      tex: {packages: {'[+]': ['ams']}}
      };
      </script>

Welcome to your first tutorial! This tutorial will be about linear inequalities and linear programming.

Graphing Linear Inequalities
----------------------------

Q1: Find the solutions for :math:`4x + 5y \lt 20`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q2: Find the solutions for :math:`5x + y \geq 10`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q3: Find the solutions for :math:`\begin{cases} x+y\le6 \\ 3x-y\le9 \\ 2x\ge1 \end{cases}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q4: Find the solutions for :math:`\begin{cases} 2x-y>-2 \\ y\ge1 \\ x+y=3 \end{cases}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

FTLP and Feasable regions
-------------------------

Fundamental theorem of Linear Programming: 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A linear function (of the form :math:`f(x) = ax + by`) 
has a maximum and minimum at one of its corner points if it is defined on a feasible region that is

1. non-empty (contains at least one point)
2. bounded (does not extend to infinity in any direction)
3. standard (e.g. bounded by :math:`\leq` rather than :math:`\lt` so that all edges and corners are in the region)

Q5: Do the following regions satisfy the conditions of the Fundamental theorem of Linear Programming?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

a\)

.. raw:: html

      <iframe src="https://www.desmos.com/calculator/wjzv9k5oe9?embed" width="500" height="500" style="border: 1px solid #ccc; margin-bottom: 2rem;" frameborder=0></iframe>

b\)

.. raw:: html

      <iframe src="https://www.desmos.com/calculator/hdmtt6xuth?embed" width="500" height="500" style="border: 1px solid #ccc; margin-bottom: 2rem;" frameborder=0></iframe>


Finding optimal solutions to Linear Programming problems
--------------------------------------------------------

Q6: Suppose a school lunch program serves two types of food: A and B. Food A requires 4 minutes and $10 to prepare and food B requires 6 minutes and $5 to prepare. The lunch program has a budget of $200 and two hours to prepare the food. How could you maximize the amount of food items prepared?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. raw:: html

      <iframe src="https://www.desmos.com/calculator/81p0uwfoiu?embed" width="500" height="500" style="border: 1px solid #ccc; margin-bottom: 2rem;" frameborder=0></iframe>

.. raw:: html

        </div>
    </div>

Q7: A feasible region is defined by :math:`\begin{cases} 6x+2y\le12 \\ x-y\ge0 \\ x,y \geq 0 \end{cases}`. What values of :math:`x, y` maximize :math:`Z = x+2y`?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. raw:: html

      <iframe src="https://www.desmos.com/calculator/9j55k7zokf?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

.. raw:: html

        </div>
    </div>

Related: https://www.youtube.com/watch?v=hNqLAwyhT-4&list=PLD3fYc0bAjC-Wc4icC2F34Bry3oLpFb8B&index=7