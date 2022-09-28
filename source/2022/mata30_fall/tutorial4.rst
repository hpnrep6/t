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

Intuition in Limits and Limit Identities
----------------------------------------

Relating to the formal definition of a limit
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Prove why :math:`\lim_{x \to 0} \frac{sin(x)}{x} = 1`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: ./images/tutorial4_0.jpg
    :alt: squeeze theorem proof
    :width: 700

Squeeze Theorem
---------------

Q1: What is :math:`\lim_{x \to 0}\; xtan^{-1}(\dfrac{1}{x})`?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q2: Calculate :math:`lim_{x \to 1} \; \dfrac{3x^2 + sin(x^3)}{4x^2 - 2}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Indeterminant Forms
-------------------

Q3: Do the following lead to interdeterminate forms?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. :math:`\lim_{x \to 3} \frac{x + 2}{x - 3}`


2. :math:`\lim_{x \to 0} \frac{e^{-2x}}{e^{3x}}`


3. :math:`\lim_{x \to \infty} \frac{ln(x)}{x}`


4. :math:`\lim_{x \to \infty} \frac{e^{-2x}}{e^{3x}}`


5. :math:`\lim_{x \to 0} \frac{1}{x^3} + \dfrac{1}{3x^2}`


6. :math:`\lim_{x \to \infty} (\frac{1}{x})^{x}`

Conjugates
----------

Q4: Find the limit :math:`\lim_{x \to 9} \frac{3 - \sqrt{x}}{9x - x^2}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Finding Limits
--------------

Q5: Let :math:`f(x) = \begin{cases} 1 & x^3 + xk \\2 & \frac{1 + x^2k}{xk}\end{cases}`. For what values of :math:`k` does :math:`\lim_{x \to 0} f(x)` exist?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q6: Compute :math:`\lim_{x \to -1} \frac{x + 1}{|x + 1|}` if it exists.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q7: Compute :math:`\lim_{x \to -1} \frac{7 - |x|}{x^3 + 2}` if it exists.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q8: Compute :math:`\lim{x \to \infty} \frac{\sqrt{2x^2 + 1}}{3x - 5}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q9: Compute :math:`\lim{x \ to \infty} 3x - \sqrt{9x^2 - 1}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q10: Compute the horizontal asympotote of :math:`f(x) = x - \sqrt{x^2 + 3x + 2}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Trigonometric Limits
--------------------

Q11: Does the limit :math:`\lim_{x \to 0} sin(\frac{1}{x})` exist?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q12: Given an arbitrary constant :math:`k`, what is :math:`lim_{x \to 0} cos(3kx - 1)cot(2kx)`?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q13: Compute :math:`\lim_{x \to 0} \frac{sin(ecos(x))}{x}` if it exists.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
