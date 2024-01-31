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

Trigonometric Substitution (Trig Sub)
-------------------------------------

The method of Trig sub takes advantage of your trig identities to simplify integrals and in a way, it's
just fancy and strategic U-sub. Refer to the following table for which substitution to use:

.. list-table:: 

    * - Expression
      - :math:`\sqrt{a^2-x^2}`
      - :math:`\sqrt{a^2+x^2}`
      - :math:`\sqrt{x^2-a^2}`
    * - Substitution
      - :math:`x=a\sin \theta`
      - :math:`x=a\tan \theta`
      - :math:`x=a\sec \theta`
    * - Domain
      - :math:`\theta \in [-\frac{\pi}{2}, \frac{\pi}{2}]`
      - :math:`\theta \in (-\frac{\pi}{2}, \frac{\pi}{2})`
      - :math:`\theta \in [0, -\frac{\pi}{2}) \cup (\frac{\pi}{2}, \pi]`


Q1: Integrate :math:`\int \frac{1}{\sqrt{x^2 + 10x + 27}} dx`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

   <div class="answer-container">
      <button onClick="toggleClicked(this)" class="show-answer-button">Show Solution</button>
      <div class="answer">

.. image:: ../../2023/mata36_winter/images/t5/1.jpeg
   :width: 700

.. raw:: html

        </div>
    </div>

.. raw:: html

  <script>
    document.querySelectorAll('a.reference.external').forEach(function(link) {
      link.target = '_blank';
    });
  </script>

Practice Questions
------------------

C1: Rewrite :math:`tan(sec^{-1}(x))` without trig functions (using a triangle).
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

C2: Integrate :math:`\int \frac{1}{\sqrt{49 + x^2}} dx`. (Hint: :math:`\int sec(x) = ln|sec(x) + tan(x)| + C` from week 1)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

C3: Find the PFD of :math:`\frac{x^{2}+x+2}{x^{3}+x^{2}+x+1}`.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
