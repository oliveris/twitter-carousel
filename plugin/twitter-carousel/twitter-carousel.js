/**
 * Created by samoliveri on 22/01/2017.
 */
$(document).ready(function() {
    //i variable declared to increment and assign a new class each time to the div
    var i = 1;

    //get the last 10 Twitter post and stores them in a JSON array
    $.getJSON('tweets_json.php?count=' + twitterGlobals.tweetCount + '&screen_name=' + twitterGlobals.twitterUsername + '', function(data) {
        listTweets(data);
    });

    /**
     * Function to create the tweet div and append the tweet in the div
     * @param data
     */
    function listTweets(data) {
        $.each(data, function(index) {
            //logs data to console
            console.log(data[index]);

            /**
             * Creates a new tweet div
             * if i = 1 need to set active
             */
            if(i == 1) {
                $('#tweetList').append('<div class="tweet-' + i + ' item active"></div>');
            } else {
                $('#tweetList').append('<div class="tweet-' + i + ' item"></div>');
            }

            //append the variable data into the new tweet div
            // $('.tweet-' + i + '').append(checkURL(convertUserMentions(convertHashtags(data[index]['text']))));
            $('.tweet-' + i + '').append(twitterLinks(data[index]['text']));
            //$('.tweet-' + i + '').append('<p>' + data[index]['created_at'] + '</p>');

            //increments the value of i
            increment();
        });
    }

    /**
     * Function to increment the value of i
     * @returns {int}
     */
    function increment(){
        i++;
        return i;
    }

    // Convert URLs (w/ or w/o protocol), @mentions, and #hashtags into anchor links
    function twitterLinks(text)
    {
        var base_url = 'http://twitter.com/';   // identica: 'http://identi.ca/'
        var hashtag_part = 'search?q=#';        // identica: 'tag/'
        // convert URLs into links
        text = text.replace(
            /(>|<a[^<>]+href=['"])?(https?:\/\/([-a-z0-9]+\.)+[a-z]{2,5}(\/[-a-z0-9!#()\/?&.,]*[^ !#?().,])?)/gi,
            function($0, $1, $2) {
                return ($1 ? $0 : '<a href="' + $2 + '" target="_blank">' + $2 + '</a>');
            });
        // convert protocol-less URLs into links
        text = text.replace(
            /(:\/\/|>)?\b(([-a-z0-9]+\.)+[a-z]{2,5}(\/[-a-z0-9!#()\/?&.]*[^ !#?().,])?)/gi,
            function($0, $1, $2) {
                return ($1 ? $0 : '<a href="http://' + $2 + '">' + $2 + '</a>');
            });
        // convert @mentions into follow links
        text = text.replace(
            /(:\/\/|>)?(@([_a-z0-9\-]+))/gi,
            function($0, $1, $2, $3) {
                return ($1 ? $0 : '<a href="' + base_url + $3
                    + '" title="Follow ' + $3 + '" target="_blank">@' + $3
                    + '</a>');
            });
        // convert #hashtags into tag search links
        text = text.replace(
            /(:\/\/[^ <]*|>)?(\#([_a-z0-9\-]+))/gi,
            function($0, $1, $2, $3) {
                return ($1 ? $0 : '<a href="' + base_url + hashtag_part + $3
                    + '" title="Search tag: ' + $3 + '" target="_blank">#' + $3
                    + '</a>');
            });
        return text;
    }

});