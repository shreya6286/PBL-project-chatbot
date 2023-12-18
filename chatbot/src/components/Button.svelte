<style>
    .button1 {
        min-width: 100px;
        min-height: 30px;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 1.3px;
        font-weight: 700;
        background: linear-gradient(90deg, rgb(68, 144, 206) 0%,rgb(88, 186, 224)0 100%);
        border: none;
        border-radius: 1000px;
        box-shadow: 5px 5px 15px rgba(79,209,197,.64);
        transition: all 0.3s ease-in-out 0s;
        cursor: pointer;
        outline: none;
        position: relative;
        padding: 12px;
        display: flex;
        align-self: flex-end;
        margin-right: 30px;
    }


    .button1::before {
        content: '';
        border-radius: 1000px;
        min-width: calc(100px + 12px);
        min-height: calc(30px + 12px);
        border: 6px solid rgb(107, 216, 243);
        box-shadow: 0 0 60px rgba(0,255,203,.64);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: all .3s ease-in-out 0s;
    }

    .button1:hover, .button1:focus {
        color: #313133;
        transform: translateY(-6px);
    }

    .button1:hover::before, .button1:focus::before {
        opacity: 1;
    }

    .button1::after {
        content: '';
        width: 30px; 
        height: 30px;
        border-radius: 100%;
        border: 6px solid rgb(107, 216, 243);
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: ring 1.5s infinite;
    }

    .button1:hover::after, .button1:focus::after {
        animation: none;
        display: none;
    }

    @keyframes ring {
        0% {
        width: 30px;
        height: 30px;
        opacity: 1;
        }
        100% {
            width: 150px;
            height: 150px;
            opacity: 0;
        }
    }
    h6{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: cadetblue;
    }
    .center{
        text-align: center;
    }
    .card{
        background-color: ghostwhite;
        height: 200px;
        column-gap: 50px;
    }
    img{
        border-radius: 50%;
        width: 100px;
        margin-top: 20px;
        margin-left: 30px;
    }
</style>

<button class="button1" data-bs-toggle='modal' data-bs-target='#info'> About me </button> 

<div class="modal fade" id="info" tabindex="-1">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header"><b>Introduction to Quix</b></div>
            <div class="modal-body">
                <h6><b> What is Quix?</b></h6>
                <i> I am Quix, an AI language model. 
                    My purpose is to provide helpful and informative responses to your questions and to engage in natural language conversations. 
                    I don't have a physical presence, and I exist solely as a digital program that runs on servers. 
                    My training data comes from a vast corpus of text from the internet which allows me to generate human-like responses to a wide range of topics.
                </i>
                <div class="row mt-5">
                    <div class="col-4">
                        <h6 class="center"> <b>Capabilities</b></h6>
                        <i>
                            • Trained to decline inappropriate requests <br>
                            • Wide range of information <br>
                            • Connected to Open AI <br>
                        </i>
                    </div>
                    <div class="col-4">
                        <h6 class="center"> <b>Examples</b></h6>
                        <i>
                            • Who was the 1st prime minister of India? <br>
                            • Write an essay for diwali <br>
                            • What is microproccesor? <br>
                        </i>
                    </div>
                    <div class="col-4">
                        <h6 class="center"> <b>Limitations</b></h6>
                        <i>
                            • May generate incorrect information <br>
                            • Does not allow follow up correction neither remembers previous conversation <br>
                            • Limited knowledge of world upto 2021 <br>
                        </i>
                    </div>
                </div>  
                <div class="row mt-5">
                    <h6 class="center"><b>Our Team</b></h6>
                    <div class="col-1"></div>
                    <div class="col-2 card">
                        <img src="shit.jpeg" alt="">
                        <h6 class="center" style="color: black; margin-top: 23px"><b> Harshit Baldota </b></h6>
                    </div>
                    <div class="col-2 card">
                        <img src="akshay.jpeg" alt="">
                        <h6 class="center" style="color: black; margin-top: 30px"><b> Akshay Bedre </b></h6>
                    </div>
                    <div class="col-2 card">
                        <img src="shrey.jpeg" alt="">
                        <h6 class="center mt-4" style="color: black;"><b> Shreya Bhavsar </b></h6>
                    </div>
                    <div class="col-2 card">
                        <img src="harsha.jpeg" alt="">
                        <h6 class="center" style="color: black; margin-top: 10px"><b> Harshada Aher </b></h6>
                    </div>
                    <div class="col-2 card">
                        <img src="spidy.jpeg" alt="">
                        <h6 class="center" style="color: black; margin-top: 30px"><b> Atharva Virkar </b></h6>
                    </div>
                    <div class="col-1"></div>
                </div> 
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
