.. _2022_mata30_fall_tut_5:

Tutorial Week 5
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
   
This week, let's review continuity, intermediate value theorem, and the limit definition of a derivative.

An Interesting Limit Question
-----------------------------

Let :math:`f(x) = \begin{cases} x - 1 & \text{if } x \in \mathbb{Q} \\ 0 & \text{if } x \notin \mathbb{Q} \end{cases}`.

Does :math:`\lim_{x \to 1} f(x)` exist? If it does, what is its value?

Continuity
----------

Q1: Classify the discontinuities in the following image:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q2: Let :math:`f(x) = \begin{cases} 3x + e^x & \text{if } x \leq 1 \\ x^4 + k & \text{if } x \gt 1\end{cases}`. For what value(s) of :math:`k` makes the :math:`f(x)` continuous?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q3: Let :math:`f(x) = \begin{cases} log(-x) - 1& \text{if } x \leq -1 \\ x & \text{if } -1 \lt x \lt 1 \\ (x - 1)^2 & \text{if } x \gt 1 \end{cases}`. Where is :math:`f(x)` continuous and where is it differentiable?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q4: Let :math:`f(x) = \begin{cases} \dfrac{(1 - cos(x))(x + 2)}{x^3 + 3x + 5} & \text{if } x \le 0 \\ sin(x) & \text{if } x \gt 0 \end{cases}`. Where is :math:`f(x)` continuous?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q5: Let :math:`f(x) = \begin{cases} 4 & \text{if } x \le -1 \\ ax + b & \text{if } -1 \lt x \lt 1 \\ x + 6 & \text{if } x \gt 1 \end{cases}`. What values of :math:`a` and :math:`b` make :math:`f(x)` only have removable discontinuities?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Finding Derivatives using the Limit Definition of a Derivative
--------------------------------------------------------------

Q6: Use the limit definition of a derivative to compute :math:`f^{'}(x)` if :math:`f(x) = x^2 - 5x`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q7: Use the limit definition of a derivative to compute :math:`f^{'}(x)` if :math:`f(x) = e^x + e`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q8: Use the limit definition of a derivative to compute :math:`f^{'}(0)` if :math:`f(x) = \dfrac{x^3 - 4x}{x + 3}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q9: Use the limit definition of a derivative to compute :math:`f^{'}(x)` if :math:`f(x) = sin(x)`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Differentiability using the Limit Definition of a Derivative
------------------------------------------------------------

Q10: Show that :math:`f(x) = x^{\tiny \dfrac{2}{3}}` is not differentiable at :math:`x = 0` using the limit definition of a derivative.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Intermediate Value Theorem
--------------------------

Q11: Show that :math:`f(x) = e^{3x} + 4x^3 + 3` has a root in :math:`x \in [-1, 2]`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q12: Show that the line :math:`y = 2` and the function :math:`y = 3(x - 4)(x + 2)(x + 4)` intercept each other on :math:`x \in [1, 5]`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~









