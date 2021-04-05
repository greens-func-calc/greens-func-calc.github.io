<script>
  import "mathquill/build/mathquill.js";
  import "mathquill/build/mathquill.css";
  let viewElement;
  export let value;
  let mq;
  $: mq = MathQuill.getInterface(2).MathField(viewElement, {
    spaceBehavesLikeTab: true,
  });
  $: if (mq) {
    console.log(value);
    mq.typedText(value);
    viewElement.classList.remove("mq-editable-field");
    const e = viewElement.querySelector(".mq-textarea");
    if (e) e.remove();
  }
</script>

<span bind:this={viewElement} />
