"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "Boilded Egg",
            price: 10,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://minimalistbaker.com/wp-content/uploads/2020/01/Hard-Boiled-Eggs-SQUARE.jpg",
            type: "breakfast",
        },
        {
            name: "RAMEN",
            price: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://static.vecteezy.com/system/resources/previews/024/356/743/original/close-up-of-ramen-in-bowl-on-white-background-ai-generated-free-photo.jpg",
            type: "lunch",
        },
        {
            name: "GRILLED CHICKEN",
            price: 45,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-horizontal-1532030541.jpg",
            type: "dinner",
        },
        {
            name: "CAKE",
            price: 18,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-horizontal-1532030541.jpg",
            type: "breakfast",
        },
        {
            name: "BURGER",
            price: 23,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://wallpapercave.com/wp/wp1987065.jpg ",
            type: "lunch",
        },
        {
            name: "PANCAKE",
            price: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://wallpapercave.com/wp/wp1987065.jpg",
            type: "dinner",
        },
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map