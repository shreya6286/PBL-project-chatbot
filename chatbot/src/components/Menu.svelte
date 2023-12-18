<script>
    import { mode } from "../store/memory";

    let modeLabel = "Light mode";

    function changeMode() {
        if ($mode==="light"){
            modeLabel = "Light mode";
            mode.set('dark')
        }
        else {
            modeLabel = "Dark mode";
            mode.set('light')
        }
    }

    import { goto } from "$app/navigation";

    function logOut() {
        goto('/logout');
    }
</script>

<style>
    .logo{
        height: 50px; 
        width: 45px;
        margin: 15px;
    }
    .name-dark{
        margin-top: 30px;
        color: white;
        font-family: 'Montserrat';
        margin-left: -5px;
    }
    .name-light{
        margin-top: 30px;
        color: rgb(25, 25, 236);
        font-family: 'Montserrat';
        margin-left: -5px;
    }
    .menu-dark{
        background: rgba(0, 0, 0, 0.3);
        height: 100vh;
        margin-right: 50px;
        box-shadow: 5px 5px 15px rgb(37, 37, 37);
    }
    .menu-light{
        background: rgba(255, 255, 255, 0.3);
        height: 100vh;
        margin-right: 50px;
        box-shadow: 5px 5px 15px rgb(177, 175, 175);
    }
    hr{
        color: gainsboro;
    }
    .flex-box2{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
    }
    .new-chat{
        min-height: 400px;
        max-height: 400px;
        overflow-y: auto;
    }
</style>

<div class="{$mode === "dark" ? "menu-dark" : "menu-light"} flex-box2">
    <div class="row">
        <div class="col-3">
            <img src="logo.png" alt="" class="logo"> 
        </div>
        <div class="col-9 {$mode === "dark" ? "name-dark" : "name-light" }">
            <h4>QUIX</h4>
        </div>
    </div>
    
    <div class="p-1 new-chat">
        <button class="btn {$mode === "dark" ? "btn-dark" : "btn-light"} shadow form-control mt-2"><i class="bi bi-plus-lg"></i> New Chat</button>
    </div>

    <hr>
    <div class="p-1">
        <button class="btn {$mode === "dark" ? "btn-dark" : "btn-light"} shadow form-control"><i class="bi bi-trash3"></i> Clear conversations</button>
    </div>
    <div class="p-1">
        <button class="btn {$mode === "dark" ? "btn-dark" : "btn-light"} shadow form-control"
        on:click={changeMode}>{#if $mode === "dark"}<i class="bi bi-brightness-high"></i>
        {:else}<i class="bi bi-moon-stars"></i>  
        {/if} { modeLabel }</button>
    </div>
    <div class="p-1">
        <button class="btn {$mode === "dark" ? "btn-dark" : "btn-light"} shadow form-control"><i class="bi bi-mic-fill"></i> Voice chat</button>            </div>
    <div class="p-1">
        <button class="btn {$mode === "dark" ? "btn-dark" : "btn-light"} shadow form-control"
        on:click={logOut}><i class="bi bi-box-arrow-right"></i>&nbsp; Log out</button>
    </div>        
</div>
   