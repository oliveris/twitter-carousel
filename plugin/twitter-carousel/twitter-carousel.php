<!-- Start of the Twitter container -->
<div class="twitter-feed-container">
    <h3><span class="font-14">Latest from</span> <a class="blue-link" href="https://twitter.com/<?php echo $twitterUsername; ?>" target="_blank">@<?php echo $twitterUsername; ?></a></h3>
    <!-- Start of the bootstrap carousel -->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">

        <!-- Wrapper for slides -->
        <div id="tweetList" class="carousel-inner" role="listbox">

        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>

    </div>
    <!-- End of the bootstrap carousel -->
</div>
<!-- End of the Twitter container -->