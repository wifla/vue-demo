var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
var DEFAULT_PATTERN = 'yyyy-MM-dd';
function padding(s, len) {
    var len = len - (s + '').length;
    for (var i = 0; i < len; i++) { s = '0' + s; }
    return s;
};

export default {
    getQueryStringByName: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        var context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    },
    formatDate: {
        format: function (date, pattern) {
            pattern = pattern || DEFAULT_PATTERN;
            return pattern.replace(SIGN_REGEXP, function ($0) {
                switch ($0.charAt(0)) {
                    case 'y': return padding(date.getFullYear(), $0.length);
                    case 'M': return padding(date.getMonth() + 1, $0.length);
                    case 'd': return padding(date.getDate(), $0.length);
                    case 'w': return date.getDay() + 1;
                    case 'h': return padding(date.getHours(), $0.length);
                    case 'm': return padding(date.getMinutes(), $0.length);
                    case 's': return padding(date.getSeconds(), $0.length);
                }
            });
        },
        parse: function (dateString, pattern) {
            var matchs1 = pattern.match(SIGN_REGEXP);
            var matchs2 = dateString.match(/(\d)+/g);
            if (matchs1.length == matchs2.length) {
                var _date = new Date(1970, 0, 1);
                for (var i = 0; i < matchs1.length; i++) {
                    var _int = parseInt(matchs2[i]);
                    var sign = matchs1[i];
                    switch (sign.charAt(0)) {
                        case 'y': _date.setFullYear(_int); break;
                        case 'M': _date.setMonth(_int - 1); break;
                        case 'd': _date.setDate(_int); break;
                        case 'h': _date.setHours(_int); break;
                        case 'm': _date.setMinutes(_int); break;
                        case 's': _date.setSeconds(_int); break;
                    }
                }
                return _date;
            }
            return null;
        }

    },
    setStore(name, content){
      if (!name) return;
      if (typeof content !== 'string') {
        content = JSON.stringify(content);
      }
      window.localStorage.setItem(name, content);
    },
    getStore(name){
      if (!name) return;
      return window.localStorage.getItem(name);
    },
    removeStore(name){
      if (!name) return;
      window.localStorage.removeItem(name);
    },

    getCursor: function (textarea) {
        var rangeData = { text: "", start: 0, end: 0 };

        if (textarea.setSelectionRange) { // W3C    
            textarea.focus();
            rangeData.start = textarea.selectionStart;
            rangeData.end = textarea.selectionEnd;
            rangeData.text = (rangeData.start != rangeData.end) ? textarea.value.substring(rangeData.start, rangeData.end) : "";
        } else if (document.selection) { // IE
            textarea.focus();
            var i,
            oS = document.selection.createRange(),
            // Don't: oR = textarea.createTextRange()
            oR = document.body.createTextRange();
            oR.moveToElementText(textarea);

            rangeData.text = oS.text;
            rangeData.bookmark = oS.getBookmark();

            // object.moveStart(sUnit [, iCount]) 
            // Return Value: Integer that returns the number of units moved.
            for (i = 0; oR.compareEndPoints('StartToStart', oS) < 0 && oS.moveStart("character", -1) !== 0; i++) {
                // Why? You can alert(textarea.value.length)
                if (textarea.value.charAt(i) == '\r') {
                    i++;
                }
            }
            rangeData.start = i;
            rangeData.end = rangeData.text.length + rangeData.start;
        }

        alert(JSON.stringify(rangeData));

        return rangeData;
    },

    setCursor: function (textarea, rangeData) {
        var oR, start, end;
        if (!rangeData) {
            console.log("You must get cursor position first.")
        }
        textarea.focus();
        if (textarea.setSelectionRange) { // W3C
            textarea.setSelectionRange(rangeData.start, rangeData.end);
        } else if (textarea.createTextRange) { // IE
            oR = textarea.createTextRange();

            // Fixbug : ues moveToBookmark()
            // In IE, if cursor position at the end of textarea, the set function don't work
            if (textarea.value.length === rangeData.start) {
                //alert('hello')
                oR.collapse(false);
                oR.select();
            } else {
                oR.moveToBookmark(rangeData.bookmark);
                oR.select();
            }
        }
    },

    addCursor: function (textarea, rangeData, text) {
        var oValue, nValue, oR, sR, nStart, nEnd, st;
        this.setCursor(textarea, rangeData);

        if (textarea.setSelectionRange) { // W3C
            oValue = textarea.value;
            nValue = oValue.substring(0, rangeData.start) + text + oValue.substring(rangeData.end);
            nStart = nEnd = rangeData.start + text.length;
            st = textarea.scrollTop;
            textarea.value = nValue;
            // Fixbug:
            // After textarea.values = nValue, scrollTop value to 0
            if (textarea.scrollTop != st) {
                textarea.scrollTop = st;
            }
            textarea.setSelectionRange(nStart, nEnd);
        } else if (textarea.createTextRange) { // IE
            sR = document.selection.createRange();
            sR.text = text;
            sR.setEndPoint('StartToEnd', sR);
            sR.select();
        }
    },

    urlReg: /\{\[placeholder:([\s\S]*)\]\}/i,
    placeReg: /([\s\S]*)\{\[placeholder:([\s\S]*)\]\}([\s\S]*)$/i,
    fullUrlPlaceholder: '{[placeholder:url]}',
    
    getCursorPosition(selector) {
        let dom = document.querySelector(selector);
        if (!dom) return -1;
        return dom.selectionStart;
        // console.log(myField.selectionStart, "selectionStart")
    }
};
