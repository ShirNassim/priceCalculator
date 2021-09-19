const createObject = (Model, data) => {
    return new Promise(async(resolve, reject) => {
        console.log(data)
        await Model.create(data, function(err, savedDoc) {
            if (err) return reject(err);
            resolve(savedDoc);
        });

    })

}
const getJewelry = (Model, id) => {
    return new Promise(async(resolve, reject) => {
        Model.findById(id, function(err, doc) {
            if (err) return reject(err);
            resolve(doc);
        });



    })
}

const getSimilarJewelries = (Model, jewelry, id) => {
    return new Promise(async(resolve, reject) => {
        let { carat, weight, clarity, color, tag } = jewelry;
        let simialrDiamonds = await Model.find({ "tag": tag, _id: { $ne: id } });
        resolve(simialrDiamonds)
    })
}


module.exports = { createObject, getJewelry, getSimilarJewelries }