<script>
    import { createEventDispatcher } from "svelte";

    export let title;

    const dispatch = createEventDispatcher();
    
    function closeModal() {
      dispatch("cancel");
    }
  </script> 

<div class="modal-backdrop" on:click={closeModal} />
<div class="modal">
  <h3><span>{title}</span><i class="las la-times"on:click={closeModal}></i></h3>
  <div class="content">
    <slot />
  </div>
 <footer>
    <slot name="footer">
      <button on:click={closeModal}>Close</button>
    </slot>
  </footer>
</div>