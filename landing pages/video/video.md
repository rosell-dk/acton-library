
## Steps


1. Include *video.js*
Insert a video field in act-on
2. Call it on DOMContentLoaded

ie:
```
document.addEventListener('DOMContentLoaded', function() {
  video({
    aspectRatio: 640 / 360
  });
});
```

Options:
- aspectRatio
- selector
- maxHeight
- addResizeHandler

3. Insert the video. You can use a standard video field in act-on

4. If you do not use a standard video field, you will need to pass the "selector" option to the script



## Notes for youtube videos:
For youtube videos, you need to get the embed code. You do that by right-clicking the video on youtube. It looks like this:

```
<iframe width="640" height="360" src="https://www.youtube.com/embed/kiCW3wWS98E" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>`
```
1. Note that you see the aspect ratio of the video in the embed code (width and height)
2. Copy the url into act-on

Youtube accepts a lot of player parameters [https://developers.google.com/youtube/player_parameters]

I suggest using the following parameters:
?modestbranding=0&showinfo=0&rel=0&autoplay=1

- modestbranding=0    Smaller youtube logo (even spec says the opposite)
- showinfo=0          No video title before playback
- rel=0               Do not show related videos after playback (these are not always related - often you see videos related to your own searches)
- autoplay=1          Start playback automatically


## Styling
Video border can be achieved this way:
```
.ao-video-block iframe {
     border: 1px solid #323c5a;
 }
 ```


## Usage

The script is used on the following landing pages:
- http://a34876.actonsoftware.com/acton/media/34876/microsoft-dynamics-365-for-financials
