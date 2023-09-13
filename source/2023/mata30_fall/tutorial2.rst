Tutorial Week 2
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

Welcome to your first tutorial!

What are tutorials?
-------------------

In this course, tutorials are here to give you extra practice and review on the course content in a smaller class format, giving you more opportunities to have 
one-on-one support that you otherwise wouldn't be able to easily get in say a two hundred person lecture.

Do note that teaching assistants, or TAs, are given some freedom on how tutorials are run, so every tutorial will vary slightly in format and specific content, but all 
will cover the core concepts requied to be successful in this course.

Expectations when showing your work
-----------------------------------

This course isn't really proof and theory heavy, so when showing your work, you don't need to say stuff like "1 + 0 = 1 by the additive identity property of the real numbers", but you should justify
any steps that couldn't be easily followed by the TA (or sometimes professor) grading your paper (e.g. using L'Hopital's theorem, which you'll be doing later on in the course).

Sets
----

Let's start with a quick review of a concept you should be somewhat familiar with: Sets.

A set is a collection of distinct objects and is defined with curly braces :math:`\{ \}`, for example let :math:`S = \{3, 5, 6\}`.

You can use the symbol :math:`\in` to denote that an element belongs to a set (or in other words, the element is in a set). For example, :math:`3 \in \{1, 2, 3\}`.

Similarly, you can also say that :math:`4 \notin \{1, 2, 3\}`.

There's also the union (:math:`\cup`) and intersection (:math:`\cap`) operators, for example :math:`\{1, 2, 3\} \cup \{8, 9\} = \{1, 2, 3, 8, 9\}`.

Notable sets
~~~~~~~~~~~~

You might remember :math:`\mathbb{R}` from high school, which, lucky for you, is a set!

There's a few notable sets that will be helpful to know, those being:

- :math:`\mathbb{Z}` - The integers

- :math:`\mathbb{N}` - The natural numbers

- :math:`\mathbb{Q}` - The rational numbers (Any number that can be written as the ration of two integers)

- :math:`\mathbb{R}` - The real numbers (Basically any number)

Now here's a little trivia (well, basically the entirety of MATA22 if you decide to take that course)... what about :math:`\mathbb{R}^2`?

Intervals
~~~~~~~~~

Intervals can be expressed using either set-builder notation, that being something like :math:`I = \{x \in \mathbb{R} | 0 < x \le 3 \}` or in interval notation :math:`(0, 3]`

Quantifiers and shorthands
--------------------------

- :math:`\therefore` - Therefore

- :math:`\because` - Because

- st - Such that 

- :math:`\forall` - For all 

- :math:`\exists` - There exists

- :math:`\implies` - Implies

- :math:`\Leftrightarrow` - If and only if (iff)

Let A and B be mathematical statements (e.g. x > 4).

A :math:`\implies` B means that if A is true, then B must also be true. If A is false, B can be either true or false (we don't know anything about B if A is false).

A :math:`\Leftrightarrow` B means that if A is true, B is true and if A is false, B is false.

Try to translate the following between symbols and regular english:

- For all x in f(x), x = 5.

- Because y is in the set S, we have some integer k that is greater than y.

- For every rational number r, there is some integer k and some real number b such that r = k + b.

- :math:`\forall x \in \mathbb{Q}`, :math:`\exists c \in \mathbb{Q}` st :math:`\forall b > x + c`, :math:`b - 5 = 3 \implies b = 3x`.


Functions and graphs
--------------------

Let's go through how to solve a few practice questions on functions now.

Q1: What is the equation of the line with a x-intercept of :math:`-3` and a y-intercept of :math:`5`?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

From what you know about x and y intercepts, you should be able to identify that :math:`(-3, 0)` and
:math:`(0, 5)` are points on the line. You can find the slope using the slope formula

.. math::
   \begin{aligned}
   m &= \dfrac{y_2 - y_1}{x_2 - x_1} \\
   &= \dfrac{0 - 5}{ -(-3) - 0} \\
   &= -\dfrac{5}{3}
   \end{aligned}

You can plug this into the slope-intercept form of a line, that is :math:`y = mx + b`
which gives you :math:`y = -\dfrac{5}{3}x + 5` (recall how :math:`5` is the y-intercept?).

.. raw:: html

      </div>
   </div>

Q2: Find the equation of a line perpendicular to :math:`-3x + 2y + 4 = 0`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

First, you want to turn this into slope-intercept form, so move everything but :math:`y`
to the right side to get :math:`y = \dfrac{3}{2}x - \dfrac{4}{2} = \dfrac{3}{2}x - 2`.

This gives you the slope of the line, which is :math:`\dfrac{3}{2}`. The slope perpendicular
to this would be the negative reciprocol (that is, :math:`m_2 = -\dfrac{1}{m_1}`). So you take
the negative reciprocol of :math:`\dfrac{3}{2}` to get :math:`m_2 = -\dfrac{2}{3}`.

So any line with the slope :math:`-\dfrac{2}{3}` is perpendicular, a simple example being :math:`y = -\dfrac{2}{3}x`

.. raw:: html

      </div>
   </div>

Q3: Suppose you have the function :math:`f(4x + 1) = \dfrac{3x}{2x + 1}`. 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

(a) What is :math:`f(5)`? 

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

First of all, this means that you want to find the value of :math:`f(5)`, but the only information
you have about the function is :math:`f(4x + 1) = \dfrac{3x}{2x + 1}`. So how can you get
:math:`f(5)` in there? You would make :math:`f(4x + 1) = f(5)`, which means you need to find the value
of :math:`x` such that :math:`4x + 1 = 5`.

Solving this equation gets us 

.. math::
   \begin{aligned}
   4x + 1 &= 5 \\
   4x &= 5 - 1 \\
   4x &= 4 \\
   x &= 1
   \end{aligned}

So to get :math:`f(5)`, you need :math:`x = 1`. You can now just subtitute :math:`x = 1` into
:math:`\dfrac{3x}{2x + 1}` which gets you

.. math::
   \begin{aligned}
   \dfrac{3x}{2x + 1} &= \dfrac{3(1)}{2(1) + 1} \\
   &= \dfrac{3}{3} \\
   &= 1
   \end{aligned}


.. raw:: html

      </div>
   </div>

(b) What is :math:`f(x)` for an arbitrary x? 

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

For this, like the first question, you want to find a value of x that satisfies every value
put into :math:`f(x)`. To avoid having a multiple :math:`x` variables in your answer, lets reword
it so that we're looking for the value of :math:`f(t)` for an arbitrary :math:`t`.

You need a value of :math:`x` for every :math:`t`, so let :math:`t = 4x + 1`.

Solving for :math:`x` gives you

.. math::
   \begin{aligned}
   4x + 1 &= t \\
   4x &= t - 1 \\
   x &= \dfrac{t - 1}{4}
   \end{aligned}

Now that you have :math:`x` in terms of :math:`t`, you can subtitute your new value of :math:`x`
into :math:`\dfrac{3x}{2x + 1}` which gives you :math:`f(t) = \dfrac{3(\dfrac{t-1}{4})}{2(\dfrac{t - 1}{4}) + 1} = \dfrac{3t-3}{2(t+1)}`

With this, you can say that :math:`f(x) = \dfrac{3x-3}{2(x+1)}`

.. raw:: html

      </div>
   </div>

(c) What is the natural domain of :math:`f(x)`?

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

There is an aymptote when :math:`2(x+1) = 0`, which has the solution

.. math::
   \begin{aligned}
   \dfrac{2(x+1)}{2} &= \dfrac{0}{2} \\
   x + 1 &= 0 \\
   x &= -1
   \end{aligned}

This means that the function is defined on all points but :math:`x = -1`, so the natural
domain is :math:`(-\infty , -1) \cup (-1, \infty )`.

.. raw:: html

      </div>
   </div>

Q4: What is the natural domain of :math:`f(x) = \sqrt{cos(sin(x))}`?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

Since there's a square root, you know that the domain is all values where :math:`cos(sin(x)) \geq 0`.

The range of :math:`sin(x)` is :math:`[-1, 1]`, but if you look at the graph of :math:`cos(x)`, it is
positive from :math:`[-\dfrac{\pi}{2}, \dfrac{\pi}{2}]` (:math:`\dfrac{\pi}{2} = 1.57`) so :math:`cos(sin(x))`
is positive for all numbers, which means the domain is :math:`(-\infty, \infty)`.

.. raw:: html

      </div>
   </div>

Some terminology for functions
------------------------------

One-to-one
~~~~~~~~~~

A function is one-to-one if :math:`\forall x_1, x_2 \in \text{Domain}(f)`, :math:`x_1 \neq x_2` implies :math:`f(x_1) \neq f(x_2)`. You can verify a one-to-one function using the horizontal line test.

Even 
~~~~

A function is even if :math:`\forall x \in \text{Domain}(f)`, :math:`f(x) = f(-x)`

Odd
~~~

A function is odd if :math:`\forall x \in \text{Domain}(f)`, :math:`f(-x) = -f(x)`

Classify the following functions:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    <iframe src="https://www.desmos.com/calculator/gajmbgblr8?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

    <iframe src="https://www.desmos.com/calculator/svpa2v2vgm?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

    <iframe src="https://www.desmos.com/calculator/9yorcihlif?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

    <iframe src="https://www.desmos.com/calculator/trtpm1jxwx?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>    

    <br>
    
Solving inequalities
--------------------

Something you might not have learned before is how to solve for inequalities, so we'll do some practice on that.

Q5: Solve the inequality :math:`x^3 + 3x^2 > -2x`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

Move the :math:`-2x` to the left side to get :math:`x^3 + 3x^2 + 2x > 0`.

Factor out :math:`x` to get :math:`x(x^2 + 3x + 2) > 0`.

Factor the quadratic to get :math:`x(x+2)(x+1)>0`.

Let :math:`f(x) = x(x+2)(x+1)`. Now, use a number line, mark the x-intercepts,
and check the values in between the x-intercepts to see if they're greater than 0.

:math:`f(x)` is useful here since you can show your calculations by writing something like
:math:`f(-0.5)=-\dfrac{3}{8} < 0` for your number line.

.. raw:: html

      </div>
   </div>

Q6: Solve the inequality :math:`-3 + x < -7x - 5 \le 9 + x`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. math::
   \begin{aligned}
   -3 + x &< -7x - 5 \le 9 \\
   -3 &< -8x - 5 \le 9 &\;\;\; \text{Subtract all 3 sides by x} \\
   -3 + 5 &< -8x \le 9 + 5 &\;\;\; \text{Add 5 to all 3 sides} \\
   2 &< -8x \le 14 &\;\;\; \text{Simplify} \\
   \frac{1}{4} &< -x \le \frac{7}{4} &\;\;\; \text{Divide all 3 sides by 8} \\
   -\frac{1}{4} &> x \ge -\frac{7}{4} &\;\;\; \text{Multiply all 3 sides by -1, flip inequalities} \\
   \end{aligned}

.. raw:: html

      </div>
   </div>

Exponentials and Logarithms
---------------------------

A few logarithmic laws to know:

- :math:`log_a(x) = k` implies :math:`a^k = x`

- :math:`log(ab) = log(a) + log(b)`

- :math:`log(\frac{a}{b}) = log(a) - log(b)`

- :math:`log(a^n) = nlog(a)`

In this course, assume log to be log based 10 (:math:`log(x) = log_{10}(x)`) and 
let ln be log based e (:math:`ln(x) = log_e(x)`)


Q7: Solve the equation :math:`ln(3x + 1) = 4`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. math::
   \begin{aligned}
   ln(3x+1) &= 4 \\
   ln(3x+1) &= 4 \\
   \end{aligned}

.. raw:: html

      </div>
   </div>

Q8: Solve the equation :math:`2(\pi^x) + 7(\pi^x) -e^8 = 0`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. math::
   \begin{aligned}
   2(\pi^x) + 7(\pi^x) -e^8 &= 0 \\
   9(\pi^x) -e^8 &= 0 \\
   9(\pi^x) &= e^8 \\
   \pi^x &= \dfrac{e^8}{9} \\
   log_{\pi}(\pi^x) &= log_{\pi}(\dfrac{e^8}{9}) \\
   x log_{\pi}(\pi) &= log_{\pi}(\dfrac{e^8}{9}) \\
   x (1) &= log_{\pi}(\dfrac{e^8}{9}) \\
   x &= log_{\pi}(\dfrac{e^8}{9}) \\
   \end{aligned}

.. raw:: html

      </div>
   </div>