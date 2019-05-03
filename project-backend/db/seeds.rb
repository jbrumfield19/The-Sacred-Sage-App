# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

rochell = User.create
olivia = User.create
jessica = User.create
april = User.create
maxx = User.create

love_bundle = ProductBundle.create(name: "The Love Bundle", description: "It looks like you need more work in the area of self-love in your life.  We would like to recommend these products to you.", url: "https://urlzs.com/PMaA", image: "https://i.etsystatic.com/18675401/r/il/17108d/1790949891/il_1588xN.1790949891_ndjd.jpg")
relationship_bundle = ProductBundle.create(name: "The Relationship Bundle", description: "It looks like you need healthier relationships in your life. We would like to recommend these products to you.", url:": https://urlzs.com/wTeC", image: "https://i.etsystatic.com/18675401/r/il/b2aa34/1743520328/il_1588xN.1743520328_28jk.jpg")
finance_bundle = ProductBundle.create(name: "The Finance Bundle", description: "It looks like you need more work in the area of finances in your life. We would like to recommend these products to you.", url: "https://urlzs.com/C3vp", image: "https://i.etsystatic.com/18675401/r/il/4c8350/1790980857/il_1588xN.1790980857_5io5.jpg")
positivity_bundle = ProductBundle.create(name: "The Positivity Bundle", description: "It looks like you need more work in the area of positivity in your life. We would like to recommend these products to you.", url:"https://urlzs.com/YsqG", image: "https://i.etsystatic.com/18675401/r/il/6545b3/1803420152/il_1588xN.180342015")
protection_bundle = ProductBundle.create(name: "The Protection Bundle", description: "It looks like you need more work in the area of protection in your life. We would like to recommend these products to you.", url: "https://urlzs.com/QZ84", image: "https://i.etsystatic.com/18675401/r/il/d5c783/1790965753/il_1588xN.1790965753_79b0.jpg")

love_result = Result.create(category: "Love", user: rochell, product_bundle: love_bundle)
relationship_result = Result.create(category: "Relationship", user: olivia, product_bundle: relationship_bundle)
finance_result = Result.create(category: "Finance", user: jessica, product_bundle: finance_bundle)
positivity_result = Result.create(category: "Positivity", user: april, product_bundle: positivity_bundle)
protection_result = Result.create(category: "Protection", user: maxx, product_bundle: protection_bundle)
