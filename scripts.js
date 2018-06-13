
window.fbAsyncInit = function() { 
FB.init({appId: '1751161804975039', status: true, cookie: true, xfbml: true}); 
FB.Event.subscribe("edge.create",function(url) { 
if (url.indexOf("facebook.com") > 0) { 
// if the returned link contains 'facebook,com'. It is a 'Like' 
// for your Facebook page <br>ga('send', 'social', 'Facebook', 'like', url); 
} else { 
// else, somebody is sharing the current page on their wall 
ga('send', 'Social', 'Facebook', 'Share', url);
});
};
                   
                   
function tweetIntentToAnalytics(intent_event) { 
if (intent_event) { 
ga('send', 'Social', 'Twitter', 'Tweet', document.location.href); 
} 
} 
function followIntentToAnalytics(intent_event) { 
if (intent_event) { 
ga('send', 'Social', 'Twitter', 'Follow', document.location.href); 
} 
} 
if (typeof twttr !== 'undefined') { 
twttr.ready(function (twttr) { 
twttr.events.bind('tweet', tweetIntentToAnalytics); 
twttr.events.bind('follow', followIntentToAnalytics); 
}); 
}
