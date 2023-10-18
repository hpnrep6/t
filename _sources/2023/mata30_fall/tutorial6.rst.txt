Tutorial Week 6
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

Midterm Rundown
---------------

As you all (should) know, your midterm is coming up in a few days. It'll most likely 
be your first math midterm, and possibly your first exam of the semester, so I'd like to try to 
familiarize you to how everything's going to work.

From now until 30 minutes before the midterm
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- Be prepared and familiarize yourself with the material (Practice is very important here)

- Have something to write with, such as a pen or pencil. Ideally, also have something to erase with. You may also bring a water bottle.

- Make sure to bring your TCard or some other form of photo ID.

- Know where the midterm is located (HL 170).

.. image:: https://images.squarespace-cdn.com/content/v1/5685cc770ab377ae44d74ccc/1593181262731-EGFZNGO7EAR6K15A9PGR/Michael+Muraz+-+Highland+Hall+71resize.jpg?format=1750w



Around 30 minutes before the midterm
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- Start heading to Highland Hall. Getting there early will always be better than getting there late.

- Wait outside to be let in by an invigilator.

- Double check that you have everything you need for the test.


Around 5 minutes before the midterm
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- A few minutes before the midterm is set to begin, you'll be allowed into the exam room.

- You'll be required to put your bags and coats either at the middle of the room or at the sides (in the last few tests I've had in HL 170 it was always in the middle of the room). Only bring to your seat something to write with, your ID, and maybe a water bottle. Be sure to leave any electronic devices (phones, smartwatches etc.) in your bag.

- Find a seat with a test paper on it. We will have your tests ready on the desks, so just find a desk with a test paper.


During the midterm
~~~~~~~~~~~~~~~~~~

- We'll let you know when to start writing, so wait patiently until then.

- Unless there are technical difficulties, there will be a timer displayed on the projector showing your remaining time.

- If you have any questions about anything on the test (or you would like to use the washroom), feel free to raise your hand and an invigilator will be there to help you.

- The invigilators will come around with an attendance sheet to check your IDs. When they come to you, show them your ID and sign your name.

- If you finish early, unless stated otherwise during the test, you can raise your hand up and an invigilator will come to collect your test. After that, you're free to go. Sometimes, you might not be allowed to leave during the last 10 minutes of the test.


After the midterm
~~~~~~~~~~~~~~~~~

- If you didn't submit early, stay in your seats and the invigilators will come collect your test. We'll let you know when all the tests have been collected so stay seated until then.

- After you're given the green light to leave, get your belongings from the middle/corner of the room and you're good to go.

Derivative Notation
-------------------

.. raw:: html

    <strike>

Now that we've gone through how the midterm, let's move on to something not on the midterm.

.. raw:: html

    </strike>

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


Midterm Review
--------------

Q3: Find :math:`\lim_{x \to 2} \frac{sin^3(4x - 8)}{2x - 4}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q4: Find the horizontal asympototes of :math:`f(x) = 2x + \sqrt{4x^2+3}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q5: Find :math:`\lim_{x \to -1} (x + 1)^2cos(\frac{1}{x + 1})`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~