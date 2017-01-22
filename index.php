<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Twitter Carousel</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Plugin CSS -->
    <link rel="stylesheet" href="plugin/twitter-carousel/twitter-custom.css">

    <!-- JS for setting options for the Twitter Carousel plugin -->
    <?php
        // Declare global variables
        $twitterUsername = "bicestervision";
        $tweetCount = 10;
    ?>

    <script type="text/javascript">
        var twitterGlobals = <?php echo json_encode(array(
            'twitterUsername' => $twitterUsername,
            'tweetCount' => $tweetCount
        )); ?>;
    </script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
<body>

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Twitter scroll!</h1>
                <br>

                <div class="col-md-4 col-md-offset-4">
                    <?php include('plugin/twitter-carousel/twitter-carousel.php'); ?>
                </div>

            </div>
        </div>
    </div>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<!-- Scripts to pull the twitter API -->
<script src="tweets_json.php?count=<?php echo $tweetCount; ?>&screen_name=<?php echo $twitterUsername; ?>" type="text/javascript"></script>

<!-- JS for the Twitter carousel -->
<script src="plugin/twitter-carousel/twitter-carousel.js" type="text/javascript"></script>

</body>
</html>