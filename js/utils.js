function $json(url, done, error) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }

        if(xhr.status === 200){
            if (done instanceof Function)
                done(xhr.responseText);
        } else {
            console.log('Error', xhr.status, xhr.statusText);
            if (error instanceof Function)
                error({code: xhr.status, text: xhr.statusText});
        }
    }
}

function $get(parameterName) {
    var result = null,
        tmp = [];

    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });

    return result;
}

function $s(selector) {
    return document.querySelector(selector);
}

function $uniqueId(prefix) {
    return prefix + '-' + (Date.now() - Math.floor(Math.random()*10000000000)*100);
}