Tutorial Week 9
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

L'Hopital's Rule
----------------

L'Hopital's rule provides an easy to solve limits that otherwise would have been impossible/very difficult to compute using conventional algebra.

To use L'Hoptial's rule, the limit must be in an indeterminate form. These are:

- :math:`\frac{0}{0}`

- :math:`\frac{\infty}{\infty}`

- :math:`\infty - \infty`

- :math:`0^0`

- :math:`1^\infty`

- :math:`\infty^0`

- :math:`0 \cdot \infty`

Q1: Find :math:`\lim_{x \to 0} \frac{x + sin(x)}{x^2 + cos(x)sin(x)}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ../../2022/mata30_fall/images/t9/1.jpg
   :width: 700

.. raw:: html

        </div>
    </div>


Q2: Find :math:`\lim_{x \to 0^+} xln(x)`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">
      
.. image:: ../../2022/mata30_fall/images/t9/2.jpg
   :width: 700

.. raw:: html

        </div>
    </div>


Q3: Find :math:`\lim_{x \to \infty} \left(\frac{1}{e^{x}}+1\right)^{e^{x}}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">
      
.. image:: ../../2022/mata30_fall/images/t9/3.jpg
   :width: 700

.. raw:: html

        </div>
    </div>

Mean Value Theorem
------------------

The Mean Value Theorem (MVT) states that:

If a function f is continuous on :math:`[a, b]` and differentiable on :math:`(a, b)`, then there exists a :math:`c \in (a, b)` such that :math:`f'(c) = \frac{f(b) - f(a)}{b - a}`.

Q4: If :math:`3 \leq f'(x) \leq 6` for all :math:`x`, show that :math:`18 \leq f(7) − f(1) \leq 36`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ../../2022/mata30_fall/images/t9/7.jpg
   :width: 700

.. raw:: html

        </div>
    </div>
    
Linearization
-------------

Linearization is a computationally simple method of getting a good approximation of the value of a function near some point.

The linearization of a function f at a point a is given by the formula: :math:`L(x) = f(a) + f'(a)(x-a)`. Essentially, this is an approximation of f near f(a).

Q5: Find the linear approximation of :math:`f(x) = 3e^{x}` at :math:`x=0`. Use it to approximate :math:`3e^{0.2}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ../../2022/mata30_fall/images/t9/11.jpg
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