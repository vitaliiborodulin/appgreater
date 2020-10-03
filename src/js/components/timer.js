var elems = {
    'd': $('.timer__value--days'),
    'd_s': $('timer__unit--days'),
    'h': $('.timer__value--hours'),
    'h_s': $('.timer__unit--hours'),
    'm': $('.timer__value--minutes'),
    'm_s': $('.timer__unit--minutes'),
    's': $('.timer__value--seconds'),
    's_s': $('.timer__unit--seconds')
};

var today = new Date();
var nextDate = new Date("January 1, 2021");
var secLeft = parseInt((nextDate.getTime() - today.getTime())/1000);
// $('.timer').data('time', secLeft);

// var t = new Timer(parseInt($('.timer').data('time')), function (data) {
var t = new Timer(secLeft, function (data) {
    for (var k in elems) {
        elems[k].html(data[k]);
    }
});


t.start();
t.render();

$('.timer').addClass('timer-showed');

function Timer(time, f) {
    this.time = time;
    this.worker = null;

    var that = this;
    var renderer = f || function (data) {}

    this.start = function () {
        that.worker = setInterval(function () {
            that.tick();
        }, 1000);
    }

    this.stop = function () {
        if (that.worker != null) {
            clearInterval(that.worker);
        }
    }

    this.tick = function () {        
        if(that.time <= 0){
            that.stop();
            that.render();
            return;
        }
        
        that.time--;
        that.render();       
    }

    this.getData = function () {
        var data = {};

        var d_free = that.time % (3600 * 24);
        var d = (that.time - d_free) / (3600 * 24);
        data.d = d;
        // data.d_s = endings(d, ['дней', 'день', 'дня']);

        var h_free = d_free % 3600;
        var h = (d_free - h_free) / 3600;
        data.h = h;
        // data.h_s = endings(h, ['часов', 'час', 'часа']);

        var m_free = h_free % 60;
        var m = (h_free - m_free) / 60;
        data.m = m;
        // data.m_s = endings(m, ['минут', 'минута', 'минуты']);

        data.s = m_free;
        // data.s_s = endings(m_free, ['секунд', 'секунда', 'секунды']);

        return data;
    }

    this.render = function () {
        var data = that.getData();
        renderer(data);
    }

    function endings(t, variants) {
        var t0 = t % 10;

        if (t > 4 && t < 21) {
            return variants[0];
        } else if (t0 == 1) {
            return variants[1];
        } else if (t0 > 1 && t0 < 5) {
            return variants[2];
        } else {
            return variants[0];
        }
    }
}
