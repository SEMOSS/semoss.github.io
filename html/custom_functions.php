function fixed_position_social_icons() { ?>
  <div id="fixed-social-icons">
  <a href="https://twitter.com/YOUR_USER_NAME" class="social-twitter" title="Follow us on Twitter"></a>
  <a href="http://feeds.feedburner.com/YOUR_FEED_URL" class="social-rss" title="Subscribe to RSS Feed" rel="nofollow"></a>
  <a href="http://www.linkedin.com/in/YOUR_DISPLAY_NAME" class="social-linkedin" title="Connect on Linkedin"></a>
  <a href="http://www.facebook.com/YOUR_FB_IDENTIFIER" class="social-facebook" title="Join us on Facebook"></a>
  </div>
<?php }

add_action('thesis_hook_after_html','fixed_position_social_icons');