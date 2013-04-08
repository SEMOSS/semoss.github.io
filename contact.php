<!DOCTYPE html>
<!-- saved from url=(0066)http://twitter.github.com/bootstrap/examples/marketing-narrow.html -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <title>Seamoss</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/bootstrap-responsive.css" rel="stylesheet">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="../assets/js/html5shiv.js"></script>
    <![endif]-->

    <!-- Fav and touch icons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="#">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="#">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="#">
    <link rel="apple-touch-icon-precomposed" href="#">
    <link rel="shortcut icon" href="#">
  </head>

  <body>

    <div class="container-narrow">
      <div class="masthead">
        <ul class="nav nav-pills pull-right navigation">
          <li><a href="index.html"><i class="icon-home"></i> Home</a></li>
          <!--<li><a href="#"><i class="icon-book"></i> Docs</a></li>-->
          <li><a href="about.html"><i class="icon-user"></i> About</a></li>
          <li class="active"><a href="contact.php"><i class="icon-envelope"></i> Contact</a></li>
        </ul>
        <a href="index.html"><img src="img/logo.png" id="logo"></a>
      </div>
    </div>
    
    <div id="bg">
        <div class="jumbotron">
          <h1>Contact Us.</h1>
          <p class="lead">Send us a message and we'll get back to you as soon as we can!</p>
        </div>
    </div>
    
    <!--<div class="socialButtons">
        <div class="center">
            <iframe src="http://ghbtns.com/github-btn.html?user=semoss&repo=semoss&type=watch&count=true"
              allowtransparency="true" frameborder="0" scrolling="0" width="95" height="20"></iframe>
            <iframe src="http://ghbtns.com/github-btn.html?user=semoss&type=follow&count=true"
              allowtransparency="true" frameborder="0" scrolling="0" width="165" height="20"></iframe>

        </div>
    </div>-->
    <?php  
  
        // check for a successful form post  
        if (isset($_GET['s'])) echo "<div class=\"alert alert-center alert-success\">".$_GET['s']."</div>";  
  
        // check for a form error  
        elseif (isset($_GET['e'])) echo "<div class=\"alert alert-center alert-error\">".$_GET['e']."</div>";  
  
    ?> 
    
    <div class="container-narrow">
        <div class="row-fluid marketing">
            <div class="span6">
                <form method="POST" action="contact-form-submission.php" class="form-horizontal">  
                    <div class="control-group">  
                        <label class="control-label" for="input1">Name</label>  
                        <div class="controls">  
                            <input type="text" name="contact_name" id="input1" placeholder="Your name">  
                        </div>  
                    </div>  
                    <div class="control-group">  
                        <label class="control-label" for="input2">Email Address</label>  
                        <div class="controls">  
                            <input type="text" name="contact_email" id="input2" placeholder="Your email address">  
                        </div>  
                    </div>  
                    <div class="control-group">  
                        <label class="control-label" for="input3">Message</label>  
                        <div class="controls">  
                            <textarea name="contact_message" id="input3" rows="8" class="span8" placeholder="The message you want to send to me."></textarea>  
                        </div>  
                    </div>  
                    <div class="form-actions">  
                        <input type="hidden" name="save" value="contact">  
                        <button type="submit" class="btn btn-primary">Send</button>  
                    </div>  
                </form>  
            </div>
        </div><!-- End Row-->

        
    
        <hr>
        <div class="footer">
            <p>Licensed under <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License v2.0</a></p>
        </div>

    </div> <!-- /container -->

    <!-- Le javascript
    ================================================== -->
   <!-- Placed at the end of the document so the pages load faster -->
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.js"></script>

  

</body></html>