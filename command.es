PUT /movies
{
    "settings": {
        "number_of_shards": 1
    },
    "mappings": {
        "properties": {
            "year": {
                "type": "date"
            }
        }
    }
}

GET /movies/_mapping

PUT /movies/_doc/109487
{
    "genre": [
        "IMAX",
        "SCI-FI"
    ],
    "title": "Interstellar",
    "year": 2014
}

GET /movies/_search
{
    "query": {
        "match_all": {}
    }
}