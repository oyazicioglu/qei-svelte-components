<script>
  import { createUId } from "./../utils/uid-creator.js";
  /**
   * @type {'inherit' | 'primary' | 'accent' | 'warning' | 'info' | 'success' | 'danger'}
   */
  export let color = "inherit";

  /**
   * @type {'default' | 'extra-small' | 'small' | 'large' | 'extra-large'}
   */
  export let size = "default";
  export let ref = undefined;
  const id = createUId();

  $: classes = [`qei-spinner`, `size-${size}`, `color-${color}`, $$restProps.class].filter(Boolean).join(" ");
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={$$restProps.style}>
  <div class="loader" />
</div>
