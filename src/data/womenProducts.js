export const womenProducts = [
  {
    "product_id": "1",
    "title": "Peanuts:Works Out",
    "price_range": { "min": "700", "max": "900" },
    "stock": "100",
    "tag": ["women"],
    "image_url": "new-arrival-img-1.avif",
    "number_of_variants": "3",
    "variant_options": ["size", "color"],
    "variant_values": [
      {
        "size": {
          "label": "Select Size",
          "values": [
            {
              "1": { "label": "S", "key": "small" },
              "2": { "label": "M", "key": "medium" },
              "3": { "label": "L", "key": "large" },
            }

          ]
        },
        "color": {
          "label": "Select Color",
          "values": [
            {
              "1": { "label": "Red", "key": "red", "color_code": "#ff0000" },
              "2": { "label": "Blue", "key": "blue", "color_code": "#0000ff" },
            }


          ]
        }
      }
    ],
    "variants": [
      { "id": "1b", "size": "small", "color": "blue", "price": "850", "image_url": "new-arrival-img-1.avif", "stock": "40" },
      { "id": "1a", "size": "medium", "color":"red", "price": "800", "image_url": "new-arrival-img-2.avif", "stock": "20" },
      { "id": "1c", "size": "large", "color": "blue", "price": "750", "image_url": "new-arrival-img-3.avif", "stock": "40" },

    ]
  },

  {
    "product_id": "2",
    "title": "Casual T-Shirt",
    "price_range": { "min": null, "max": "500" },
    "stock": "120", // 50 + 70
    "image_url": "new-arrival-img-2.avif",
    "number_of_variants": "2",
    "variant_options": ["size"],
    "variant_values": [
      {
        "size": {
          "label": "Select Size",
          "values": [
            {
              "1": { "label": "M", "key": "medium" },
              "2": { "label": "L", "key": "large" }
            }
          ]
        }
      }
    ],
    "variants": [
      { "id": "2a", "size": "medium", "price": "500", "stock": "50" },
      { "id": "2b", "size": "large", "price": "500", "stock": "70" }
    ]
  },

  {
    "product_id": "3",
    "title": "Sports Hoodie",
    "price_range": { "min": "1200", "max": "1500" },
    "stock": "50", // 20 + 30
    "image_url": "new-arrival-img-3.avif",
    "number_of_variants": "2",
    "variant_options": ["size", "color"],
    "variant_values": [
      {
        "size": {
          "label": "Select Size",
          "values": [
            {
              "1": { "label": "S", "key": "small" },
              "2": { "label": "M", "key": "medium" }
            }
          ]
        },
        "color": {
          "label": "Select Color",
          "values": [
            {
              "1": { "label": "Black", "key": "black", "color_code": "#000000" },
              "2": { "label": "Grey", "key": "grey", "color_code": "#808080" }
            }
          ]
        }
      }
    ],
    "variants": [
      { "id": "3a", "size": "small", "color": "black", "price": "1200", "image_url": "/hoodie-black.avif", "stock": "20" },
      { "id": "3b", "size": "medium", "color": "grey", "price": "1500", "image_url": "/hoodie-grey.avif", "stock": "30" }
    ]
  },

  {
    "product_id": "4",
    "title": "Denim Jeans",
    "price_range": { "min": "1000", "max": "1300" },
    "stock": "40", // 15 + 25
    "image_url": "new-arrival-img-4.avif",
    "number_of_variants": "2",
    "variant_options": ["size"],
    "variant_values": [
      {
        "size": {
          "label": "Select Size",
          "values": [
            {
              "1": { "label": "30", "key": "30" },
              "2": { "label": "32", "key": "32" }
            }
          ]
        }
      }
    ],
    "variants": [
      { "id": "4a", "size": "30", "price": "1000", "stock": "15" },
      { "id": "4b", "size": "32", "price": "1300", "stock": "25" }
    ]
  },

  {
    "product_id": "5",
    "title": "Summer Shirt",
    "price_range": { "min": null, "max": "750" },
    "stock": "50", // 20 + 30
    "image_url": "new-arrival-img-1.avif",
    "number_of_variants": "2",
    "variant_options": ["size", "color"],
    "variant_values": [
      {
        "size": {
          "label": "Select Size",
          "values": [
            {
              "1": { "label": "S", "key": "small" },
              "2": { "label": "M", "key": "medium" }
            }
          ]
        },
        "color": {
          "label": "Select Color",
          "values": [

            { "label": "Green", "key": "green", "color_code": "#00ff00" },
            { "label": "Yellow", "key": "yellow", "color_code": "#ffff00" }

          ]
        }
      }
    ],
    "variants": [
      { "id": "5a", "size": "small", "color": "green", "price": "750", "image_url": "shirt-green.avif", "stock": "20" },
      { "id": "5b", "size": "medium", "color": "yellow", "price": "750", "image_url": "shirt-yellow.avif", "stock": "30" }
    ]
  }
];
