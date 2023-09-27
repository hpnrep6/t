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

In this week's tutorial, we'll go over more limit methods and topics, such as the squeeze theorem, dealing with absolute values, as well as showing the existence of some limits.

Indeterminate Form
------------------

When a limit is in indeterminate form, we'll need to simplify/rewrite the limit into an alternate form the actually determine the limit.

The indeterminate forms are as follows:

- :math:`\frac{0}{0}`
- :math:`\frac{\infty}{\infty}`
- :math:`\infty - \infty`
- :math:`0^0`
- :math:`1^\infty`
- :math:`\infty^0`
- :math:`0 \cdot \infty`

If the limit is in any other form, we'll usually be able to determine it directly (it could be the case that it doesn't exist, but at least we know for sure it doesn't exist).

Limit Identities
----------------

In this course, there are a couple of limit identities that you can use to help make your life easier. They are:

:math:`\lim_{x \to 0} \frac{sin(x)}{x} = 1`

:math:`\lim_{x \to 0} \frac{1 - cos(x)}{x} = 0`

Let's see these in action in the following question.

Q1: Solve the limit :math:`\lim_{x \to 3} \frac{sin(x - 3)}{x^2 - 9}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Squeeze Theorem
---------------

The squeeze theorem states that if :math:`g(x) \le f(x) \le h(x)` for all x values near some number a, and if :math:`lim_{x \to a} g(x) = lim_{x\ to a} h(x) = L`, then :math:`lim_{x \to a} f(x) = L`.

Q2: Calculate :math:`lim_{x \to \infty} \; \dfrac{3x^2 + \sin(x^3)}{4x^2 - 2}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



Q3: Use the squeeze theorem to show that :math:`\lim_{x \to 0} \frac{sin(x)}{x} = 1`. (You can't use the limit identity here since that's what you're trying to prove)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ./images/0.jpg
    :width: 700

.. raw:: html

        </div>
    </div>

Absolute Values
---------------

When dealing with absolute values, you'll usually need to rewrite your function as a piecewise function and use that to evaluate the limit.

Q4: Find the limit :math:`\lim_{x \to -1} \frac{7 - |x|}{x^3 + 2}`. (if it exists)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

More examples
-------------

We'll go over a few more examples of limits to give you a better sense of the tools you have at your disposal when working with limits.

Q5: Given any constant number :math:`k`, what is :math:`lim_{x \to 0}\; \cot(2kx)2kx + k`?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q6: Find the limit :math:`\lim_{x \to 0} \frac{\sin(e\cos(x))}{x}`. (if it exists)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
