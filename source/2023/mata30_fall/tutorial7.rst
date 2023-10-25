Tutorial Week 7
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


Derivative Notation
-------------------

There are two types of notation used to represent derivatives: Leibniz's notation and Lagrange's notation. 

Leibniz's notation
~~~~~~~~~~~~~~~~~~

In Leibniz's notation, to take the derivative of something, you prepend it with :math:`\frac{d}{dx}`. For example, to take 
the derivative of g(x), you would write :math:`\frac{d}{dx}g(x)`. Often times, this gets "simplified" to :math:`\frac{dg(x)}{dx}` or :math:`\frac{dg}{dx}`.

For higher order derivative, we write the order as an exponent of the differential operator, such as :math:`\frac{d^5}{dx^5}f(x)`.

Lagrange's notation
~~~~~~~~~~~~~~~~~~~

In lagrange's notation, we use prime marks ( ' ) to denote the derivative of a function, i.e. :math:`f'(x)` is the derivative of :math:`f(x)`. Of course, it
isn't exactly practical to keep writing the prime marks for higher order derivatives, so we simply write the derivative order number directly. For example, :math:`f^{(12)}(x)`.

Evaluating derivative
~~~~~~~~~~~~~~~~~~~~~

If you want to evaluate a derivative at a point, we write a vertical bar after the derivative and write the value we're evaluating at as a subscript after the bar.

For example, :math:`\frac{df(x)}{dx} |_{x = 3}`.

Derivative Rules
----------------

There are a few derivative rules that make our lives a lot easier when computing derivatives (do you know anyone who would enjoy using the limit definition of a derivative to calculate something like the derivative of :math:`\sqrt{sin(cos(x^5)) + ln(x) - 3x^{3x}`?)

- Constant multiple rule: :math:`\frac{d}{dx} cf(x) = cf'(x)`.

- Sum/difference rule: :math:`\frac{d}{dx} f(x) + g(x) = f'(x) + g'(x)`

- Product rule: :math:`\frac{d}{dx}(f(x) \cdot g(x)) = f(x)g'(x) + f'(x)g(x)`

- Quotient rule: :math:`\frac{d}{dx} \frac{f(x)}{g(x)} = \frac{f'(x)g(x) - f(x)g'(x)}{g(x)^2}`

- Chain rule: :math:`\frac{d}{dx} f(g(x)) = f'(g(x))\cdot g'(x)`

Common derivatives
------------------

Just like how we have generalised derivative rules, we also have some rules for some specific commonly encountered functions.

- :math:`\frac{d}{dx}k = 0`

- :math:`\frac{d}{dx} x^n = nx^{n-1}`

- :math:`\frac{d}{dx} sin(x) = cos(x)`

- :math:`\frac{d}{dx} cos(x) = -sin(x)`

- :math:`\frac{d}{dx} tan(x) = sec^2(x)`

- :math:`\frac{d}{dx} k^x = ln(k)k^x` (Special case: :math:`\frac{d}{dx} e^x = e^x`)

- :math:`\frac{d}{dx} log_a(x) = \frac{1}{aln(x)}` (Special case: :math:`\frac{d}{dx} ln(x) = \frac{1}{x}`)

Derivative Practice
-------------------

Q1: Let :math:`f(x) = x^3`. :math:`h` be some function defined in terms of :math:`f(x)`, and :math:`\frac{dh}{df} = 3 + 2x`. Find :math:`\frac{dh}{dx}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

Think about what it means if f is a function of x. In this situation, h being a function defined in terms of f(x) means that h is wrriten in the form of :math:`h(f(x)) = something`, such as :math:`h(f(x)) = f(x)^3`.

We can use chain rule here. Because h is written in the form of :math:`h(f(x))`, 

.. math:: 
    \begin{aligned}
        \frac{d}{dx} h(f(x)) &= h'(f(x))f'(x) \\
        &= \frac{dh}{df} \frac{df}{dx} \\
        &= (3 + 2x) \cdot \frac{d}{dx}x^3 \\
        &= (3 + 2x) \cdot 3x^2 \\
        &= 9x^2 + 6x^3
    \end{aligned}

.. raw:: html

        </div>
    </div>

Q2: Find the derivative of :math:`|x + 2| - cos(x)`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">


Piecewise functions have piecewise derivatives, but with some extra care taken.

We know that :math:`|x + 2| = \begin{cases} x + 2 \;\;\;\;\;\;\; \text{      if } x \ge -2 \\ -(x+2) \; \text {   if } x \lt -2 \end{cases}`.

So let's do the same for the derivative too. But keep in mind that for a derivative to exist, the left and right derivative have to be equal.

:math:`\frac{d}{dx}|x+2| - cos(x) = \begin{cases} \frac{d}{dx}x + 2 - cos(x) \;\;\;\;\;\;\;\; \text{      if } x \gt -2 \\ ? \;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\text{ if } x = -2 \\ \frac{d}{dx}  -(x+2) - cos(x) \; \text {   if } x \lt -2 \end{cases}`

We can find that 

:math:`\frac{d}{dx}x + 2 - cos(x) = 1 + sin(x)` and :math:`\frac{d}{dx}-(x + 2) - cos(x) = -1 + sin(x)`.

At x = 2, we have the left and right derivatives :math:`1 + sin(-2) \neq -1 + sin(-2)` so the derivative at x = -2 does not exist.

Thus the derivative is:

:math:`\frac{d}{dx}|x+2| - cos(x) = \begin{cases} 1 + sin(x) \;\;\;\; \text{      if } x \gt -2 \\ DNE \;\;\;\;\;\;\;\;\;\;\;\text{ if } x = -2 \\ -1 + sin(x) \; \text {   if } x \lt -2 \end{cases}`


.. raw:: html

        </div>
    </div>

Logarithmic Differentiation
---------------------------

Logarithmic differentiation is helpful when dealing with exponential functions that have variables in both the base and the exponent, as well as 
large composite functions joined by multiplication and division.

Q3: Find the derivative of :math:`(\sqrt[3]{2x})^{sin(x)}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

We start with :math:`f(x) = (\sqrt[3]{2x})^{sin(x)}`,

then we take the log of both sides, giving us :math:`\ln(f(x)) = ln((\sqrt[3]{2x})^{sin(x)})`

We can then take the derivative on both sides and solve for :math:`f'(x) = \frac{df}{dx}`.

.. math::
    \begin{aligned}
    \ln(f(x)) &= ln((\sqrt[3]{2x})^{sin(x)}) \\
    \ln(f(x)) &= sin(x)ln((\sqrt[3]{2x})) \\
    \frac{d}{dx}\ln(f(x)) &= \frac{d}{dx}sin(x)ln((\sqrt[3]{2x})) \\
    \frac{1}{f(x)}f'(x) &= cos(x)ln((\sqrt[3]{2x})) + sin(x)(\frac{1}{\sqrt[3]{2x}})(\frac{1}{3}(2x))^{\frac{-2}{3}}(2) \\
    f'(x) &= f(x)(cos(x)ln((\sqrt[3]{2x})) + sin(x)(\frac{1}{\sqrt[3]{2x}})(\frac{1}{3}(2x))^{\frac{-2}{3}}(2)) \\
    f'(x) &= (\sqrt[3]{2x}^{sin(x)})(cos(x)ln((\sqrt[3]{2x})) + sin(x)(\frac{1}{\sqrt[3]{2x}})(\frac{1}{3}(2x))^{\frac{-2}{3}}(2)) \\
    \end{aligned}

.. raw:: html

        </div>
    </div>


Implicit Differentiation
------------------------

We can use implicit differentiation when one variable is a function of another variable in our equation, e.g. y is a function of x or y(x).

Here are some examples to get you used to implicit differentiation.
When differentiating implicitly for the variables x and y, and y is a function of x, we have:

- :math:`\frac{d}{dx} y = \frac{dy}{dx}`

- :math:`\frac{d}{dx} y^2 = 2y\frac{dy}{dx}`

- :math:`\frac{d}{dx} cos(x)y^3 = -sin(x)y^3 + cos(x)3y^2\frac{dy}{dx}`

Q4: If y is a function of x, find :math:`\frac{dy}{dx}` for :math:`3x^2y + 4y = 3y^4 + x`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

We take the derivative on both sides and solve for :math:`\frac{dy}{dx}`.

.. math::
    \begin{aligned}
    \frac{d}{dx}3x^2y + 4y &= \frac{d}{dx}3y^4 + x \\
    y\frac{d}{dx}3x^2+ 3x^2\frac{d}{dx}y + \frac{d}{dx}4y &= \frac{d}{dx}3y^4 + \frac{d}{dx}x \\
    6yx + 3x^2\frac{dy}{dx} + 4\frac{dy}{dx} &= 12y^3\frac{dy}{dx} + 1 \\
    \frac{dy}{dx} = \frac{1 - 6yx}{3x^2 + 4 - 12y^3}
    \end{aligned}

.. raw:: html

        </div>
    </div>


Q5: What is the equation of the tangent line of :math:`tan(x + y) = 4x + 1` at :math:`(0, \frac{\pi}{4})`?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

To get the equation of a line, we need the slope and a point on the line. We're given the point :math:`(0, \frac{\pi}{4})`,
so all we need to do now is find the slope, which will be the deriviative :math:`\frac{dy}{dx}`.

.. math::
    \begin{aligned}
    \frac{d}{dx} tan(x + y) &= \frac{d}{dx} 4x + 1 \\
    sec^2(x + y)(1 + \frac{dy}{dx}) &= 4 + 0 \\
    \frac{dy}{dx} &= \frac{4 - sec^2(x + y)}{sec^2(x+y)} \\
    \end{aligned}

Evaluating this deriviative at :math:`(0, \frac{\pi}{4})` gives us

.. math::
    \begin{aligned}
    \frac{dy}{dx} |_{x = 0, y = \frac{\pi}{4}} &= \frac{4 - sec^2(0 + \frac{\pi}{4})}{sec^2(0 + \frac{\pi}{4})} \\
    &= \frac{4 - \frac{1}{cos^2(\frac{\pi}{4})}}{\frac{1}{cos^2(\frac{\pi}{4})}} \\
    &= \frac{4 - \frac{1}{(\frac{1}{\sqrt{2}})^2}}{\frac{1}{(\frac{1}{\sqrt{2}})^2}} \\
    &= \frac{4 - 2}{2} \\
    &= 1
    \end{aligned}

The slope :math:`m = 1`, so for 

:math:`y = mx + b`, we can find b by substituting :math:`(x, y) = (0, \frac{\pi}{4})`.

.. math::
    \begin{aligned}
    \frac{\pi}{4} &= (1)(0) + b \\
    b &= \frac{\pi}{4}
    \end{aligned}

So :math:`b = \frac{\pi}{4}` and the equation of the line is :math:`y = x + \frac{\pi}{4}`.

.. raw:: html

        </div>
    </div>
