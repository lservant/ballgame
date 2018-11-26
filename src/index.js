import $ from "jquery";
import style from "./styles.scss";

let $pa = $('#playarea');
let colors = ['red', 'yellow', 'blue', 'orange', 'green', 'purple'];

function init() {
    let blockcon = '<div class="block-container"></div>';
    let block = '<div class="block"></div>';
    let row = '<div class="row"></div>';
    $pa.append(blockcon);
    for (let i = 0; i < 3; i++) {
        var $r = $('.block-container').append(row).find('.row:last');
        for (let j = 0; j < 10; j++) {
            $r.append(block).find('.block:last').css('background', colors[j % colors.length]);
        }
    }
}

init();
