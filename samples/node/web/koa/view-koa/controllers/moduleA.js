// moduleA:

module.exports = {
    'GET /moduleA': async (ctx, next) => {
        ctx.render('moduleA.html', {
            pageTitle: 'moduleA'
        });

    }
}