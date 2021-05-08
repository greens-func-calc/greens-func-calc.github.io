<script>
  import 'mathquill/build/mathquill.js';
  import 'mathquill/build/mathquill.css';
  let inputElement;
  let mq;
  export let value = '';
  $: mq = MathQuill.getInterface(2).MathField(inputElement, {
    spaceBehavesLikeTab: true,
    handlers: {},
  });
  $: if (mq) {
    mq.latex(value);
  }
  $: if (inputElement) {
    inputElement.querySelectorAll('*').forEach((e) => (e.tabIndex = -1));
  }
</script>

<span bind:this={inputElement} style="pointer-events: none;" />
