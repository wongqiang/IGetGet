const dir = './'
const fs = require('fs-extra')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
module.exports = {
    summary: 'A rule to save article and audio',
    *beforeSendResponse(requestDetail, responseDetail) {
        if (requestDetail.url.match('https\:\/\/m\.igetget\.com\/subscribe')) {
            let response = responseDetail.response
            const $ = cheerio.load(response.body, {
                decodeEntities: false
            })
            let audio = $('.subscribe-detail .article-body .audio-detail button').attr('data-src')
            let title = $('.subscribe-detail > article > h1').text()
            let ps = $('.subscribe-detail .article-body h2,.subscribe-detail .article-body .text,.subscribe-detail .article-body blockquote')
            let article = ''
            ps.each(function() {
                article += $(this).text() + '\n'
            })
            console.log('Title' + title)
            console.log('Article' + article)
            console.log('Audio' + audio)
            let fileDir = dir + title
            fs.ensureDir(fileDir, error => {
                if (!error) {
                    fetch(audio).then(res => {
                        const dest = fs.createWriteStream(fileDir + '/audio.mp3');
                        res.body.pipe(dest)
                    })
                    fs.outputFile(fileDir + '/text.txt', article, error => {
                        console.log(error)
                        if (!error) {
                            console.log('Saved to txt successfully')
                        }
                    })
                    fs.outputFile(fileDir + '/web.html', response.body, error => {
                        console.log(error)
                        if (!error) {
                            console.log('Saved to txt successfully')
                        }
                    })
                }
            })
            return new Promise((resolve) => {
                resolve({response: response})
            });
        }
    },
};