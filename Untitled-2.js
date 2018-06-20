db.modulos.update(
    {},
    {
        $set : {
            "topics.0._id" : ObjectId()
        }
    },
        {
            multi : true
        }
)
db.hotels.update(
    {},
    {
        $set : {
            "reviews.0._id" : ObjectId()
        }
    },
        {
            multi : true
        }
)

