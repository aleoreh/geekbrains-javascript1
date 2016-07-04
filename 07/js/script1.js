/* Helpers */

// mini API to create HTML elements | мини-API для создания HTML-элементов

function elem(name, attrs, elems) {
    var res = document.createElement(name);

    attrs.forEach(function (attr) {
        res.setAttribute(attr.name, attr.value);
    });
    elems.forEach(function (elem) {
        res.appendChild(elem);
    });

    return res;
}

function span(attrs, text) {
    var res = elem('span', attrs, []);
    res.innerHTML = text;
    return res;
}

function table(attrs, elems) {
    var res = elem('table', attrs, elems);
    return res;
}

function tr(attrs, elems) {
    var res = elem('tr', attrs, elems);
    return res;
}

function td(attrs, elems) {
    var res = elem('td', attrs, elems);
    return res;
}

/* Problem */

// abbr. for sets and pieces types | сокращения для игроков и фигур
var R = 'rook',
    N = 'knight',
    B = 'bishop',
    Q = 'queen',
    K = 'king',
    P = 'pawn',
    WHITE = 'w',
    BLACK = 'b';

// create piece | создаёт фигуру
function newPiece(pieceSet, pieceType) {

    // pieceSet - [w, b] - набор (белые, чёрные)
    // pieceType - [r, n, b, q, k, p] - фигура [ладья, конь, слон, ферзь, король, пешка]

    return { type: pieceType, set: pieceSet };
}

// board initialization | инициализация начального состояния доски
function initBoard() {
    var p = newPiece;
    var wr = p(WHITE, R),
        wn = p(WHITE, N),
        wb = p(WHITE, B),
        wq = p(WHITE, Q),
        wk = p(WHITE, K),
        wp = p(WHITE, P),
        br = p(BLACK, R),
        bn = p(BLACK, N),
        bb = p(BLACK, B),
        bq = p(BLACK, Q),
        bk = p(BLACK, K),
        bp = p(BLACK, P),
        oo = p('', '');
    var res = [
        [br, bn, bb, bq, bk, bb, bn, br],
        [bp, bp, bp, bp, bp, bp, bp, bp],
        [oo, oo, oo, oo, oo, oo, oo, oo],
        [oo, oo, oo, oo, oo, oo, oo, oo],
        [oo, oo, oo, oo, oo, oo, oo, oo],
        [oo, oo, oo, oo, oo, oo, oo, oo],
        [wp, wp, wp, wp, wp, wp, wp, wp],
        [wr, wn, wb, wq, wk, wb, wn, wr],
    ];
    return res;
}

// board view | отображение доски
function view(board) {

    // create specific table cell | создаёт специфичную ячейку таблицы
    function newCell(cell, cellIdx, rowIdx) {
        var attrs = [];
        attrs.push({
            name: 'id',
            value: rowIdx.toString() + cellIdx.toString()
        });
        var classes1 = [
            'square',
            ((rowIdx + cellIdx) % 2 === 0) ? 'white' : 'black'
        ];
        var classes2 = [
            cell.set,
            cell.type
        ];
        var classesStr = {
            name: 'class',
            value: classes1.concat(classes2).join(' ')
        };
        attrs.push(classesStr);

        return td(attrs, []);

    }

    // convert coords to human readable
    // переводит координаты для соответствия реальной доске
    function prettyCoords(coords) {
        var x = ('x' in coords) ? coords.x + 1 : null;
        var y = ('y' in coords) ? 8 - coords.y : null;
        return { x: x, y: y };
    }

    // create HTML table | создание таблицы HTML
    var rows = [];

    board.forEach(function (row, rowIdx) {

        var cells = [];

        // row caption | название горизонтали
        var humanCoords = prettyCoords({ y: rowIdx });
        cells.push(
            td(
                [{ name: 'class', value: 'caption' }],
                [span([], humanCoords.y.toString())])
        );

        // add cells | заполняем ячейки
        row.forEach(function (cell, cellIdx) {
            var c = newCell(cell, cellIdx, rowIdx);
            cells.push(c);
        });

        var r = tr([], cells);
        rows.push(r);
    });

    // column captions | название вертикали
    var cells = [];
    ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].forEach(function (col) {
        cells.push(
            td(
                [{ name: 'class', value: 'caption' }],
                [span([], col)]
            )
        );
    });
    var row = tr([], cells);
    rows.push(row);

    var tbl = table([], rows);

    document.getElementById('board').appendChild(tbl);
}

/* Test */

var board = initBoard();

view(board);
