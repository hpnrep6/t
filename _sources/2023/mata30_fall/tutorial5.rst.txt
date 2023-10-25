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

Next week is reading week, so there will be no tutorial (or any class at UTSC at least that's how it's supposed to go) next week.

Today's tutorial will cover the concept of continuity, applications of the intermediate value theorem, and how we can apply the limit definition of a derivative.

Continuity
----------

A function is continuous at :math:`x = a` if :math:`\lim_{x \to a} f(x) = f(a)`.

First, we look at the types of discountinuities. Intuitively, a function is continuous if every point in the function is "connected" to every other point, and there are not gaps between any of the points in the function.

In this course, there are 3 types of discountinuities that interest us.

The first is the removable discountinuity, sometimes called a point discountinuity. In this case, :math:`\lim_{x\to a} f(x)` exists, but :math:`\lim_{x\to a} f(x) \neq f(a)`.

The second is the jump discountinuity, where :math:`\lim_{x\to a^-} f(x) \neq \lim_{x \to a^+} f(x)`.

The third is the infinite discountinuity, where :math:`\lim_{x \to a^+} = \infty \text{ or } -\infty` or :math:`\lim_{x \to a^-} = \infty \text{ or } -\infty`.

There's also the essential discountinuity which is not covered in this course. It's kind of like an infinite discountinuity, but instead of the limit being infinity, we have that :math:`\lim_{x \to a^+} f(x)` DNE or :math:`\lim_{x \to a^-} f(x)` DNE. One classic example of this is at x = 0 for :math:`sin(\frac{1}{x})`.


Q1: Let :math:`f(x) = \begin{cases} 3x + e^x & \text{if } x \leq 1 \\ x^4 + k & \text{if } x \gt 1\end{cases}`. For what value(s) of :math:`k` makes the :math:`f(x)` continuous?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

We see that :math:`3x + e^x` and :math:`x^4 + k` is a composition of continuous functions, so they themselves are continuous across their domain.

We now look at the point x = 1; the transition point for our piecewise function.

For a function to be continuous, we need :math:`\lim_{x \to 1^-} f(x) = \lim_{x \to 1^+} f(x) = f(1)`

We have 

.. math::
    \begin{aligned}
    \lim_{x \to 1^-} f(x) &=  \lim_{x \to 1^-} 3x + e^x \\
    &= 3 + e
    \end{aligned}

.. math::
    \begin{aligned}
    f(1) = \lim_{x \to 1^+} f(x) &=  \lim_{x \to 1^+} x^4 + k \\
    &= 1 + k
    \end{aligned}

So for :math:`\lim_{x \to 1^-} f(x) = \lim_{x \to 1^+} f(x) = f(1)`, we need 

:math:`3 + e = 1 + k \Rightarrow k = 2 + e`.

.. raw:: html

        </div>
    </div>

Intermediate Value Theorem
--------------------------

The intermediate value theorem (IVT) state that if a function f(x) is continuous on the interval [a, b], and :math:`\forall n` between f(a) and f(b), :math:`\exists c \in [a, b]` such that :math:`f(c) = n`.

Note that the "between" is strictly between, so if f(a) < f(b), that would be :math:`N \in (f(a), f(b))`. By this definition, if :math:`f(a) = f(b)`, there wouldn't be any numbers between them, so the implication of IVT becomes vacuous.

Q2: Show that :math:`f(x) = e^{3x} + 4x^3 + 3` has a root in :math:`x \in [-1, 2]`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

We know that :math:`e^3x, 4x^3, \text{ and } 3` are continuous functions on :math:`x \in [-1, 2]`, and since f(x) is the composition of continuous functions, f(x) is continuous on :math:`x \in [-1, 2]`.

Since f(x) is continuous [-1, 2], we can apply the IVT.

:math:`f(-1) = e^{-3} - 4 + 3 = e^{-3} - 1 < 0`

:math:`f(2) = e^6 + 4(2)^3 + 3 > 0`

By the conclusion of the IVT, we know that :math:`\forall n` between f(-1) and f(2), there exists :math:`c \in [-1, 2]` such that :math:`f(c) = n`. 

We've shown that 
:math:`f(-1) < 0 < f(2)`, so by IVT, we know that :math:`\exists c \in [-1, 2]` such that :math:`f(c) = 0`, and thus the function has a root in :math:`x \in [-1, 2]`.

.. raw:: html

        </div>
    </div>


Limit definition of a derivative
--------------------------------

Graphically, a derivative is the slope of a tangent line at some point on the function. The limit definition of a derivative is a way to formally define what a derivative is. 

A derivative f'(x) is defined as :math:`f'(x) = \lim{h \to 0} \frac{f(x + h) - f(x)}{h}`, and we say a point is differentiable if this limit for f'(x) exists.

Q3: Use the limit definition of a derivative to compute :math:`f^{'}(x)` if :math:`f(x) = x^2 - 5x`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. math::
    \begin{aligned}
    lim_{h \to 0} \frac{f(x +h) - f(x)}{h} &= lim_{h \to 0} \frac{ ((x+h)^2 - 5(x+h)) - (x^2 - 5x)}{h} \\
    &= lim_{h \to 0} \frac{x^2 + 2xh + h^2 - 5x - 5h - x^2 + 5x}{h} \\
    &= lim_{h \to 0} \frac{2xh - 5h + h^2}{h} \\
    &= lim_{h \to 0} 2x - 5 + h \\ 
    &= 2x - 5
    \end{aligned}

.. raw:: html

        </div>
    </div>

Q4: Use the limit definition of a derivative to compute :math:`f^{'}(x)` if :math:`f(x) = sin(x)`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. math::
    \begin{aligned}
    lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
    &= lim_{h \to 0} \frac{sin(x + h) - sin(x)}{h} \\
    &= lim_{h \to 0} \frac{sin(x)cos(h) + sin(h)cos(x) - sin(x)}{h}\\& \text{    By the compound angle identity $sin(a + b) = sin(a)cos(b) + sin(b)cos(a)$ } \\
    &= lim_{h \to 0} \frac{sin(x)(cos(h) - 1) + sin(h)cos(x)}{h} \\
    &= (lim_{h \to 0} sin(x))(lim_{h \to 0} \frac{cos(h) - 1}{h}) + (lim_{h \to 0} \frac{sin(h)}{h})(lim_{h \to 0} cos(x)) \\
    &= sin(x) \cdot 0 + 1 \cdot cos(x) \\
    &= cos(x)
    \end{aligned}

.. raw:: html

        </div>
    </div>

Q5: Show that :math:`f(x) = x^{\tiny \dfrac{2}{3}}` is not differentiable at :math:`x = 0` using the limit definition of a derivative.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

Using the limit definition of a derivative, we get that 

.. math::
    \begin{aligned}
    \lim_{h \to 0} \frac{f(0 + h) - f(0)}{h} &= \lim_{x \to 0} \frac{h^{\frac{2}{3}} - 0^\frac{2}{3}}{h} \\
    &= \lim_{x \to 0} \frac{1}{h^\frac{1}{3}}
    \end{aligned}

Looking at the left and right side limits, we get

.. math::
    \begin{aligned}
    \lim_{h \to 0^-} \frac{f(0 + h) - f(0)}{h} &= \lim_{x \to 0^-} \frac{1}{h^\frac{1}{3}} \\
    &= \lim_{x \to 0^-} \frac{1}{0^-} \\
    &= -\infty
    \end{aligned}

.. math::
    \begin{aligned}
    \lim_{h \to 0^+} \frac{f(0 + h) - f(0)}{h} &= \lim_{x \to 0^+} \frac{1}{h^\frac{1}{3}} \\
    &= \lim_{x \to 0^+} \frac{1}{0^+} \\
    &= \infty
    \end{aligned}

Since :math:`\lim_{h \to 0^-} \frac{f(0 + h) - f(0)}{h} \neq \lim_{h \to 0^+} \frac{f(0 + h) - f(0)}{h}`, we 
have that :math:`\lim_{h \to 0} \frac{f(0 + h) - f(0)}{h}` does not exist, so f(x) is not differentiable at x = 0.

.. raw:: html

        </div>
    </div>