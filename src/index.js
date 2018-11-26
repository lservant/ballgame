import $ from "jquery";
import style from "./styles.scss";

let $pa = $('#playarea');
let colors = ['white','red', 'yellow', 'blue', 'orange', 'green', 'purple'];
var healths = 1;
function init() {
    let blockcon = '<div class="block-container"></div>';

    $pa.append(blockcon);
    buildRow();
}

function Box(health) {
    var self = this;
    self.Health = health;
    self.Color = function () {
        let c = turnNumberToColor(self.Health);
        console.log(c);
        return c;
    }

    let block = '<div class="block"></div>';
    self.toString = function () {
        return block;
    };
    self.getHit = function () {
        if (self.Health > 0) {
          self.Health--;
            $(this).css('background-color', self.Color()).text(self.Health > 0 ? self.Health : '');
        }
        buildRow();
    };
}

function turnNumberToColor(num) {
    if (num == 0) { return 'white';}
    var h = 360 - (num * 10), s = 100 - ((5 * num) % 50), l = 50;
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

function buildRow() {
    let row = '<div class="row"></div>';
    var $r = $('.block-container').append(row).find('.row:last');
    for (let j = 0; j < 10; j++) {
        var block;
        if (Math.random() > 0.5) {
            block = new Box(healths++);
        } else {
            block = new Box(0);
        }
        $r.append(block.toString()).find('.block:last')
            .css('background-color', block.Color())
            .on('click.ballgame', block.getHit);
    }
}

init();
