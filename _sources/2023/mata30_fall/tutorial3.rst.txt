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

In this week's tutorial, we'll be going over inverse trigonometric functions and limits.

Trigonometric and inverse trigonometric functions
-------------------------------------------------

Let's start this class with a (not so) quick review of the trigonometric functions and their inverses. Try to name each of the following functions:

.. raw:: html

    <iframe src="https://www.desmos.com/calculator/h3zf2lrnoh?embed" width="250" height="250" style="border: 1px solid #ccc" frameborder=0></iframe>

    <iframe src="https://www.desmos.com/calculator/ve9mppjkei?embed" width="250" height="250" style="border: 1px solid #ccc" frameborder=0></iframe>

    <iframe src="https://www.desmos.com/calculator/kfgdcihh3k?embed" width="250" height="250" style="border: 1px solid #ccc" frameborder=0></iframe>

    <iframe src="https://www.desmos.com/calculator/17bdqjdo9s?embed" width="250" height="250" style="border: 1px solid #ccc" frameborder=0></iframe>

    <iframe src="https://www.desmos.com/calculator/ik2stulh2p?embed" width="250" height="250" style="border: 1px solid #ccc" frameborder=0></iframe>

    <iframe src="https://www.desmos.com/calculator/hqj84xtqqm?embed" width="250" height="250" style="border: 1px solid #ccc" frameborder=0></iframe>

    <br>

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

1. cos(x)

2. cot(x)

3. sin(x)

4. sec(x)

5. tan(x)

6. csc(x)
   
.. raw:: html

      </div>
   </div>

Now that we have reviewed the 6 trigonometric functions, we can start looking at their inverses. Most of these inverses can't be defined on the entire 
domain of their original functions because those functions aren't all one-to-one (think about what the inverse of a non one-to-one function would look
like).

The functions are as follows:

.. raw:: html

    <hr>
    
:math:`sin^{-1}(x)` with domain and range :math:`x \in [-1, 1], sin^{-1}(x) \in [-\frac{\pi}{2}, \frac{\pi}{2}]`

.. raw:: html

    <iframe src="https://www.desmos.com/calculator/ve65hckwli?embed" width="250" height="250" style="border: 1px solid #ccc" frameborder=0></iframe>
    <hr>

:math:`cos^{-1}(x)` with domain and range :math:`x \in [-1, 1], cos^{-1}(x) \in [0, \pi]`

.. raw:: html

    <iframe src="https://www.desmos.com/calculator/ghwidrrazl?embed" width="250" height="250" style="border: 1px solid #ccc" frameborder=0></iframe>
    <hr>

:math:`tan^{-1}(x)` with domain and range :math:`x \in \mathbb{R}, tan^{-1}(x) \in [-\frac{\pi}{2}, \frac{\pi}{2}]`

.. raw:: html

    <iframe src="https://www.desmos.com/calculator/2gwji0nejj?embed" width="250" height="250" style="border: 1px solid #ccc" frameborder=0></iframe>
    <hr>

:math:`csc^{-1}(x)` with domain and range :math:`x \in (-\infty, 1] \cup [1, \infty), csc^{-1}(x) \in [-\frac{\pi}{2}, \frac{\pi}{2}] \setminus \{ 0 \}`

.. raw:: html

    <iframe src="https://www.desmos.com/calculator/ve65hckwli?embed" width="250" height="250" style="border: 1px solid #ccc" frameborder=0></iframe>
    <hr>

:math:`sec^{-1}(x)` with domain and range :math:`x \in [-1, 1], sec^{-1}(x) \in [0, \pi] \setminus \{ \frac{\pi}{2} \}`

.. raw:: html

    <iframe src="https://www.desmos.com/calculator/8jyhg3ls3h?embed" width="250" height="250" style="border: 1px solid #ccc" frameborder=0></iframe>

    <hr>

:math:`cot^-1(x)` with domain and range :math:`x \in \mathbb{R}, cot^{-1}(x) \in (0, \pi)`

.. raw:: html

    <iframe src="https://www.desmos.com/calculator/nlpj5uq3cu?embed" width="250" height="250" style="border: 1px solid #ccc" frameborder=0></iframe>
    <hr>

Inverse trigonometric practice
------------------------------

Now that we have all the functions down, let's do a few practice questions with these functions.

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

2) :math:`cos^{-1}(cos(x)) = x \;\;` if :math:`0 \le x \lt \pi\;\;` (Cancellation rules)

and

3) :math:`cos(x) = cos(-x)`

First, use property 1 to get :math:`\dfrac{56\pi}{5}` within :math:`[-\pi, \pi]`, giving us:

:math:`cos(\frac{56\pi}{5} - \frac{10\pi}{5}) = cos(\frac{46\pi}{5})`

:math:`cos(\frac{46\pi}{5} - 5 \cdot \frac{10\pi}{5}) = cos(-\frac{4\pi}{5})`

If the value is negative, use property 3 to make it positive.

So :math:`cos(-\frac{4\pi}{5}) = cos(\frac{4\pi}{5})`

Then use cancellation rules (property 2) to get

:math:`cos^{-1}(cos(\frac{4\pi}{5})) = \frac{4\pi}{5}`

.. raw:: html

        </div>
    </div>

Q3: Find the inverse of the function :math:`f(x) = cos^{-1}(x^3 + 2)`.
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

with a domain of :math:`x \in [0, \pi]` since that's the range of :math:`f(x)`.

.. raw:: html

        </div>
    </div>

Finite Limits
-------------

Sometimes, we want to be able to find the values of a function as we get close (and in most cases, infinitely close!) to some point that may be undefined on the function.

To formally define this notion of a limit, we would need to use the delta-epsilon definition of a limit, which is way out of scope of this course, so just use your intuition here. (If you're 
really curious, the definition is :math:`\lim_{x \to a} f(x) = L \Rightarrow (\forall \epsilon > 0, \exists \delta > 0 \text{ st } 0 < |x - c| < \delta \Rightarrow |f(x) - L| < \epsilon)`

One example of this is at x = 1 for the function :math:`f(x) = \frac{(x - 1)x}{x-1}`. Even though x - 1 cancels out, the function is still left undefined at x = 1, yet we can easily compute the limit :math:`\lim_{x \to 1} \frac{(x-1)x}{x-1} = \lim_{x \to 1} x = 1`.

Sometimes you may want to evaluate a limit from only one side of the point, so we have the notion of a left-hand limit :math:`\lim_{x \to a^-}` and a right-hand limit :math:`\lim_{x \to a^+}`. One definition to keep in mind
here is that :math:`\lim_{x \to a} f(x) = L \Leftrightarrow \lim_{x \to a^+} = L` and :math:`\lim_{x \to a^-}f(x) = L` (this is useful for showing that a limit does not exist).

Hopefully this isn't the first time you've encountered limits, since this next question will be a bit tricky to do...

Q4: Find the limit if it exists: :math:`\lim_{x \to 3} \dfrac{\sqrt{x + 13} - 4}{x - 3}`.
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

Q5: Let :math:`f(x) = \begin{cases} x < 1 & x^3 + xk \\ x > 1& \frac{1 + x^2k}{xk}\end{cases}`. For what values of :math:`k` does :math:`\lim_{x \to 1} f(x)` exist?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

For the limit to exist, we need :math:`\lim_{x \to 1^-} f(x) = \lim_{x \to 1^+} f(x)`.

:math:`\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} x^3 + xk`

and 

:math:`\lim{x \to 1^+} f(x) = \lim_{x \to 1^+} \frac{1 + x^2k}{xk}`.

So we need to solve for k in :math:` \lim_{x \to 1^-} x^3 + xk = \lim_{x \to 1^+} \frac{1 + x^2k}{xk}`

.. math::
   \begin{aligned}
   \lim_{x \to 1^-} x^3 + xk &= \lim_{x \to 1^+} \frac{1 + x^2k}{xk} \\
   1^3 + (1)k &=  \frac{1 + (1^2)k}{(1)k} \\
   k + k^2 &= 1 + k \\
   k^2 &= 1 \\
   k = \pm 1
   \end{aligned}

.. raw:: html

        </div>
    </div>