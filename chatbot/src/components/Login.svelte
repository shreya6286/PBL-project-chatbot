<style>
    menu{
        margin: 0px;
        padding: 0px;
    }
    img{
        max-width: 70px;
    }
    .flex{
        margin-top: 50px;
        display: flex;
        justify-content: center;
    }
    h4{
        margin-top: 15px;
        display: flex;
        justify-content: center;
    }
    p{
        display: flex;
        justify-content: center;
    }
    a{
        text-decoration: none;
    }
    .butn{
        color: black;
        border: 1px solid gray;
    }
</style>

<menu>
    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
            <div class="row flex">
                <img src="./logo.png" alt="">
                <div class="row p-5 mt-4">
                    <h4>Welcome back</h4>
                    <p>Don't have an account? &nbsp;<a href="./signin"> Sign up</a> &nbsp; here</p>
                    <div class="mt-4">
                        <label for="Input1" class="form-label">Name</label>
                        <input class="form-control" id="Input1" placeholder="name">
                        <label for="Input2" class="form-label mt-3">Email address</label>
                        <input type="email" class="form-control" id="Input2" placeholder="name@example.com">
                        <button class="btn btn-primary form-control mt-3">Continue</button>
                    </div>
                    <hr class="mt-4">
                    <div class="mt-2">
                        <button class="btn form-control butn btn-outline-light p-2"><i class="bi bi-google"></i>&nbsp; &nbsp; Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4"></div>
    </div>
</menu>