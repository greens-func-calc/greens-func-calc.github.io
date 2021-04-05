<script>
  import * as S from "svelte-materialify/src";
  import { GreensFctCalc } from "./modules/calc.js";
  import MathInput from "./components/MathInput.svelte";
  import MathDisplay from "./components/MathDisplay.svelte";
  let y_1 = "",
    y_2 = "",
    f = "",
    x_0 = "";
  let answer = "";
  $: try {
    answer = GreensFctCalc(y_1, y_2, f, x_0);
  } catch (e) {
    // console.log(e);
  }
</script>

<S.MaterialApp theme="dark">
  <S.AppBar dense>
    <span slot="title"> Green's Function Calculator </span>
    <div style="flex-grow:1;" />
    <S.Button text>Link</S.Button>
    <a href="https://github.com/TheComputerM/svelte-materialify/stargazers">
      <S.Button text>Star</S.Button>
    </a>
  </S.AppBar>
  <S.Container class="text-center">
    <MathDisplay value="y_1=" /><MathInput bind:value={y_1} />
    <MathDisplay value="y_2=" /><MathInput bind:value={y_2} />
    <MathDisplay value="f=" /><MathInput bind:value={f} />
    <MathDisplay value="x_0=" /><MathInput bind:value={x_0} />
    <br />
    <MathDisplay value={answer} />
  </S.Container>
</S.MaterialApp>

<style>
  h3 {
    margin-top: 24px;
    margin-bottom: 16px;
  }
  :global(.s-app) {
    height: 100%;
  }
</style>
