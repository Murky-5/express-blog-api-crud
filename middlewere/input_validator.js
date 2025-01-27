const list = require('../posts/books')

const verified = (req, res, next) => {
    let verified_in;
    let answer;
    const verId = list.find((verifier) => req.params.id == verifier.id)
    if (isNaN(req.params.id)) {
/*         console.log(req.params.id)
 */        verified_in = 500
/*         console.log(list)
 */    } else if (verId.length > 0) {
        verified_in = 200
    } else {
        verified_in = 404
    }
    if (verified_in == 200) {
        answer = verId
    }
        answer = verified_in
    next()
    return answer
}

module.exports = verified