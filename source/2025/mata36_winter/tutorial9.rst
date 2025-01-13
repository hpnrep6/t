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


Sequences
---------

Sequences represent a list of numbers, and can be written as :math:`\{ a_1, a_2, a_3, ... \}` or :math:`\{ a_n \}_{n=1}^\infty`, where :math:`a_n` is some function defined in terms of n.

For example :math:`\{ n^2 + 1 \}_{n=1}^\infty = \{1^2 + 1, 2^2 + 1, 3^2 + 1, ... \}`.

One particular property of sequences we're interested in is their behaviour at infinity.

We say that a sequence :math:`\{ a_n \}_{n=1}^\infty` converges if :math:`\lim_{n \to \infty} a_n = L` for some real number L. Otherwise, we say it diverges.

Just like with limits of regular functions, the limit rules and theorems still apply here (constant multiple, product of limits, squeeze theorem etc.).

Recurrence Relations
--------------------

A sequence :math:`\{ a_n \}` is a recurrence sequence if each term :math:`a_n` is defined in terms of its predecessors (given some initial values for :math:`a_n`).

Q1: Show that the sequence :math:`a_{n+1} = 1 + \frac{1}{1+a_n}` converges to :math:`\sqrt{2}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ../../2023/mata36_winter/images/t9/6.jpeg
   :width: 700

.. raw:: html

        </div>
    </div>

Q2: Find the limit of the convergent sequence :math:`\{ \sqrt{2}, \sqrt{2\sqrt{2}}, \sqrt{2\sqrt{2\sqrt{2}}}, ... \}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ../../2023/mata36_winter/images/t9/5.jpeg
   :width: 700

.. raw:: html

        </div>
    </div>


Monotonic Sequences
-------------------

A sequence is monotone if each subsequence element in the sequence is strictly increasing or strictly decreasing. This means that either :math:`a_n \lt a_{n+1}` or :math:`a_n \gt a_{n+1}` for all n.

Q3: Show that the sequence :math:`a_n = \frac{2n-1}{3n+4}` is monotonic.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ../../2023/mata36_winter/images/t9/3.jpeg
   :width: 700

.. raw:: html

        </div>
    </div>

Bounded Monotone Convergence Theorem (MCT)
------------------------------------------

The MCT states that if some sequence is both monotonic and bounded (:math:`a_n \le M` or :math:`a_n \ge M` for some M), then that sequence is convergent.

Q4: Show how you can use MCT to prove that the sequence :math:`\{ \frac{n}{e^n} + 1 \}` is convergent.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ../../2023/mata36_winter/images/t9/4.jpeg
   :width: 700

.. raw:: html

        </div>
    </div>

