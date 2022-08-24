export default {
    name: "product",
    title: "Product",
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: "image" }],
            options: {
                hotspot: true,
            }
        }, 
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'brand',
            title: 'Brand',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        }, 
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        }, 
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'typeOfProduct',
            title: 'Type of Product',
            type: 'string',
        }, 
        {
            name: 'sex',
            title: 'Sex',
            type: 'string',
        }, 
        {
            name: 'sizes',
            title: 'Sizes',
            type: 'array',
            of: [{type: 'string'}],
        }
    ]
}