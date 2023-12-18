<script>
    import { callServerApi } from "../services/DataService";
    import Button from "../components/Button.svelte";
    import Menu from "../components/Menu.svelte";
    import { mode } from "../store/memory";

    let output = ""
    let msg = "";
    let input = ""
    let i = 0;
    let isStatus = false;

    async function onSearchClick(){
        isStatus = true;
        const result = await callServerApi(input)
        console.log (result)
        // output = result[0]['message']['content'];
        msg = await result[0]['message']['content'];
        isStatus = false;
        typeWriter();
    }

    function typeWriter(){
        if (i < msg.length){
            output += msg.charAt(i)
            i++
            setTimeout(typeWriter, 50)
        }
    }
</script>

<style>
    .bg-dark{
        background-image: url('banner-bg1.png');
        background-repeat: no-repeat;
        height: 100vh;
        background-size: cover;
    }

    .bg-light {
        background-image: url('light-bg5.jpeg');
        background-repeat: no-repeat;
        height: 100vh;
        background-size: cover;
    }
    
    .bot{
        max-height: 330px;
        max-width: 220px;
    }

    main {
    max-width: 100%;
    overflow-x: hidden;
    }
    .flex{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: 20px;
    }
    .ans-panel-dark{
        margin-left: 10%;
        background-color: rgb(24, 24, 24);       
        margin-top: 50px;
        min-height: 0px;
        max-height: calc(100vh - 200px);
        color: white;
        overflow-y: auto;
        border-radius: 5px;
    }
    .ans-panel-light{
        margin-left: 10%;
        background-color: beige;       
        margin-top: 50px;
        min-height: 0px;
        max-height: calc(100vh - 200px);
        color: black;
        overflow-y: auto;
        border-radius: 5px;
    }
    .mt{
        margin-top: 70px;
        margin-left: -15px;
        width: 850px;
    }
    .format-output{
        white-space: pre-line;
    }

    .status-dark {
        margin-left: 10%;
        margin-top: 50px;
        background-color: rgb(24, 24, 24);
        color: white;
        padding: 10px;
        border-radius: 5px;
        text-align: center;
    }
    .status-light {
        margin-left: 10%;
        margin-top: 50px;
        background-color: beige;
        color: black;
        padding: 10px;
        border-radius: 5px;
        text-align: center;
    }
</style>

<main>
    <div class="row {$mode === 'dark' ? 'bg-dark' : 'bg-light'} ">
        <div class="col-3">
            <Menu/>
        </div>
        <div class="col-6">
            <div class="input-group mt">
                <input type="text" class="form-control" placeholder="Search" bind:value={input}>
                <button class="btn btn-info" type="button" on:click={onSearchClick}><i class="bi bi-search"></i></button>
            </div>
            {#if isStatus}
                <div class="{$mode === 'dark' ? 'status-dark' : 'status-light'}">
                    Please wait, generating response....
                </div>
            {/if}
            
            <div class="row {$mode === 'dark' ? 'ans-panel-dark' : 'ans-panel-light'} ">
                <div class="col-12">
                    <div class="format-output">{output}</div>
                </div>
            </div>
        </div>
        <div class="col-3 flex">
            <Button/>
            <img src="bot1.gif" alt="" class="bot">
        </div>
    </div>
</main>

