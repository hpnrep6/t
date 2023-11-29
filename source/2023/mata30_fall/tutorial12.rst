Tutorial Week 12
================

.. toctree::
   :hidden:
   

.. raw:: html

    <script>
    window.MathJax = {
    loader: {load: ['[tex]/ams']},
    tex: {packages: {'[+]': ['ams']}}
    };
    </script>

Sigma Notation
--------------

We use sigma (:math:`\Sigma`) notation as a way to express sums of numbers.

With :math:`\Sigma_{n=3}^5n^2`, we sum from :math:`n = 3` to :math:`n = 5` inclusive, giving :math:`\Sigma_{n=3}^5n^2 = 3^2 + 4^2 + 5^2`.

With sums, we also have a few useful formulas, those being:

- :math:`\Sigma_{k = m}^n ca_k = c\Sigma_{k = m}^n a_k`

- :math:`\Sigma_{k = m}^n a_k + b_k = \Sigma_{k = m}^n a_k + \Sigma_{k = m}^n b_k`

- :math:`\Sigma_{k = 1}^n 1 = n`

- :math:`\Sigma_{k = 1}^n n = \frac{n(n+1)}{2}`

- :math:`\Sigma_{k = 1}^n n^2 = \frac{n(n+1)(2n+1)}{6}`

- :math:`\Sigma_{k = 1}^n n^3 = \frac{n^2(n + 1)^2}{4}`

Riemann Sums
------------

Riemann sums are used to approximate the area under a function by using rectangles.

To define a riemann sum from on the interval [a, b] for f(x), we need:

- :math:`\Delta x = \frac{b - a}{n}`

- :math:`x_k = a + k\Delta x` for :math:`k = 0, 1, 2, ... , n`

- :math:`x^\ast_k` is a point in :math:`[x_{k-1}, x_k]`

The riemann sum is :math:`\Sigma_{k=1}^n f(x_n^\ast)\Delta x`.

We have two common types of riemann sums, those being the left riemann sum and the right riemann sum.

The left riemann sum is defined with :math:`x^\ast_k = x_{k-1}` :math:`L_n = \Sigma_{k=1}^n f(x+{k-1})\Delta x = \Sigma_{k=1}^n f(a + (k-1)\Delta x)\Delta x`

The right riemann sum is defined with :math:`x^\ast_k = x_{k}` :math:`R_n = \Sigma_{k=1}^n f(x+{k})\Delta x = \Sigma_{k=1}^n f(a + k\Delta x)\Delta x`

Integrals
---------

Integrals are essentially riemann sums with an infinite number of partitions. That is, :math:`\int_a^b f(x) dx = \lim_{n\to \infty} \Sigma_{k=1}^n f(x^\ast_k) \Delta x`

Integral Properties
-------------------

- :math:`\int_a^b f(x) + g(x) dx= \int_a^b f(x) dx+ \int_a^b g(x) dx`

- :math:`\int_a^b kf(x) dx = k \int_a^b f(x) dx`

- :math:`\int_a^a f(x) dx = 0`

- :math:`\int_b^a f(x) dx = -\int_a^b f(x) dx`

- :math:`\int_a^b f(x) dx + \int_b^c f(x) dx = \int_a^c f(x) dx`

Fundamental Theorem of Calculus 2 (FTC 2)
-----------------------------------------

With FTC 2, you're able to evaluate integrals at the endpoints of your interval.

If :math:`\int f(x) dx = F(x)`, then :math:`\int_a^b f(x) dx = F(x) |_a^b = F(b) - F(a)`
