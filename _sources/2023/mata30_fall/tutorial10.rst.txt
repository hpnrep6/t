Tutorial Week 10
================

.. toctree::
   :hidden:
   

.. raw:: html

    <script>
    window.MathJax = {
    loader: {load: ['[tex]/ams']},
    tex: {packages: {'[+]': ['ams']}}
    };
    </script>

Initial Value Problems
----------------------

Initial value problems are modelled around the differential equation :math:`\frac{dy}{dt} = ky`.

If we're given that equation, and we know :math:`y(0) = y_0`, then the solution to the differential equation is :math:`y(t) = y_0e^{kt}`.

You can think of it as :math:`\frac{dy}{dt} = ky \Rightarrow y(t) = y(0)e^{kt} = y_0e^{kt}`.

Q1: A cell culture starts off with 100 cells and has grown to 300 cells after an hour. Find a formula for the population after t hours (assuming the growth rate is proportional to the size).
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

Since the growth is proportional to its size, we can model this using the differential equation :math:`\frac{dy}{dt} = ky`, giving us :math:`y(t) = y_0e^{kt}`.

We know that :math:`y(0) = 100`, so now we have the equation :math:`y(t) = 100e^{kt}`.

We're given that the population after an hour is 300, meaning :math:`y(1) = 300`. From the model, we also know that :math:`y(1) = 100e^{k1} = 100e^k`

Now, solving for k using :math:`300 = 100e^k` gives us:

.. image:: ../../2022/mata30_fall/images/t10/2.jpeg
   :width: 700

.. raw:: html

        </div>
    </div>

Q2: Let :math:`P_1` and :math:`P_2` denote the population of two types of bacteria. If :math:`P_1(0) = 100`, :math:`P_2(0) = 50`, and :math:`\frac{dP_1}{dt} = -0.3P_1` and :math:`\frac{dP_2}{dt} = 0.5P_2`, when are their populations equal? 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ../../2022/mata30_fall/images/t10/3.jpeg
   :width: 700

.. raw:: html

        </div>
    </div>

Newton's Law of Cooling
-----------------------

For Newton's Law of Cooling, we have the formula 
:math:`T(t) = T_e + (T_0 - T_e)e^{kt}`, where

- :math:`T(t)` is the temperature of the object at time t, 

- :math:`T_0` is the initial temperature

- :math:`T_e` is the environment temperature


Q3: A 60°C object is placed in a 20°C room. After 10 minutes, the temperature of the object is 40°C. What is the temperature of the object after 20 minutes?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ../../2022/mata30_fall/images/t10/5.jpeg
   :width: 700
   
.. raw:: html

        </div>
    </div>


Optimization
------------

One method of solving optimization problems is to use the Test for Absolute Extrema, which generally states that:

Given a function :math:`f(x)` that is continuous on a closed interval, you can find the absolute maximum and minimum by looking at its critical points and endpoints.

Q4: Find the dimensions of the largest rectangle that fits in between :math:`x^2` and :math:`y=3`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ../../2022/mata30_fall/images/t10/7.jpeg
   :width: 700

.. raw:: html

        </div>
    </div>

.. raw:: html

  <script>
    document.querySelectorAll('a.reference.external').forEach(function(link) {
      link.target = '_blank';
    });
  </script>