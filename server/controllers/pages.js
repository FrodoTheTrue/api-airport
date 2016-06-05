exports.index = (req, res) => {
    const data = {};
    res.render('main/main', Object.assign(data, req.commonData));
};
exports.admin = (req, res) => {
    const data = {};
    res.render('admin/admin', Object.assign(data, req.commonData));
};

exports.error404 = (req, res) => res.sendStatus(404);