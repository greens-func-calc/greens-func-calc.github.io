<script>
  import * as S from "svelte-materialify/src";
  import { GreensFctCalc, y_p } from "./modules/calc.js";
  import MathInput from "./components/MathInput.svelte";
  import MathDisplay from "./components/MathDisplay.svelte";
  let y_1 = "",
    y_2 = "",
    f = "",
    x_0 = "";
  let answer = "";
  $: try {
    answer = GreensFctCalc(y_1, y_2);
  } catch (e) {
    // console.log(e);
  }
  let answer2 = "";
  $: try {
    answer2 = y_p(y_1, y_2, f, x_0);
  } catch (e) {
    console.log(e);
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
</style>

<S.MaterialApp>
  <S.AppBar dense>
    <span slot="title">Green's Functions for Initial-Value Problems</span>
    <div style="flex-grow:1;" />
    <span style="margin-right: 25px">
      Vignav Ramesh, Kento Nishi, Preston Fu, Nikhil Gargeya
    </span>
  </S.AppBar>
  <S.Container class="text-left">
    <h6 class="mt-4 mb-4">
      Solve initial-value problems using Green's functions! Given the
      nonhomogeneous differential equation $$y'' + P(x)y' + Q(x)y = f(x)$$ with
      homogeneous initial conditions \(y(x_0) = y'(x_0) = 0\) and complementary
      function $$y_c = c_1y_1 + c_2y_2,$$ enter the values of \(y_1\), \(y_2\),
      \(f\), and \(x_0\) below to automatically calculate the particular
      solution \(y_p\).
    </h6>
  </S.Container>
  <S.Container class="text-center">
    <h6 class="mt-4 mb-4">
      \(y_1 =\)
      <MathInput bind:value={y_1} />
      , \(y_2 =\)
      <MathInput bind:value={y_2} />
      , \(f =\)
      <MathInput bind:value={f} />
      , \(x_0 =\)
      <MathInput bind:value={x_0} />

      <br />
      <br />
      <S.Divider />

      <br />
      <strong>Green's Function:</strong>
      <MathDisplay value={answer} />
      <br />
      <br />
      <strong>\(y_p\):</strong>
      <MathDisplay value={answer2} />
    </h6>
  </S.Container>
</S.MaterialApp>
