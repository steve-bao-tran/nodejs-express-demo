const db = require('../db');

module.exports.list = function (req, res) {
    /*  
        ?page = n
        x: perPage(limit)
        begin = (n-1)*x
        end = (n-1)*x + x = n*x
    */
    var page = parseInt(req.query.page) || 1; // n
    var limit = 8; // x
    // var begin = (page - 1) * limit;  // case 1
    // var end = page * limit;          // case 1
    var drop = (page-1)*limit;
    var take = limit;

    // pagination   
    var numPro = db.get('products').value().length;
    var p_first = 1;
    var p_last = numPro%limit==0?numPro/limit:(numPro/limit).toFixed(0);
    var p_current = 2;
    var first = 'First';
    var second = '';
    var third = '';
    var four = '';
    var last = 'Last';
    if (page == p_first) {
        first = p_first+'';
        second = (p_first+1)+'';
        third = (p_first+2)+'';
        four = (p_first+3)+'';
        p_current = 0;
    } else if (page > p_first && page < p_last) {        
        second = (page-1)+'';
        third = (page)+'';
        four = (page+1)+'';
    } else if (page == p_last) {        
        second = (p_last-3)+'';
        third = (p_last-2)+'';
        four = (p_last-1)+'';
        last = p_last+'';
        p_current = 4;
    }
    

    res.render('products/index', {
        // products:db.get('products').value().slice(begin, end) // case 1
        products:db.get('products').drop(drop).take(take).value(), // case 2    
        pagination: [
            {link:'/product?page='+(first=='First'?p_first:first), num:first, current:p_current},
            {link:'/product?page='+second, num:second, current:p_current},
            {link:'/product?page='+third, num:third, current:p_current},
            {link:'/product?page='+four, num:four, current:p_current},
            {link:'/product?page='+(last=='Last'?p_last:last), num:last, current:p_current}
        ],
        tong: numPro        
    });
};
