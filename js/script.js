
var messageDiv =
    document.getElementById('message');
function initLocation() {
    var geolocation = navigator.geolocation;
    if (geolocation) {
        try {
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback
            );
        } catch (err) {
            messageDiv.innerHTML = 'Error';
        }
    } else {
        messageDiv.innerHTML = 'Peramban Anda tidak mendukung geolokasi.';
    }
}
function successCallback(location) {
    message.innerHTML = "<p>Latitude: " +
        location.coords.latitude + "</p>";
    message.innerHTML += "<p>Longitude:" +
        location.coords.longitude + "</p>";
}
function errorCallback() {
    messageDiv.innerHTML = 'Terjadi kesalahan saat mencari lokasi Anda';
}

function acknowledge(file_handle) {
    var size = file_handle.size;
    var fname = file_handle.name;
    var message = "Anda telah memilih file tersebut '" + fname + "'.Ini tampaknya merupakan gambar yang dapat dikenali, dengan total " + size + " byte.";
    alert(message);
}
function complain(fname) {
    var message = "File yang bernama " + fname + "tampaknya tidak memiliki ekstensi yang dapat diterima.";
    alert(message);
}

function handle_file_selection(item) {
    var f = item.files[0];
    var fname = f.name;
    var last_index = fname.lastIndexOf('.');
    if (last_index == -1) {
        complain(fname);
        return;
    }
    var ext = fname.substr(last_index + 1);
    if (ext.toLowerCase() in { 'gif': '', 'jpeg': '', 'png': '', 'tif': '' }) {
        acknowledge(f);
    } else {
        complain(fname);
    }
}

function move_paragraph() {
    next = current + "px";
    current += 1;
    if (current > 600) {
        current = 0;
    }

    // for (var i = 0; i < 600; i++) {
    //     next = current + "px";
    // }

    paragraph.style.left = next;
    var rate = 18;
    setTimeout(move_paragraph, rate);
}
function init() {
    paragraph = document.getElementById("original");
    paragraph.style.position = "absolute";
    current = 0;
    move_paragraph();
}
