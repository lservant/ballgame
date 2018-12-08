import $ from "jquery";
import {Block} from "./Block.js";
import style from "./styles.scss";

let $pa = $('#playarea');
var healths = 1;
function init() {
    let blockcon = '<div class="block-container"></div>';

    $pa.append(blockcon);
    buildRow();
}

function buildRow() {
    let row = '<div class="row"></div>';
    var $r = $('.block-container').append(row).find('.row:last');
    for (let j = 0; j < 10; j++) {
        var block;
        if (Math.random() > 0.5) {
            block = new Block(healths++);
        } else {
            block = new Block(0);
        }
        $r.append(block.toString()).find('.block:last')
            .css('background-color', block.Color())
            .on('click.ballgame', function () {
                block.getHit();
                buildRow();
            });
    }
}

init();
