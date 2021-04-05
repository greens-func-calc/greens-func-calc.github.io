<script>
  import "mathquill/build/mathquill.js";
  import "mathquill/build/mathquill.css";
  import * as S from "svelte-materialify/src";
  let inputElement;
  $: MathQuill.getInterface(2).MathField(inputElement, {
    spaceBehavesLikeTab: true,
    handlers: {
      edit: () => {},
    },
  });
</script>

<S.MaterialApp>
  <S.AppBar dense>
    <span slot="title"> Title </span>
    <div style="flex-grow:1;" />
    <S.Button text>Link</S.Button>
    <a href="https://github.com/TheComputerM/svelte-materialify/stargazers">
      <S.Button text>Star</S.Button>
    </a>
  </S.AppBar>
  <S.Container class="text-center">
    <span style="margin-top: 50px;" bind:this={inputElement} />
  </S.Container>
</S.MaterialApp>

<style>
  h3 {
    margin-top: 24px;
    margin-bottom: 16px;
  }
</style>
