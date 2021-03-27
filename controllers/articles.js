const {extract} = require('article-parser');

exports.getArticles = async(req, res, next) => {
    const query = req.query;
    const body = req.body;
    // console.log(req)
    console.log(req.query.query)
    try {
        extract(query.query).then((article) => {
            console.log(article);
            res.status(200).json({
                data: article
            })
          }).catch((err) => {
            console.log(err);
          });
          
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server error"
        })
    }
}