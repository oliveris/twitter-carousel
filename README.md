# Twitter Carousel

<p><strong>Testing URL:</strong><br>
http://www.twitter-feed.your-development.co.uk/test/</p>

<h3 style="margin-bottom:0px">Version 1.0</h3>
<p>Will pull through a Twitter users 10 latest posts using Twitter API 1.1.<br>
This version pulls through the data in JSON format.<br>
JQuery then processes the data to display within a Bootstrap carousel.</p>

<h3 style="margin-bottom:0px">Version 1.1</h3>
<p>Moved the HTML, CSS and JS into it own plugin directory.<br>
The other files listed below need to remain in the directory that you set in the 
Twitter application:</p>
<ul>
<li>cacert.pem - is a bundle of CA certificates that you use to verify that the 
server is really the correct site you're talking to (when it presents its 
certificate in the SSL handshake).</li>
<li>tmhOAuth.php - An OAuth library written in PHP by @themattharris available
on GitHub</li>
<li>tweets_json.php - makes the connection to the Twitter API using the the consumer key +
secret and access token + secret, this also gets the post values to obtain the data</li>
</ul>