let entries = [
    {
        name: "flowers",
        prompt: "What is this flower?",
        picture: "../images/flower.jpg", 
        questions: [
            {
                picture : "../images/daffodil.png",
                options: ["Daffodil", "Lilly", "Rose"]
            },
            {
                picture: ".../images/rose.png",
                options: ["Waterlily", "Daisy", "Rose"]
            },
            {
                picture: "../images/cherryblossom.png",
                options: ["Daisy", "Cherry Blossom", "Tulip"]
            },
            {
                picture: ".../images/daisy.jpg",
                options: ["Sunflower", "Lily", "Daisy"]
            },
            {
                picture: "../images/lily.jpg",
                options: ["Lily", "Venus Fly Trap", "Rose"]
            },
            {
                picture: "../images/waterlily.png",
                options: ["Waterlily", "Bellflowers", "Yarrow"]
            }
        ]
    },
    {
        name: "animals",
        prompt: "Name this Animal",
        picture: "../images/animals.jpg",
        questions: [
            {
                picture : "../images/elephant.jpg",
                options: ["Cow", "Snake", "Elephant"]
            },
            {
                picture : "../images/giraffe.jpg",
                options: ["Giraffe", "Panda", "Alligator"]
            },
            {
                picture : "../images/dog.jpg",
                options: ["Cow", "Dog", "Elephant"]
            },
            {
                picture : "../images/gorilla.jpg",
                options: ["Snake", "Gorilla", "Honey Badger"]
            },
            {
                picture : "../images/panda.jpg",
                options: ["Lizard", "Elephant", "Panda"]
            }, 
            {
                picture : "../images/zebra.jpg",
                options: ["Lion", "Zebra", "Lemur"]
            }
        ]
    },
    {
        name: "colors",
        prompt: "What is the shown color?",
        picture: "../images/colors.jpg",
        questions: [
            {
                picture : "../images/red.jpg",
                options: ["Red", "Blue", "Green"]
            },
            {
                picture : "../images/blue.jpg",
                options: ["Blue", "Orange", "Yellow"]
            },
            {
                picture : "../images/green.png",
                options: ["Black", "Blue", "Green"]
            },
            {
                picture : "../images/yellow.png",
                options: ["Green", "Yellow", "Black"]
            },
            {
                picture : "../images/purple.jpg",
                options: ["Purple", "Green", "Red"]
            }, 
            {
                picture : "../images/white.jpg",
                options: ["White", "Blue", "Yellow"]
            }
        ]
    }
]
export default entries;