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

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. math::
   \begin{aligned}
   \lim_{x \to 3} \frac{sin(x - 3)}{x^2 - 9} &= \lim_{x \to 3} \frac{sin(x - 3)}{(x - 3)(x + 3)} \\
    &= \lim_{x \to 3} \frac{sin(x - 3)}{x - 3}(x + 3) \\
    &= \lim_{x - 3 \to 0} \frac{sin(x - 3)}{x - 3}(x + 3) \\
    &= (\lim_{x - 3 \to 0} \frac{sin(x - 3)}{x - 3})(\lim_{x - 3 \to 0}(x + 3)) \\
    &= 1 \cdot \lim_{x - 3 \to 0}(x + 3) \\
    &= 1 \cdot \lim_{x \to 3}(x + 3) \\
    &= 3 + 3 = 6 \\
   \end{aligned}


.. raw:: html

        </div>
    </div>


Squeeze Theorem
---------------

The squeeze theorem states that if :math:`g(x) \le f(x) \le h(x)` for all x values near some number a, and if :math:`lim_{x \to a} g(x) = lim_{x \to a} h(x) = L`, then :math:`lim_{x \to a} f(x) = L`.

Q2: Calculate :math:`lim_{x \to \infty} \; \frac{3x^2 + \sin(x^3)}{4x^2 - 2}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

We know that :math:`-1 \le sin(x) \le 1` (as in sin(x) is bounded between -1 and 1 for all x), which means that :math:`-1 \le sin(x^3) \le 1`.

To use the squeeze theorem, we first need to "reconstruct" our original expression in a double inequality involving the upper and lower bounds of the function. We do just this below:

.. math::
   \begin{aligned}
   -1 &\le sin(x^3) &\le 1 \\
   3x^2 -1 &\le 3x^2 + sin(x^3) &\le 3x^2 + 1 \\
   \frac{3x^2 -1}{4x^2-2} &\le \frac{3x^2 + sin(x^3)}{4x^2-2} &\le \frac{3x^2 + 1}{4x^2-2}
   \end{aligned}

Now we need to calculate the limits of the terms surrounding :math:`\frac{3x^2 + sin(x^3)}{4x^2-2}` in the above double inequality, so we have:

.. math::
   \begin{aligned}
   \lim_{x \to \infty} \frac{3x^2 -1}{4x^2-2} &= \lim_{x \to \infty} \frac{3x^2 - \frac{x^2}{x^2}}{4x^2-2\frac{x^2}{x^2}} \\
   &= \lim_{x \to \infty} \frac{x^2(3 - \frac{1}{x^2})}{x^2(4-\frac{2}{x^2})} \\
   &= \lim_{x \to \infty} \frac{3 - \frac{1}{x^2}}{4-\frac{2}{x^2}} \\
   &= \frac{3 - \frac{1}{\infty}}{4-\frac{2}{\infty}} \\
   &= \frac{3 - 0}{4- 0} = \frac{3}{4}\\
   \end{aligned}

We do the same thing for the upper bound.

.. math::
   \begin{aligned}
   \lim_{x \to \infty} \frac{3x^2 +1}{4x^2-2} &= \lim_{x \to \infty} \frac{3x^2 + \frac{x^2}{x^2}}{4x^2-2\frac{x^2}{x^2}} \\
   &= \lim_{x \to \infty} \frac{x^2(3 + \frac{1}{x^2})}{x^2(4-\frac{2}{x^2})} \\
   &= \lim_{x \to \infty} \frac{3 + \frac{1}{x^2}}{4-\frac{2}{x^2}} \\
   &= \frac{3 + \frac{1}{\infty}}{4-\frac{2}{\infty}} \\
   &= \frac{3 + 0}{4- 0} = \frac{3}{4}\\
   \end{aligned}

So by adding our limit to infinity to the double inequality, we get:

.. math::
   \begin{aligned}
   \lim_{x \to \infty} \frac{3x^2 -1}{4x^2-2} &\le \lim_{x \to \infty} \frac{3x^2 + sin(x^3)}{4x^2-2} &\le \lim_{x \to \infty}  \frac{3x^2 + 1}{4x^2-2} \\
   \frac{3}{4} &\le \lim_{x \to \infty} \frac{3x^2 + sin(x^3)}{4x^2-2} &\le \frac{3}{4}
   \end{aligned}

and thus :math:`\lim_{x \to \infty} \frac{3x^2 + sin(x^3)}{4x^2-2} = \frac{3}{4}`

.. raw:: html

        </div>
    </div>


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

Q4: Find the limit :math:`\lim_{x \to -1} \frac{7 - |x + 1|}{x^3 + 2}`. (if it exists)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

We know that :math:`|x| = \begin{cases} x \;\;\;\;\;\; \text{if } x \ge 0 \\ -x \;\;\; \text{if } x < 0\end{cases}`

Using this, we get that :math:`|x + 1| = \begin{cases} x + 1 \;\;\;\;\;\;\;\;\; \text{if } x \ge -1 \\ -(x + 1) \;\;\; \text{if } x < -1\end{cases}`, since this is just :math:`|x|`` shifted left by one unit.

Since now we have the piecewise definition of :math:`|x + 1|`, we can get the piecewise definition of :math:`\frac{7 - |x + 1|}{x^3 + 2}` and try to find the limit using that.

:math:`\begin{aligned} \frac{7 - |x + 1|}{x^3 + 2} &= \begin{cases} \frac{7 - (x + 1)}{x^3 + 2} \;\;\;\;\;\;\; \text{if } x \ge -1 \\ \frac{7 - (-(x + 1))}{x^3 + 2} \;\;\; \text{if } x < -1\end{cases} \\&=  \begin{cases} \frac{6 - x}{x^3 + 2} \;\;\;\;\;\;\; \text{if } x \ge -1 \\ \frac{8 + x}{x^3 + 2} \;\;\;\;\;\;\; \text{if } x < -1\end{cases} \end{aligned}`

Now we can calculate the left and right side limits of this function at -1.

Let :math:`f(x) = \frac{7 - |x + 1|}{x^3 + 2}`.

.. math::
    \begin{aligned}
    \lim_{x \to -1^-} f(x) &= \lim_{x \to -1^-} \frac{6 - x}{x^3 + 2} \\
    &= \frac{6 + 1}{-1 + 2} \\
    &= 7
    \end{aligned}

.. math::
    \begin{aligned}
    \lim_{x \to -1^+} f(x) &= \lim_{x \to -1^+} \frac{8 + x}{x^3 + 2} \\
    &= \frac{8 - 1}{-1 + 2} \\
    &= 7
    \end{aligned}

Since :math:`\lim_{x \to -1^-} f(x) =  \lim_{x \to -1^+} f(x) = 7`, we have that :math:`\lim_{x \to -1} f(x) = \lim_{x \to -1} \frac{7 - |x + 1|}{x^3 + 2} = 7`.

.. raw:: html

        </div>
    </div>

More examples
-------------

We'll go over a few more examples of limits to give you a better sense of the tools you have at your disposal when working with limits.

Q5: Given any constant number :math:`k`, what is :math:`\lim_{x \to 0}\; \cot(2kx)2kx + k`?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

Note that similar to :math:`\lim_{x \to 0} \frac{sin(x)}{x} = 1`, we can also say :math:`\lim_{x \to 0}\frac{x}{sin(x)} = 1`.

Also remember that :math:`tan(x) = \frac{sin(x)}{cos(x)}`, so :math:`cot(x) = \frac{cos(x)}{sin(x)}`
We can solve for the limit as follows:

.. math::
    \begin{aligned}
    \lim_{x \to 0} \cot(2kx)2kx + k &= \lim_{x \to 0} \frac{cos(2kx)2kx}{sin(2kx)} + k \\
    &= \lim_{x \to 0} \frac{2kx}{sin(2kx)} \lim_{x \to 0} cos(2kx) + \lim_{x \to 0} k \\
    &= 1 \cdot 1 + k \\
    &= 1 + k
    \end{aligned}

.. raw:: html

        </div>
    </div>


Q6: Find the limit :math:`\lim_{x \to 0} \frac{\sin(e\cos(x))}{x}`. (if it exists)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. math::
    \begin{aligned}
    \lim_{x \to 0} \frac{\sin(e\cos(x))}{x} &= \lim_{x \to 0} \frac{e\cos(x)\sin(e\cos(x))}{e\cos(x) \cdot x} \\
    &= \lim_{x \to 0} \frac{e\cos(x)}{x} \lim_{x \to 0} \frac{sin(e\cos(x))}{e\cos(x)} \\
     &= \lim_{x \to 0} \frac{e\cos(x)}{x} \cdot 1 \\
     &= \frac{ \lim_{x \to 0}e\cos(x)}{ \lim_{x \to 0}x} \\
     &= \frac{e\cos(0)}{ \lim_{x \to 0} x} \\ 
     &= \frac{e}{ \lim_{x \to 0} x} \\
     &=  e\lim_{x \to 0}\frac{1}{ x}
    \end{aligned}

Since :math:`\lim_{x \to 0^+} \frac{1}{x} = \frac{1}{0^+} = \infty` and :math:`\lim_{x \to 0^-} \frac{1}{x} = \frac{1}{0^-} = -\infty`, we get that :math:`e \lim_{x \to 0}\frac{1}{x} \text{DNE }` (Does not exist).

.. raw:: html

        </div>
    </div>

