document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.getElementById('download-button');
    downloadButton.addEventListener('click', function() {
        var audioUrl = "{% static 'sound_file/' %}{{ loc }}";
        var xhr = new XMLHttpRequest();
        xhr.open('GET', audioUrl, true);
        xhr.responseType = 'blob';
        xhr.onload = function() {
            var timestamp = new Date().toISOString().replace(/[-T:]/g, '').split('.')[0];
            var filename = 'audio_' + timestamp + '.mp3'; // Unique filename based on timestamp
            var a = document.createElement('a');
            a.href = window.URL.createObjectURL(xhr.response);
            a.download = filename;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(a.href);
        };
        xhr.send();
    });
});
