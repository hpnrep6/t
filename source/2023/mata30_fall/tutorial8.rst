Tutorial Week 8
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

Curve Sketching
---------------

There isn't one single way to do curve sketching, but the following steps present an easy-to-follow method that ensures
you'll have all the information required to sketch:

1. Domain

2. Intercepts (x and y intercepts)

3. Symmetry (odd or even)

4. Asymptotes (horizontal, vertical, slant/oblique)

5. Critical points and intervals of increase/decrease (first derivative)

6. Concavity and inflection points (second derivative)

7. Sketch

Q1: Sketch :math:`f(x) = \ln\left(x\right)^{2}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Derivatives of inverse functions
--------------------------------

There's a helpful formula to find the derivative of an inverse function, that being :math:`(f^{-1}(x))' = \frac{1}{f'(f^{-1}(x))`.

Q2: Given :math:`f(x) = x^3 + ln(7x + 2) + 1`, find :math:`(f^{-1})'(1)`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Applications of derivatives and related rates
---------------------------------------------

To begin with related rates problems, you'll need to know the formulas for the surface area and volume of some basic shapes.

.. list-table:: 

    * - Shape
      - Area/Volume
      - Perimeter/Surface Area
    * - Triangle
      - :math:`\frac{1}{2}\text{base}\cdot\text{height}`
      - :math:`\text{Side 1} + \text{Side 2} + \text{Side 3}``
    * - Rectangle
      - :math:`\text{length}\cdot\text{width}`
      - :math:`2 \cdot \text{length} + 2 \cdot {width}`
    * - Right Circular Cylinders
      - :math:`\pi \text{r}^2 \text{h}`
      - :math:`2\pi \text{rh} + 2 \pi \text{r}^2`
    * - Right Rectangular Prisms
      - :math:`\text{lwh}`
      - :math:`2\text{lw} + 2\text{wh} + 2\text{lh}`

Q3: A cylinder with a radius of :math:`4m` is being filled at a rate of :math:`2m^3/min`. How quickly is the height of the water changing?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q4: Ship A is located :math:`100km` west of ship B. Ship A is travelling at :math:`20km/h` east and ship B is travelling at :math:`30km/h` north. At what rate does the distance between the two ships change after :math:`6` hours?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

L'Hopital's Rule
----------------

L'Hopital's rule provides an easy to solve limits that otherwise would have been impossible/very difficult to compute using conventional algebra.

Q5: Compute :math:`\lim_{x \to 0} \frac{x + sin(x)}{x^2 + cos(x)sin(x)}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q6: Compute :math:`\lim_{x \to 0^+} xln(x)`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Q7: Compute :math:`\lim_{x \to \infty} \left(\frac{1}{e^{x}}+1\right)^{e^{x}}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~