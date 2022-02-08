<script>
    import { createEventDispatcher } from "svelte";

    // Takes the title as a prop
    export let title;

    // Creating Variables for Dispatch Scripts
    const dispatch = createEventDispatcher();
    
    // Dispatching cancel-signal to parent component
    function closeModal() {
      dispatch("cancel");
    }
  </script> 

<!-- Displays the Modal window -->
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