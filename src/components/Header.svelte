<script>
    import Profile from "../Images/Profile.jpg"

    // Takes the profile name and title as props
    export let profileName ="Farzane Zafar";
    export let title ="Super Admin";
</script>

<!-- Displays the header-->
<header>
        <h2>
            <label for="nav-toggle">
                <span class="la la-bars"></span>
             </label>
             MyDesk
           </h2>      
    <div class="search-wrapper">
     <span class="las la-search"></span>
        <input type="search" placeholder="Search here"/>
    </div>
    <div class="user-wrapper">
        <img src="{Profile}" width="40px" height="40px" alt="">
        <div>
            <h4>{profileName}</h4>
            <small>{title}</small>
        </div>
    </div>
</header>