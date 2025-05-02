// Here you can add dynamic updates if needed in the future
$(document).ready(function() {
    let videoPlaying = false;

    // Start button
    $('#startButton').click(function() {
        // Show the video stream
        $('#video').show();
        // Change button visibility
        $('#startButton').hide();
        $('#stopButton').show();

        // Start streaming the video feed (reload the image source to refresh)
        $('#video').attr('src', '/video_feed');
        
        videoPlaying = true;
    });

    // Stop button
    $('#stopButton').click(function() {
        // Hide the video stream
        $('#video').hide();
        // Change button visibility
        $('#startButton').show();
        $('#stopButton').hide();

        videoPlaying = false;
    });
});
