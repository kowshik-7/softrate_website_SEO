class MyHeader extends HTMLElement{
    connectedCallBack(){
        this.innerHTML =`
        <header class="header">
            <nav class="nav container">
                <div class="nav__data">
                    <a href="#" class="nav__logo">
                        <img src="../assets/img/logo.png" alt="">
                    </a>
    
                    <div class="nav__toggle" id="nav-toggle">
                        <i class="ri-menu-line nav__toggle-menu"></i>
                        <i class="ri-close-line nav__toggle-close"></i>
                    </div>
                </div>
    
                <!--=============== NAV MENU ===============-->
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <!--=============== DROPDOWN 1 ===============-->
                        <li class="dropdown__item">                      
                            <div class="nav__link dropdown__button">
                                Services <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                            </div>
    
                            <div class="dropdown__container">
                                <div class="dropdown__content">
                                    <div class="dropdown__group">
                                        <div class="dropdown__icon">
                                            <i class="ri-flashlight-line"></i>
                                        </div>
    
                                        <span class="dropdown__title">Software Consulting </span>
    
                                        <ul class="dropdown__list">
                                            <li>
                                                <a href="#" class="dropdown__link">Website Development</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Mobile Apps Development</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Search Engine Optimization</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Custom Software Development</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Software Testing & Maintenance</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="dropdown__group">
                                        <div class="dropdown__icon">
                                            <i class="ri-heart-3-line"></i>
                                        </div>
    
                                        <span class="dropdown__title">Digital Transformation</span>
    
                                        <ul class="dropdown__list">
                                            <li>
                                                <a href="#" class="dropdown__link">Brand Assets Creation</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Digital Branding</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Social Media Marketing</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">UI/ UX & Creatives Designing </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="dropdown__group">
                                        <div class="dropdown__icon">
                                            <i class="ri-book-mark-line"></i>
                                        </div>
    
                                        <span class="dropdown__title">Business Consulting </span>
    
                                        <ul class="dropdown__list">
                                            <li>
                                                <a href="#" class="dropdown__link">Food Consulting </a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Construction & Interior Consulting</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">Photography Consulting </a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">eCommerce</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link">eLearning</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!--=============== DROPDOWN 2 ===============-->
                        <li class="dropdown__item">
                            <div class="nav__link dropdown__button">
                                Products <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                            </div>
    
                            <div class="dropdown__container">
                                <div class="dropdown__content">
                                    <div class="dropdown__group">
                                        <div class="dropdown__icon">
                                            <i class="ri-code-line"></i>
                                        </div>
    
                                        <span class="dropdown__title">Innovation Hub</span>
    
                                        <ul class="dropdown__list">
                                            <li>
                                                <a href="#" class="dropdown__link">Construction BOM</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link" id="a1">Softrate Invoices
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown__link" id="a2">Softrate Desk
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="dropdown__preview">
                                        <img id="img" src="../img/client-logo/Innovation-hub-logo.png" alt="">
                                        <img id="img1" src="../img/client-logo/softrateinvoice.png" alt="">
                                        <img id="img2" src="../img/client-logo/desklogo.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!--=============== DROPDOWN 3 ===============-->
                        <li class="dropdown__item">                        
                            <div class="nav__link dropdown__button">
                                App <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                            </div>
    
                            <div class="dropdown__container">
                                <div class="dropdown__content">
                                    <div class="dropdown__group">
                                        <div class="dropdown__icon">
                                            <i class="ri-android-line"></i>
                                        </div>
    
                                        <span class="dropdown__title">Apps</span>
    
                                        <ul class="dropdown__list">
                                            <li>
                                                <a href="https://softratebewise.netlify.app/" class="dropdown__link" id="app1txt">BeWise</a>
                                            </li>
                                            <li>
                                                <a href="https://compassedge.netlify.app/" class="dropdown__link" id="app2txt">Campus Edge</a>
                                            </li>
                                            <li>
                                                <a href="https://smartbmitracker.netlify.app/" class="dropdown__link" id="app3txt">Smart BMI Tracker</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="dropdown__group">
                                        <div class="dropdown__icon">
                                            <i class="ri-gamepad-line"></i>
                                        </div>
    
                                        <span class="dropdown__title">Softrate Games</span>
    
                                        <ul class="dropdown__list">
                                            <li>
                                                <a href="https://slidoapp.netlify.app/" class="dropdown__link" id="game1txt">Slido</a>
                                            </li>
                                            <li>
                                                <a href="https://play.google.com/store/apps/details?id=com.softrate.flappybird" class="dropdown__link" id="game2txt">Flappy Bird</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div class="dropdown__preview">
                                        <img id="app1" src="../img/client-logo/Bewiselogo.png" alt="">
                                        <img id="app2" src="../img/client-logo/compassLogo.png" alt="">
                                        <img id="app3" src="../img/client-logo/bmitracker.png" alt="">
                                        <img id="game1" src="../img/client-logo/slido-logo 1slidoLogo.png" alt="">
                                        <img id="game2" src="../img/client-logo/flappy bird.png" alt="">
    
                                    </div>
                                </div>
                            </div>
                        </li>
    
                        <li class="ctnBtn"><a href="#" class="nav__link">Contact</a></li>
                    </ul>
                </div>
                <!-- <a href="#">Contact</a> -->
            </nav>
        </header>
        `
    }
}

customElements.define('my-header',MyHeader)