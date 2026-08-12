/* =====================================================
   PASSFORGE
===================================================== */


/* =====================================================
   STATE
===================================================== */

let currentStyle = "alphanumeric";

let currentPlatform = null;

let easyMode = false;

let passwordVisible = true;


/* =====================================================
   PASSWORD LENGTH
===================================================== */

const MIN_PASSWORD_LENGTH = 8;

const MAX_PASSWORD_LENGTH = 20;


/* =====================================================
   CHARACTER SETS
===================================================== */

const LETTERS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const NUMBERS =
    "0123456789";

const SYMBOLS =
    "!@#$%^&*()-_=+[]{}?";


/* =====================================================
   RECENT PASSWORD HISTORY
   Prevents repeated generated passwords.
===================================================== */

const MAX_RECENT_PASSWORDS = 200;

const recentPasswords = new Set();


/* =====================================================
   EASY MODE WORD BANKS
===================================================== */

const EASY_ADJECTIVES = [

    "happy",
    "silent",
    "bright",
    "golden",
    "silver",
    "quiet",
    "clever",
    "gentle",
    "brave",
    "calm",
    "swift",
    "lucky",
    "cosmic",
    "fuzzy",
    "tiny",
    "giant",
    "wild",
    "blue",
    "green",
    "purple",
    "red",
    "orange",
    "yellow",
    "sleepy",
    "sunny",
    "clever",
    "mighty",
    "magic",
    "rapid",
    "secret",
    "cool",
    "warm",
    "fresh",
    "frozen",
    "electric",
    "velvet",
    "crystal",
    "clever",
    "dancing",
    "shiny",
    "friendly",
    "ancient",
    "brilliant",
    "curious",
    "playful",
    "peaceful",
    "fearless",
    "royal",
    "cosmic",
    "mysterious",
    "hidden",
    "flying",
    "sleepy",
    "hungry",
    "happy",
    "lively",
    "stormy",
    "misty",
    "snowy",
    "sunny",
    "autumn",
    "summer",
    "winter",
    "spring",
    "midnight",
    "morning",
    "evening",
    "lunar",
    "solar",
    "northern",
    "western",
    "eastern",
    "southern",
    "clever",
    "fearless",
    "whispering",
    "wandering",
    "roaming",
    "daring",
    "cheerful",
    "mighty",
    "peaceful",
    "playful",
    "sparkling",
    "magical",
    "fantastic",
    "brilliant",
    "mellow",
    "smooth",
    "rapid",
    "steady",
    "strong",
    "secret",
    "hidden",
    "golden",
    "silver",
    "midnight"

];


const EASY_NOUNS = [

    "tiger",
    "rabbit",
    "panda",
    "fox",
    "wolf",
    "eagle",
    "owl",
    "dragon",
    "turtle",
    "penguin",
    "dolphin",
    "whale",
    "otter",
    "lion",
    "leopard",
    "zebra",
    "sparrow",
    "falcon",
    "hawk",
    "swan",
    "kitten",
    "puppy",
    "monkey",
    "bear",
    "koala",
    "rocket",
    "planet",
    "comet",
    "meteor",
    "moon",
    "star",
    "cloud",
    "river",
    "ocean",
    "mountain",
    "forest",
    "island",
    "castle",
    "tower",
    "bridge",
    "garden",
    "flower",
    "rose",
    "lily",
    "maple",
    "willow",
    "breeze",
    "storm",
    "rain",
    "snow",
    "sun",
    "rainbow",
    "coffee",
    "pizza",
    "cookie",
    "toast",
    "cheese",
    "lemon",
    "mango",
    "peach",
    "cherry",
    "grape",
    "melon",
    "apple",
    "orange",
    "banana",
    "coconut",
    "piano",
    "guitar",
    "violin",
    "drum",
    "camera",
    "robot",
    "wizard",
    "pirate",
    "ninja",
    "knight",
    "artist",
    "artist",
    "book",
    "pencil",
    "notebook",
    "keyboard",
    "computer",
    "bicycle",
    "train",
    "rocket",
    "scooter",
    "umbrella",
    "lantern",
    "candle",
    "diamond",
    "crystal",
    "jewel",
    "treasure",
    "anchor",
    "compass",
    "magnet",
    "helmet",
    "sword",
    "shield",
    "ticket",
    "puzzle",
    "clock",
    "window",
    "mirror",
    "button",
    "pocket",
    "paper",
    "feather",
    "shell",
    "stone",
    "leaf",
    "acorn",
    "bamboo",
    "cactus",
    "volcano",
    "waterfall",
    "fountain",
    "harbor",
    "beacon",
    "village",
    "palace",
    "meadow",
    "desert",
    "valley",
    "canyon",
    "glacier",
    "reef",
    "beach",
    "sunset",
    "shadow",
    "echo",
    "dream",
    "music",
    "harmony"

];


/* =====================================================
   STORY MODE WORD BANKS
===================================================== */

const STORY_ADJECTIVES = [

    "tiny",
    "sleepy",
    "happy",
    "angry",
    "clever",
    "brave",
    "lazy",
    "curious",
    "funny",
    "mysterious",
    "hungry",
    "dancing",
    "flying",
    "friendly",
    "strange",
    "magical",
    "giant",
    "little",
    "wild",
    "lonely",
    "excited",
    "secret",
    "brilliant",
    "silly",
    "ancient",
    "royal",
    "fearless",
    "playful",
    "grumpy",
    "sleepy",
    "nervous",
    "adventurous",
    "invisible",
    "powerful",
    "shy",
    "cheerful",
    "confused",
    "clever",
    "mighty",
    "wandering",
    "lost",
    "famous",
    "strange",
    "brilliant",
    "quick",
    "slow",
    "noisy",
    "quiet",
    "hungry",
    "thirsty"

];


const STORY_SUBJECTS = [

    "cat",
    "fox",
    "panda",
    "rabbit",
    "turtle",
    "penguin",
    "dragon",
    "pirate",
    "wizard",
    "ninja",
    "robot",
    "monkey",
    "owl",
    "lion",
    "tiger",
    "wolf",
    "bear",
    "dolphin",
    "astronaut",
    "knight",
    "princess",
    "king",
    "queen",
    "farmer",
    "detective",
    "chef",
    "artist",
    "musician",
    "teacher",
    "traveler",
    "alien",
    "unicorn",
    "ghost",
    "vampire",
    "superhero",
    "squirrel",
    "frog",
    "duck",
    "chicken",
    "sheep",
    "cow",
    "horse",
    "parrot",
    "eagle",
    "penguin",
    "koala",
    "leopard",
    "shark",
    "whale",
    "otter"

];


const STORY_VERBS = [

    "found",
    "stole",
    "bought",
    "opened",
    "discovered",
    "chased",
    "followed",
    "carried",
    "lost",
    "painted",
    "built",
    "fixed",
    "cooked",
    "ordered",
    "borrowed",
    "invented",
    "saved",
    "visited",
    "called",
    "watched",
    "followed",
    "pushed",
    "pulled",
    "kicked",
    "dropped",
    "picked",
    "hid",
    "shared",
    "sold",
    "won",
    "lost",
    "found",
    "created",
    "opened",
    "closed",
    "brought",
    "took",
    "carried",
    "discovered",
    "explored",
    "entered",
    "escaped",
    "visited",
    "helped",
    "rescued",
    "challenged",
    "invited",
    "surprised"

];


const STORY_OBJECTS = [

    "pizza",
    "cake",
    "treasure",
    "rocket",
    "sandwich",
    "cookie",
    "coffee",
    "umbrella",
    "bicycle",
    "guitar",
    "book",
    "map",
    "key",
    "diamond",
    "crown",
    "camera",
    "ticket",
    "puzzle",
    "lantern",
    "sword",
    "shield",
    "hat",
    "backpack",
    "balloon",
    "robot",
    "computer",
    "piano",
    "boat",
    "train",
    "car",
    "flower",
    "crystal",
    "gold",
    "necklace",
    "letter",
    "phone",
    "tablet",
    "sandwich",
    "apple",
    "banana",
    "trophy",
    "present",
    "bottle",
    "clock",
    "mirror",
    "painting",
    "toy",
    "magnet",
    "compass",
    "camera"

];


const STORY_PLACES = [

    "the moon",
    "the beach",
    "the forest",
    "the castle",
    "the mountain",
    "the desert",
    "the city",
    "the village",
    "the garden",
    "the island",
    "the spaceship",
    "the kitchen",
    "the library",
    "the school",
    "the park",
    "the market",
    "the train station",
    "the secret cave",
    "the old tower",
    "the pirate ship",
    "the jungle",
    "the river",
    "the ocean",
    "the snowy mountain",
    "the mysterious island",
    "the hidden valley",
    "the royal palace",
    "the tiny village",
    "the space station",
    "the haunted house"

];


const STORY_TIME = [

    "at midnight",
    "in the morning",
    "at sunset",
    "after lunch",
    "before sunrise",
    "during the storm",
    "one rainy evening",
    "on a sunny morning",
    "late at night",
    "one strange afternoon",
    "during the festival",
    "on a quiet Sunday",
    "before dinner",
    "after midnight",
    "one cold winter night",
    "on a warm summer day"

];


/* =====================================================
   COMMON PASSWORDS
===================================================== */

const COMMON_PASSWORDS =
    new Set([
        "password",
        "password123",
        "123456",
        "12345678",
        "123456789",
        "1234567890",
        "qwerty",
        "qwerty123",
        "abc123",
        "letmein",
        "welcome",
        "admin",
        "admin123",
        "iloveyou",
        "monkey",
        "dragon",
        "football",
        "baseball",
        "master",
        "login",
        "passw0rd",
        "changeme",
        "secret",
        "000000",
        "111111",
        "123123"
    ]);


/* =====================================================
   HELPER
===================================================== */

function getElement(id) {

    return document.getElementById(id);

}


/* =====================================================
   RANDOM HELPERS
===================================================== */

function secureRandom(max) {

    if (max <= 0) {

        throw new Error(
            "Invalid random range."
        );

    }


    const array =
        new Uint32Array(1);


    const range =
        0x100000000;


    const limit =
        range -
        (range % max);


    let value;


    do {

        crypto.getRandomValues(
            array
        );

        value =
            array[0];

    } while (
        value >= limit
    );


    return value % max;

}


function randomCharacter(characters) {

    return characters[
        secureRandom(
            characters.length
        )
    ];

}


function randomFrom(array) {

    return array[
        secureRandom(
            array.length
        )
    ];

}


function generateRandom(
    length,
    characters
) {

    let result = "";


    for (
        let i = 0;
        i < length;
        i++
    ) {

        result +=
            randomCharacter(
                characters
            );

    }


    return result;

}


/* =====================================================
   UNIQUE RANDOM ITEM
===================================================== */

function randomUniqueItems(
    array,
    count
) {

    const selected =
        new Set();


    /*
        Prevents an infinite loop
        if count becomes too large.
    */

    count =
        Math.min(
            count,
            array.length
        );


    while (
        selected.size < count
    ) {

        selected.add(
            randomFrom(array)
        );

    }


    return [
        ...selected
    ];

}


/* =====================================================
   RECENT PASSWORD SYSTEM
===================================================== */

function rememberPassword(password) {

    recentPasswords.add(
        password
    );


    /*
        Keep memory limited.
    */

    if (
        recentPasswords.size >
        MAX_RECENT_PASSWORDS
    ) {

        const oldest =
            recentPasswords
                .values()
                .next()
                .value;


        recentPasswords.delete(
            oldest
        );

    }

}


function isRecentPassword(password) {

    return recentPasswords.has(
        password
    );

}


/* =====================================================
   GENERATE UNIQUE PASSWORD
===================================================== */

function generateUniquePassword(
    generator,
    maxAttempts = 100
) {

    let password;


    for (
        let attempt = 0;
        attempt < maxAttempts;
        attempt++
    ) {

        password =
            generator();


        if (
            !isRecentPassword(
                password
            )
        ) {

            rememberPassword(
                password
            );


            return password;

        }

    }


    /*
        Extremely unlikely fallback.
    */

    password =
        generator();


    rememberPassword(
        password
    );


    return password;

}


/* =====================================================
   PASSWORD LENGTH
===================================================== */

function getPasswordLength() {

    const input =
        getElement(
            "passwordLength"
        );


    let length =
        parseInt(
            input.value,
            10
        );


    if (
        Number.isNaN(length)
    ) {

        length = 10;

    }


    return Math.min(
        MAX_PASSWORD_LENGTH,
        Math.max(
            MIN_PASSWORD_LENGTH,
            length
        )
    );

}


function handleLengthInput(input) {

    input.value =
        input.value.replace(
            /[^0-9]/g,
            ""
        );

}


function validateLength() {

    if (
        currentStyle === "story"
    ) {

        getElement(
            "passwordLength"
        ).value = "0";


        return;

    }


    const input =
        getElement(
            "passwordLength"
        );


    let length =
        parseInt(
            input.value,
            10
        );


    if (
        Number.isNaN(length)
    ) {

        length = 10;

    }


    length =
        Math.min(
            MAX_PASSWORD_LENGTH,
            Math.max(
                MIN_PASSWORD_LENGTH,
                length
            )
        );


    input.value =
        length;

}


/* =====================================================
   EASY TO REMEMBER PASSWORD
===================================================== */

/*
    The old system used only 3 random words.

    This version creates several different structures
    and dynamically chooses words.

    Example:

    Silent-Tiger47!
    GoldenRiver_82
    Happy-Coffee-71
    BlueRocket#29
    Quiet-Panda73@
*/

function generateEasyPassword() {

    const length =
        getPasswordLength();


    return generateUniquePassword(
        () =>
            buildEasyPassword(
                length
            )
    );

}


function buildEasyPassword(length) {

    const separators = [
        "-",
        "_",
        "."
    ];


    const symbols = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "&",
        "*"
    ];


    /*
        Pattern 1

        Adjective + separator +
        Noun + number + symbol
    */

    const pattern1 =
        () => {

            const adjective =
                randomFrom(
                    EASY_ADJECTIVES
                );


            const noun =
                randomFrom(
                    EASY_NOUNS
                );


            const separator =
                randomFrom(
                    separators
                );


            const number =
                String(
                    secureRandom(90) + 10
                );


            const symbol =
                randomFrom(
                    symbols
                );


            return (
                capitalize(
                    adjective
                ) +
                separator +
                capitalize(
                    noun
                ) +
                number +
                symbol
            );

        };


    /*
        Pattern 2

        Noun + separator +
        adjective + number + symbol
    */

    const pattern2 =
        () => {

            const noun =
                randomFrom(
                    EASY_NOUNS
                );


            const adjective =
                randomFrom(
                    EASY_ADJECTIVES
                );


            const separator =
                randomFrom(
                    separators
                );


            const number =
                String(
                    secureRandom(900) + 100
                );


            const symbol =
                randomFrom(
                    symbols
                );


            return (
                capitalize(
                    noun
                ) +
                separator +
                capitalize(
                    adjective
                ) +
                number +
                symbol
            );

        };


    /*
        Pattern 3

        Adjective + noun +
        separator + noun + number
    */

    const pattern3 =
        () => {

            const [
                adjective,
                noun1,
                noun2
            ] =
                randomUniqueItems(
                    EASY_ADJECTIVES.concat(
                        EASY_NOUNS
                    ),
                    3
                );


            const separator =
                randomFrom(
                    separators
                );


            const number =
                String(
                    secureRandom(90) + 10
                );


            return (
                capitalize(
                    adjective
                ) +
                capitalize(
                    noun1
                ) +
                separator +
                capitalize(
                    noun2
                ) +
                number
            );

        };


    /*
        Pattern 4

        Three words + symbol + number
    */

    const pattern4 =
        () => {

            const adjective =
                randomFrom(
                    EASY_ADJECTIVES
                );


            const [
                noun1,
                noun2
            ] =
                randomUniqueItems(
                    EASY_NOUNS,
                    2
                );


            const symbol =
                randomFrom(
                    symbols
                );


            const number =
                String(
                    secureRandom(90) + 10
                );


            return (
                capitalize(
                    adjective
                ) +
                "-" +
                capitalize(
                    noun1
                ) +
                capitalize(
                    noun2
                ) +
                symbol +
                number
            );

        };


    const generators = [

        pattern1,

        pattern2,

        pattern3,

        pattern4

    ];


    /*
        Try multiple patterns until one
        fits the requested password length.
    */

    for (
        let attempt = 0;
        attempt < 50;
        attempt++
    ) {

        const generator =
            randomFrom(
                generators
            );


        const password =
            generator();


        if (
            password.length <= length
        ) {

            return password;

        }

    }


    /*
        If a generated memorable password
        doesn't fit, make one using shorter
        words.
    */

    return buildShortEasyPassword(
        length
    );

}


/* =====================================================
   SHORT EASY PASSWORD
===================================================== */

function buildShortEasyPassword(length) {

    const shortAdjectives =
        EASY_ADJECTIVES.filter(
            word =>
                word.length <= 6
        );


    const shortNouns =
        EASY_NOUNS.filter(
            word =>
                word.length <= 7
        );


    const adjective =
        randomFrom(
            shortAdjectives
        );


    const noun =
        randomFrom(
            shortNouns
        );


    const number =
        String(
            secureRandom(90) + 10
        );


    const symbol =
        randomFrom(
            "!@#$%^&*"
        );


    const separator =
        randomFrom(
            "-_"
        );


    let password =
        capitalize(
            adjective
        ) +
        separator +
        capitalize(
            noun
        ) +
        number +
        symbol;


    /*
        Final safety fallback.
    */

    if (
        password.length > length
    ) {

        password =
            (
                adjective.charAt(0) +
                noun +
                number +
                symbol
            );

    }


    return password.substring(
        0,
        length
    );

}


/* =====================================================
   CAPITALIZE
===================================================== */

function capitalize(word) {

    if (
        !word
    ) {

        return "";

    }


    return (
        word.charAt(0).toUpperCase() +
        word.slice(1)
    );

}


/* =====================================================
   STRONG PASSWORD
===================================================== */

function generateStrongPassword(length) {

    return generateUniquePassword(
        () =>
            buildStrongPassword(
                length
            )
    );

}


function buildStrongPassword(length) {

    const words =
        randomUniqueItems(
            EASY_NOUNS,
            3
        );


    const number =
        secureRandom(90) + 10;


    const symbol =
        randomCharacter(
            "!@#$%^&*"
        );


    const separator =
        randomCharacter(
            "-_."
        );


    let result =
        capitalize(
            words[0]
        ) +
        separator +
        capitalize(
            words[1]
        ) +
        number +
        symbol +
        separator +
        capitalize(
            words[2]
        );


    if (
        result.length <= length
    ) {

        return result;

    }


    /*
        Shorter strong structure.
    */

    const shortWords =
        randomUniqueItems(
            EASY_NOUNS.filter(
                word =>
                    word.length <= 6
            ),
            2
        );


    result =
        capitalize(
            shortWords[0]
        ) +
        separator +
        capitalize(
            shortWords[1]
        ) +
        number +
        symbol;


    if (
        result.length <= length
    ) {

        return result;

    }


    return generateRandom(
        length,
        LETTERS +
        NUMBERS +
        SYMBOLS
    );

}


/* =====================================================
   STORY MODE
===================================================== */

/*
    IMPORTANT:

    We no longer store complete sentences.

    A sentence is constructed from:

    adjectives
    subjects
    verbs
    objects
    places
    time expressions

    This creates a very large number of possible
    combinations without needing an API.
*/


function generateStoryPassword() {

    return generateUniquePassword(
        () =>
            buildStorySentence()
    );

}


/* =====================================================
   STORY SENTENCE BUILDER
===================================================== */

function buildStorySentence() {

    const templates = [

        // 5 words
        () => {
            const adjective = randomFrom(STORY_ADJECTIVES);
            const subject = randomFrom(STORY_SUBJECTS);
            const verb = randomFrom(STORY_VERBS);
            const object = randomFrom(STORY_OBJECTS);

            return `${capitalize(adjective)} ${subject} ${verb} ${object} tonight.`;
        },


        // 6 words
        () => {
            const adjective = randomFrom(STORY_ADJECTIVES);
            const subject = randomFrom(STORY_SUBJECTS);
            const verb = randomFrom(STORY_VERBS);
            const object = randomFrom(STORY_OBJECTS);

            return `The ${adjective} ${subject} ${verb} the ${object}.`;
        },


        // 7 words
        () => {
            const adjective = randomFrom(STORY_ADJECTIVES);
            const subject = randomFrom(STORY_SUBJECTS);
            const verb = randomFrom(STORY_VERBS);
            const object = randomFrom(STORY_OBJECTS);
            const place = randomFrom(STORY_PLACES);

            return `The ${adjective} ${subject} ${verb} ${object} at ${place}.`;
        },


        // 8 words
        () => {
            const adjective = randomFrom(STORY_ADJECTIVES);
            const subject = randomFrom(STORY_SUBJECTS);
            const verb = randomFrom(STORY_VERBS);
            const object = randomFrom(STORY_OBJECTS);
            const time = randomFrom(STORY_TIME);

            return `${time}, the ${adjective} ${subject} ${verb} the ${object}.`;
        },


        // 5 words
        () => {
            const subject = randomFrom(STORY_SUBJECTS);
            const verb = randomFrom(STORY_VERBS);
            const object = randomFrom(STORY_OBJECTS);

            return `The ${subject} ${verb} ${object} today.`;
        },


        // 6 words
        () => {
            const adjective = randomFrom(STORY_ADJECTIVES);
            const subject = randomFrom(STORY_SUBJECTS);
            const verb = randomFrom(STORY_VERBS);

            return `A ${adjective} ${subject} ${verb} tonight.`;
        },


        // 7 words
        () => {
            const adjective = randomFrom(STORY_ADJECTIVES);
            const subject = randomFrom(STORY_SUBJECTS);
            const object = randomFrom(STORY_OBJECTS);
            const place = randomFrom(STORY_PLACES);

            return `The ${adjective} ${subject} found ${object} near ${place}.`;
        },


        // 8 words
        () => {
            const adjective = randomFrom(STORY_ADJECTIVES);
            const subject = randomFrom(STORY_SUBJECTS);
            const verb = randomFrom(STORY_VERBS);
            const object = randomFrom(STORY_OBJECTS);
            const place = randomFrom(STORY_PLACES);

            return `A ${adjective} ${subject} ${verb} the ${object} near ${place}.`;
        }

    ];


    const template =
        randomFrom(templates);


    return template();

}


/* =====================================================
   GENERATE BUTTON STATE
===================================================== */

function updateGenerateButtonState() {

    const button =
        getElement(
            "generateButton"
        );


    if (
        currentStyle === "story"
    ) {

        button.classList.remove(
            "easy-active"
        );


        button.classList.add(
            "story-active"
        );


        return;

    }


    button.classList.remove(
        "story-active"
    );


    if (
        easyMode
    ) {

        button.classList.add(
            "easy-active"
        );

    } else {

        button.classList.remove(
            "easy-active"
        );

    }

}


/* =====================================================
   STYLE BUTTONS
===================================================== */

function updateStyleButtons() {

    document
        .querySelectorAll(
            "[data-style]"
        )
        .forEach(
            button => {

                button.classList.remove(
                    "active"
                );

            }
        );


    if (
        currentStyle
    ) {

        const selected =
            document.querySelector(
                `[data-style="${currentStyle}"]`
            );


        if (
            selected &&
            !selected.disabled
        ) {

            selected.classList.add(
                "active"
            );

        }

    }

}


/* =====================================================
   EASY OPTION UI
===================================================== */

function updateEasyOptionUI() {

    const easyOption =
        getElement(
            "easyOption"
        );


    const easyToggle =
        getElement(
            "easyToggle"
        );


    if (
        !easyOption ||
        !easyToggle
    ) {

        return;

    }


    if (
        easyMode
    ) {

        easyOption.classList.add(
            "active"
        );


        easyToggle.checked =
            true;


        easyOption.setAttribute(
            "aria-pressed",
            "true"
        );

    } else {

        easyOption.classList.remove(
            "active"
        );


        easyToggle.checked =
            false;


        easyOption.setAttribute(
            "aria-pressed",
            "false"
        );

    }

}


/* =====================================================
   EASY OPTION CLICK
===================================================== */

function handleEasyOptionClick(event) {

    if (
        currentStyle === "story"
    ) {

        return;

    }


    easyMode =
        !easyMode;


    if (
        easyMode
    ) {

        currentStyle =
            "strong";


        getElement(
            "feedback"
        ).textContent =
            "Generate a memorable passphrase";


        getElement(
            "feedback"
        ).classList.add(
            "easy-active"
        );

    } else {

        currentStyle =
            null;


        getElement(
            "feedback"
        ).textContent =
            "";


        getElement(
            "feedback"
        ).classList.remove(
            "easy-active"
        );

    }


    updateStyleButtons();

    updateEasyOptionUI();

    updateGenerateButtonState();

}


/* =====================================================
   EASY OPTION KEYBOARD
===================================================== */

function handleEasyOptionKey(event) {

    if (
        event.key === "Enter" ||
        event.key === " "
    ) {

        event.preventDefault();


        handleEasyOptionClick(
            event
        );

    }

}


/* =====================================================
   STORY MODE UI
===================================================== */

function setStoryModeUI(enabled) {

    const passwordContainer =
        getElement(
            "passwordContainer"
        );


    const lengthInput =
        getElement(
            "passwordLength"
        );


    const easyOption =
        getElement(
            "easyOption"
        );


    const easyToggle =
        getElement(
            "easyToggle"
        );


    const platformButtons =
        document.querySelectorAll(
            "[data-platform]"
        );


    const styleButtons =
        document.querySelectorAll(
            "[data-style]"
        );


    if (
        enabled
    ) {

        lengthInput.value =
            "0";


        lengthInput.classList.add(
            "story-mode"
        );


        passwordContainer.classList.remove(
            "story-inactive"
        );


        passwordContainer.classList.add(
            "story-active"
        );


        platformButtons.forEach(
            button => {

                button.disabled =
                    true;


                button.classList.remove(
                    "active"
                );

            }
        );


        currentPlatform =
            null;


        styleButtons.forEach(
            button => {

                if (
                    button.dataset.style !==
                    "story"
                ) {

                    button.disabled =
                        true;


                    button.classList.remove(
                        "active"
                    );

                }

            }
        );


        const storyButton =
            document.querySelector(
                '[data-style="story"]'
            );


        if (
            storyButton
        ) {

            storyButton.disabled =
                false;


            storyButton.classList.add(
                "active"
            );

        }


        easyMode =
            false;


        easyToggle.checked =
            false;


        easyOption.classList.add(
            "disabled"
        );


        updateEasyOptionUI();

        updateGenerateButtonState();

    } else {

        lengthInput.classList.remove(
            "story-mode"
        );


        lengthInput.value =
            "10";


        passwordContainer.classList.remove(
            "story-active"
        );


        passwordContainer.classList.add(
            "story-inactive"
        );


        platformButtons.forEach(
            button => {

                button.disabled =
                    false;

            }
        );


        styleButtons.forEach(
            button => {

                button.disabled =
                    false;

            }
        );


        easyOption.classList.remove(
            "disabled"
        );


        updateEasyOptionUI();

        updateGenerateButtonState();

    }

}


/* =====================================================
   GENERATE PASSWORD
===================================================== */

function generatePassword() {

    let password;


    if (
        currentStyle === "story"
    ) {

        password =
            generateStoryPassword();

    } else {

        validateLength();


        const length =
            getPasswordLength();


        if (
            easyMode
        ) {

            password =
                generateEasyPassword();

        } else {

            switch (
            currentStyle
            ) {

                case "letters":

                    password =
                        generateUniquePassword(
                            () =>
                                generateRandom(
                                    length,
                                    LETTERS
                                )
                        );

                    break;


                case "alphanumeric":

                    password =
                        generateUniquePassword(
                            () =>
                                generateRandom(
                                    length,
                                    LETTERS +
                                    NUMBERS
                                )
                        );

                    break;


                case "symbols":

                    password =
                        generateUniquePassword(
                            () =>
                                generateRandom(
                                    length,
                                    LETTERS +
                                    NUMBERS +
                                    SYMBOLS
                                )
                        );

                    break;


                case "strong":

                    password =
                        generateStrongPassword(
                            length
                        );

                    break;


                default:

                    password =
                        generateUniquePassword(
                            () =>
                                generateRandom(
                                    length,
                                    LETTERS +
                                    NUMBERS
                                )
                        );

            }

        }

    }


    getElement(
        "password"
    ).value =
        password;


    analyzePassword();

}


/* =====================================================
   EASY MODE
===================================================== */

function toggleEasyMode() {

    if (
        currentStyle === "story"
    ) {

        getElement(
            "easyToggle"
        ).checked =
            false;


        return;

    }


    const toggle =
        getElement(
            "easyToggle"
        );


    easyMode =
        toggle.checked;


    const feedback =
        getElement(
            "feedback"
        );


    if (
        easyMode
    ) {

        currentStyle =
            "strong";


        feedback.textContent =
            "Generate a memorable passphrase";


        feedback.classList.add(
            "easy-active"
        );

    } else {

        currentStyle =
            null;


        feedback.textContent =
            "";


        feedback.classList.remove(
            "easy-active"
        );

    }


    updateStyleButtons();

    updateEasyOptionUI();

    updateGenerateButtonState();

}


/* =====================================================
   STYLE SELECTION
===================================================== */

function selectStyle(style) {

    const selectedButton =
        document.querySelector(
            `[data-style="${style}"]`
        );


    if (
        !selectedButton ||
        selectedButton.disabled
    ) {

        return;

    }


    /* =========================
       STORY MODE
    ========================= */

    if (
        style === "story"
    ) {

        if (
            currentStyle === "story"
        ) {

            currentStyle =
                null;


            setStoryModeUI(
                false
            );


            selectedButton.classList.remove(
                "active"
            );


            getElement(
                "feedback"
            ).textContent =
                "";


            return;

        }


        currentStyle =
            "story";


        easyMode =
            false;


        currentPlatform =
            null;


        getElement(
            "easyToggle"
        ).checked =
            false;


        document
            .querySelectorAll(
                "[data-style]"
            )
            .forEach(
                button => {

                    button.classList.remove(
                        "active"
                    );

                }
            );


        selectedButton.classList.add(
            "active"
        );


        setStoryModeUI(
            true
        );


        getElement(
            "feedback"
        ).textContent =
            "Generate a fun, memorable sentence";


        getElement(
            "feedback"
        ).classList.remove(
            "easy-active"
        );


        return;

    }


    /* =========================
       LEAVING STORY MODE
    ========================= */

    if (
        currentStyle === "story"
    ) {

        setStoryModeUI(
            false
        );

    }


    easyMode =
        false;


    getElement(
        "easyToggle"
    ).checked =
        false;


    getElement(
        "easyOption"
    ).classList.remove(
        "active"
    );


    getElement(
        "easyOption"
    ).setAttribute(
        "aria-pressed",
        "false"
    );


    /* =========================
       SAME STYLE
    ========================= */

    if (
        currentStyle === style
    ) {

        currentStyle =
            null;


        selectedButton.classList.remove(
            "active"
        );


        getElement(
            "feedback"
        ).textContent =
            "";


        updateEasyOptionUI();

        updateGenerateButtonState();


        return;

    }


    /* =========================
       NEW STYLE
    ========================= */

    currentStyle =
        style;


    document
        .querySelectorAll(
            "[data-style]"
        )
        .forEach(
            button => {

                button.classList.remove(
                    "active"
                );

            }
        );


    selectedButton.classList.add(
        "active"
    );


    /*
        Strong & Human-Readable
        automatically selects
        Easy to Remember.
    */

    if (
        style === "strong"
    ) {

        easyMode =
            true;


        getElement(
            "easyToggle"
        ).checked =
            true;


        getElement(
            "easyOption"
        ).classList.add(
            "active"
        );


        getElement(
            "easyOption"
        ).setAttribute(
            "aria-pressed",
            "true"
        );


        getElement(
            "feedback"
        ).textContent =
            "Generate a memorable passphrase";


        getElement(
            "feedback"
        ).classList.add(
            "easy-active"
        );

    } else {

        getElement(
            "feedback"
        ).classList.remove(
            "easy-active"
        );

    }


    updateEasyOptionUI();

    updateGenerateButtonState();

}


/* =====================================================
   PLATFORM SELECTION
===================================================== */

function selectPlatform(platform) {

    if (
        currentStyle === "story"
    ) {

        return;

    }


    const selected =
        document.querySelector(
            `[data-platform="${platform}"]`
        );


    if (
        !selected ||
        selected.disabled
    ) {

        return;

    }


    /*
        Clicking selected platform
        again deselects it.
    */

    if (
        currentPlatform === platform
    ) {

        currentPlatform =
            null;


        selected.classList.remove(
            "active"
        );


        currentStyle =
            null;


        easyMode =
            false;


        getElement(
            "easyToggle"
        ).checked =
            false;


        updateStyleButtons();

        updateEasyOptionUI();

        updateGenerateButtonState();


        getElement(
            "feedback"
        ).textContent =
            "";


        return;

    }


    /*
        Deselect all platforms.
    */

    document
        .querySelectorAll(
            "[data-platform]"
        )
        .forEach(
            button => {

                button.classList.remove(
                    "active"
                );

            }
        );


    /*
        Select clicked platform.
    */

    selected.classList.add(
        "active"
    );


    currentPlatform =
        platform;


    /*
        Platform selection turns
        Easy Mode OFF.
    */

    easyMode =
        false;


    getElement(
        "easyToggle"
    ).checked =
        false;


    getElement(
        "easyOption"
    ).classList.remove(
        "active"
    );


    getElement(
        "easyOption"
    ).setAttribute(
        "aria-pressed",
        "false"
    );


    /*
        INSTAGRAM
        8+
        Letters + numbers + symbols
    */

    if (
        platform === "instagram"
    ) {

        currentStyle =
            "symbols";


        getElement(
            "passwordLength"
        ).value =
            "8";


        getElement(
            "feedback"
        ).textContent =
            "Instagram: 8+ characters with letters, numbers and punctuation.";

    }


    /*
        FACEBOOK
        8+
        Uppercase + lowercase + numbers
    */

    else if (
        platform === "facebook"
    ) {

        currentStyle =
            "alphanumeric";


        getElement(
            "passwordLength"
        ).value =
            "8";


        getElement(
            "feedback"
        ).textContent =
            "Facebook: 8+ characters with uppercase, lowercase and numbers.";

    }


    /*
        GMAIL
        8+
        Letters + numbers + symbols
    */

    else if (
        platform === "gmail"
    ) {

        currentStyle =
            "symbols";


        getElement(
            "passwordLength"
        ).value =
            "8";


        getElement(
            "feedback"
        ).textContent =
            "Gmail: 8+ characters with letters, numbers and symbols.";

    }


    updateStyleButtons();

    updateEasyOptionUI();

    updateGenerateButtonState();

}


/* =====================================================
   VISIBILITY
===================================================== */

function togglePasswordVisibility() {

    const input =
        getElement(
            "password"
        );


    const button =
        getElement(
            "visibilityButton"
        );


    if (
        passwordVisible
    ) {

        input.type =
            "password";


        button.textContent =
            "🙈";


        button.title =
            "Show password";


        passwordVisible =
            false;

    } else {

        input.type =
            "text";


        button.textContent =
            "👁";


        button.title =
            "Hide password";


        passwordVisible =
            true;

    }

}


/* =====================================================
   COPY PASSWORD
===================================================== */

async function copyPassword() {

    const password =
        getElement(
            "password"
        ).value;


    if (
        !password
    ) {

        return;

    }


    try {

        await navigator
            .clipboard
            .writeText(
                password
            );


        const button =
            getElement(
                "copyButton"
            );


        const originalHTML =
            button.innerHTML;


        button.innerHTML =
            "✓";


        setTimeout(
            () => {

                button.innerHTML =
                    originalHTML;

            },
            1200
        );


    } catch (error) {

        alert(
            "Copy failed. Please copy it manually."
        );

    }

}


/* =====================================================
   ANALYZE PASSWORD
===================================================== */

function analyzePassword() {

    const password =
        getElement(
            "password"
        ).value;


    if (
        !password
    ) {

        resetStrength();


        return;

    }


    const result =
        calculateStrength(
            password
        );


    updateStrength(
        result
    );

}


/* =====================================================
   STRENGTH CALCULATOR
===================================================== */

function calculateStrength(password) {

    const lower =
        password.toLowerCase();


    let charset =
        0;


    if (
        /[a-z]/.test(
            password
        )
    ) {

        charset += 26;

    }


    if (
        /[A-Z]/.test(
            password
        )
    ) {

        charset += 26;

    }


    if (
        /[0-9]/.test(
            password
        )
    ) {

        charset += 10;

    }


    if (
        /[^A-Za-z0-9]/.test(
            password
        )
    ) {

        charset += 32;

    }


    let entropy =
        0;


    if (
        charset > 0
    ) {

        entropy =
            password.length *
            Math.log2(
                charset
            );

    }


    let penalty =
        0;


    const warnings =
        [];


    if (
        COMMON_PASSWORDS.has(
            lower
        )
    ) {

        penalty += 70;


        warnings.push(
            "This is a commonly used password."
        );

    }


    const commonWords = [

        "password",
        "welcome",
        "qwerty",
        "admin",
        "football",
        "dragon",
        "monkey",
        "letmein"

    ];


    for (
        const word of commonWords
    ) {

        if (
            lower.includes(word) &&
            password.length < 20
        ) {

            penalty += 25;


            warnings.push(
                "It contains a common password pattern."
            );


            break;

        }

    }


    if (
        /(.)\1{2,}/.test(
            password
        )
    ) {

        penalty += 15;


        warnings.push(
            "It contains repeated characters."
        );

    }


    if (
        hasSequence(
            password
        )
    ) {

        penalty += 20;


        warnings.push(
            "It contains an obvious sequence."
        );

    }


    const keyboardPatterns = [

        "qwerty",
        "asdfgh",
        "zxcvbn",
        "123456",
        "654321",
        "qaz",
        "wsx"

    ];


    for (
        const pattern of keyboardPatterns
    ) {

        if (
            lower.includes(pattern)
        ) {

            penalty += 25;


            warnings.push(
                "It contains a predictable keyboard pattern."
            );


            break;

        }

    }


    const normalized =
        lower
            .replace(
                /0/g,
                "o"
            )
            .replace(
                /1/g,
                "i"
            )
            .replace(
                /3/g,
                "e"
            )
            .replace(
                /4/g,
                "a"
            )
            .replace(
                /5/g,
                "s"
            )
            .replace(
                /7/g,
                "t"
            )
            .replace(
                /@/g,
                "a"
            )
            .replace(
                /\$/g,
                "s"
            );


    if (
        normalized.includes(
            "password"
        ) ||
        normalized.includes(
            "qwerty"
        )
    ) {

        penalty += 30;


        warnings.push(
            "Simple character substitutions are predictable."
        );

    }


    if (
        password.length >= 6 &&
        /^(.{1,3})\1+$/.test(
            password
        )
    ) {

        penalty += 25;


        warnings.push(
            "It contains a repeated pattern."
        );

    }


    const finalEntropy =
        Math.max(
            0,
            entropy - penalty
        );


    let score =
        Math.round(
            Math.min(
                100,
                finalEntropy * 1.25
            )
        );


    if (
        password.length >= 16
    ) {

        score += 5;

    }


    score =
        Math.min(
            100,
            score
        );


    let label;


    if (
        score < 25
    ) {

        label =
            "VERY WEAK";

    } else if (
        score < 45
    ) {

        label =
            "WEAK";

    } else if (
        score < 65
    ) {

        label =
            "FAIR";

    } else if (
        score < 80
    ) {

        label =
            "STRONG";

    } else {

        label =
            "VERY STRONG";

    }


    return {

        score,

        label,

        warnings

    };

}


/* =====================================================
   SEQUENCE CHECK
===================================================== */

function hasSequence(password) {

    const value =
        password.toLowerCase();


    const sequences = [

        "abcdefghijklmnopqrstuvwxyz",
        "zyxwvutsrqponmlkjihgfedcba",
        "0123456789",
        "9876543210"

    ];


    for (
        const sequence of sequences
    ) {

        for (
            let i = 0;
            i <= sequence.length - 4;
            i++
        ) {

            const chunk =
                sequence.substring(
                    i,
                    i + 4
                );


            if (
                value.includes(
                    chunk
                )
            ) {

                return true;

            }

        }

    }


    return false;

}


/* =====================================================
   UPDATE STRENGTH
===================================================== */

function updateStrength(result) {

    const bar =
        getElement(
            "strengthBar"
        );


    const text =
        getElement(
            "strengthText"
        );


    const score =
        getElement(
            "scoreText"
        );


    const feedback =
        getElement(
            "feedback"
        );


    bar.style.width =
        result.score +
        "%";


    text.textContent =
        result.label;


    score.textContent =
        result.score +
        "/100";


    if (
        currentStyle === "story"
    ) {

        feedback.textContent =
            "Generate a fun, memorable sentence";


        return;

    }


    if (
        easyMode
    ) {

        feedback.textContent =
            "Generate a memorable passphrase";


        feedback.classList.add(
            "easy-active"
        );


        return;

    }


    feedback.classList.remove(
        "easy-active"
    );


    if (
        result.score < 25
    ) {

        bar.style.backgroundColor =
            "#d93025";

    } else if (
        result.score < 45
    ) {

        bar.style.backgroundColor =
            "#e67e22";

    } else if (
        result.score < 65
    ) {

        bar.style.backgroundColor =
            "#d6a700";

    } else if (
        result.score < 80
    ) {

        bar.style.backgroundColor =
            "#3b8f5c";

    } else {

        bar.style.backgroundColor =
            "#16834a";

    }


    if (
        result.warnings.length > 0
    ) {

        feedback.textContent =
            "⚠ " +
            result.warnings[0];

    } else if (
        result.score >= 80
    ) {

        feedback.textContent =
            "Good length and no obvious predictable patterns.";

    } else if (
        result.score >= 60
    ) {

        feedback.textContent =
            "Reasonably strong. Increasing the length would help.";

    } else {

        feedback.textContent =
            "Use a longer and less predictable password.";

    }

}


/* =====================================================
   RESET STRENGTH
===================================================== */

function resetStrength() {

    const bar =
        getElement(
            "strengthBar"
        );


    const text =
        getElement(
            "strengthText"
        );


    const score =
        getElement(
            "scoreText"
        );


    const feedback =
        getElement(
            "feedback"
        );


    bar.style.width =
        "0%";


    bar.style.backgroundColor =
        "#bbb";


    text.textContent =
        "Enter a password";


    score.textContent =
        "—";


    feedback.textContent =
        "";


    feedback.classList.remove(
        "easy-active"
    );

}


/* =====================================================
   INITIAL STATE
===================================================== */

window.addEventListener(
    "DOMContentLoaded",
    () => {

        getElement(
            "passwordLength"
        ).value =
            "10";


        currentStyle =
            "alphanumeric";


        currentPlatform =
            null;


        easyMode =
            false;


        const alphanumeric =
            document.querySelector(
                '[data-style="alphanumeric"]'
            );


        if (
            alphanumeric
        ) {

            alphanumeric.classList.add(
                "active"
            );

        }


        updateEasyOptionUI();

        updateGenerateButtonState();

    }
);