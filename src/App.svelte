<script>
  import {
    MaterialApp,
    AppBar,
    Button,
    Container,
    Divider
  } from "svelte-materialify/src";
  import { GreensFctCalc, Wronskian } from "./modules/calc.js";
  import MathInput from "./components/MathInput.svelte";
  import MathDisplay from "./components/MathDisplay.svelte";
  let y_1 = "",
    y_2 = "",
    f = "",
    x_0 = "";
  let answer = "";
  let w = "";
  function submitInputs() {
    try {
      answer = GreensFctCalc(y_1, y_2);
    } catch (e) {
      alert(e.toString());
    }
    try {
      w = Wronskian(y_1, y_2);
    } catch (e) {
      alert(e.toString());
    }
  }
  function clearAll() {
    answer = "";
    w = "";
    y_1 = "";
    y_2 = "";
  }
</script>

<style>
  h3 {
    margin-top: 24px;
    margin-bottom: 16px;
  }
  :global(.s-app) {
    height: 100%;
  }
  .padding > :global(.mq-math-mode) {
    margin-top: 25px;
  }
  :global(.yellow) {
    background-color: rgb(253, 185, 57);
  }

  :global(.s-btn) {
    margin: 20px;
  }
</style>

<MaterialApp>
  <AppBar dense>
    <span slot="title">Green's Function Calculator</span>
    <div style="flex-grow:1;" />
    <span style="margin-right: 25px">
      Vignav Ramesh, Kento Nishi, Preston Fu, Nikhil Gargeya
    </span>
  </AppBar>
  <Container class="text-left">
    <h6 class="mt-4 mb-4">
      Use this online tool to automatically calculate Green's functions! Given
      the nonhomogeneous differential equation $$y'' + P(x)y' + Q(x)y =
      f(x),$$the Green's function is given by $$G(x,t) = \frac{'{'}y_1(t)y_2(x)
      - y_1(x)y_2(t){'}'}{'{'}W(t){'}'},$$ where \( W(t) \) is the Wronskian and
      is given by $$W(y_1(t), y_2(t)) = \begin{'{'}vmatrix{'}'}y_1(t)& y_2(t) \\
      y_1'(t) & y_2'(t) \end{'{'}vmatrix{'}'}.$$ Enter the values of \(y_1\) and
      \(y_2\) below to automatically calculate the Wronskian and Green's
      function!
    </h6>
  </Container>
  <Container class="text-center">
    <h6 class="mt-4 mb-4">
      \(y_1(x) =\)
      <MathInput bind:value={y_1} />
      , \(y_2(x) =\)
      <MathInput bind:value={y_2} />
      <br />
      <br />
      <Button class="yellow" on:click={submitInputs}>SUBMIT</Button>
      <Button class="yellow" on:click={clearAll}>CLEAR</Button>
      <br />
      <br />
      <Divider />

      <br />
      <strong>Wronskian \(W(y_1, y_2)\):</strong>
      <MathDisplay value={w} />
      <br />
      <br />

      <strong>Green's Function:</strong>
      <MathDisplay value={answer} />
    </h6>
  </Container>
</MaterialApp>
