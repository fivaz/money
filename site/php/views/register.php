<?php
/**
 * Created by PhpStorm.
 * User: Fivaz
 * Date: 22/04/2019
 * Time: 18:32
 */
?>

<?php require("header.php") ?>

<div class="container">

    <input type="hidden" class="ajax" value="nothing">

    <div class="container login-container">
        <div class="row justify-content-center">
            <div class="col-md-6 login-form-2">
                <h3>Register to Money</h3>
                <form>
                    <div class="form-group">
                        <input id="first_name" type="text" class="form-control" placeholder="Your First name *"
                               value=""/>
                    </div>
                    <div class="form-group">
                        <input id="last_name" type="text" class="form-control" placeholder="Your Last name *"
                               value=""/>
                    </div>
                    <div class="form-group">
                        <input id="email" type="text" class="form-control" placeholder="Your Email *"
                               value=""/>
                    </div>
                    <div class="form-group">
                        <input id="password" type="password" class="form-control" placeholder="Your Password *"
                               value=""/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btnSubmit" value="Register"/>
                    </div>
                    <div id="error-msg" class="p-3 bg-danger text-white">This email is already being used by another account.</div>
                </form>
            </div>
        </div>
    </div>

    <script src="site/js/services/registerPerformer.js"></script>

    <?php require("footer.php") ?>


