<script>
    import { goto } from "$app/navigation";

    function gotologin(){
        goto('/login')
    }
    function gotosignin(){
        goto('/signin')
    }
</script>

<style>
    .bg{
        background-color: #01000f;
        height: 100vh;
    }
    menu{
        margin: 0px;
        padding: 0px;
    }
    img{
        max-width: 75px;
    }
    .flex{
        margin-top: 200px;
        display: flex;
        justify-content: center;
    }
    h4{
        margin-top: 15px;
        color: white;
        display: flex;
        justify-content: center;
    }
    h6{
        color: white;
        display: flex;
        justify-content: center;
    }
    .gap{
        row-gap: 10px;
    }
</style>

<menu>
    <div class="bg">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <div class="row flex">
                    <img src="./logo.png" alt="">
                    <h4>Welcome to Quix</h4>
                    <h6>Log in with your account to continue</h6>
                    <div class="row gap mt-3">
                        <div class="col-6">
                            <button class="form-control btn btn-primary" on:click={gotologin}>Log in</button>
                        </div>
                        <div class="col-6">
                            <button class="form-control btn btn-primary" on:click={gotosignin}>Sign up</button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="col-4"></div>
        </div>
    </div>
</menu>