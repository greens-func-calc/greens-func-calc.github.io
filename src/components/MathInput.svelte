<script>
  import 'mathquill/build/mathquill.js';
  import 'mathquill/build/mathquill.css';
  import AlgebraLatex from 'algebra-latex';
  import { parse } from 'mathjs';
  let inputElement;
  let mq;
  export let value = '';
  $: mq = MathQuill.getInterface(2).MathField(inputElement, {
    spaceBehavesLikeTab: true,
    handlers: {
      edit: () => {
        try {
          value = new AlgebraLatex().parseLatex(mq.latex()).toMath();
        } catch (e) {
        }
      },
    },
  });
  $: if (mq && !value) mq.latex('');
</script>

<span bind:this={inputElement} />
