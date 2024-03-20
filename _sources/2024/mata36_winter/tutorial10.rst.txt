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

Series Definitions
------------------

A series is a sum written in the form :math:`\sum_{k=1}^\infty a_k`.

A series converges if :math:`\sum_{k=1}^\infty a_k = L` for some constant L.

If no such :math:`L` exists, then the series diverges.

The divergence test states that if :math:`\lim_{k \to \infty} a_k \ne 0`, then a series diverges.

Geometric Series
----------------

A geometric series is a series in the form of :math:`\sum_{k=0}^\infty ar^k`.

If :math:`|r| \lt 1`, then the series converges to :math:`\frac{a}{1-r}`.

If :math:`|r| \ge 1`, the series diverges.

Q1: Does :math:`\sum_1^\infty 1 - \arctan(n)` converge? If so, find its sum.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ./images/t10/2.jpeg
   :width: 700

.. raw:: html

        </div>
    </div>

Q2: Does :math:`\sum_{n=1}^\infty 3(-\frac{3}{2})^n` converge? If so, find its sum.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ./images/t10/3.jpeg
   :width: 700

.. raw:: html

        </div>
    </div>

Q3: Does :math:`\sum_{n=3}^\infty 4^{n+1}5^n6^{-2n}` converge? If so, find its sum.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ./images/t10/4.jpeg
   :width: 700

.. raw:: html

        </div>
    </div>
