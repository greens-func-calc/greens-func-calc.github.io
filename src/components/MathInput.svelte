<script>
  import 'mathquill/build/mathquill.js';
  import 'mathquill/build/mathquill.css';
  let inputElement;
  let mq;
  export let value = '';
  $: mq = MathQuill.getInterface(2).MathField(inputElement, {
    spaceBehavesLikeTab: true,
    handlers: {
      edit: () => {
        value = mq
          .text()
          .replaceAll('\\s*i*n *', 'sin')
          .replaceAll('\\c*o*s *', 'cos');
        console.log(value);
      },
    },
  });
  $: if (mq && !value) mq.latex('');
</script>

<span bind:this={inputElement} />
