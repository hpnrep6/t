.. _2022_mata30_fall_tut_2:

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

Welcome to your first tutorial. In this tutorial, we'll be reviewing some prerequisite material
you're already expected to understand as well as week 1 material.

Writing Math
------------

Assigning values to variables
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You may be familiar with variables like :math:`x` or :math:`y` from high school, but on something like a test or written assignment,
how would you define a new variable?

One way would be to use the word "let", such as:

:math:`\text{Let } x = 7`

:math:`\text{Let } f(x) = x^2 + 6`

:math:`\text{Let } g(t) = t^{84} + 65.99 \text{ represent the rising cost of internet.}`

Of course, there are many other ways to define a variable, and you might notice some of them while doing your homework/readings.

Showing your work
~~~~~~~~~~~~~~~~~

On a test, try to adequetely justify each step in your solution, as simply stating the answer to a complicated problem may not earn
you a lot of marks (or if any at all).

For example, if you were given the question:

What are the roots of :math:`f(x) = 4x + 1`?

Your solution could be something like:


:math:`f(x) \text{ has a root when } f(x) = 0`

:math:`\text{So let } f(x) = 0`

:math:`\text{so that we have }`

.. math::
   \begin{aligned}
   0 &= 4x + 1 \\
   -4x &= 1 \\
   x &= \dfrac{1}{-4} 
   \end{aligned}


:math:`\text{Therefore } f(x) \text{ has a root at } x = \dfrac{1}{-4} \text{.}`

Factoring
---------

It probably has been a few months since the last time you factored something, so I thought
it'll be good that we review this.

One thing that should sound familiar is the term "perfect square".

A perfect square is an integer that is the square (:math:`x^2`) of another integer.

For example, the perfect square :math:`9 = 3^2`.

Common factors
~~~~~~~~~~~~~~

If two terms have a common factor, then you can "move" that factor out, for example :math:`3x + 3y = 3(x + y)`
where :math:`3` is the common factor of :math:`x` and :math:`y`.

Difference of squares
~~~~~~~~~~~~~~~~~~~~~

If you had an equation in the form :math:`x^2 - y^2`,
then you can factor it into :math:`(x - y)(x + y)`. For example, :math:`x^2 - 9 = (x-3)(x+3)`

In this case, :math:`9 = 3^2`, but the second term doesn't have to be an integer. For example,
you could have :math:`x^2 - 2 = (x - \sqrt{2})(x + \sqrt{2})` since :math:`2 = (\sqrt{2})^2`.

Cross-multiplication method (for quadratics)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You could find the full diagrams and stuff by googling cross-multiplication method, so
here's a somewhat simplified version just to get the essentials down:

Say you have the quadratic :math:`ax^2 + bx + c` and let the factored form be :math:`(gx - j)(hx - k)`.
Then you need to find the values of :math:`g, j, h, k` such that:

.. math::
   \begin{aligned}
   a &= gh \text{ (The numbers preceding x in the factored form)} \\ 
   c &= jk \text{ (The numbers being subtracted in the factored form)} \\
   b &= gk + jh \text{ (Cross multiply)}
   \end{aligned}

Quadratic equation
~~~~~~~~~~~~~~~~~~

If you still can't manage to factor your quadratic equation using the previous methods,
then you can get the factors by solving the quadratic equation:

:math:`x = \dfrac{ -b \pm \sqrt{b^2 - 4ac}}{2a}`

Lines
-----

Q1: What is the equation of the line with a x-intercept of :math:`-3` and a y-intercept of :math:`5`?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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


.. x intercept

Q2: Find the equation of a line perpendicular to :math:`-3x + 2y + 4 = 0`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

First, you want to turn this into slope-intercept form, so move everything but :math:`y`
to the right side to get :math:`y = \dfrac{3}{2}x - \dfrac{4}{2} = \dfrac{3}{2}x - 2`.

This gives you the slope of the line, which is :math:`\dfrac{3}{2}`. The slope perpendicular
to this would be the negative reciprocol (that is, :math:`m_2 = -\dfrac{1}{m_1}`). So you take
the negative reciprocol of :math:`\dfrac{3}{2}` to get :math:`m_2 = -\dfrac{3}{2}`.

So any line with the slope :math:`-\dfrac{3}{2}` is perpendicular, a simple example being :math:`y = -\dfrac{3}{2}x`

Functions
---------

Q3: Suppose you have the function :math:`f(4x + 1) = \dfrac{4x(x+1)}{x^2 - 1}`. 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

(a) What is :math:`f(5)`? 

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


(b) What is :math:`f(x)` for an arbitrary x? 

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

(c) What is the natural domain of :math:`f(x)`?

There is an aymptote when :math:`2(x+1) = 0`, which has the solution

.. math::
   \begin{aligned}
   \dfrac{2(x+1)}{2} &= \dfrac{0}{2} \\
   x + 1 &= 0 \\
   x &= -1
   \end{aligned}

This means that the function is defined on all points but :math:`x = -1`, so the natural
domain is :math:`(-\infty , -1) \cup (-1, \infty )`.

Q4: What is the natural domain of :math:`f(x) = \sqrt{cos(sin(x))}`?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Since there's a square root, you know that the domain is all values where :math:`cos(sin(x)) \geq 0`.

The range of :math:`sin(x)` is :math:`[-1, 1]`, but if you look at the graph of :math:`cos(x)`, it is
positive from :math:`[-\dfrac{\pi}{2}, \dfrac{\pi}{2}]` (:math:`\dfrac{\pi}{2} = 1.57`) so :math:`cos(sin(x))`
is positive for all numbers, which means the domain is :math:`(-\infty, \infty)`.

Q5: Find a function with the domain :math:`[0, 3) \cup (3, 5]`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For this question, you'll need to dig into your toolset of functions and find one that
has a restriction on "one end" of its domain. The square root function works here, since
the value being square rooted can't be negative.

So, let's identify the restrictions on the domain:

1. :math:`x \geq 0`
2. :math:`x \leq 5`
3. :math:`x \neq 3`
   
For the first restriction, you can use the function :math:`\sqrt{x}`.

For the second restriction, you can use the function :math:`\sqrt{5 - x}`. (or the square root of any function that is positive on :math:`(-\infty, 5]`)

For the last restriction, divide your function by :math:`x - 3`, since that will create an asympotote at :math:`x = 3`.

Now, combining these restriction, we get :math:`f(x) = \dfrac{\sqrt{x}\sqrt{5 - x}}{x - 3} = \dfrac{\sqrt{x(5-x)}}{x-3}`.

Q6: Find the domain of :math:`f(x) = |x + 4| - x^2`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you have the sum or difference of two functions (in this case :math:`|x + 4|` and :math:`x^2`), then the
domain is the intersection of the two.

Thus, since the domain of both functions in this case is all real numbers, the domain is :math:`( -\infty, \infty )`.

.. that one practice question


Sketching functions
-------------------

Q7: Sketch :math:`y = 3log_2(x + 4) - 2`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Let's first get the graph of :math:`log_2(x)`.

You know that :math:`log_2(x)` is the inverse of :math:`2^x`, so using the table of values for :math:`2^x`:

+-----+------+
| x   | y    |
+=====+======+
| -2  | 0.25 |
+-----+------+
| -1  | 0.5  |
+-----+------+
| 0   | 1    |
+-----+------+
| 1   | 2    |
+-----+------+
| 2   | 4    |
+-----+------+

we can switch the :math:`x` and :math:`y` columns to get the table of values for :math:`log_2(x)`.

+-----+------+
| x   | y    |
+=====+======+
| 0.25| -2   |
+-----+------+
| 0.5 | -1   |
+-----+------+
| 1   | 0    |
+-----+------+
| 2   | 1    |
+-----+------+
| 4   | 2    |
+-----+------+

From the equation, you can see that the following transformations were applied on the graph of :math:`log_2(x)`

1. Vertical stretch by a factor of 3
2. Vertical shift down 2 units
3. Horizontal shift left 4 units

You can plot these transformations on the table of values and then graph.

+----------------+----------------+
| :math:`x - 4`` | :math:`3y - 2` |
+================+================+
| -3.75          | -8             |
+----------------+----------------+
| -3.5           | -5             |
+----------------+----------------+
| -3             | -2             |
+----------------+----------------+
| -2             | 1              |
+----------------+----------------+
| 0              | 4              |
+----------------+----------------+

Q8: What is the domain of :math:`y = 3log_2(x + 4) - 2`?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Recall that you can only take the log of a positive number (which means 0 is also excluded), so solving
for the inequality :math:`x + 4 > 0` gives us :math:`x > -4`. The domain is :math:`(-4, \infty)`.

Q9: Sketch :math:`y = \sqrt{4 - x^2}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Plot the points, and you'll see the upper half of a circle with radius 2 centered around the origin.

The equation of a circle is :math:`x^2 + y^2 = r^2`, where :math:`r` is the radius.

So, manipulating our equation gives us 

:math:`y^2 = 4 - x^2`

:math:`y^2 + x^2 = 2^2`

Which is a circle with radius 2. But, note that from the original equation, :math:`y` is always
positive, so we only take the part of the circle where :math:`y \geq 0`.

Function inverses
-----------------

Q10: Find the inverse of :math:`y = e^x - 7`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Switch x and y in the equation, and then solve for y. We get:

.. math::
   \begin{aligned}
   x &= e^y - 7 \\
   x + 7 &= e^y \\
   ln(x + 7) &= ln(e^y) \\
   ln(x + 7) &= y
   \end{aligned}

So the inverse if :math:`y = ln(x + 7)`

Q11: Find the inverse of :math:`y = x^2` restricted on :math:`x \geq 0`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Without the domain restriction, :math:`y = x^2` wouldn't pass the horizontal
line test and therefore wouldn't have an inverse. But with this domain restriction,
we can find such an inverse for the function.

So you can do:

.. math::
   \begin{aligned}
   x &= y^2 \\
   \sqrt{x} &= \sqrt{y^2} \\
   \sqrt{x} &= |y| \\
   y &= \pm \sqrt{x}
   \end{aligned}

But note how when you take the inverse of a function, the domain and range switch. Since your
domain is :math:`x \geq 0`, your range for your inverse is :math:`y \geq 0` which means that 
the equation :math:`y = \pm \sqrt{x}` should actually be :math:`y = \sqrt{x}`, and this, is also
your inverse.

Q12: Let :math:`f(x) = e^{x^3 - 1} + 2x - 1`. Evaluate :math:`f^{-1}(\dfrac{1}{e} - 1)`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

What we are looking for is the value of :math:`x` that maps :math:`f(x)` to :math:`\dfrac{1}{e} - 1`.

Make a table of values for f(x).

+-----+--------------------+
| x   | y                  |
+=====+====================+
| -2  | :math:`e^{-9} - 5` |
+-----+--------------------+
| -1  | :math:`e^{-2} - 5` |
+-----+--------------------+
| 0   | :math:`e^{-1} - 1` |
+-----+--------------------+
| 1   | :math:`2`          |
+-----+--------------------+
| 2   | :math:`e^{7} + 4`  |
+-----+--------------------+

When :math:`x = 0`, we have what we want! So :math:`f^{-1}(\dfrac{1}{e} - 1) = 0`.

Absolute values
---------------

Q13: Solve the equation :math:`\dfrac{|x + 4|}{|x - 1|} = 5`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. math::
   \begin{aligned}
   \dfrac{|x + 4|}{|x - 1|} &= 5 \\
   |\dfrac{x + 4}{x - 1}| &= 5 \\
   \dfrac{x + 4}{x - 1} &= \pm 5
   \end{aligned}

Solve for :math:`\dfrac{x + 4}{x - 1} = 5` and :math:`\dfrac{x + 4}{x - 1} = -5`.

Q14: Solve the inequality :math:`|x - 5| \lt 3`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Using inequality properties, we can get 

.. math::
   \begin{aligned}
   -3 \lt\; &x - 5 \lt 3 \\
   -3 + 5 \lt\; &x - 5 + 5 \lt 3 + 5\\
   2 \lt\; &x \lt 8
   \end{aligned}

Inequalities
------------

Q15: Solve the inequality :math:`x^3 + 3x^2 > -2x`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Move the :math:`-2x` to the left side to get :math:`x^3 + 3x^2 + 2x > 0`.

Factor out :math:`x` to get :math:`x(x^2 + 3x + 2) > 0`.

Factor the quadratic to get :math:`x(x+2)(x+1)>0`.

Let :math:`f(x) = x(x+2)(x+1)`. Now, use a number line, mark the x-intercepts,
and check the values in between the x-intercepts to see if they're greater than 0.

:math:`f(x)` is useful here since you can show your calculations by writing something like
:math:`f(-0.5)=-\dfrac{3}{8} < 0` for your number line.