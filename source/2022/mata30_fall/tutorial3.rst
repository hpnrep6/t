.. _2022_mata30_fall_tut_3:

Tutorial Week 3
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

This week's tutorial will be based on the content from the second week of lectures.

Be sure to be familiar with the material from Week 1 (https://q.utoronto.ca/courses/267509/pages/week-1-sept-5-9?module_item_id=3863942).

Inverse Trig
------------

Q1: What is the value of :math:`sin^{-1}(1)`?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

This means that you need to find the value of :math:`\theta` that gives you :math:`sin(\theta) = 1`
and :math:`-\dfrac{\pi}{2} \le \theta \le \dfrac{\pi}{2}`.

:math:`\theta = \dfrac{\pi}{2}` works in this case. (Be familiar with the values of the trig functions
on a unit circle)
 
.. raw:: html

        </div>
    </div>

Q2: What is the value of :math:`cos^{-1}(cos(\dfrac{56\pi}{5}))`?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

This question requires knowing 3 properties:

1) :math:`cos(x) = cos(x + 2\pi)`

and

2) :math:`cos^{-1}(cos(x)) = x` if :math:`0 \le x \lt \pi`

and

3) :math:`cos(x) = cos(-x)`

First, use property 1 to get :math:`\dfrac{56\pi}{5}` within :math:`[-\pi, \pi]`.

If the value is negative, use property 3 to make it positive.

Then use cancellation laws (property 2).

.. raw:: html

        </div>
    </div>

Q3: Rewrite :math:`tan(cos^{-1}(3x))` without trigonometric functions.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

Relate to SOHCAHTOA, so :math:`cos^{-1}(3x)` means the triangle with :math:`\dfrac{A}{H} = 3x`.

One such triangle would have side length 3x and hypotenuse length 1,

Use pythagorean theorem to find the length of the remaining side, then use SOHCAHTOA to find the tangent
of that angle.


.. raw:: html

        </div>
    </div>

Inverse Trig Functions
----------------------

Q4: Find the domain of the function :math:`f(x) = cos^{-1}(x^3 + 2)`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

:math:`cos^{-1}(x)` has domain :math:`[-1, 1]`

so let

:math:`-1 \le x^3 + 2 \le 1`

:math:`-3 \le x^3 \le -1`

:math:`\sqrt[3]{-3} \le x \le -1`

which is the domain.

.. raw:: html

        </div>
    </div>

Q5: Find the inverse of the function :math:`f(x) = cos^{-1}(x^3 + 2)`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. math::
   \begin{aligned}
   x &= cos^{-1}(y^3 + 2 )\\
   cos(x) &= cos(cos^{-1}(y^3 + 2)) \\
   cos(x) &= (y^3 + 2) \\
   \sqrt[3]{cos(x) - 2} &= y \\
   \end{aligned}

with a domain restriction of :math:`[0, \pi]`

.. raw:: html

        </div>
    </div>

Q6: For what values of :math:`x` satisfy :math:`tan^2(x) = tan(x)` if :math:`-\dfrac{\pi}{2} \lt x \lt \dfrac{\pi}{2}`?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. math::
   \begin{aligned}
   tan^2(x) &= tan(x)\\
   tan^2(x) - tan(x) &= 0 \\
   tan(x)(1  - tan(x)) &= 0 \\
   \end{aligned}

Use inverse trig to find the values of tan(x).

.. raw:: html

        </div>
    </div>

Q7: What is the domain of :math:`tan^{-1}(e^x)`?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

Domain of :math:`tan^{-1}(x)` and :math:`e^x` is :math:`(-\infty, \infty)`, so domain is 
:math:`(-\infty, \infty)`.

.. raw:: html

        </div>
    </div>

Inverse Trig Cancellation Rules
-------------------------------

Q8: For what values of :math:`x` is :math:`sin^{-1}(cos(x)) = x + \dfrac{\pi}{2}`?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

Recall the property :math:`sin^{-1}(sin(x)) = x` if :math:`x \in [-\dfrac{\pi}{2}, \dfrac{\pi}{2}]`.

Also note that :math:`cos(x) = sin(x + \dfrac{\pi}{2})`.

Substitute in the above and use cancellation laws.

.. raw:: html

        </div>
    </div>

Graphs of Limits
----------------

Q9: Find the following values of :math:`f(x)`:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

[Placeholder for graph to be drawn during tutorial]

Q10: Draw :math:`f(x)` given the following requirements:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. :math:`\lim_{x \to 2} f(x) = 3`

2. :math:`\lim_{x \to 3^+} f(x) = 4`

3. :math:`\lim_{x \to 3^-} f(x) = 6`
   
4. :math:`\lim_{x \to 0} f(x) = 0`
   
5. :math:`0` is not in the domain of :math:`f(x)`
   
6. :math:`\lim_{x \to \infty} f(x) = -\infty`
    
7.  :math:`\lim_{x \to -\infty} f(x) = 0`

Calculating Limits
------------------

Q11: Find :math:`\lim_{x \to 2} \dfrac{x^2 - x - 2}{x - 2}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

Simplify to remove the :math:`x - 2` term from both the numerator and denominator, then 
directly subtitute.

.. raw:: html

        </div>
    </div>

Q12: Find the limit if it exists: :math:`\lim_{x \to 3} \dfrac{\sqrt{x + 13} - 4}{x - 3}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

Multiply by conjugate, simplify, then directly subtitute.

.. math::
   \begin{aligned}
   \lim_{x \to 3} \frac{\sqrt{x+13}-4}{x-3} &= \lim_{x \to 3} \frac{\left(\sqrt{x+13}-4\right)\left(\sqrt{x+13}+4\right)}{\left(x-3\right)\left(\sqrt{x+13}+4\right)}\\
   &= \lim_{x \to 3} \frac{\left(\sqrt{x+13}\right)^{2}-16}{\left(x-3\right)\left(\sqrt{x+13}+4\right)} \\
   &= \lim_{x \to 3} \frac{x+13-16}{\left(x-3\right)\left(\sqrt{x+13}+4\right)} \\
   &= \lim_{x \to 3} \frac{x-3}{\left(x-3\right)\left(\sqrt{x+13}+4\right)} \\
   &= \lim_{x \to 3} \frac{1}{\left(\sqrt{x+13}+4\right)} \\
   &= \frac{1}{\left(\sqrt{3+13}+4\right)} \\
   &= \frac{1}{8}
   \end{aligned}

.. raw:: html

        </div>
    </div>

.. raw:: html

  <script>
    document.querySelectorAll('a.reference.external').forEach(function(link) {
      link.target = '_blank';
    });
  </script>