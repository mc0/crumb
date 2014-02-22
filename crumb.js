var Crumb = {
    get: function(name) {
        var cookies = document.cookie.split(';')
        var n, v, i, l;
        for (i = 0, l = cookies.length; i < l; i++) {
            n = $.trim(cookies[i].substr(0, cookies[i].indexOf('=')));
            v = cookies[i].substr(cookies[i]. indexOf('=') + 1);
            if (n === name) {
                return decodeURIComponent(v);
            }
        }
        return '';
    },
    set: function(name, val, opts) {
        var options = opts || {};
        var value = val || '';
        var d;
        if (!value) {
            options.expires = -365;
        } else {
            value = encodeURIComponent(value);
        }
        if (options.expires) {
            d = new Date();
            d.setDate(d.getDate() + options.expires);
            value += '; expires=' + d.toUTCString();
        }
        if (options.domain) {
            value += '; domain=' + options.domain;
        }
        if (options.path) {
            value += '; path=' + options.path;
        }
        document.cookie = name + '=' + value;
        return true;
    }
};
