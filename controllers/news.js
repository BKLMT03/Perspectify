const axios = require('axios')

exports.getNews = async(req, res, next) => {
    const query = req.query.query;
    const key = req.query.key;

    if (!query) {
        console.log('grabbing everything')
        console.log(key)
        try {
            const news = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + key)
            console.log(news)
            res.json({
                success: true,
                data: news.data
            })
        } catch (error) {
            res.status(500).json({
                message: error
            })
            
        }
    } else {
        console.log('grabbing just some stuff')
        try {
            const queryNewsData = await axios.get('https://newsapi.org/v2/everything?qInTitle=' + query + '&language=en&sortBy=popularity&apiKey=' + key)
            res.status(200).json({
                success: true,
                data: queryNewsData
            })    
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    }
}