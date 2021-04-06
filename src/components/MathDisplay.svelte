<script>
  import "mathquill/build/mathquill.js";
  import "mathquill/build/mathquill.css";
  let inputElement;
  let mq;
  export let value = "";
  $: mq = MathQuill.getInterface(2).MathField(inputElement, {
    spaceBehavesLikeTab: true,
    handlers: {}
  });
  $: if (mq) {
    mq.latex(value);
  }
</script>

<span bind:this={inputElement} />
