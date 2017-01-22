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
            $('.tweet-' + i + '').append(checkURL(convertUserMentions(convertHashtags(data[index]['text']))));
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

    /**
     * Function to check the string to look for user mentions '@'
     * @param text
     * @return {*}
     */
    function convertUserMentions(text) {
        html = text.replace(/@(\S+)/g, '<a target="_blank" href="https://twitter.com/#!/$1">@$1</a>');
        return html;
    }

    /**
     * Function to check the string to look for hashtags '#'
     * @param text
     * @return {*}
     */
    function convertHashtags(text) {
        html = text.replace(/@(\S+)/g, '<a target="_blank" href="https://twitter.com/#!/$1">@$1</a>');
        return html;
    }

    /**
     * Function to convert string value words with http and https with links
     * @param text
     * @returns {string}
     * @constructor
     */
    function checkURL(text) {
        var url1 = /(^|&lt;|\s)(www\..+?\..+?)(\s|&gt;|$)/g,
            url2 = /(^|&lt;|\s)(((https?|ftp):\/\/|mailto:).+?)(\s|&gt;|$)/g;

        var html = $.trim(text);
        if (html) {
            html = html
                .replace(url1, '$1<a class="blue-link" target="_blank" href="http://$2">$2</a>$3')
                .replace(url2, '$1<a class="blue-link" target="_blank" href="$2">$2</a>$5');
        }
        return html;
    }

});