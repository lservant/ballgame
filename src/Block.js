import $ from "jquery";

export function Block(health) {
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
    if (num == 0) {
        return 'white';
    }
    var h = 360 - (num * 10),
        s = 100 - ((5 * num) % 50),
        l = 50;
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}