<script>
  import {
    MaterialApp,
    AppBar,
    Button,
    Container,
    Divider,
  } from "svelte-materialify/src";
  import { GreensFctCalc, y_p } from "./modules/calc.js";
  import MathInput from "./components/MathInput.svelte";
  import MathDisplay from "./components/MathDisplay.svelte";
  let y_1 = "",
    y_2 = "",
    f = "",
    x_0 = "";
  let answer = "";
  let answer2 = "";
  function submitInputs() {
    try {
      answer = GreensFctCalc(y_1, y_2);
    } catch (e) {
      console.log(e);
    }
    try {
      answer2 = y_p(y_1, y_2, f, x_0);
    } catch (e) {
      console.log(e);
    }
  }
  function clearAll() {
    answer = "";
    answer2 = "";
  }
</script>

<MaterialApp>
  <AppBar dense>
    <span slot="title">Green's Functions for Initial-Value Problems</span>
    <div style="flex-grow:1;" />
    <span style="margin-right: 25px">
      Vignav Ramesh, Kento Nishi, Preston Fu, Nikhil Gargeya
    </span>
  </AppBar>
  <Container class="text-left">
    <h6 class="mt-4 mb-4">
      Solve initial-value problems using Green's functions! Given the
      nonhomogeneous differential equation $$y'' + P(x)y' + Q(x)y = f(x)$$ with
      homogeneous initial conditions \(y(x_0) = y'(x_0) = 0\) and complementary
      function $$y_c = c_1y_1 + c_2y_2,$$ enter the values of \(y_1\), \(y_2\),
      \(f\), and \(x_0\) below to automatically calculate the particular
      solution \(y_p\).
    </h6>
  </Container>
  <Container class="text-center">
    <h6 class="mt-4 mb-4">
      \(y_1(x) =\)
      <MathInput bind:value={y_1} />
      , \(y_2(x) =\)
      <MathInput bind:value={y_2} />
      , \(f(x) =\)
      <MathInput bind:value={f} />
      , \(x_0 =\)
      <MathInput bind:value={x_0} />

      <br />
      <br />
      <Button class="yellow" on:click={submitInputs}>SUBMIT</Button>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <Button class="yellow" on:click={clearAll}>CLEAR</Button>
      <br />
      <br />
      <Divider />

      <br />
      <strong>Green's Function:</strong>
      <MathDisplay value={answer} />
      <br />
      <br />
      <strong>\(y_p\):</strong>
      <MathDisplay value={answer2} />
    </h6>
  </Container>
</MaterialApp>

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
</style>
