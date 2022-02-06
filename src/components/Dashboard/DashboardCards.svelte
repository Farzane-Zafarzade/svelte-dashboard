<script>
    import Card from "./Card.svelte";
    import projects from "../Prjct/Projects-store";
    import customers from "../Customer/customers-store";
    import orders from "../Order/Orders-store";
    import tasks from "../Task/Tasks-store";
    
    const cards = [
      {cardTitle: "Customers", cardIcone: "las la-users", number: $customers.length},
      {cardTitle: "Projects", cardIcone: "las la-clipboard", number: $projects.length },
      {cardTitle: "Orders ", cardIcone: "las la-shopping-bag", number: $orders.length },
      {cardTitle: "Tasks", cardIcone: "las la-tasks", number: $tasks.length },
    ];
</script>


{#each cards as card}
  <div class="card-single">
    <Card cardTitle={card.cardTitle} cardIcone={card.cardIcone} number={card.number}/>
</div>
{/each}

