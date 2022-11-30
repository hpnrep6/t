.. _2022_mata30_fall_tut_4:

Tutorial Week 4
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

In this tutorial, we'll be mainly focusing on limits and the different ways to find limits.

Proof of Trigonometric Limit Identities
---------------------------------------

Prove why :math:`\lim_{x \to 0} \frac{\sin(x)}{x} = 1`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: ./images/t4/0.jpg
    :alt: squeeze theorem proof
    :width: 700

Squeeze Theorem
---------------

Q1: What is :math:`\lim_{x \to 0}\; xtan^{-1}(\dfrac{1}{x})`?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ./images/t4/1.jpg
    :width: 700

.. raw:: html

        </div>
    </div>

Q2: Calculate :math:`lim_{x \to \infty} \; \dfrac{3x^2 + \sin(x^3)}{4x^2 - 2}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ./images/t4/2.jpg
    :width: 700

.. raw:: html

        </div>
    </div>

Indeterminant Forms
-------------------

Q3: Do the following lead to interdeterminate forms?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. :math:`\lim_{x \to 3} \frac{x + 2}{x - 3}`


2. :math:`\lim_{x \to 0} \frac{e^{-2x}}{e^{3x}}`


3. :math:`\lim_{x \to \infty} \frac{ln(x)}{x}`


4. :math:`\lim_{x \to \infty} \frac{e^{-2x}}{e^{3x}}`


5. :math:`\lim_{x \to 0} \frac{1}{x^2} + \dfrac{1}{3x^2}`


6. :math:`\lim_{x \to \infty} (\frac{1}{x})^{x}`

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ./images/t4/3.jpg
    :width: 700

.. raw:: html

        </div>
    </div>

Conjugates
----------

Q4: Find the limit :math:`\lim_{x \to 9} \frac{3 - \sqrt{x}}{9x - x^2}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ./images/t4/4.jpg
    :width: 700

.. raw:: html

        </div>
    </div>

Finding Limits
--------------

Q5: Let :math:`f(x) = \begin{cases} x < 1 & x^3 + xk \\ x > 1& \frac{1 + x^2k}{xk}\end{cases}`. For what values of :math:`k` does :math:`\lim_{x \to 1} f(x)` exist?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ./images/t4/5.jpg
    :width: 700

.. raw:: html

        </div>
    </div>

Q6: Compute :math:`\lim_{x \to -1} \frac{x + 1}{|x + 1|}` if it exists.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ./images/t4/6.jpg
    :width: 700

.. raw:: html

        </div>
    </div>

Q7: Compute :math:`\lim_{x \to -1} \frac{7 - |x|}{x^3 + 2}` if it exists.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ./images/t4/7.jpg
    :width: 700

.. raw:: html

        </div>
    </div>

Q8: Compute :math:`\lim_{x \to \infty} \frac{\sqrt{2x^2 + 1}}{3x - 5}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ./images/t4/8.jpg
    :width: 700

.. raw:: html

        </div>
    </div>

Q9: Compute :math:`\lim_{x \to \infty} 3x - \sqrt{9x^2 - 1}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ./images/t4/9.jpg
    :width: 700

.. raw:: html

        </div>
    </div>

Q10: Compute the horizontal asympotote of :math:`f(x) = x - \sqrt{2x^2 + 3x + 2}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ./images/t4/10.jpg
    :width: 700

.. raw:: html

        </div>
    </div>

Trigonometric Limits
--------------------

Q11: Does the limit :math:`\lim_{x \to 0} sin(\frac{1}{x})` exist?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ./images/t4/11.jpg
    :width: 700

.. raw:: html

        </div>
    </div>

Q12: Given an arbitrary constant :math:`k`, what is :math:`lim_{x \to 0}\; \cot(2kx)2kx + k`?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ./images/t4/12.jpg
    :width: 700

.. raw:: html

        </div>
    </div>

Q13: Compute :math:`\lim_{x \to 0} \frac{\sin(e\cos(x))}{x}` if it exists.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ./images/t4/13.jpg
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